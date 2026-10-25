import propertyDatabase from '@/data/hutuExclusiveProperties.json';

const formatNaira = (value) => new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: 'NGN',
	maximumFractionDigits: 0,
}).format(value);

const getProperty = (slug) => {
	const property = propertyDatabase.properties.find((item) => item.slug === slug);
	if (!property) throw new Error(`Phase 3 article property not found: ${slug}`);
	return property;
};

const getPlan = (slug, durationMonths) => {
	const plan = getProperty(slug).paymentPlans.find((item) => item.durationMonths === durationMonths);
	if (!plan) throw new Error(`Phase 3 article payment plan not found: ${slug}, ${durationMonths} months`);
	return plan;
};

const getStartingPrice = (slug) => {
	const property = getProperty(slug);
	if (property.displayStartingPrice != null) return property.displayStartingPrice;
	return Math.min(...property.paymentPlans.map((plan) => plan.totalPrice));
};

const phase3LandOptions = [
	{ size: '150sqm', slug: 'p3-land-150-3bed-terrace', prototype: '3-Bedroom Terrace Duplex' },
	{ size: '250sqm', slug: 'p3-land-250-4bed-semi', prototype: '4-Bedroom Semi-Detached Duplex' },
	{ size: '350sqm', slug: 'p3-land-350-4bed-full', prototype: '4-Bedroom Fully Detached Duplex' },
	{ size: '450sqm', slug: 'p3-land-450-1bed-block', prototype: '1-Bedroom Block Of Apartments' },
	{ size: '500sqm', slug: 'p3-land-500-5bed-full', prototype: '5-Bedroom Fully Detached Duplex' },
	{ size: '750sqm', slug: 'p3-land-750-2bed-block', prototype: '2-Bedroom Block Of Apartments' },
	{ size: '1,000sqm', slug: 'p3-land-1000-3bed-block', prototype: '7-Bedroom Fully Detached Duplex / 3-Bedroom Block Option' },
];

const phase3LandRows = phase3LandOptions.map((option) => [
	option.size,
	option.prototype,
	formatNaira(getStartingPrice(option.slug)),
]);

const phase3LandChart = phase3LandOptions.map((option) => ({
	size: option.size,
	price: getStartingPrice(option.slug),
}));

const phase3PaymentRows = getProperty('p3-land-150-3bed-terrace').paymentPlans.map((plan) => [
	`${plan.durationMonths} months`,
	formatNaira(plan.totalPrice),
	`${formatNaira(plan.initialDeposit)} (${plan.depositPercent}%)`,
	formatNaira(plan.monthlyPayment),
]);

const phase3ApartmentRows = [
	['1-Bedroom Apartment', 'p3-house-1bed-apartment'],
	['2-Bedroom Apartment', 'p3-house-2bed-apartment'],
	['3-Bedroom Apartment', 'p3-house-3bed-apartment'],
].map(([label, slug]) => [
	label,
	formatNaira(getPlan(slug, 12).totalPrice),
	formatNaira(getPlan(slug, 18).totalPrice),
]);

const phase3BlockRows = [
	['1-Bedroom Block Of Apartments (6 Units)', 'p3-house-1bed-block-6'],
	['2-Bedroom Block Of Apartments (6 Units)', 'p3-house-2bed-block-6'],
	['3-Bedroom Block Of Apartments (6 Units)', 'p3-house-3bed-block-6'],
].map(([label, slug]) => [
	label,
	'8–12 months',
	formatNaira(getPlan(slug, 8).totalPrice),
	formatNaira(getPlan(slug, 12).totalPrice),
]);

const phaseComparisonRows = [150, 250, 350].map((size) => {
	const suffixes = {
		150: '150-3bed-terrace',
		250: '250-4bed-semi',
		350: '350-4bed-full',
	};
	return [
		`${size}sqm`,
		formatNaira(getStartingPrice(`p12-land-${suffixes[size]}`)),
		formatNaira(getStartingPrice(`p3-land-${suffixes[size]}`)),
		formatNaira(getStartingPrice(`p5-land-${suffixes[size]}`)),
	];
});

export const PHASE3_ARTICLE = {
	slug: 'hutu-exclusive-phase-3',
	category: 'Hutu Exclusive',
	author: 'Amaka Okorie',
	authorTitle: 'Hutu Exclusive Property Advisor',
	authorPath: '/about/meet-your-advisor',
	authorImage: '/images/advisor/amaka-okorie.png',
	publishDate: 'September 2026',
	updatedDate: 'September 2026',
	wordCount: 2634,
	featuredImage: '/images/articles/hutu-phase-3/featured.jpg',
	featuredAlt: 'Hutu Exclusive Phase 3 land and residential development in Abuja',
	featuredCaption: 'Hutu Exclusive Phase 3 residential development context.',
	cardCta: 'Read Article',
	title: 'Hutu Exclusive Phase 3 Explained: Current Prices, Property Types, Payment Plans & Who It Suits',
	summary: 'Explore Hutu Exclusive Phase 3 prices, plot sizes, property options and payment plans, and see how Phase 3 compares with the other Hutu Exclusive phases.',
	seoTitle: 'Hutu Exclusive Phase 3 | Prices, Property Types & Payment Plans',
	metaDescription: 'See current Hutu Exclusive Phase 3 prices, plot sizes, apartments, houses and payment plans, plus who Phase 3 may suit and how it compares with the other phases.',
	quickAnswerPosition: 'after-introduction',
	quickAnswer: 'Hutu Exclusive Phase 3 currently starts from ₦11,689,453 for a 150sqm estate-land option. Published land sizes run from 150sqm to 1,000sqm, with 4, 8, 12 and 18-month payment plans. Phase 3 also has published 1, 2 and 3-bedroom apartment options, plus full blocks of apartments. It is part of the wider Hutu Exclusive development on Airport Road, Abuja, before Centenary City.',
	introduction: [
		'If you are looking at Hutu Exclusive Phase 3, there is a good chance you have already seen a price, a plot size or a house prototype that caught your attention. Phase 3 sits in an interesting middle ground inside Hutu Exclusive: it is currently cheaper than comparable land in Phase 1 & 2, but it offers more plot size choices and longer published payment plans than the lower-entry Phase 5 options.',
		'That does not automatically make Phase 3 the right phase for everyone. The useful question is what you are actually buying, how much you want to spend, how long you need to pay, and what you expect from the phase you choose. A 150sqm plot tied to a terrace prototype is a very different purchase from a 750sqm apartment-block option, even though both are sold under Hutu Exclusive Phase 3.',
		'This guide brings the current Phase 3 information together in one place. I will walk through the published land prices, the prototype attached to each plot size, the available payment-plan durations, the individual apartments and apartment-block options, how Phase 3 compares with the other Hutu Exclusive phases, and the kind of buyer I think should look at it more closely before making a decision.',
	],
	preBodyBlocks: [
		{
			type: 'image',
			src: '/images/articles/hutu-phase-3/prototypes.jpg',
			alt: 'Hutu Exclusive Phase 3 terrace and apartment-block prototypes',
			caption: 'Representative Hutu Exclusive Phase 3 prototype imagery from the current property materials.',
			aspect: 'wide',
		},
	],
	body: [
		{
			heading: 'What is Hutu Exclusive Phase 3?',
			blocks: [
				{ type: 'paragraph', text: 'Hutu Exclusive Phase 3 is one of the residential phases within the wider Hutu Exclusive development by Mshel Homes. It is not a separate estate, however it is not in the same location as Phase 1 & 2. It shares the same broader Airport Road location and the wider Hutu Exclusive master-plan context, while having its own internal position, land options, prototypes and current pricing.' },
				{
					type: 'richParagraph',
					parts: [
						'The development is on Airport Road in Abuja, before Centenary City when you are approaching from town. If you want the full location breakdown, routes from the airport and City Gate, and the landmarks that help you place the estate, read my ',
						{ text: 'Hutu Exclusive Abuja location guide', to: '/articles/hutu-exclusive-location' },
						'.',
					],
				},
				{ type: 'paragraph', text: 'One thing I would not do is treat every phase as interchangeable simply because the estate name is the same. Price, available plot sizes, payment duration and the level of current development you are comfortable with can all affect which phase makes more sense for you. Phase 3 deserves to be judged on those specifics.' },
				{ type: 'subheading', text: 'Hutu Exclusive Phase 3 at a glance' },
				{
					type: 'table',
					label: 'Hutu Exclusive Phase 3 at a glance',
					headers: ['Detail', 'Current information'],
					rows: [
						['Location', 'Airport Road, Abuja, before Centenary City'],
						['Developer', 'Mshel Homes'],
						['Lowest published land entry', `${formatNaira(getStartingPrice('p3-land-150-3bed-terrace'))} for 150sqm`],
						['Published land sizes', phase3LandOptions.map((option) => option.size).join(', ')],
						['Land payment durations', '4, 8, 12 and 18 months'],
						['Individual apartments', '1, 2 and 3-bedroom options'],
						['Apartment payment durations', '12 and 18 months'],
						['Full apartment blocks', '1, 2 and 3-bedroom blocks, 6 units each'],
					],
				},
			],
		},
		{
			heading: 'Current Hutu Exclusive Phase 3 land prices',
			blocks: [
				{ type: 'paragraph', text: 'The Phase 3 land schedule is useful because it is not limited to one or two standard plot sizes. The current list runs from 150sqm all the way to 1,000sqm, and each size is tied to an intended residential prototype. That gives you a clearer sense of what the land is designed to accommodate rather than leaving the plot size as an abstract number.' },
				{ type: 'paragraph', text: 'These are the current Phase 3 starting figures I am working with for September 2026:' },
				{ type: 'table', label: 'Current Hutu Exclusive Phase 3 land prices', headers: ['Plot size', 'Prototype / intended development', 'Current published price'], rows: phase3LandRows },
				{ type: 'paragraph', text: 'The first thing I would notice here is the range. Someone looking for a lower entry point can start with 150sqm or 250sqm, while a buyer planning a much larger detached home or an apartment-block development can move into 500sqm, 750sqm or 1,000sqm options without leaving Phase 3.' },
				{ type: 'paragraph', text: 'The second thing is that the prototype matters. If you like a particular building type, do not choose the plot size first and assume you can place any house on it later. Ask what prototype and estate guidelines apply to the exact option you are considering before you pay.' },
				{ type: 'chart', series: 'single', xAxisKey: 'size', data: phase3LandChart, caption: 'Figure 1. Published Phase 3 starting prices rise with plot size, from 150sqm to 1,000sqm.', scrollOnMobile: true },
				{ type: 'cta', eyebrow: 'Not sure which Phase 3 option fits your budget?', label: 'Find What Fits My Budget', to: '/#budget-matcher' },
			],
			relatedLink: { to: '/residential/phase-3', label: 'View Phase 3 properties' },
		},
		{
			heading: 'How the Phase 3 land payment plans work',
			blocks: [
				{ type: 'paragraph', text: 'Phase 3 is one of the Hutu Exclusive options that gives buyers a relatively broad published payment window. The current estate-land schedule shows 4, 8, 12 and 18-month plans. The total price increases as the payment period gets longer, so it is important to compare the full cost of the plan, not only the monthly amount.' },
				{ type: 'paragraph', text: 'On the current schedule, the 4, 8 and 12-month plans generally begin with a 30% initial deposit. The 18-month plan begins with a 20% initial deposit. The remaining balance is then spread according to the published schedule for that option.' },
				{ type: 'paragraph', text: 'For example, this is how the 150sqm Phase 3 option changes by payment duration:' },
				{ type: 'table', label: '150sqm Phase 3 payment plans', headers: ['Plan', 'Total price', 'Initial deposit', 'Published monthly payment'], rows: phase3PaymentRows },
				{ type: 'callout', label: 'What this means in practice', text: 'A longer plan lowers the amount you need to pay at each scheduled interval, but it also increases the total purchase price. If you can comfortably afford a shorter plan, compare the total cost before choosing the longest duration automatically. If cash flow matters more, the longer plan may still be the more practical option for you.' },
				{ type: 'cta', eyebrow: 'Want to see the payment plan for a specific Phase 3 property?', label: 'Find a Payment Plan', to: '/payment-plans' },
			],
		},
		{
			heading: 'Does Hutu Exclusive Phase 3 have apartments?',
			blocks: [
				{ type: 'paragraph', text: 'Yes. Phase 3 is not only an estate-land option. The current September 2026 apartment schedule also lists individual 1, 2 and 3-bedroom apartments, each with published 12 and 18-month payment options.' },
				{ type: 'table', label: 'Hutu Exclusive Phase 3 apartments', headers: ['Apartment', '12-month price', '18-month price'], rows: phase3ApartmentRows },
				{ type: 'paragraph', text: 'The apartment pricing should not be confused with the estate-land figures above. When you see ₦11,689,453 for 150sqm, you are looking at the published estate-land option tied to its prototype. When you see ₦78,107,000 for a 1-bedroom apartment, you are looking at the published price for an apartment unit on the 12-month schedule. They are different products.' },
				{ type: 'paragraph', text: 'The apartment schedule describes bronze finishing and includes items such as screeding, POP, wiring, fittings, internal doors, painting, tiling, external finishing, infrastructure, roofing, mechanical piping and burglary proof. If you are considering an apartment, I would still confirm the exact current specification attached to the unit you are buying before payment.' },
			],
		},
		{
			heading: 'What about full blocks of apartments?',
			blocks: [
				{ type: 'paragraph', text: 'Phase 3 also has published full-block options for buyers looking beyond a single apartment. The current schedule lists six-unit blocks for 1, 2 and 3-bedroom apartments.' },
				{ type: 'table', label: 'Hutu Exclusive Phase 3 full apartment blocks', headers: ['Block option', 'Published plan', 'Lower published price', 'Longer-plan price'], rows: phase3BlockRows },
			],
		},
		{
			heading: 'How Phase 3 compares with Phase 1 & 2 and Phase 5',
			blocks: [
				{ type: 'paragraph', text: 'If you are choosing between phases, Phase 3 currently sits between Phase 1 & 2 and Phase 5 on entry price. That is easiest to see when you compare the same plot size.' },
				{ type: 'table', label: 'Hutu Exclusive land-price comparison by phase', headers: ['Plot size', 'Phase 1 & 2', 'Phase 3', 'Phase 5'], rows: phaseComparisonRows },
				{
					type: 'richParagraph',
					parts: [
						'If you want the full estate-wide comparison, including all current phases, houses, apartments and commercial options, use my ',
						{ text: 'Hutu Exclusive Price List 2026', to: '/articles/hutu-exclusive-price-list-2026' },
						'.',
					],
				},
				{
					type: 'richParagraph',
					parts: [
						'The lower number is not automatically the better purchase. ',
						{ text: 'Phase 5', to: '/residential/phase-5' },
						' may make more sense if your priority is the lowest available land entry price. ',
						{ text: 'Phase 1 & 2', to: '/residential/phase-1-2' },
						' may appeal more if you want to focus on the more established part of the current development. Phase 3 can be attractive when you want a middle entry point, more plot-size flexibility and a longer published land payment window.',
					],
				},
			],
		},
		{
			heading: 'What should you know about the current Phase 3 development stage?',
			blocks: [
				{ type: 'paragraph', text: 'Hutu Exclusive is an ongoing development, and the experience is not identical across every phase. I would not choose Phase 3 based only on a brochure image or a future master-plan feature. Before buying, look at what is physically on ground in the exact part of the estate you are considering and separate that from what is planned for the wider development.' },
				{ type: 'paragraph', text: 'Hutu Exclusive Phase 3 is an active part of the estate with land and apartment options for sale. The wider Hutu Exclusive plan includes golf facilities, artificial lakes, recreational areas, a clubhouse, sports facilities, swimming pools, green areas, solar streetlights, underground wiring, centralised utilities and an amusement park. Those wider estate plans are useful context, but your buying decision should also include the current condition of the roads, infrastructure and surroundings around your specific Phase 3 option.' },
				{ type: 'paragraph', text: 'This is one of the reasons I recommend an inspection rather than trying to make the whole decision from pricing alone. If you are abroad, a virtual inspection can at least help you see the current environment before you travel.' },
				{ type: 'cta', eyebrow: 'Want to see Phase 3 for yourself?', label: 'Book a Site Inspection', to: '/inspection' },
			],
		},
		{
			heading: 'Who does Hutu Exclusive Phase 3 suit?',
			blocks: [
				{ type: 'paragraph', text: 'I would put Phase 3 on your shortlist if one or more of these describe what you are looking for:' },
				{
					type: 'list',
					items: [
						'You want a lower land entry price than the current Phase 1 & 2 equivalent, but you do not want to limit yourself to the smaller set of sizes currently listed in Phase 5.',
						'You want a specific plot size. Phase 3 currently gives you 150sqm, 250sqm, 350sqm, 450sqm, 500sqm, 750sqm and 1,000sqm choices.',
						'You need more time to pay for land. The published Phase 3 land schedule currently extends to 18 months.',
						'You are comparing land with a finished-property route. Phase 3 also has individual apartment and full apartment-block options in the current published schedule.',
						'You are comfortable evaluating an ongoing phase based on what is on ground today and what the wider estate is planned to become, rather than choosing only the most established area.',
					],
				},
			],
		},
		{
			heading: 'Who may be better looking at another phase?',
			blocks: [
				{ type: 'paragraph', text: 'Phase 3 may not be the obvious first choice if your only goal is to get the lowest current land entry price. Phase 5 starts lower. It may also not be your first choice if your priority is to stay as close as possible to the more established current development activity in Phase 1 & 2. Those are not reasons to avoid Phase 3; they are simply reasons to compare the phases based on what matters most to you.' },
			],
		},
		{
			heading: 'What I would check before paying for a Phase 3 property',
			blocks: [
				{ type: 'subheading', text: 'The exact internal location' },
				{ type: 'paragraph', text: 'Ask to see where the plot, apartment or block sits within Phase 3, not only the estate entrance.' },
				{ type: 'subheading', text: 'The prototype attached to the plot' },
				{ type: 'paragraph', text: 'Confirm what you are allowed to build on the size you are buying and what estate guidelines apply.' },
				{ type: 'subheading', text: 'The current price and payment schedule' },
				{ type: 'paragraph', text: 'Use the current property-specific schedule, especially if you are choosing an extended plan.' },
				{ type: 'subheading', text: 'What is physically on ground' },
				{ type: 'paragraph', text: 'Look at road access, surrounding development and the current condition of the area you are buying into.' },
				{ type: 'subheading', text: 'Allocation and documentation' },
				{ type: 'paragraph', text: 'Understand the difference between layout allocation and physical allocation, and ask what documentation applies at your stage of purchase.' },
				{ type: 'subheading', text: 'Payment details' },
				{ type: 'paragraph', text: 'Property purchase payments should go directly to Mshel Homes company channels, not to an advisor or personal bank account.' },
				{ type: 'callout', label: 'Expert Opinion', text: 'Phase 3 makes the most sense when you choose it for a reason. Maybe the 250sqm option fits your budget better than Phase 1 & 2. Maybe you specifically want 500sqm. Maybe the 18-month schedule matters to your cash flow. Start with that reason, then inspect the exact option and compare the total cost before you commit.' },
			],
		},
		{
			heading: 'Frequently asked questions about Hutu Exclusive Phase 3',
			blocks: [
				{
					type: 'faq',
					items: [
						{ q: 'How much is Hutu Exclusive Phase 3?', a: 'The current published Phase 3 land entry price is ₦11,689,453 for 150sqm. Larger plot sizes currently run up to ₦77,917,480 for 1,000sqm on the starting published schedule.' },
						{ q: 'How much is 250sqm in Hutu Exclusive Phase 3?', a: 'The current published starting price for 250sqm is ₦19,482,422. It is tied to a 4-bedroom semi-detached duplex prototype in the current schedule.' },
						{ q: 'What plot sizes are available in Phase 3?', a: 'The current published Phase 3 sizes are 150sqm, 250sqm, 350sqm, 450sqm, 500sqm, 750sqm and 1,000sqm.' },
						{ q: 'What payment plans are available for Phase 3 land?', a: 'The current published land schedule shows 4, 8, 12 and 18-month options. Longer plans have a higher total price than the shortest published plan.' },
						{ q: 'Does Hutu Exclusive Phase 3 have apartments?', a: 'Yes. The current schedule includes individual 1, 2 and 3-bedroom apartments, as well as six-unit blocks of 1, 2 and 3-bedroom apartments.' },
						{ q: 'Is Phase 3 cheaper than Phase 1 & 2?', a: 'On the current published land schedule, yes for comparable plot sizes. For example, 150sqm is ₦11,689,453 in Phase 3 compared with ₦22,453,200 in Phase 1 & 2.' },
						{ q: 'Is Phase 3 cheaper than Phase 5?', a: 'No on the current entry land prices. Phase 5 currently has the lower published starting price, beginning at ₦8,250,000 for 150sqm.' },
						{ q: 'Where is Hutu Exclusive Phase 3 located?', a: 'Phase 3 is inside the wider Hutu Exclusive development on Airport Road, Abuja, before Centenary City. Current materials also reference NIPCO Gas Station as a nearby landmark.' },
						{ q: 'Can I inspect Phase 3 before buying?', a: 'Yes. I recommend inspecting the exact phase and property option you are considering. If you are outside Abuja or Nigeria, you can start with a virtual inspection.' },
					],
				},
			],
		},
		{
			heading: 'Is Phase 3 the right Hutu Exclusive phase for you?',
			blocks: [
				{ type: 'paragraph', text: 'Phase 3 is worth a serious look if you want more choice than a single entry-level plot, need a longer payment window or want to compare land with apartment options inside the same phase. Its current pricing places it between Phase 1 & 2 and Phase 5, which is why it often becomes the practical middle option for buyers who are balancing budget with flexibility.' },
				{ type: 'paragraph', text: 'But I would still make the decision from the exact property upward, not from the phase name downward. Decide what you want to achieve, choose the size or property type that fits that goal, compare the payment plan, and then inspect the location before you pay.' },
				{ type: 'paragraph', text: 'If you are still trying to place Phase 3 within the wider estate, read the Hutu Exclusive location guide. If your main question is how Phase 3 pricing compares with every other current Hutu option, use the 2026 Hutu Exclusive price list.' },
			],
		},
	],
	authorBio: 'Amaka Okorie is a Hutu Exclusive Property Advisor based in Abuja. She helps buyers understand Hutu Exclusive phases, prices, property options and the buying process, and supports both physical and remote inspections. Her focus is clear information, honest guidance and personal follow-through from enquiry to allocation.',
	whatsAppMessage: 'Hi Amaka, I’ve just read your Hutu Exclusive Phase 3 guide and I’d like some help choosing a Phase 3 property.',
	finalCta: {
		title: 'Considering Hutu Exclusive Phase 3?',
		copy: 'Tell me your budget, the plot size or property type you are considering, and I can help you compare the available Phase 3 options and understand the next step.',
		buttons: [
			{ label: 'Chat With Me on WhatsApp', kind: 'whatsapp' },
			{ label: 'Find What Fits My Budget', to: '/#budget-matcher', kind: 'internal' },
		],
	},
	relatedArticles: [
		'hutu-exclusive-price-list-2026',
		'hutu-exclusive-location',
	],
};
