import propertyDatabase from '@/data/hutuExclusiveProperties.json';

const formatNaira = (value) => new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: 'NGN',
	maximumFractionDigits: 0,
}).format(value);

const getStartingPrice = (slug) => {
	const property = propertyDatabase.properties.find((item) => item.slug === slug);
	if (!property) throw new Error(`Phase comparison article property not found: ${slug}`);
	if (property.displayStartingPrice != null) return property.displayStartingPrice;
	return Math.min(...property.paymentPlans.map((plan) => plan.totalPrice));
};

const prices = {
	phase12: {
		'150sqm': getStartingPrice('p12-land-150-3bed-terrace'),
		'250sqm': getStartingPrice('p12-land-250-4bed-semi'),
		'350sqm': getStartingPrice('p12-land-350-4bed-full'),
		'450sqm': getStartingPrice('p12-land-450-1bed-block'),
		'1,000sqm': getStartingPrice('p12-land-1000-7bed-full'),
	},
	phase3: {
		'150sqm': getStartingPrice('p3-land-150-3bed-terrace'),
		'250sqm': getStartingPrice('p3-land-250-4bed-semi'),
		'350sqm': getStartingPrice('p3-land-350-4bed-full'),
		'450sqm': getStartingPrice('p3-land-450-1bed-block'),
		'500sqm': getStartingPrice('p3-land-500-5bed-full'),
		'750sqm': getStartingPrice('p3-land-750-2bed-block'),
		'1,000sqm': getStartingPrice('p3-land-1000-7bed-full'),
	},
	phase5: {
		'150sqm': getStartingPrice('p5-land-150-3bed-terrace'),
		'250sqm': getStartingPrice('p5-land-250-4bed-semi'),
		'350sqm': getStartingPrice('p5-land-350-4bed-full'),
		'500sqm': getStartingPrice('p5-land-500-5bed-full'),
		'1,000sqm': getStartingPrice('p5-land-1000-7bed-full'),
	},
};

const phase12Rows = ['150sqm', '250sqm', '350sqm', '450sqm', '1,000sqm'].map((size) => [size, formatNaira(prices.phase12[size])]);
const phase3Rows = ['150sqm', '250sqm', '350sqm', '450sqm', '500sqm', '750sqm', '1,000sqm'].map((size) => [size, formatNaira(prices.phase3[size])]);
const phase5Rows = ['150sqm', '250sqm', '350sqm', '500sqm', '1,000sqm'].map((size) => [size, formatNaira(prices.phase5[size])]);
const sameSizeRows = ['150sqm', '250sqm', '350sqm', '500sqm', '1,000sqm'].map((size) => [
	size,
	prices.phase12[size] ? formatNaira(prices.phase12[size]) : '—',
	formatNaira(prices.phase3[size]),
	formatNaira(prices.phase5[size]),
]);

export const PHASE_COMPARISON_ARTICLE = {
	slug: 'hutu-exclusive-phase-comparison',
	category: 'Hutu Exclusive',
	author: 'Amaka Okorie',
	authorTitle: 'Hutu Exclusive Property Advisor',
	authorPath: '/about/meet-your-advisor',
	authorImage: '/images/advisor/amaka-okorie.png',
	publishDate: 'September 2026',
	updatedDate: 'September 2026',
	dateLabel: 'Updated',
	wordCount: 2150,
	featuredImage: '/images/hero/hutu-entrance-portrait.jpg',
	featuredAlt: 'Hutu Exclusive residential development in Abuja',
	featuredCaption: 'Hutu Exclusive residential development context in Abuja.',
	cardCta: 'Read Article',
	title: 'Hutu Exclusive Phase 1 & 2 vs Phase 3 vs Phase 5: Which One Fits Your Budget and Timeline?',
	summary: 'Compare Hutu Exclusive Phase 1 & 2, Phase 3 and Phase 5 by entry price, plot size, property options, payment timeline and buyer suitability.',
	seoTitle: 'Hutu Exclusive Phase 1 & 2 vs Phase 3 vs Phase 5',
	metaDescription: 'Compare Hutu Exclusive Phase 1 & 2, Phase 3 and Phase 5 by price, plot size, property type and payment timeline to see which phase may suit your budget and plans.',
	quickAnswerPosition: 'after-introduction',
	quickAnswer: 'Phase 5 currently has the lowest land entry price. Phase 3 gives buyers a wider range of land sizes and longer payment-plan options on several land products. Phase 1 & 2 has the highest land entry point of the three, but it also sits alongside a broader selection of existing house and apartment options. The right phase depends on what you are trying to buy, not just which number is cheapest.',
	introduction: [
		'One of the most common mistakes I see buyers make with Hutu Exclusive is choosing a phase by name before comparing what that phase actually offers. Phase 1 & 2, Phase 3 and Phase 5 all belong to the same wider Hutu Exclusive development, but they sit at very different price points and can suit very different buyers.',
		'If your first question is simply, ‘Which phase is best?’, I would change the question. The better question is: which phase fits your budget, the property type you want, how quickly you want to complete payment and what you hope to do with the property afterwards? A buyer looking for the lowest land entry price does not need the same phase as someone who wants more built-property options or a more established part of the estate.',
		'This guide compares the three residential phases side by side using the current September 2026 figures. I will show you where the entry prices differ, how plot sizes compare, what the payment windows look like and the kind of buyer each phase may make the most sense for.',
	],
	body: [
		{
			heading: 'Hutu Exclusive phases at a glance',
			blocks: [
				{
					type: 'table',
					label: 'Hutu Exclusive phases at a glance',
					headers: ['Phase', 'Published land entry price', 'Typical land range in current listings', 'What stands out'],
					rows: [
						['Phase 1 & 2', `From ${formatNaira(prices.phase12['150sqm'])}`, '150sqm to 1,000sqm', 'Higher entry price; broader mix of land, houses and apartments.'],
						['Phase 3', `From ${formatNaira(prices.phase3['150sqm'])}`, '150sqm to 1,000sqm', 'Mid-range entry; broader land-size ladder and payment options extending up to 18 months on some listings.'],
						['Phase 5', `From ${formatNaira(prices.phase5['150sqm'])}`, '150sqm to 1,000sqm', 'Lowest current land entry point; strong option for buyers prioritising affordability and land ownership.'],
					],
				},
				{
					type: 'chart',
					chart: 'phase150',
					data: [
						{ phase: 'Phase 1 & 2', price: prices.phase12['150sqm'], label: '₦22.45M' },
						{ phase: 'Phase 3', price: prices.phase3['150sqm'], label: '₦11.69M' },
						{ phase: 'Phase 5', price: prices.phase5['150sqm'], label: '₦8.25M' },
					],
					showValues: true,
					valueLabelKey: 'label',
					caption: 'Figure 1. Current published entry price for a 150sqm land option across the three residential phases.',
				},
			],
		},
		{
			heading: 'Phase 1 & 2: higher entry price, broader property mix',
			image: 'https://images.hostinger.com/27364524-3a5a-4c3b-803e-3ef2dacc2f86.png',
			imageAlt: 'Hutu Exclusive Phase 1 and 2 residential development Abuja',
			imageCaption: 'Representative Phase 1 & 2 property context from the current Hutu Exclusive materials.',
			blocks: [
				{
					type: 'richParagraph',
					parts: [
						{ text: 'Phase 1 & 2', to: '/residential/phase-1-2' },
						' is the original Hutu Exclusive residential phase grouping and currently carries the highest published land prices of the three residential options. A 150sqm land option starts from ₦22,453,200, while larger plots rise substantially from there.',
					],
				},
				{ type: 'paragraph', text: 'The trade-off is that Phase 1 & 2 is not only about land. The current Hutu Exclusive inventory around this phase also includes a broader selection of developer-built homes and apartment options. That makes it relevant to buyers who are not simply trying to secure the cheapest plot available.' },
				{ type: 'paragraph', text: 'If your budget comfortably reaches this phase and you are comparing land with houses or apartments, Phase 1 & 2 deserves a closer look. But I would not stretch your budget just to say you bought in an earlier phase. The property itself still needs to fit your plans.' },
				{ type: 'table', label: 'Current Phase 1 & 2 starting prices by plot size', headers: ['Plot size', 'Current starting price'], rows: phase12Rows },
				{
					type: 'richParagraph',
					parts: [
						'For the full estate-wide breakdown, including houses, apartments and commercial property, see my ',
						{ text: 'Hutu Exclusive Price List 2026', to: '/articles/hutu-exclusive-price-list-2026' },
						'.',
					],
				},
				{ type: 'subheading', text: 'Who Phase 1 & 2 may suit' },
				{
					type: 'list',
					items: [
						'Buyers with a higher land budget who want to compare earlier-phase land with built-property options.',
						'Buyers considering houses or apartments rather than land only.',
						'Buyers who want to inspect a part of the estate where more of the current development activity is already visible.',
						'Buyers who care less about getting the lowest entry price and more about the specific property or phase position they prefer.',
					],
				},
			],
		},
		{
			heading: 'Phase 3: the middle ground for price, size and payment flexibility',
			image: 'https://images.hostinger.com/45ec2a16-b790-4cb7-9bef-bb6c8baa0a74.png',
			imageAlt: 'Hutu Exclusive Phase 3 property options',
			imageCaption: 'Representative Phase 3 land and residential context from the current Hutu Exclusive materials.',
			blocks: [
				{ type: 'paragraph', text: 'Phase 3 sits between Phase 1 & 2 and Phase 5 on current entry price. The 150sqm land option starts from ₦11,689,453, which puts the phase well below Phase 1 & 2 but above Phase 5.' },
				{ type: 'paragraph', text: 'Where Phase 3 becomes especially interesting is the range. Current published land options run through 150sqm, 250sqm, 350sqm, 450sqm, 500sqm, 750sqm and 1,000sqm. That gives a buyer more steps between the smallest and largest options rather than forcing a jump from one size band to another.' },
				{ type: 'paragraph', text: 'Phase 3 also has published land payment structures extending across 4, 8, 12 and 18 months on several options. The price usually changes with the payment duration, so a longer plan can reduce the immediate monthly pressure but should be compared against the total amount you will pay.' },
				{ type: 'table', label: 'Current Phase 3 starting prices by plot size', headers: ['Plot size', 'Current starting price'], rows: phase3Rows },
				{
					type: 'richParagraph',
					parts: [
						'I have already broken this phase down separately in ',
						{ text: 'Hutu Exclusive Phase 3 Explained', to: '/articles/hutu-exclusive-phase-3' },
						', including its property types and payment plans.',
					],
				},
				{ type: 'subheading', text: 'Who Phase 3 may suit' },
				{
					type: 'list',
					items: [
						'Buyers who want a lower entry price than Phase 1 & 2 but do not necessarily need the absolute cheapest phase.',
						'Buyers who want more choice between plot sizes.',
						'Buyers who need to compare shorter and longer payment windows.',
						'Buyers considering both land and apartment-related Hutu Exclusive options within the Phase 3 inventory.',
					],
				},
			],
		},
		{
			heading: 'Phase 5: the lowest current land entry point',
			image: 'https://images.hostinger.com/7fda9ec1-54a6-47df-911d-a4f6eaef1fd8.png',
			imageAlt: 'Hutu Exclusive Phase 5 land development Abuja',
			imageCaption: 'Representative Phase 5 land-development context from the current Hutu Exclusive materials.',
			blocks: [
				{
					type: 'richParagraph',
					parts: [
						{ text: 'Phase 5', to: '/residential/phase-5' },
						' is currently the most affordable way into Hutu Exclusive land based on the published September 2026 figures. A 150sqm option starts from ₦8,250,000, 250sqm from ₦13,750,000 and 350sqm from ₦19,250,000.',
					],
				},
				{ type: 'paragraph', text: 'That lower entry point is the obvious attraction, especially for buyers whose main goal is to own land inside the wider Hutu Exclusive development without committing the amount required for Phase 1 & 2 or some of the larger Phase 3 plots.' },
				{ type: 'paragraph', text: 'The important trade-off is timing and stage of development. If you are considering Phase 5 because the price works for you, inspect it with that in mind. You should be comfortable with what is currently on site and with the fact that the wider development will continue to evolve over time.' },
				{ type: 'table', label: 'Current Phase 5 starting prices by plot size', headers: ['Plot size', 'Current starting price'], rows: phase5Rows },
				{ type: 'subheading', text: 'Who Phase 5 may suit' },
				{
					type: 'list',
					items: [
						'Buyers whose first priority is the lowest available Hutu Exclusive land entry price.',
						'Buyers who are comfortable buying for a longer horizon while development progresses.',
						'Buyers who prefer to put less capital into the land purchase and keep room in their budget for later development costs.',
						'Buyers who want a simple land-first decision rather than starting with apartments or a wider built-property comparison.',
					],
				},
			],
		},
		{
			heading: 'Same plot size, very different budget',
			blocks: [
				{ type: 'table', label: 'Starting-price comparison for the same plot sizes across Hutu Exclusive phases', headers: ['Plot size', 'Phase 1 & 2', 'Phase 3', 'Phase 5'], rows: sameSizeRows },
				{ type: 'paragraph', text: 'This is why I do not think a buyer should ask only, ‘How much is Hutu Exclusive?’ The phase can change the answer dramatically even when the plot size looks similar.' },
			],
		},
		{
			heading: 'What if your budget is ₦10M, ₦20M, ₦40M or ₦60M?',
			blocks: [
				{ type: 'labeledParagraph', label: 'Around ₦10M:', text: 'Phase 5 is the clearest current land option around this level, with 150sqm starting from ₦8.25M. Phase 3 begins above ₦11M, so it may require a slightly larger budget or a payment plan.' },
				{ type: 'labeledParagraph', label: 'Around ₦20M:', text: 'You can start comparing Phase 5 250sqm/350sqm options with Phase 3 150sqm/250sqm/350sqm options. This is where your preferred plot size and payment timeline begin to matter more than the phase name.' },
				{ type: 'labeledParagraph', label: 'Around ₦40M:', text: 'Phase 3 opens up substantially, including 450sqm and 500sqm starting prices, while Phase 5 gives you room to consider larger plots. Phase 1 & 2 also becomes relevant around its 250sqm range.' },
				{ type: 'labeledParagraph', label: 'Around ₦60M and above:', text: 'All three phases come into play. At this point the question is less about access and more about which phase, size and property type best fits what you want to do.' },
				{ type: 'cta', eyebrow: 'Not sure which Hutu Exclusive phase fits your budget?', label: 'Find What Fits My Budget', to: '/#budget-matcher' },
			],
		},
		{
			heading: 'Your payment timeline can change the answer',
			blocks: [
				{ type: 'paragraph', text: 'Two buyers with the same total budget can still end up in different phases because one can pay faster than the other. Phase 1 & 2 current land schedules include shorter 4- and 8-month structures on the published options. Phase 3 offers a wider spread, with several land options showing 4-, 8-, 12- and 18-month plans. Phase 5 commonly shows 6- and 12-month structures on several plot sizes, while exact terms can vary by property.' },
				{ type: 'paragraph', text: 'Do not compare only the monthly amount. Compare the total price under each payment duration, the initial deposit and whether the schedule is realistic for your income. A cheaper monthly instalment is not useful if it pushes you into a total price or timeline you are not comfortable with.' },
				{ type: 'cta', eyebrow: 'Want to see the payment plan for a specific property?', label: 'Find a Payment Plan', to: '/payment-plans' },
			],
		},
		{
			heading: 'Your intended use matters too',
			blocks: [
				{ type: 'labeledParagraph', label: 'Buying to build or live there:', text: 'Pay closer attention to the phase’s current development stage, access, allocation process and the estate requirements that will affect when you can begin building.' },
				{ type: 'labeledParagraph', label: 'Buying for a longer-term hold:', text: 'Entry price, plot size and your comfort with waiting for wider development may carry more weight.' },
				{ type: 'labeledParagraph', label: 'Buying a completed or developer-built home:', text: 'Your decision may naturally pull you toward the phases where those current house and apartment options are available rather than the cheapest land phase.' },
				{ type: 'labeledParagraph', label: 'Buying from outside Abuja or Nigeria:', text: 'The phase comparison is still the same, but virtual inspections, documentation follow-up and clear communication become much more important.' },
			],
		},
		{
			heading: 'The phase I would choose depends on the buyer',
			blocks: [
				{
					type: 'callout',
					label: 'Buyer decision',
					paragraphs: [
						'If someone tells me they have ₦10M and want land inside Hutu Exclusive, I am not going to begin the conversation with Phase 1 & 2. If another buyer wants a house, an apartment or has a much larger budget, I would not automatically push them toward Phase 5 just because it is cheaper.',
						'That is the real value of comparing the phases: you stop asking which phase is ‘best’ in the abstract and start looking at which one is best for you.',
						'I would rather help you choose a smaller or cheaper option that fits your plans than put you into a phase that looks impressive on paper but creates unnecessary financial pressure.',
					],
				},
			],
		},
		{
			heading: 'Before you choose, inspect the phase you are actually buying',
			image: '/images/hero/hutu-site-team.jpg',
			imageAlt: 'Buyers inspecting the Hutu Exclusive development in Abuja',
			imageCaption: 'A current site visit helps buyers compare the development context across Hutu Exclusive.',
			blocks: [
				{ type: 'paragraph', text: 'A phase comparison is useful on paper, but you should still see the part of the estate you are considering. The wider Hutu Exclusive master plan is shared across the development, while current site conditions can differ from one area to another.' },
				{ type: 'paragraph', text: 'If you are in Abuja, book a physical inspection. If you are outside Abuja or outside Nigeria, I can coordinate a virtual inspection so you can see the relevant phase and ask questions in real time.' },
				{
					type: 'richParagraph',
					parts: [
						'If you need the route first, read ',
						{ text: 'Where Is Hutu Exclusive Located?', to: '/articles/hutu-exclusive-location' },
						'. If the wider amenities and long-term estate plan matter to your decision, see my ',
						{ text: 'Hutu Exclusive Golf Resort Estate guide', to: '/articles/hutu-exclusive-golf-resort-estate' },
						'.',
					],
				},
				{ type: 'cta', eyebrow: 'Still deciding between the phases?', label: 'Book a Site Inspection', to: '/inspection' },
			],
		},
		{
			heading: 'Frequently asked questions',
			blocks: [
				{
					type: 'faq',
					items: [
						{ q: 'Which Hutu Exclusive phase is the cheapest?', a: 'Based on the current September 2026 published land prices, Phase 5 has the lowest entry point, starting from ₦8,250,000 for a 150sqm option.' },
						{ q: 'Is Phase 3 cheaper than Phase 1 & 2?', a: 'Yes, on current comparable land entry prices. For example, 150sqm starts from ₦11,689,453 in Phase 3 versus ₦22,453,200 in Phase 1 & 2.' },
						{ q: 'Which phase has the longest payment plan?', a: 'Several current Phase 3 land options show payment durations extending to 18 months. Exact plans vary by property and should be confirmed for the option you want.' },
						{ q: 'Does the cheapest phase automatically make the best investment?', a: 'No. Price is only one factor. Your intended use, timeline, plot size, development stage, payment plan and the exact property all matter.' },
						{ q: 'Can I inspect more than one phase before deciding?', a: 'Yes. In fact, if you are genuinely comparing phases, seeing more than one can make the differences much easier to understand.' },
						{ q: 'Do all phases belong to the same Hutu Exclusive estate?', a: 'Yes. Phase 1 & 2, Phase 3 and Phase 5 are different residential parts of the wider Hutu Exclusive development by Mshel Homes.' },
					],
				},
			],
		},
		{
			heading: 'Which phase should you choose?',
			blocks: [
				{ type: 'paragraph', text: 'Start with your real budget, the property type you want and how quickly you can comfortably complete payment. Once those three things are clear, the phase comparison becomes much easier.' },
				{ type: 'paragraph', text: 'If you tell me your budget and what you want the property for, I can help you narrow the options down before you spend time comparing every listing.' },
			],
		},
	],
	authorBio: 'Amaka Okorie is a Hutu Exclusive Property Advisor based in Abuja. Since the estate launched in 2024, she has helped more than 20 clients navigate Hutu Exclusive and handled more than ₦500M in Hutu Exclusive property sales. Her focus is clear information, honest guidance and personal follow-through before and after payment.',
	whatsAppMessage: 'Hi Amaka, I’ve just read your Hutu Exclusive phase comparison and I’d like help deciding between Phase 1 & 2, Phase 3 and Phase 5.',
	finalCta: {
		title: 'Still Not Sure Which Hutu Exclusive Phase Fits You?',
		copy: 'Tell me your budget, what you want to buy and how soon you are planning to move or build. I can help you compare the current options across Phase 1 & 2, Phase 3 and Phase 5.',
		buttons: [
			{ label: 'Chat With Me on WhatsApp', kind: 'whatsapp' },
			{ label: 'Find What Fits My Budget', to: '/#budget-matcher', kind: 'internal' },
		],
	},
	relatedArticles: [
		'hutu-exclusive-price-list-2026',
		'hutu-exclusive-phase-3',
		'is-hutu-exclusive-right-for-you',
	],
};
