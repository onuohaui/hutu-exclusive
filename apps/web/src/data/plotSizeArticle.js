import propertyDatabase from '@/data/hutuExclusiveProperties.json';

const formatNaira = (value) => new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: 'NGN',
	maximumFractionDigits: 0,
}).format(value);

const getStartingPrice = (slug) => {
	const property = propertyDatabase.properties.find((item) => item.slug === slug);
	if (!property) throw new Error(`Plot-size article property not found: ${slug}`);
	if (property.displayStartingPrice != null) return property.displayStartingPrice;
	return Math.min(...property.paymentPlans.map((plan) => plan.totalPrice));
};

const prices = {
	phase12: {
		'150sqm': getStartingPrice('p12-land-150-3bed-terrace'),
		'250sqm': getStartingPrice('p12-land-250-4bed-semi'),
	},
	phase3: {
		'150sqm': getStartingPrice('p3-land-150-3bed-terrace'),
		'250sqm': getStartingPrice('p3-land-250-4bed-semi'),
		'500sqm': getStartingPrice('p3-land-500-5bed-full'),
	},
	phase5: {
		'150sqm': getStartingPrice('p5-land-150-3bed-terrace'),
		'250sqm': getStartingPrice('p5-land-250-4bed-semi'),
		'500sqm': getStartingPrice('p5-land-500-5bed-full'),
	},
};

export const PLOT_SIZE_ARTICLE = {
	slug: '150sqm-vs-250sqm-vs-500sqm-how-much-land-do-you-need',
	category: 'Property Insights',
	author: 'Amaka Okorie',
	authorTitle: 'Hutu Exclusive Property Advisor',
	authorPath: '/about/meet-your-advisor',
	authorImage: '/images/advisor/amaka-okorie.png',
	publishDate: 'September 2026',
	updatedDate: 'September 2026',
	dateLabel: 'Updated',
	wordCount: 2420,
	featuredImage: '/images/articles/plot-sizes-planning.jpg',
	featuredAlt: 'Residential plots with different building footprints, parking and outdoor space in Abuja',
	featuredCaption: 'A residential planning view showing how plot size, building footprint, parking, setbacks and outdoor space work together.',
	cardCta: 'Read Article',
	title: '150sqm vs 250sqm vs 500sqm: How Much Land Do You Actually Need?',
	summary: 'This guide compares 150sqm, 250sqm and 500sqm in practical terms: what each size can mean, what you should think about before choosing, and how those sizes currently show up inside Hutu Exclusive.',
	seoTitle: '150sqm vs 250sqm vs 500sqm: How Much Land Do You Need in Abuja?',
	metaDescription: 'Compare 150sqm, 250sqm and 500sqm plot sizes, building footprints, parking, outdoor space, total budget and current Hutu Exclusive examples in Abuja.',
	quickAnswerPosition: 'after-introduction',
	quickAnswerLabel: 'The simple answer',
	quickAnswer: 'Choose the smallest plot that comfortably supports the home, outdoor space, parking, privacy and future plans you genuinely need. Buying more land than your plan requires can tie up money that you may later need for construction, finishing and other costs.',
	introduction: [
		'If you are buying land for a home, one of the easiest mistakes to make is assuming that a bigger plot is automatically the better choice. It can feel safer to buy more land now and “figure it out later,” especially when you are worried about future space, resale or building something substantial. But plot size only makes sense when it matches the kind of home you want, the money you are prepared to spend after buying the land, and how you actually plan to use the property.',
		'A well-planned 150sqm plot can be enough for the right terrace home. A 250sqm plot can give a semi-detached house more breathing room. A 500sqm plot can support a larger detached home and more private outdoor space. None of those sizes is universally better. They simply solve different problems, and they come with very different land and construction budgets.',
		'This guide compares 150sqm, 250sqm and 500sqm in practical terms: what each size can mean, what you should think about before choosing, and how those sizes currently show up inside Hutu Exclusive. I am using Hutu Exclusive as a real-world example because the estate currently has property options tied to these plot sizes across different phases, but the decision principles apply much more broadly to anyone comparing residential land in Abuja.',
	],
	body: [
		{
			heading: 'First: plot size is not the same thing as house size',
			blocks: [
				{ type: 'paragraph', text: 'A 250sqm plot does not mean you can build a 250sqm house on the ground floor. Part of the land may need to remain open for setbacks, access, parking, drainage, landscaping and any estate planning requirements that apply to the property.' },
				{ type: 'paragraph', text: 'The actual building footprint depends on the approved prototype or design, estate guidelines and the planning rules that apply to the site. That is why I would never choose land only by looking at the square-metre number. I want to know what is allowed on that plot and whether the approved house type works for the buyer.' },
				{ type: 'paragraph', text: 'At Hutu Exclusive, the current developer materials make this easier to understand because several land sizes are already associated with specific residential prototypes. Those prototype associations are useful examples, but they should not be treated as a universal rule for every estate in Abuja.' },
			],
		},
		{
			heading: '150sqm vs 250sqm vs 500sqm at a glance',
			blocks: [
				{
					type: 'table',
					label: '150sqm vs 250sqm vs 500sqm at a glance',
					headers: ['Plot size', 'Current Hutu example', 'Usually worth considering if…', 'Main budget question'],
					rows: [
						['150sqm', '3-bedroom terrace prototype', 'You want a more compact home and lower land entry cost', 'Would I rather keep more money available for construction and finishing?'],
						['250sqm', '4-bedroom semi-detached prototype', 'You want more bedrooms and a stronger balance between house and outdoor space', 'Can I comfortably fund the larger house that usually comes with this plot size?'],
						['500sqm', '5-bedroom fully detached prototype in Phase 3 and Phase 5', 'You genuinely want a larger detached home, more privacy and more external space', 'Will the land purchase leave enough capital for the scale of home I plan to build?'],
					],
				},
			],
		},
		{
			heading: '150sqm: compact, efficient and often the easiest place to start',
			blocks: [
				{ type: 'paragraph', text: 'A 150sqm plot makes the most sense when you want the land to work efficiently. You are not paying for a large amount of unused external space, so more of your overall budget can remain available for the building itself, finishing, furnishing and the other costs that come after the land purchase.' },
				{ type: 'paragraph', text: 'In the current Hutu Exclusive materials, 150sqm is associated with a 3-bedroom terrace prototype. That is a useful example of what a compact urban plot can support when the house design is planned around the site rather than treated as an afterthought.' },
				{ type: 'paragraph', text: 'For a young family, first-time property buyer, rental-focused buyer or someone who simply does not need a large compound, 150sqm can be enough. The compromise is that you should expect less private outdoor space and fewer options to expand the building later. If a large garden, multiple-car parking arrangement or significant future extension is part of your plan, a compact plot may feel restrictive.' },
				{ type: 'subheading', text: 'Current Hutu Exclusive 150sqm examples' },
				{ type: 'paragraph', text: `September 2026 published land prices include ${formatNaira(prices.phase12['150sqm'])} in Phase 1 & 2, ${formatNaira(prices.phase3['150sqm'])} in Phase 3 and ${formatNaira(prices.phase5['150sqm'])} in Phase 5. These are phase-specific prices, not a single estate-wide 150sqm price.` },
			],
		},
		{
			heading: '250sqm: a balanced middle ground for many buyers',
			blocks: [
				{ type: 'paragraph', text: 'For many buyers, 250sqm is where the trade-off starts to feel more comfortable. You have more room to work with than on 150sqm without immediately moving into the cost and maintenance expectations of a much larger plot.' },
				{ type: 'paragraph', text: 'At Hutu Exclusive, the current 250sqm residential prototype is a 4-bedroom semi-detached home. That tells you something important: moving from 150sqm to 250sqm is not simply buying an extra 100 square metres of empty ground. In the estate’s current planning, you are also stepping into a different house category.' },
				{ type: 'paragraph', text: 'That makes 250sqm attractive for someone who wants four bedrooms, a little more privacy, more comfortable parking or outdoor space, but still wants the property to remain manageable. It can also be a sensible point for a family that expects to stay in the home for a long time but does not need the scale of a fully detached house on a much larger plot.' },
				{ type: 'subheading', text: 'Current Hutu Exclusive 250sqm examples' },
				{ type: 'paragraph', text: `September 2026 published land prices include ${formatNaira(prices.phase12['250sqm'])} in Phase 1 & 2, ${formatNaira(prices.phase3['250sqm'])} in Phase 3 and ${formatNaira(prices.phase5['250sqm'])} in Phase 5.` },
			],
		},
		{
			heading: '500sqm: more freedom, but only if you will actually use it',
			blocks: [
				{ type: 'paragraph', text: 'A 500sqm plot gives you considerably more flexibility than 150sqm or 250sqm. Depending on the approved design, that extra land can support a larger detached home, more parking, stronger separation from neighbouring buildings and more room for landscaping, outdoor entertaining or other private uses.' },
				{ type: 'paragraph', text: `In the current Hutu Exclusive materials, 500sqm appears in Phase 3 and Phase 5 and is associated with a 5-bedroom fully detached prototype. Phase 3 currently lists 500sqm at ${formatNaira(prices.phase3['500sqm'])}, while Phase 5 lists 500sqm at ${formatNaira(prices.phase5['500sqm'])}.` },
				{ type: 'paragraph', text: 'The important question is whether the extra size solves a real need for you. A large plot is valuable when your plan genuinely requires space. But if you intend to build a compact home and leave most of the land unused, you may be committing significantly more money to the purchase without getting the lifestyle benefit you expected.' },
			],
		},
		{
			heading: 'The same plot size can cost very differently by phase',
			blocks: [
				{ type: 'paragraph', text: 'One reason I do not advise buyers to choose a size before looking at the phase is that the price can change dramatically even when the square metres stay the same. At Hutu Exclusive, 150sqm and 250sqm are currently available across Phase 1 & 2, Phase 3 and Phase 5, while 500sqm appears in Phase 3 and Phase 5.' },
				{
					type: 'table',
					label: 'Current Hutu Exclusive plot-size prices by phase',
					headers: ['Plot size', 'Phase 1 & 2', 'Phase 3', 'Phase 5'],
					rows: [
						['150sqm', formatNaira(prices.phase12['150sqm']), formatNaira(prices.phase3['150sqm']), formatNaira(prices.phase5['150sqm'])],
						['250sqm', formatNaira(prices.phase12['250sqm']), formatNaira(prices.phase3['250sqm']), formatNaira(prices.phase5['250sqm'])],
						['500sqm', 'Not currently listed', formatNaira(prices.phase3['500sqm']), formatNaira(prices.phase5['500sqm'])],
					],
				},
				{
					type: 'richParagraph',
					parts: [
						'For the full current breakdown across all available property sizes and types, see my ',
						{ text: 'Hutu Exclusive Price List 2026', to: '/articles/hutu-exclusive-price-list-2026' },
						'.',
					],
				},
			],
		},
		{
			heading: 'Bigger is not automatically the better investment',
			blocks: [
				{ type: 'paragraph', text: 'Buyers sometimes assume that the biggest plot will always produce the best resale result. I would be careful with that logic. A larger plot gives you more land, but it also asks more from your budget, and the eventual buyer for a larger property may need a much bigger budget too.' },
				{ type: 'paragraph', text: 'A smaller, well-positioned property that is easier to build, maintain, rent or resell can make more sense than a very large plot that stretches the buyer financially. The right decision depends on the market you expect to serve, the home you plan to build and how much capital you can commit without making the rest of the project difficult.' },
				{ type: 'paragraph', text: 'If your priority is simply “own as much land as possible,” that is a different strategy from buying land to build a home efficiently. Be clear about which one you are actually pursuing.' },
			],
		},
		{
			heading: 'The land price is only the first part of the budget',
			blocks: [
				{ type: 'paragraph', text: 'This is where a bigger plot can quietly become expensive. The purchase price is obvious, but what comes next is often where buyers feel the pressure: applicable estate charges, design and approval work, construction, external works, landscaping, furnishing and ongoing maintenance.' },
				{ type: 'paragraph', text: 'At Hutu Exclusive, land purchases also have applicable development levy and infrastructure fees, together with a ₦10,000 form fee. Because the exact development and infrastructure amounts can depend on the property, request the complete breakdown for the option you are considering before you pay.' },
				{ type: 'paragraph', text: 'The house itself matters just as much as the land. If the larger plot pushes you toward a bigger prototype, your construction and finishing budget will usually need to grow with it. Buying 500sqm because you can afford the land but then struggling to fund the intended home is not necessarily a better outcome than buying 250sqm and being able to complete the project comfortably.' },
			],
		},
		{
			heading: 'How I would choose between 150sqm, 250sqm and 500sqm',
			blocks: [
				{ type: 'labeledParagraph', label: 'Start with the home you actually want:', text: 'How many bedrooms do you need? Do you want a terrace, semi-detached or fully detached home? Do you care about a large compound or would you rather keep maintenance simple?' },
				{ type: 'labeledParagraph', label: 'Work backwards from your total budget:', text: 'Do not spend your entire available capital on the land. Think about what you will need for the rest of the purchase and, if you plan to build, for construction and finishing.' },
				{ type: 'labeledParagraph', label: 'Think about parking and outdoor space:', text: 'If multiple cars, a garden, children’s play space or outdoor entertaining matters to you, a larger plot may be worth the extra cost.' },
				{ type: 'labeledParagraph', label: 'Be realistic about maintenance:', text: 'More space can mean more landscaping, cleaning, security, external works and maintenance. Make sure you actually want the responsibility that comes with it.' },
				{ type: 'labeledParagraph', label: 'Compare the phase, not just the size:', text: 'The same size can sit at a very different price point depending on the Hutu Exclusive phase. Your budget may buy 150sqm in one phase and 250sqm or more in another.' },
				{
					type: 'richParagraph',
					parts: [
						{ text: 'Inspect before deciding:', to: '/inspection' },
						' Seeing the estate and the actual phase can change how you think about plot size. A number on a brochure is not the same as standing on site and understanding the environment around the property.',
					],
				},
			],
		},
		{
			heading: 'The best size for you may depend on the phase',
			blocks: [
				{
					type: 'richParagraph',
					parts: [
						'If your budget is fixed, phase selection can matter as much as plot size. ',
						{ text: 'Phase 5', to: '/residential/phase-5' },
						' currently has the lowest published entry prices, ',
						{ text: 'Phase 3', to: '/articles/hutu-exclusive-phase-3' },
						' offers a broad range of residential plot sizes and payment options, while ',
						{ text: 'Phase 1 & 2', to: '/residential/phase-1-2' },
						' sits at a higher current land price and also includes a wider mix of developed residential and apartment products.',
					],
				},
				{
					type: 'richParagraph',
					parts: [
						'For a direct side-by-side comparison, read ',
						{ text: 'Hutu Exclusive Phase 1 & 2 vs Phase 3 vs Phase 5: Which One Fits Your Budget and Timeline?', to: '/articles/hutu-exclusive-phase-comparison' },
						'.',
					],
				},
				{ type: 'cta', eyebrow: 'Compare Hutu Exclusive phases side by side', label: 'Compare Hutu Exclusive Phases', to: '/articles/hutu-exclusive-phase-comparison' },
			],
		},
		{
			heading: 'A quick way to narrow it down',
			blocks: [
				{
					type: 'table',
					label: 'A quick way to narrow down your plot size',
					headers: ['If this sounds like you…', 'Start by looking at…'],
					rows: [
						['I want the lowest practical entry point and a compact home.', '150sqm'],
						['I want four bedrooms and a more balanced amount of external space.', '250sqm'],
						['I want a larger fully detached home and more privacy or outdoor space.', '500sqm'],
						['I am not sure what my money can buy across the phases.', 'Use the Budget Matcher before choosing the plot size.'],
						['I am choosing mainly from a brochure and have not seen the estate.', 'Inspect first, then make the size decision.'],
					],
				},
				{ type: 'cta', eyebrow: 'Not sure which plot size fits your budget?', label: 'Find What Fits My Budget', to: '/#budget-matcher' },
				{
					type: 'richParagraph',
					parts: [
						'If you are still at the wider decision stage, my ',
						{ text: 'Is Hutu Exclusive Right for You? 10 Things to Consider Before Buying', to: '/articles/is-hutu-exclusive-right-for-you' },
						' guide may be a better place to start before choosing a plot size.',
					],
				},
			],
		},
		{
			heading: 'Frequently asked questions',
			blocks: [
				{
					type: 'faq',
					items: [
						{ q: 'Is 150sqm enough to build a house?', a: 'It can be, depending on the approved design and estate planning rules. At Hutu Exclusive, the current 150sqm residential prototype is a 3-bedroom terrace home.' },
						{ q: 'What can fit on 250sqm at Hutu Exclusive?', a: 'The current Hutu Exclusive 250sqm prototype is a 4-bedroom semi-detached home. The exact usable space and layout depend on the approved prototype and planning requirements.' },
						{ q: 'What can fit on 500sqm at Hutu Exclusive?', a: 'Current Phase 3 and Phase 5 materials associate 500sqm with a 5-bedroom fully detached prototype.' },
						{ q: 'Is 500sqm always better than 250sqm?', a: 'No. It gives you more space, but it also requires more money for the land and often for the scale of home, external works and ongoing maintenance. The better option is the one that fits your actual plan and total budget.' },
						{ q: 'Which Hutu Exclusive phase has the cheapest 150sqm and 250sqm land?', a: 'Based on the September 2026 published prices, Phase 5 currently has the lowest listed price for both 150sqm and 250sqm among Phase 1 & 2, Phase 3 and Phase 5.' },
						{ q: 'Should I choose the plot size before choosing the phase?', a: 'Usually, compare them together. The same plot size can cost very differently by phase, so your budget may give you more space in one phase than another.' },
						{ q: 'Can I inspect Hutu Exclusive before deciding on a plot size?', a: 'Yes. A physical inspection can help you understand the estate, the phase and how the property options feel in real life. A virtual inspection can also be arranged if you are outside Abuja.' },
					],
				},
			],
		},
		{
			heading: 'Still deciding how much land you actually need?',
			blocks: [
				{ type: 'paragraph', text: 'Tell me your budget, the kind of home you want and what matters most to you — bedrooms, privacy, outdoor space, payment timeline or simply getting the best fit for your money. I can help you compare the available sizes and phases without pushing you toward a bigger property than you need.' },
			],
		},
	],
	authorBio: 'Amaka Okorie is a Hutu Exclusive Property Advisor based in Abuja. Since the estate launched in 2024, she has helped more than 20 clients navigate Hutu Exclusive and handled more than ₦500M in Hutu Exclusive property sales. Her focus is clear information, honest guidance and personal follow-through before and after payment.',
	whatsAppMessage: 'Hi Amaka, I’ve just read your 150sqm vs 250sqm vs 500sqm guide and I’d like help choosing the right plot size for my budget and plans.',
	finalCta: {
		title: 'Still Deciding Which Plot Size Fits You?',
		copy: 'Tell me your budget, what you want to build or buy and how you plan to use the property. I can help you compare plot sizes and current Hutu Exclusive options.',
		buttons: [
			{ label: 'Chat With Me on WhatsApp', kind: 'whatsapp' },
			{ label: 'Find What Fits My Budget', to: '/#budget-matcher', kind: 'internal' },
		],
	},
	relatedArticles: [
		'hutu-exclusive-price-list-2026',
		'hutu-exclusive-phase-comparison',
		'is-hutu-exclusive-right-for-you',
	],
};
