import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	AlertTriangle,
	ArrowRight,
	Building2,
	Calendar,
	Check,
	Coins,
	FileText,
	RotateCcw,
	Search,
	Sparkles,
	WalletCards,
	X,
} from 'lucide-react';
import PropertyImage from '@/components/PropertyImage';
import { getAdvisorWhatsAppUrl } from '@/config/site';
import { IMAGES } from '@/data/site';
import {
	formatNaira,
	getMinimumDeposit,
	getPropertyDisplayPrice,
	getPropertySizeLabel,
	PROPERTIES,
} from '@/lib/properties';
import { cn } from '@/lib/utils';

const FALLBACK_IMAGES = {
	'Phase 1 & 2': IMAGES.phase12,
	'Phase 3': IMAGES.phase3,
	'Phase 5': IMAGES.phase5,
	Commercial: IMAGES.commercial,
};

function OfficialWhatsAppIcon({ className = 'h-5 w-5' }) {
	return (
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill="currentColor"
			className={className}
			aria-hidden="true"
		>
			<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.51c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29" />
		</svg>
	);
}

// Extract canonical category from property
export function getPropertyCategory(property) {
	if (property.category === 'Commercial' || property.productType === 'Commercial') return 'Commercial';
	if (property.productType === 'Land') return 'Land';
	if (property.subtype === 'Duplex' || property.name.includes('Duplex') || property.name.includes('Terrace')) return 'House';
	if (property.subtype === 'Apartment' || property.subtype === 'Apartment Block' || property.name.includes('Apartment')) return 'Apartment';
	return property.category || 'Residential';
}

// Extract canonical property type
export function getPropertyType(property) {
	if (property.category === 'Commercial' || property.productType === 'Commercial') return 'Commercial / Shopping Mall';
	if (property.name.includes('Terrace')) return 'Terrace Duplex';
	if (property.name.includes('Semi-Detached')) return 'Semi-Detached Duplex';
	if (property.name.includes('Fully Detached')) return 'Fully Detached Duplex';
	if (property.name.includes('Block of Apartments') || property.subtype === 'Apartment Block') return 'Block of Apartments';
	if (property.name.includes('Apartment') || property.subtype === 'Apartment') return 'Apartment';
	return property.subtype || property.productType;
}

// Extract size or bedroom label
export function getPropertySizeOrBedrooms(property) {
	const cat = getPropertyCategory(property);
	if (cat === 'Land') {
		const beds = property.bedrooms ? ` (${property.bedrooms} Bed${property.bedrooms === 1 ? '' : 's'})` : '';
		return `${property.sizeSqm}sqm${beds}`;
	}
	if (cat === 'House' || cat === 'Apartment') {
		if (property.bedrooms != null) {
			return `${property.bedrooms} Bedroom${property.bedrooms === 1 ? '' : 's'}`;
		}
		if (property.sizeSqm != null) {
			return `${property.sizeSqm}sqm`;
		}
	}
	if (cat === 'Commercial') {
		return property.minimumSqm ? `From ${property.minimumSqm}sqm` : '30sqm minimum';
	}
	return property.sizeSqm ? `${property.sizeSqm}sqm` : `${property.bedrooms || ''} Bedrooms`;
}

// Build context-specific WhatsApp message dynamically
export function getPaymentPlanWhatsAppMessage(property) {
	if (!property) return 'Hi Amaka, I’m interested in Hutu Exclusive payment plans and I’d like some guidance.';

	const size = property.sizeSqm || property.minimumSqm;
	const phase = property.phase || 'Hutu Exclusive';
	let name = property.name || 'property';

	if (property.category === 'Commercial' || property.productType === 'Commercial') {
		const sizePrefix = size ? `${size}sqm ` : '';
		return `Hi Amaka, I’m looking at the ${sizePrefix}commercial shopping mall space in ${phase} and I’d like to understand the available payment plan.`;
	}

	if (property.bedrooms && !name.toLowerCase().includes('bedroom')) {
		name = `${property.bedrooms} Bedroom ${name}`;
	}

	const sizePrefix = size && !name.toLowerCase().includes(`${size}sqm`) ? `${size}sqm ` : '';

	return `Hi Amaka, I’m looking at the ${sizePrefix}${name} in ${phase} and I’d like to understand the available payment plan.`;
}

export default function PaymentPlanFinder({ onSelectProperty }) {
	const [category, setCategory] = useState('');
	const [phase, setPhase] = useState('');
	const [propertyType, setPropertyType] = useState('');
	const [sizeOrBeds, setSizeOrBeds] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedPropertyId, setSelectedPropertyId] = useState(null);

	// All unique categories present in the database
	const categories = useMemo(() => {
		const unique = [...new Set(PROPERTIES.map(getPropertyCategory))];
		const order = ['Land', 'House', 'Apartment', 'Commercial'];
		return order.filter((cat) => unique.includes(cat));
	}, []);

	// Phases available for current category
	const availablePhases = useMemo(() => {
		let list = PROPERTIES;
		if (category) {
			list = list.filter((p) => getPropertyCategory(p) === category);
		}
		return [...new Set(list.map((p) => p.phase))].sort();
	}, [category]);

	// Property types available for current category + phase
	const availableTypes = useMemo(() => {
		let list = PROPERTIES;
		if (category) {
			list = list.filter((p) => getPropertyCategory(p) === category);
		}
		if (phase) {
			list = list.filter((p) => p.phase === phase);
		}
		return [...new Set(list.map(getPropertyType))];
	}, [category, phase]);

	// Sizes/Bedrooms available for current category + phase + propertyType
	const availableSizesOrBeds = useMemo(() => {
		let list = PROPERTIES;
		if (category) {
			list = list.filter((p) => getPropertyCategory(p) === category);
		}
		if (phase) {
			list = list.filter((p) => p.phase === phase);
		}
		if (propertyType) {
			list = list.filter((p) => getPropertyType(p) === propertyType);
		}
		return [...new Set(list.map(getPropertySizeOrBedrooms))];
	}, [category, phase, propertyType]);

	// Filtered properties based on guided filters
	const guidedFiltered = useMemo(() => {
		return PROPERTIES.filter((p) => {
			if (category && getPropertyCategory(p) !== category) return false;
			if (phase && p.phase !== phase) return false;
			if (propertyType && getPropertyType(p) !== propertyType) return false;
			if (sizeOrBeds && getPropertySizeOrBedrooms(p) !== sizeOrBeds) return false;
			return true;
		});
	}, [category, phase, propertyType, sizeOrBeds]);

	// Smart search query filter
	const searchResults = useMemo(() => {
		if (!searchQuery.trim()) return null;
		const query = searchQuery.toLowerCase().replace(/[\s-]/g, '');
		return PROPERTIES.filter((p) => {
			const haystack = [
				p.name,
				p.phase,
				p.productType,
				p.subtype,
				getPropertyCategory(p),
				getPropertyType(p),
				p.sizeSqm ? `${p.sizeSqm}sqm` : '',
				p.bedrooms ? `${p.bedrooms} bedroom` : '',
				p.bedrooms ? `${p.bedrooms} bed` : '',
				p.minimumSqm ? `${p.minimumSqm}sqm` : '',
			]
				.join(' ')
				.toLowerCase()
				.replace(/[\s-]/g, '');
			return haystack.includes(query);
		});
	}, [searchQuery]);

	// Active candidate properties list (guided or search)
	const activeCandidates = useMemo(() => {
		if (searchResults !== null) {
			return searchResults;
		}
		return guidedFiltered;
	}, [searchResults, guidedFiltered]);

	// Resolved selected property
	const selectedProperty = useMemo(() => {
		if (selectedPropertyId) {
			const found = PROPERTIES.find((p) => p.id === selectedPropertyId);
			if (found) return found;
		}
		// If guided filters narrow down to exactly 1 property, resolve it
		if (activeCandidates.length === 1 && (category || phase || propertyType || sizeOrBeds || searchQuery)) {
			return activeCandidates[0];
		}
		return null;
	}, [selectedPropertyId, activeCandidates, category, phase, propertyType, sizeOrBeds, searchQuery]);

	// Handlers for guided filters with progressive resets
	const handleCategoryChange = (e) => {
		const newCat = e.target.value;
		setCategory(newCat);
		setPhase('');
		setPropertyType('');
		setSizeOrBeds('');
		setSelectedPropertyId(null);
	};

	const handlePhaseChange = (e) => {
		const newPhase = e.target.value;
		setPhase(newPhase);
		setPropertyType('');
		setSizeOrBeds('');
		setSelectedPropertyId(null);
	};

	const handleTypeChange = (e) => {
		const newType = e.target.value;
		setPropertyType(newType);
		setSizeOrBeds('');
		setSelectedPropertyId(null);
	};

	const handleSizeChange = (e) => {
		const newSize = e.target.value;
		setSizeOrBeds(newSize);
		setSelectedPropertyId(null);
	};

	const handleSelectCandidate = (property) => {
		setSelectedPropertyId(property.id);
		setCategory(getPropertyCategory(property));
		setPhase(property.phase);
		setPropertyType(getPropertyType(property));
		setSizeOrBeds(getPropertySizeOrBedrooms(property));
		setSearchQuery('');
		if (onSelectProperty) onSelectProperty(property);
	};

	const handleClearAll = () => {
		setCategory('');
		setPhase('');
		setPropertyType('');
		setSizeOrBeds('');
		setSearchQuery('');
		setSelectedPropertyId(null);
	};

	const hasActiveFilters = Boolean(category || phase || propertyType || sizeOrBeds || searchQuery || selectedPropertyId);

	// WhatsApp URL for the currently selected property
	const whatsappUrl = selectedProperty
		? getAdvisorWhatsAppUrl(getPaymentPlanWhatsAppMessage(selectedProperty))
		: getAdvisorWhatsAppUrl();

	const propertyPrice = selectedProperty ? getPropertyDisplayPrice(selectedProperty) : null;
	const minimumDeposit = selectedProperty ? getMinimumDeposit(selectedProperty) : null;
	const paymentPlans = selectedProperty?.paymentPlans || [];
	const isCommercial = selectedProperty?.category === 'Commercial' || selectedProperty?.productType === 'Commercial';

	return (
		<div id="payment-plan-finder" className="scroll-mt-24 space-y-8">
			{/* 1. Filter and Search Controls Card */}
			<div className="rounded-xl border border-border bg-card p-5 shadow-xs sm:p-6 lg:p-7">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-5">
					<div>
						<h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
							Filter by Property Specifications
						</h3>
						<p className="mt-1 text-xs text-muted-foreground sm:text-sm">
							Select category, phase, type and size to load the current payment plan.
						</p>
					</div>

					{hasActiveFilters && (
						<button
							type="button"
							onClick={handleClearAll}
							className="inline-flex min-h-11 shrink-0 items-center gap-1.5 self-start rounded-md border border-border bg-secondary/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:bg-secondary hover:text-foreground active:scale-[0.98] sm:self-auto"
						>
							<RotateCcw className="h-3.5 w-3.5 text-primary" />
							<span>Clear Search</span>
						</button>
					)}
				</div>

				{/* Smart Search Bar */}
				<div className="mt-5">
					<label htmlFor="smart-search" className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
						Smart Search (Optional)
					</label>
					<div className="relative mt-2">
						<Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
						<input
							id="smart-search"
							type="text"
							value={searchQuery}
							onChange={(e) => {
								setSearchQuery(e.target.value);
								setSelectedPropertyId(null);
							}}
							placeholder="Search by size (e.g. 250sqm), bedrooms (e.g. 4 bedroom), phase, or type…"
							className="min-h-12 w-full rounded-md border border-input bg-background pl-10 pr-10 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
						/>
						{searchQuery && (
							<button
								type="button"
								onClick={() => setSearchQuery('')}
								aria-label="Clear text search"
								className="absolute right-1 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
							>
								<X className="h-4 w-4" />
							</button>
						)}
					</div>
				</div>

				{/* 4 Guided Dropdown Filters */}
				<div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{/* 1. Category */}
					<div>
						<label htmlFor="filter-category" className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
							1. Property Category
						</label>
						<select
							id="filter-category"
							value={category}
							onChange={handleCategoryChange}
							className="mt-2 min-h-12 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base font-medium text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
						>
							<option value="">All Categories</option>
							{categories.map((cat) => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select>
					</div>

					{/* 2. Phase */}
					<div>
						<label htmlFor="filter-phase" className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
							2. Phase
						</label>
						<select
							id="filter-phase"
							value={phase}
							onChange={handlePhaseChange}
							disabled={availablePhases.length === 0}
							className="mt-2 min-h-12 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base font-medium text-foreground outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary focus:ring-2 focus:ring-primary/10"
						>
							<option value="">{availablePhases.length > 1 ? 'All Available Phases' : availablePhases[0] || 'All Phases'}</option>
							{availablePhases.map((p) => (
								<option key={p} value={p}>
									{p}
								</option>
							))}
						</select>
					</div>

					{/* 3. Property Type */}
					<div>
						<label htmlFor="filter-type" className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
							3. Property Type
						</label>
						<select
							id="filter-type"
							value={propertyType}
							onChange={handleTypeChange}
							disabled={availableTypes.length === 0}
							className="mt-2 min-h-12 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base font-medium text-foreground outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary focus:ring-2 focus:ring-primary/10"
						>
							<option value="">{availableTypes.length > 1 ? 'All Available Types' : availableTypes[0] || 'All Types'}</option>
							{availableTypes.map((t) => (
								<option key={t} value={t}>
									{t}
								</option>
							))}
						</select>
					</div>

					{/* 4. Size / Bedrooms */}
					<div>
						<label htmlFor="filter-size" className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
							4. Size / Bedrooms
						</label>
						<select
							id="filter-size"
							value={sizeOrBeds}
							onChange={handleSizeChange}
							disabled={availableSizesOrBeds.length === 0}
							className="mt-2 min-h-12 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base font-medium text-foreground outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary focus:ring-2 focus:ring-primary/10"
						>
							<option value="">{availableSizesOrBeds.length > 1 ? 'All Available Sizes/Bedrooms' : availableSizesOrBeds[0] || 'All Sizes'}</option>
							{availableSizesOrBeds.map((sb) => (
								<option key={sb} value={sb}>
									{sb}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Quick Matching Chips when multiple properties match */}
				{activeCandidates.length > 1 && !selectedProperty && (
					<div className="mt-5 border-t border-border/80 pt-4">
						<p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
							Matching Properties ({activeCandidates.length}) — Click to select:
						</p>
						<div className="mt-2.5 flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
							{activeCandidates.map((property) => {
								const sizeLabel = getPropertySizeOrBedrooms(property);
								return (
									<button
										key={property.id}
										type="button"
										onClick={() => handleSelectCandidate(property)}
										className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10 active:scale-[0.98]"
									>
										<span className="font-semibold text-primary">{property.phase}:</span>
										<span>{property.name}</span>
										<span className="text-muted-foreground">({sizeLabel})</span>
									</button>
								);
							})}
						</div>
					</div>
				)}
			</div>

			{/* 2. Result Experience OR Empty State */}
			{selectedProperty ? (
				<div className="overflow-hidden rounded-xl border border-primary/30 bg-card shadow-sm transition-all animate-fadeIn">
					{/* Result Header Bar */}
					<div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/90 bg-secondary/70 px-5 py-3.5 sm:px-7">
						<div className="flex flex-wrap items-center gap-2 text-xs">
							<span className="rounded-full bg-primary px-2.5 py-0.5 font-bold uppercase tracking-wider text-primary-foreground text-[10px]">
								Selected Property
							</span>
							<span className="font-semibold text-foreground">{selectedProperty.phase}</span>
							<span className="text-muted-foreground">·</span>
							<span className="text-muted-foreground">{getPropertyCategory(selectedProperty)}</span>
						</div>

						<button
							type="button"
							onClick={() => setSelectedPropertyId(null)}
							className="text-xs font-semibold text-primary underline-offset-2 hover:underline"
						>
							Change Property
						</button>
					</div>

					<div className="p-5 sm:p-7 lg:p-8 space-y-8">
						{/* Property Summary: Two Columns (Image + Overview) */}
						<div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
							{/* Photo / Render */}
							<div className="lg:col-span-4">
								<div className="overflow-hidden rounded-lg border border-border bg-muted shadow-xs">
									<PropertyImage
										property={selectedProperty}
										fallbackImage={selectedProperty.category === 'Commercial' ? FALLBACK_IMAGES.Commercial : FALLBACK_IMAGES[selectedProperty.phase]}
										className="aspect-[16/10] sm:aspect-[4/3] w-full"
										imageClassName="transition-transform duration-500 hover:scale-105"
									/>
								</div>
							</div>

							{/* Key Property Specs */}
							<div className="lg:col-span-8 flex flex-col justify-between h-full">
								<div>
									<div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
										<span>{selectedProperty.phase}</span>
										<span>·</span>
										<span>{selectedProperty.productType}</span>
										<span>·</span>
										<span>{selectedProperty.subtype}</span>
									</div>

									<h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
										{selectedProperty.name}
									</h3>

									<dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 border-y border-border py-4 text-xs">
										<div>
											<dt className="text-muted-foreground">Property Size</dt>
											<dd className="mt-1 font-semibold text-foreground">{getPropertySizeLabel(selectedProperty)}</dd>
										</div>
										{selectedProperty.bedrooms != null && (
											<div>
												<dt className="text-muted-foreground">Bedrooms</dt>
												<dd className="mt-1 font-semibold text-foreground">{selectedProperty.bedrooms} Bedrooms</dd>
											</div>
										)}
										<div>
											<dt className="text-muted-foreground">Starting Price</dt>
											<dd className="mt-1 font-semibold text-primary text-sm sm:text-base">
												{formatNaira(propertyPrice)}
												{selectedProperty.pricingMode === 'per_sqm' && <span className="text-xs font-normal"> / sqm</span>}
											</dd>
										</div>
										<div>
											<dt className="text-muted-foreground">Minimum to Start</dt>
											<dd className="mt-1 font-semibold text-foreground">
												{minimumDeposit == null ? 'On request' : formatNaira(minimumDeposit)}
											</dd>
										</div>
									</dl>
								</div>

								<div className="mt-4 flex flex-wrap items-center justify-between gap-4">
									<p className="text-xs text-muted-foreground">
										Database record #{selectedProperty.id} · Verified against official newsletter documentation
									</p>
									<Link
										to={`/properties/${selectedProperty.slug}`}
										className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:underline"
									>
										<span>View Full Property Details</span>
										<ArrowRight className="h-3.5 w-3.5" />
									</Link>
								</div>
							</div>
						</div>

						{/* Available Payment Plans Display */}
						<div className="border-t border-border pt-7">
							<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
								<div>
									<h4 className="font-display text-xl font-semibold text-foreground">
										Available Payment Plans for this Property
									</h4>
									<p className="text-xs sm:text-sm text-muted-foreground">
										Published payment durations, minimum initial deposits and balance structures.
									</p>
								</div>
								{paymentPlans.length > 0 && (
									<span className="self-start rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary sm:self-auto">
										{paymentPlans.length} Duration Option{paymentPlans.length === 1 ? '' : 's'} Published
									</span>
								)}
							</div>

							{/* Standard Residential Payment Plans Grid */}
							{paymentPlans.length > 0 && (
								<div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
									{paymentPlans.map((plan, index) => {
										const balance = plan.totalPrice && plan.initialDeposit ? plan.totalPrice - plan.initialDeposit : null;
										return (
											<div
												key={plan.durationMonths || index}
												className="flex flex-col justify-between rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-sm"
											>
												<div>
													{/* Plan Header */}
													<div className="flex items-center justify-between gap-2 border-b border-border pb-3">
														<div className="flex items-center gap-2">
															<Calendar className="h-4 w-4 text-primary" />
															<span className="font-display text-base font-bold text-foreground">
																{plan.durationMonths} Months Duration
															</span>
														</div>
														{plan.depositPercent && (
															<span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent border border-accent/30">
																{plan.depositPercent}% Deposit
															</span>
														)}
													</div>

													{/* Plan Financial Metrics */}
													<div className="mt-4 space-y-3 text-sm">
														<div className="flex items-center justify-between">
															<span className="text-muted-foreground">Total Price:</span>
															<span className="font-display text-lg font-bold text-foreground">
																{formatNaira(plan.totalPrice)}
															</span>
														</div>

														<div className="flex items-center justify-between rounded-md bg-secondary/60 p-2.5">
															<span className="text-xs font-medium text-foreground">Minimum Initial Deposit:</span>
															<span className="text-sm font-bold text-primary">
																{formatNaira(plan.initialDeposit)}
															</span>
														</div>

														{plan.monthlyPayment != null && (
															<div className="flex items-center justify-between">
																<span className="text-xs text-muted-foreground">Monthly Instalment:</span>
																<span className="text-xs font-semibold text-foreground">
																	{formatNaira(plan.monthlyPayment)} / month
																</span>
															</div>
														)}

														{balance != null && (
															<div className="flex items-center justify-between text-xs text-muted-foreground">
																<span>Remaining Balance:</span>
																<span className="font-medium text-foreground">
																	{formatNaira(balance)} spread over {plan.durationMonths} months
																</span>
															</div>
														)}
													</div>

													{/* Source Verification / Notes */}
													{plan.note && (
														<div className="mt-4 rounded-md border border-border/80 bg-muted/40 p-2.5 text-[11px] leading-relaxed text-muted-foreground">
															<p>{plan.note}</p>
														</div>
													)}

													{plan.requiresVerification && (
														<div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-warning">
															<AlertTriangle className="h-3.5 w-3.5 shrink-0" />
															<span>Cost sheet verification recommended prior to transaction</span>
														</div>
													)}
												</div>

												{/* 8th Anniversary Promo Callout where applicable */}
												<div className="mt-5 border-t border-border/70 pt-3">
													<div className="flex items-center gap-1.5 text-[11px] text-accent font-medium">
														<Sparkles className="h-3 w-3 shrink-0" />
														<span>Mshel Homes 8th Anniversary discounts may apply on selected payments</span>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}

							{/* Commercial Shopping Mall Custom Payment Structure */}
							{isCommercial && (
								<div className="mt-5 rounded-lg border border-border bg-card p-5 sm:p-6 space-y-5">
									<div className="flex items-center justify-between gap-2 border-b border-border pb-3">
										<div className="flex items-center gap-2">
											<Building2 className="h-4 w-4 text-primary" />
											<span className="font-display text-base font-bold text-foreground">
												Commercial Payment Options: 6 &amp; 12 Months Available
											</span>
										</div>
										<span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
											30sqm Minimum
										</span>
									</div>

									<p className="text-sm leading-relaxed text-muted-foreground">
										Shopping mall retail spaces within Phase 1 &amp; 2 are priced per square metre by floor level. Payment plans for commercial spaces are tailored across 6 and 12-month payment options:
									</p>

									{/* Floor Pricing Breakdown Table */}
									<div className="overflow-x-auto overscroll-x-contain rounded-md border border-border" role="region" aria-label="Commercial floor pricing" tabIndex={0}>
										<table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
											<thead className="bg-secondary text-foreground">
												<tr>
													<th className="px-4 py-2.5 font-semibold">Floor Level</th>
													<th className="px-4 py-2.5 font-semibold">Rate per sqm</th>
													<th className="px-4 py-2.5 font-semibold">Minimum Total (30sqm)</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-border">
												{(selectedProperty.floorPricing || []).map((floor) => (
													<tr key={floor.floor} className="hover:bg-muted/30">
														<td className="px-4 py-2.5 font-medium text-foreground">{floor.floor}</td>
														<td className="px-4 py-2.5 font-semibold text-primary">{formatNaira(floor.pricePerSqm)} / sqm</td>
														<td className="px-4 py-2.5 text-muted-foreground">{formatNaira(floor.pricePerSqm * 30)}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>

									<div className="rounded-md border border-border/80 bg-secondary/50 p-3 text-xs text-muted-foreground">
										<p>
											Initial deposit breakdown and customized payment schedules are finalized in writing based on your designated floor level and square-meter allocation.
										</p>
									</div>
								</div>
							)}

							{/* Fallback if no payment plans are registered in DB */}
							{paymentPlans.length === 0 && !isCommercial && (
								<div className="mt-5 rounded-lg border border-border bg-secondary/40 p-5 text-center text-sm text-muted-foreground">
									<p>Payment schedule is available on request directly from the advisor.</p>
								</div>
							)}
						</div>

						{/* WhatsApp CTA */}
						<div className="border-t border-border pt-6 flex flex-col items-center justify-center text-center">
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-md bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark active:scale-[0.98] sm:w-auto"
							>
								<OfficialWhatsAppIcon className="h-5 w-5 text-white shrink-0" />
								<span>Ask Me About This Payment Plan</span>
							</a>

							<p className="mt-2.5 text-xs text-muted-foreground max-w-lg">
								Direct to Amaka Okorie · Hutu Exclusive Property Advisor · Honest guidance, schedule breakdowns &amp; personal follow-through.
							</p>
						</div>
					</div>
				</div>
			) : (
				/* Empty State */
				<div className="rounded-xl border border-dashed border-border bg-card/60 p-8 text-center sm:p-12 lg:p-16">
					<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
						<WalletCards className="h-7 w-7" />
					</div>
					<h3 className="mt-4 font-display text-xl font-semibold text-foreground sm:text-2xl">
						Select a property above to view its current payment plan.
					</h3>
					<p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
						Not sure what property fits your budget? Use the Property Budget Matcher instead.
					</p>
					<div className="mt-6">
						<a
							href="/#budget-matcher"
							className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-dark active:scale-[0.98]"
						>
							<span>Find What Fits My Budget</span>
							<ArrowRight className="h-4 w-4" />
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
