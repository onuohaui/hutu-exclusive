import propertyDatabase from '@/data/hutuExclusiveProperties.json';

export const PROPERTY_DATABASE = propertyDatabase;
export const PROPERTY_META = propertyDatabase.meta;
export const PROPERTIES = propertyDatabase.properties.filter((property) => property.active);

const naira = new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: propertyDatabase.meta.currency,
	maximumFractionDigits: 0,
});

export const formatNaira = (value) => value == null ? 'Not published' : naira.format(value);

export const getPaymentPlans = (property) => property.paymentPlans || [];

export const getStartingPrice = (property) => {
	if (property.displayStartingPrice != null) return property.displayStartingPrice;
	const prices = getPaymentPlans(property)
		.map((plan) => plan.totalPrice)
		.filter((price) => Number.isFinite(price));
	return prices.length ? Math.min(...prices) : null;
};

export const getMinimumDeposit = (property) => {
	const deposits = getPaymentPlans(property)
		.map((plan) => plan.initialDeposit)
		.filter((deposit) => Number.isFinite(deposit));
	return deposits.length ? Math.min(...deposits) : null;
};

export const getCommercialPricePerSqm = (property) => {
	const prices = (property.floorPricing || [])
		.map((item) => item.pricePerSqm)
		.filter((price) => Number.isFinite(price));
	return prices.length ? Math.min(...prices) : null;
};

export const getCommercialMinimumTotal = (property, requestedSize) => {
	const size = Math.max(Number(requestedSize) || property.minimumSqm, property.minimumSqm);
	const pricePerSqm = getCommercialPricePerSqm(property);
	return pricePerSqm == null ? null : pricePerSqm * size;
};

export const getPropertyDisplayPrice = (property) => (
	property.pricingMode === 'per_sqm' ? getCommercialPricePerSqm(property) : getStartingPrice(property)
);

export const getPropertyPriceLabel = (property) => (
	property.pricingMode === 'per_sqm' ? 'From per sqm' : 'Current price from'
);

export const getPropertySizeLabel = (property) => {
	if (property.sizeSqm != null) return `${property.sizeSqm} sqm`;
	if (property.minimumSqm != null) return `${property.minimumSqm} sqm minimum`;
	return 'Not specified';
};

export const getPaymentDurationLabel = (property) => {
	if (property.paymentPlan?.durationMonthsAvailable?.length) {
		const durations = property.paymentPlan.durationMonthsAvailable;
		return `${Math.min(...durations)}–${Math.max(...durations)} months`;
	}
	const durations = [...new Set(getPaymentPlans(property).map((plan) => plan.durationMonths))]
		.filter(Number.isFinite)
		.sort((a, b) => a - b);
	if (!durations.length) return 'Not published';
	return durations.length === 1 ? `${durations[0]} months` : `${durations[0]}–${durations.at(-1)} months`;
};

export const getPropertiesByPhase = (phase) => PROPERTIES.filter(
	(property) => property.category === 'Residential' && property.phase === phase,
);

export const getPropertiesByCategory = (category) => PROPERTIES.filter(
	(property) => property.category === category,
);

export const getAvailableSizes = (category) => {
	const sizes = PROPERTIES
		.filter((property) => property.category === category)
		.flatMap((property) => {
			if (property.sizeSqm != null) return [property.sizeSqm];
			if (property.minimumSqm != null) return [property.minimumSqm];
			return [];
		});
	return [...new Set(sizes)].sort((a, b) => a - b);
};

export const getPhaseInventorySummary = (phase) => {
	const properties = getPropertiesByPhase(phase);
	const sizes = [...new Set(properties.map((property) => property.sizeSqm).filter(Number.isFinite))].sort((a, b) => a - b);
	const prices = properties.map(getStartingPrice).filter(Number.isFinite);
	const deposits = properties.map(getMinimumDeposit).filter(Number.isFinite);
	return {
		count: properties.length,
		sizes,
		startingPrice: prices.length ? Math.min(...prices) : null,
		minimumDeposit: deposits.length ? Math.min(...deposits) : null,
		landCount: properties.filter((property) => property.productType === 'Land').length,
		homeCount: properties.filter((property) => property.productType === 'House / Apartment').length,
	};
};

export const getFeaturedProperties = () => {
	const phases = ['Phase 1 & 2', 'Phase 3', 'Phase 5'];
	const productTypes = ['Land', 'House / Apartment'];
	const selected = phases.flatMap((phase) => productTypes.map((productType) => (
		PROPERTIES.find((property) => property.phase === phase && property.productType === productType)
	))).filter(Boolean);
	const commercial = PROPERTIES.find((property) => property.category === 'Commercial');
	return commercial ? [...selected, commercial].slice(0, 6) : selected.slice(0, 6);
};

const parseAmountPart = (rawValue) => {
	const value = rawValue
		.toLowerCase()
		.replace(/[₦,\s]/g, '')
		.replace(/naira/g, '')
		.trim();
	const match = value.match(/^(\d+(?:\.\d+)?)(m|million|bn|billion)?$/);
	if (!match) return null;
	const number = Number(match[1]);
	const multiplier = match[2] === 'm' || match[2] === 'million'
		? 1_000_000
		: match[2] === 'bn' || match[2] === 'billion'
			? 1_000_000_000
			: 1;
	return number * multiplier;
};

export const parseBudgetInput = (rawValue) => {
	const parts = String(rawValue || '').trim().split(/\s*[-–—]\s*/).filter(Boolean);
	if (!parts.length || parts.length > 2) return null;
	const parsed = parts.map(parseAmountPart);
	if (parsed.some((value) => value == null || value <= 0)) return null;
	if (parsed.length === 1) return { min: parsed[0], max: parsed[0], isRange: false };
	return { min: Math.min(...parsed), max: Math.max(...parsed), isRange: true };
};

export const getMatcherCandidates = ({ category, sizeSqm }) => {
	const size = Number(sizeSqm) || null;
	const properties = getPropertiesByCategory(category);

	if (category === 'Commercial') {
		return properties.flatMap((property) => {
			const effectiveSize = Math.max(size || property.minimumSqm, property.minimumSqm);
			return (property.floorPricing || []).map((floor) => ({
				property,
				price: floor.pricePerSqm * effectiveSize,
				deposit: null,
				sizeSqm: effectiveSize,
				context: floor.floor,
				pricePerSqm: floor.pricePerSqm,
			}));
		});
	}

	return properties
		.filter((property) => !size || property.sizeSqm === size)
		.map((property) => ({
			property,
			price: getStartingPrice(property),
			deposit: getMinimumDeposit(property),
			sizeSqm: property.sizeSqm,
			context: property.productType,
		}))
		.filter((candidate) => candidate.price != null);
};

export const getPropertyWhatsAppMessage = (property, options = {}) => {
	if (!property) return 'Hi Amaka, I’m interested in Hutu Exclusive and I’d like some guidance.';

	const size = options.sizeSqm || property.sizeSqm || property.minimumSqm;
	const phase = property.phase || 'Hutu Exclusive';
	let name = property.name || 'property';

	if (property.category === 'Commercial') {
		const sizePrefix = size ? `${size}sqm ` : '';
		return `Hi Amaka, I’m interested in the ${sizePrefix}commercial shopping mall space in ${phase}. Can you tell me more about the current price and buying options?`;
	}

	if (property.bedrooms && !name.toLowerCase().includes('bedroom')) {
		name = `${property.bedrooms} Bedroom ${name}`;
	}

	const sizePrefix = size && !name.toLowerCase().includes(`${size}sqm`) ? `${size}sqm ` : '';

	return `Hi Amaka, I’m interested in the ${sizePrefix}${name} in ${phase}. Can you tell me more about the current price and buying options?`;
};

