import { PRICE_LIST_ARTICLE } from '@/data/priceListArticle';
import { LOCATION_ARTICLE } from '@/data/locationArticle';
import { PHASE3_ARTICLE } from '@/data/phase3Article';
import { COMPARISON_ARTICLE } from '@/data/comparisonArticle';
import { DEVELOPER_ARTICLE } from '@/data/developerArticle';
import { GOLF_RESORT_ARTICLE } from '@/data/golfResortArticle';
import { PHASE_COMPARISON_ARTICLE } from '@/data/phaseComparisonArticle';
import { BUYER_DECISION_ARTICLE } from '@/data/buyerDecisionArticle';
import { PLOT_SIZE_ARTICLE } from '@/data/plotSizeArticle';
import { MASTER_PLANNED_ESTATE_ARTICLE } from '@/data/masterPlannedEstateArticle';
import { AIRPORT_ROAD_ARTICLE } from '@/data/airportRoadArticle';
import { DIASPORA_ARTICLE } from '@/data/diasporaArticle';
import { ABUJA_DIASPORA_MISTAKES_ARTICLE } from '@/data/abujaDiasporaMistakesArticle';

export const IMAGES = {
	phase12: 'https://images.hostinger.com/27364524-3a5a-4c3b-803e-3ef2dacc2f86.png',
	phase3: 'https://images.hostinger.com/45ec2a16-b790-4cb7-9bef-bb6c8baa0a74.png',
	phase5: 'https://images.hostinger.com/7fda9ec1-54a6-47df-911d-a4f6eaef1fd8.png',
	commercial: 'https://images.hostinger.com/3ac0bd8a-42f7-40c9-a543-63ba4d34e330.png',
};

export const HERO_SLIDES = [
	{
		src: '/images/hero/hutu-entrance-portrait.jpg',
		alt: 'A visitor standing at the Hutu Exclusive estate entrance',
		position: 'center',
	},
	{
		src: '/images/hero/hutu-entrance-man-car.jpg',
		alt: 'A man standing beside a white car at the Hutu Exclusive estate entrance in Abuja',
		position: '42% center',
	},
	{
		src: '/images/hero/hutu-golf-sign.jpg',
		alt: 'Golfers in front of the Hutu Exclusive estate sign',
		position: 'center',
	},
	{
		src: '/images/hero/hutu-golf-club.jpg',
		alt: 'A golf club and ball at the Hutu Exclusive recreational grounds',
		position: 'center',
	},
	{
		src: '/images/hero/hutu-site-team.jpg',
		alt: 'A site inspection team on the sports grounds at Hutu Exclusive',
		position: 'center',
	},
	{
		src: '/images/hero/hutu-sports-facility.jpg',
		alt: 'The fenced sports facility and spectator seats at Hutu Exclusive',
		position: 'center',
	},
];

export const PHASES = [
	{
		slug: 'phase-1-2',
		name: 'Phase 1 & 2',
		short: 'Land and house options in the established phases',
		status: 'Residential inventory',
		image: IMAGES.phase12,
		type: 'Residential',
		overview:
			'Phases 1 and 2 are the most developed parts of Hutu Exclusive. Internal roads are paved, drainage is in place, and many buyers have already started building. If you want to join a neighbourhood that is already taking shape — and see exactly what you are paying for — this is where to start.',
		highlights: [
			'Paved internal roads and drainage already in place',
			'Occupied and under-construction homes around you',
			'Perimeter fencing and gated access',
			'Immediate allocation on completed payments',
		],
	},
	{
		slug: 'phase-3',
		name: 'Phase 3',
		short: 'Land and house options across multiple prototypes',
		status: 'Residential inventory',
		image: IMAGES.phase3,
		type: 'Residential',
		overview:
			'Phase 3 is the current focus of development work. Roads are being graded and surfaced, and plots come clearly beaconed with survey documentation. Prices sit below Phase 1 & 2 for comparable sizes, which is why most first-time buyers at Hutu Exclusive start here.',
		highlights: [
			'Clearly beaconed plots with individual survey plans',
			'Road and drainage works in progress',
			'Lower entry price than Phase 1 & 2 for similar sizes',
			'Property-specific payment plans are published with each listing',
		],
	},
	{
		slug: 'phase-5',
		name: 'Phase 5',
		short: 'Land and site-and-service options only',
		status: 'Residential land inventory',
		image: IMAGES.phase5,
		type: 'Residential',
		overview:
			'Phase 5 is the newest release at Hutu Exclusive and carries the lowest entry prices. Development work is at an earlier stage, so it suits buyers with a longer horizon — land banking, future building, or securing a position before prices move with infrastructure.',
		highlights: [
			'Lowest entry prices in the estate',
			'Early-bird rates that step up as infrastructure lands',
			'Suited to land banking and medium-term plans',
			'Payment plans up to 18 months',
		],
	},
];

export const COMMERCIAL = {
	name: 'Commercial',
	short: 'Shopping mall space in Phase 1 & 2',
	status: 'Commercial inventory',
	image: IMAGES.commercial,
	overview:
		'The authoritative September 2026 inventory lists Hutu Exclusive Shopping Mall space in Phase 1 & 2. Pricing is published per square metre for each floor, with a minimum space requirement.',
	highlights: [
		'Floor-specific pricing per square metre',
		'Minimum purchasable space stated in the property record',
		'Payment-plan duration published in the property record',
		'Deposit details available on request',
	],
};

export const FAQS = [
	{
		q: 'What documents do I receive when I buy?',
		a: 'Every purchase comes with a contract of sale, a payment receipt for each instalment, and — on completion — a deed of assignment, registered survey plan and allocation letter. The estate title is available for independent verification before you pay anything, and we encourage buyers to involve their own lawyer.',
	},
	{
		q: 'Are there charges beyond the listed price?',
		a: 'Yes, and we list them before you commit: documentation (deed and contract), survey plan, and a development levy that funds roads, drainage and electrification. The exact figures depend on the phase and plot size — your advisor will give you a full cost sheet in writing before your first payment.',
	},
	{
		q: 'How does plot allocation work?',
		a: 'Allocation happens after you complete your payment plan (or earlier where a phase allows it). You receive an allocation letter with your plot number, then a physical allocation exercise on site where your beacons are shown to you. You can visit and verify your exact plot before final documentation.',
	},
	{
		q: 'Can I start building immediately?',
		a: 'In Phase 1 & 2, yes — once you are allocated, you can begin as soon as your building plan is approved and you follow the estate’s building guidelines (setbacks, fence heights and approved house types). In Phases 3 and 5, building follows the development timetable for roads and drainage.',
	},
	{
		q: 'I live abroad. Can I buy from the diaspora?',
		a: 'Yes — a large share of our buyers live outside Nigeria. The whole process can be handled remotely: virtual inspections over video call, documents sent for review before payment, payments through official company accounts only, and the option to nominate a representative with a power of attorney for physical allocation.',
	},
	{
		q: 'What happens after I complete payment?',
		a: 'Three things, in order: your final documentation is prepared (deed of assignment and registered survey), you receive your allocation letter, and a date is set for physical allocation on site. From there you can fence your plot, apply for building approval, or hold — the choice is yours.',
	},
];

export const UPDATES = [
	{
		slug: 'phase-3-internal-roads-progress',
		date: 'February 2026',
		category: 'Development',
		phase: 'Phase 3',
		status: 'Work in progress',
		metric: '70%',
		metricLabel: 'Internal roads completed',
		title: 'Phase 3 internal roads reach 70% completion',
		excerpt:
			'Grading and compaction are finished on the main spine roads, with surface dressing under way. Drainage lines on Streets 1–4 are complete.',
		image: HERO_SLIDES[5].src,
		imageCaption: 'Estate context image. Request the latest dated Phase 3 road photographs before relying on this report.',
		content: 'As at February 2026, grading and compaction on the Phase 3 main spine roads were complete. Surface dressing was under way, and drainage lines on Streets 1–4 were complete. This is a dated record, not a statement of current completion.',
		buyerImpact: 'The main access network is taking shape, making it easier to assess how individual plots connect to the rest of Phase 3.',
		nextStep: 'Complete surface dressing on the main spine roads',
		highlights: [
			'Main spine road grading and compaction completed',
			'Surface dressing under way at the reporting date',
			'Drainage completed on Streets 1–4',
		],
		relatedPhase: 'phase-3',
		relatedProperty: null,
	},
	{
		slug: 'phase-2-terrace-construction-progress',
		date: 'January 2026',
		category: 'Construction',
		phase: 'Phase 2',
		status: 'Milestone recorded',
		metric: 'Roofed',
		metricLabel: 'First terrace block',
		title: 'First terrace block roofs off in Phase 2',
		excerpt:
			'The first block of 3-bedroom terraces has been roofed, with plastering and window installation next. Buyers on the terrace plan received photo updates.',
		image: HERO_SLIDES[3].src,
		imageCaption: 'Estate context image. Ask for current dated photographs of the Phase 2 terrace block.',
		content: 'As at January 2026, the first block of three-bedroom terraces had reached roof level. Plastering and window installation were identified as the next activities, and buyers on the terrace plan received progress photographs. Current construction status should be confirmed directly.',
		buyerImpact: 'The first terrace block has moved beyond structural work and into the sequence of finishing-stage activities.',
		nextStep: 'Plastering and window installation',
		highlights: [
			'First three-bedroom terrace block reached roof level',
			'Plastering identified as a next activity',
			'Window installation identified as a next activity',
		],
		relatedPhase: 'phase-1-2',
		relatedProperty: 'p12-house-3bed-terrace',
	},
	{
		slug: 'phase-5-early-bird-pricing-update',
		date: 'January 2026',
		category: 'Availability',
		phase: 'Phase 5',
		status: 'Reconfirm before payment',
		metric: 'Extended',
		metricLabel: 'Early-bird pricing period',
		title: 'Phase 5 early-bird pricing extended',
		excerpt:
			'Early-bird rates on 300 and 500 sqm plots in Phase 5 have been extended while the access road works continue. Prices step up when the road is completed.',
		image: HERO_SLIDES[1].src,
		imageCaption: 'Hutu Exclusive estate context image. Pricing must be confirmed against a current written cost sheet.',
		content: 'As at January 2026, early-bird rates for 300 and 500 sqm Phase 5 plots remained available while access-road work continued. The stated pricing was expected to change when the road was completed. Because prices and availability can move, buyers should request a current written cost sheet before paying.',
		buyerImpact: 'Buyers still had access to the lower entry window at the reporting date, but the applicable rate must be reconfirmed in writing.',
		nextStep: 'Access-road work and a pricing review',
		highlights: [
			'Early-bird rates covered 300 and 500 sqm plots',
			'Access-road work remained in progress',
			'Current price and availability require written confirmation',
		],
		relatedPhase: 'phase-5',
		relatedProperty: 'p5-land-500-5bed-full',
	},
];

export const ARTICLES = [
	ABUJA_DIASPORA_MISTAKES_ARTICLE,
	DIASPORA_ARTICLE,
	BUYER_DECISION_ARTICLE,
	PHASE_COMPARISON_ARTICLE,
	PRICE_LIST_ARTICLE,
	LOCATION_ARTICLE,
	PHASE3_ARTICLE,
	COMPARISON_ARTICLE,
	DEVELOPER_ARTICLE,
	GOLF_RESORT_ARTICLE,
	AIRPORT_ROAD_ARTICLE,
	PLOT_SIZE_ARTICLE,
	MASTER_PLANNED_ESTATE_ARTICLE,
	{
		slug: 'what-to-consider-before-buying-property-off-plan-abuja',
		category: 'Due Diligence',
		author: 'Amaka Okorie',
		authorTitle: 'Hutu Exclusive Property Advisor',
		authorPath: '/about/meet-your-advisor',
		authorImage: '/images/advisor/amaka-okorie.png',
		publishDate: 'September 2026',
		updatedDate: 'September 2026',
		dateLabel: 'Updated',
		calculateReadingTimeFromContent: true,
		hideSectionCounters: true,
		featuredImage: '/images/articles/off-plan-property-abuja-development.jpg',
		featuredAlt: 'Off-plan residential property development in Abuja',
		featuredCaption: 'An Abuja residential development during active construction, illustrating the difference between current site progress and future delivery.',
		cardCta: 'Read Article',
		title: 'What to Consider Before Buying Property Off-Plan in Abuja',
		summary: 'Buying property off-plan in Abuja? Learn what to check before paying, including the developer, land title, approvals, contract, site progress, payment plan and handover.',
		seoTitle: 'What to Consider Before Buying Property Off-Plan in Abuja',
		metaDescription: 'Buying property off-plan in Abuja? Learn what to check before paying, including the developer, land title, approvals, contract, site progress, payment plan and handover.',
		quickAnswerPosition: 'after-introduction',
		quickAnswerLabel: 'The simplest way to think about off-plan property',
		quickAnswer: 'When you buy a completed property, you can inspect most of what you are paying for. When you buy off-plan, you also have to evaluate the developer’s ability to deliver what does not yet exist. Your due diligence therefore needs to cover both the property and the delivery process.',
		introduction: [
			'Buying property off-plan in Abuja means paying for a property before everything you expect to receive is physically complete. That can create an opportunity to enter a development earlier, spread payments over time or choose from a wider range of units and plots. It also means part of your decision depends on what is expected to happen in the future, not only on what you can see today.',
			'That is where buyers can get into trouble. A beautiful render is not a construction update. A registered company is not the same thing as verified land. A payment plan is not automatically affordable just because the first deposit looks manageable. And a promised completion date is only useful if you understand what the contract says, what has already been delivered and what happens if the timeline changes.',
			'I do not think off-plan property should be treated as something to fear. I think it should be treated as a purchase that needs more questions before payment because you are buying both a property and a delivery process.',
			'In this guide, I’ll explain the checks I would make before buying property off-plan in Abuja, the official records and professional verification that can help, what to look for on site, how to think about payment schedules and what should be clear before you commit.',
		],
		body: [
			{
				heading: 'What does buying off-plan mean?',
				blocks: [
					{ type: 'paragraph', text: 'An off-plan property is sold before the property, infrastructure or wider development is fully completed. Depending on the project, you may be buying a house under construction, an apartment before completion, a prototype that will be built later, or land inside an estate whose roads and infrastructure are still being delivered.' },
					{ type: 'paragraph', text: 'Off-plan does not always mean that nothing exists on site. Large Abuja developments are often delivered in phases, so one part of an estate may have visible roads, construction or occupied homes while another phase is still at an earlier stage.' },
					{ type: 'paragraph', text: 'That is why the phrase “off-plan” is less useful than a more specific question: what exactly exists today, what exactly am I paying for, and what is still expected to be delivered?' },
				],
			},
			{
				heading: 'Why buyers consider off-plan property in Abuja',
				blocks: [
					{
						type: 'table',
						label: 'Why buyers consider off-plan property in Abuja',
						headers: ['Potential advantage', 'Why buyers like it', 'What still needs checking'],
						rows: [
							['Earlier entry', 'The buyer may enter before the project is fully built out', 'Whether the current price reflects the stage and risk'],
							['Payment plans', 'The purchase can sometimes be spread across several months', 'Whether the full schedule fits your cash flow'],
							['More choice', 'Earlier buyers may have more options in unit, plot or phase', 'Whether the exact option is confirmed in writing'],
							['New infrastructure', 'The buyer may benefit from a development as roads and services are delivered', 'What exists today versus what remains planned'],
							['Future use', 'A buyer may purchase now for a later move, build or return to Abuja', 'Whether the delivery timeline fits that future plan'],
						],
					},
					{ type: 'paragraph', text: 'None of these advantages is guaranteed. The point is that off-plan can be useful when the project, documentation, payment plan and delivery timeline make sense for the buyer.' },
				],
			},
			{
				heading: '1. Be clear about what you are actually buying',
				blocks: [
					{ type: 'lead', text: 'Do not start with the brochure. Start with the exact property.' },
					{ type: 'paragraph', text: 'Ask whether you are buying land, a prototype, a completed unit, a unit still under construction or a property that will be delivered later. Confirm the size, phase, property type and specifications that apply to your transaction.' },
					{ type: 'paragraph', text: 'For a house or apartment, ask what is included in the purchase price and what the finished unit is expected to contain. For land, ask what development rules, prototype requirements, setbacks or estate guidelines will affect what you can eventually build.' },
					{ type: 'paragraph', text: 'If the answer changes depending on who you ask, you are not ready to pay.' },
				],
			},
			{
				heading: '2. Verify the developer as a company, then look beyond registration',
				blocks: [
					{ type: 'paragraph', text: 'A developer should be independently verifiable as a Nigerian business. The Corporate Affairs Commission maintains Nigeria’s official corporate registry and provides a public company-search service that can help you confirm registration information.' },
					{ type: 'paragraph', text: 'That is a useful first check, but it is not the whole assessment. Registration tells you that the company exists. It does not tell you whether the developer has completed similar projects, whether the current project is on schedule or whether the particular land transaction has been verified.' },
					{ type: 'paragraph', text: 'I would also look at the developer’s active and completed projects, how clearly they communicate current progress and whether the information you receive is consistent across the sales, documentation and site teams.' },
					{
						type: 'richParagraph',
						parts: [
							'You can independently use the ',
							{ text: 'Corporate Affairs Commission company search', to: 'https://www.cac.gov.ng/services/company-search', external: true },
							' to confirm company-registration information.',
						],
					},
					{
						type: 'richParagraph',
						parts: [
							'For Hutu Exclusive specifically, see ',
							{ text: 'Who Developed Hutu Exclusive Abuja? What Buyers Should Know About Mshel Homes', to: '/articles/who-developed-hutu-exclusive-mshel-homes' },
							'.',
						],
					},
				],
			},
			{
				heading: '3. Verify the land and title information, not only the developer',
				blocks: [
					{ type: 'paragraph', text: 'A company can be genuine and the buyer can still need to verify the land or title information attached to the project. These are separate checks.' },
					{ type: 'paragraph', text: 'For property in the Federal Capital Territory, Abuja Geographic Information Systems (AGIS) states that its services include property searches and verification of land records. AGIS also publishes a legal-search process for reviewing relevant title records.' },
					{ type: 'paragraph', text: 'You do not have to become a land-record expert yourself. If the documents are unfamiliar or the transaction is significant, an independent Abuja property lawyer can review the relevant documents, coordinate the appropriate searches and explain what the results mean before you proceed.' },
					{
						type: 'richParagraph',
						parts: [
							'See the official ',
							{ text: 'AGIS services page', to: 'https://agis.fcta.gov.ng/services/', external: true },
							' and ',
							{ text: 'AGIS legal-search information', to: 'https://www.agis.fcta.gov.ng/legal-search/', external: true },
							' for the FCT’s published land-record search services.',
						],
					},
					{ type: 'callout', label: 'Two separate checks', text: 'Company verification asks whether the developer is a verifiable business. Land/title verification asks what the official records and relevant documents say about the property or land. One does not replace the other.' },
				],
			},
			{
				heading: '4. Ask about planning and building approvals that apply to the project',
				blocks: [
					{ type: 'paragraph', text: 'Off-plan property is especially dependent on what the developer is permitted to build. If you are buying a house, apartment or other built product, ask what planning or building approvals apply to the project and what has already been obtained.' },
					{ type: 'paragraph', text: 'The FCT Department of Development Control says its role includes regulating planning, design and construction in line with the Abuja Master Plan, and its published building-plan process requires title and design documentation before development approval.' },
					{ type: 'paragraph', text: 'You do not need to understand every technical drawing. What you need is clarity about whether the product being sold to you is part of an approved development process and whether any material approval is still outstanding.' },
					{
						type: 'richParagraph',
						parts: [
							'You can read more about the FCT’s development-control role on the ',
							{ text: 'Department of Development Control website', to: 'https://dodc.fcta.gov.ng/', external: true },
							'.',
						],
					},
				],
			},
			{
				heading: '5. Separate the current site from the master plan',
				blocks: [
					{ type: 'paragraph', text: 'A master plan tells you what a development is intended to become. It does not tell you what has already been completed.' },
					{ type: 'paragraph', text: 'If an off-plan estate includes future roads, commercial areas, parks, sports facilities, lakes, schools or other amenities, ask which elements are complete, which are under development and which belong to later phases.' },
					{ type: 'paragraph', text: 'This matters because the purchase decision may be influenced by features you will not be able to use immediately. A buyer should be comfortable with the difference between the long-term vision and the current development stage.' },
					{
						type: 'richParagraph',
						parts: [
							'For a practical explanation of this distinction, read ',
							{ text: 'What Makes a Master-Planned Estate Different From a Typical Residential Estate?', to: '/articles/master-planned-estate-vs-typical-residential-estate' },
							'.',
						],
					},
				],
			},
			{
				heading: '6. Read the offer, contract and specifications for what they actually say',
				blocks: [
					{ type: 'paragraph', text: 'Off-plan buyers often spend more time studying the payment plan than the document that explains what is being delivered.' },
					{ type: 'paragraph', text: 'Before you commit, read the offer and contract carefully. Look for the exact property, purchase price, payment dates, specifications, delivery or completion language, allocation terms, obligations on both sides and any clauses dealing with changes or delays.' },
					{ type: 'paragraph', text: 'If something important was promised verbally but does not appear in the documents, ask for clarification before paying. Do not assume a WhatsApp message will automatically carry the same weight as the formal transaction documents.' },
					{ type: 'paragraph', text: 'If you are not comfortable interpreting the contract, have a lawyer review it.' },
				],
			},
			{
				heading: '7. Make sure the entire payment plan fits, not just the deposit',
				blocks: [
					{ type: 'paragraph', text: 'A low starting deposit can make an off-plan property feel affordable even when the later instalments will be difficult to meet.' },
					{ type: 'paragraph', text: 'Before you reserve, map the full schedule against your actual cash flow. Know the deposit, every instalment, the final balance and the dates by which those amounts are due.' },
					{ type: 'paragraph', text: 'Also ask for a complete breakdown of the disclosed costs that sit outside the headline property price. Depending on the project, these may include development, infrastructure, documentation or form-related charges.' },
					{ type: 'paragraph', text: 'The right question is not, “Can I afford the first payment?” It is, “Can I complete this purchase without putting myself under unnecessary pressure?”' },
					{
						type: 'richParagraph',
						parts: [
							'If you are comparing Hutu Exclusive payment options, use the current ',
							{ text: 'Hutu Exclusive Price List 2026', to: '/articles/hutu-exclusive-price-list-2026' },
							' and the existing ',
							{ text: 'Payment Plan Finder', to: '/payment-plans' },
							' on the site rather than relying on old price sheets.',
						],
					},
					{ type: 'cta', eyebrow: 'Considering Hutu Exclusive?', label: 'Find What Fits My Budget', to: '/#budget-matcher' },
				],
			},
			{
				heading: '8. Inspect the site and keep dated evidence of progress',
				image: '/images/articles/hutu-phase-3/featured.jpg',
				imageAlt: 'Current infrastructure in a developing Abuja estate',
				imageCaption: 'Current Hutu Exclusive Phase 3 site context. An inspection should distinguish visible progress from planned future work.',
				blocks: [
					{ type: 'paragraph', text: 'An off-plan purchase still needs a site inspection. You may not be able to inspect a finished house yet, but you can inspect the location, access, phase, roads, neighbouring development and whatever construction or infrastructure exists today.' },
					{ type: 'paragraph', text: 'If you live outside Abuja, a live virtual inspection can provide useful context. Ask to see the route into the estate, the relevant phase and ordinary site conditions, not just the most attractive view.' },
					{ type: 'paragraph', text: 'If development progress matters to your decision, keep dated photos or clips. Comparing evidence over time is more useful than trying to remember what the site looked like several months earlier.' },
					{ type: 'paragraph', text: 'Diaspora buyers can use my Virtual Site Inspections for Hutu Exclusive guide as a practical checklist for what a remote inspection should show.' },
					{ type: 'cta', eyebrow: 'Want to see the development stage for yourself?', label: 'Book a Site Inspection', to: '/inspection' },
				],
			},
			{
				heading: '9. Understand the completion, allocation and handover process',
				blocks: [
					{ type: 'paragraph', text: 'Before paying, ask what milestone actually ends the off-plan period for your property.' },
					{ type: 'paragraph', text: 'For a house or apartment, that may involve construction completion, inspection and handover. For land in a developing estate, the process may involve documentation or layout allocation first, with physical site allocation following as infrastructure and site preparation progress.' },
					{ type: 'paragraph', text: 'Ask what evidence you will receive at each stage and who is responsible for notifying you. If the expected completion or allocation date changes, understand what the contract says and what communication you should expect from the developer.' },
					{ type: 'paragraph', text: 'Do not rely on a vague promise that ‘everything will be ready soon.’ Ask what the next measurable milestone is.' },
				],
			},
			{
				heading: '10. Verify the payment channel and keep your own transaction record',
				blocks: [
					{ type: 'paragraph', text: 'Even a well-researched off-plan purchase can become complicated if payments are poorly documented.' },
					{ type: 'paragraph', text: 'Before transferring money, confirm the official beneficiary details for the transaction. If an account changes unexpectedly, stop and verify the new instruction before paying.' },
					{ type: 'paragraph', text: 'Keep your own records of the offer, contract, payment schedule, transfer evidence, receipts, forms, inspection evidence, allocation documents and important correspondence. If you are paying in instalments, maintain a simple record of what has been paid and what remains.' },
					{ type: 'paragraph', text: 'For Hutu Exclusive purchases through me, property purchase payments go directly through the appropriate Mshel Homes company payment channel. Buyers do not send the purchase price to my personal bank account.' },
					{ type: 'callout', label: 'My rule before an off-plan payment', text: 'You should be able to explain what you are buying, who is developing it, what exists today, what still needs to be delivered, what documents you have reviewed, what the full payment commitment is and what happens next. If one of those answers is still vague, pause there.' },
				],
			},
			{
				heading: 'How I would assess an off-plan development as a buyer',
				blocks: [
					{
						type: 'table',
						label: 'How I would assess an off-plan development as a buyer',
						headers: ['Area', 'Question I would ask'],
						rows: [
							['Property', 'Do I know exactly what is being sold and what specifications or development rules apply?'],
							['Developer', 'Is the company verifiable, and does its track record make sense for a project of this type?'],
							['Land/title', 'Have the relevant documents and official records been reviewed at the level appropriate for the transaction?'],
							['Approvals', 'Are the planning/building approvals relevant to the product clear?'],
							['Site', 'What can I physically see today?'],
							['Master plan', 'Which features belong to the future rather than the present?'],
							['Money', 'Can I comfortably complete the entire payment schedule and disclosed charges?'],
							['Timeline', 'Does the expected delivery or allocation timeline fit why I am buying?'],
							['Contract', 'Do the formal documents match the important promises I have been given?'],
							['After payment', 'Do I know what document, milestone or follow-up comes next?'],
						],
					},
				],
			},
			{
				heading: 'Who off-plan property may suit',
				blocks: [
					{ type: 'paragraph', text: 'Off-plan can make sense for a buyer who understands the development stage and is comfortable waiting for delivery, who values a structured payment plan or who is buying for a future need rather than immediate occupation.' },
					{ type: 'paragraph', text: 'It can also suit a buyer who is willing to follow progress and keep proper records rather than treating the purchase as something to forget about after the first payment.' },
					{ type: 'paragraph', text: 'The key is that the buyer’s timeline should match the project’s reality.' },
				],
			},
			{
				heading: 'Who should think twice before buying off-plan',
				blocks: [
					{ type: 'paragraph', text: 'If you need a home you can occupy immediately, an early-stage off-plan property may not fit your situation.' },
					{ type: 'paragraph', text: 'You should also think carefully if the payment plan stretches your finances, if you are uncomfortable with construction or infrastructure timelines, if important documents remain unclear or if you are relying mainly on promised appreciation to justify the purchase.' },
					{ type: 'paragraph', text: 'There is nothing wrong with choosing a more completed property if certainty and immediate use matter more to you than entering earlier.' },
				],
			},
			{
				heading: 'Questions to answer before you pay for any off-plan property in Abuja',
				blocks: [
					{
						type: 'list',
						items: [
							'What exact property am I buying?',
							'What exists on site today?',
							'Who is the developer and have I independently verified the company?',
							'What documents and title information have I reviewed?',
							'Do I need an independent legal/title search?',
							'What planning or building approvals apply to the project?',
							'What parts of the master plan are complete, under development or still planned?',
							'What exactly does the contract say will be delivered?',
							'What is the full payment schedule?',
							'What additional disclosed charges apply?',
							'What happens if the expected timeline changes?',
							'What type of allocation or handover should I expect?',
							'What official account or company payment channel am I using?',
							'What document or acknowledgement should I receive after payment?',
						],
					},
					{
						type: 'richParagraph',
						parts: [
							'If Hutu Exclusive is the off-plan development you are considering, use ',
							{ text: 'Is Hutu Exclusive Right for You? 10 Things to Consider Before Buying', to: '/articles/is-hutu-exclusive-right-for-you' },
							' and the ',
							{ text: 'phase comparison guide', to: '/articles/hutu-exclusive-phase-comparison' },
							' to narrow the decision further.',
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
							{ q: 'Is buying off-plan property in Abuja safe?', a: 'It can be a legitimate way to buy property, but safety depends on the specific transaction. Verify the developer, land/title information, approvals relevant to the project, contract, payment channel and current site condition before paying.' },
							{ q: 'What documents should I check before buying off-plan in Abuja?', a: 'The exact documents depend on the property and development. Ask for the documents relevant to the land/property and transaction, then have a qualified property lawyer review them if you are unsure what they mean or what official searches are appropriate.' },
							{ q: 'How can I verify an Abuja property developer?', a: 'You can use the Corporate Affairs Commission company search to verify registration information. You should then separately assess the developer’s project record and verify the land/property itself.' },
							{ q: 'Can I verify Abuja land records?', a: 'AGIS states that its FCT services include property searches and verification of land records. An independent lawyer can help conduct or coordinate the appropriate search and explain the result.' },
							{ q: 'Should I buy off-plan because it is cheaper?', a: 'Not on price alone. A lower entry price can be attractive, but you should also consider development stage, payment schedule, delivery timeline, documentation and whether the property fits your actual goal.' },
							{ q: 'What if the project takes longer than expected?', a: 'Read the contract before paying so you understand the delivery language, any provisions dealing with delay and what communication or remedies apply. Ask for updated progress evidence rather than relying only on the original timeline.' },
							{ q: 'Do I still need a site inspection if the property is off-plan?', a: 'Yes. Even if the final property is not complete, an inspection can show the location, access, phase, current infrastructure, neighbouring development and actual progress.' },
							{ q: 'Can I buy an off-plan property in Abuja from abroad?', a: 'Yes, but distance makes evidence and verification even more important. Use current virtual site evidence, review the relevant documents, verify the payment channel and keep your own complete transaction records.' },
						],
					},
				],
			},
			{
				heading: 'Off-plan should mean informed waiting, not blind waiting',
				blocks: [
					{ type: 'paragraph', text: 'Buying off-plan means accepting that part of what you are paying for will be delivered later. That does not mean you have to make the decision blindly.' },
					{ type: 'paragraph', text: 'You can verify the company, review the land/title information, understand the approval and contract position, inspect current site conditions, calculate the complete payment commitment and keep track of the milestones that matter to your property.' },
					{ type: 'paragraph', text: 'If you are considering Hutu Exclusive, I can help you compare the current phases and property options, arrange an inspection and explain what is visible today so you can decide whether the development stage fits your budget and timeline.' },
				],
			},
		],
		authorBio: 'Amaka Okorie is a Hutu Exclusive Property Advisor based in Abuja. Since Hutu Exclusive launched in 2024, she has helped more than 20 clients navigate the estate and handled more than ₦500 million in Hutu Exclusive property sales. Her work includes property comparisons, physical and virtual inspections, documentation and allocation follow-up for local and diaspora buyers. HutuExclusive.com is independently operated and is not the official Mshel Homes website; property purchase payments go directly to the developer through the appropriate company payment channels.',
		whatsAppMessage: 'Hi Amaka, I’m considering an off-plan property in Abuja and Hutu Exclusive is one of my options. I’d like help understanding the current phase, property options and development stage.',
		advisoryPanel: {
			heading: 'Considering an off-plan property?',
			copy: 'Tell me what you are looking at, your budget and your timeline. If Hutu Exclusive is one of your options, I can help you compare the current phase, property type, payment plan and what is visible on site today.',
			label: 'Talk to Amaka',
			hideExtraLinks: true,
		},
		finalCta: {
			title: 'Considering an Off-Plan Property in Abuja?',
			copy: 'If Hutu Exclusive is one of the developments you are considering, tell me your budget, the property type you want and your timeline. I can help you compare the current options, show you what is visible on site today and explain the next steps before you decide.',
			buttons: [
				{ label: 'Talk to Amaka', kind: 'whatsapp' },
				{ label: 'Book a Site Inspection', to: '/inspection', kind: 'internal' },
			],
		},
		relatedArticles: [
			'is-hutu-exclusive-right-for-you',
			'hutu-exclusive-phase-comparison',
			'master-planned-estate-vs-typical-residential-estate',
		],
	}
];

export const GUIDES = [
	{
		slug: 'how-to-buy-at-hutu-exclusive-abuja',
		title: 'How to Buy at Hutu Exclusive, Step by Step',
		minutes: 6,
		excerpt:
			'From first enquiry to physical allocation — the exact sequence, what you sign at each stage, and what you should never skip.',
	},
	{
		slug: 'understanding-hutu-exclusive-payment-plans',
		title: 'Payment Plans Explained: Deposits, Durations and Milestones',
		minutes: 5,
		excerpt:
			'How instalment plans are structured, what counts as a default, and how to pick a duration you can actually sustain.',
	},
	{
		slug: 'buying-hutu-exclusive-from-abroad',
		title: 'Buying from the Diaspora: A Practical Guide',
		minutes: 7,
		excerpt:
			'Virtual inspections, safe payment channels, power of attorney, and how to verify everything without being in Nigeria.',
	},
	{
		slug: 'choosing-between-hutu-phases',
		title: 'How to Choose Between Phase 1 & 2, Phase 3 and Phase 5',
		minutes: 5,
		excerpt:
			'Compare development stages, infrastructure progress, price points, and intended timelines across each residential phase.',
	},
	{
		slug: 'understanding-plot-sizes-and-prototypes',
		title: 'Plot Sizes and Prototypes: What You Can Build',
		minutes: 6,
		excerpt:
			'How 150sqm, 250sqm, 350sqm and 500sqm plots translate into actual building footprints, setbacks, bedrooms and parking spaces.',
	},
	{
		slug: 'preparing-for-site-inspection',
		title: 'How to Prepare for a Hutu Exclusive Site Inspection',
		minutes: 4,
		excerpt:
			'What to observe, what questions to ask, and how to verify topography, beacons, and road access during your physical site visit.',
	},
];

export const NAV_LINKS = [
	{
		label: 'Properties',
		children: [
			{
				label: 'Residential',
				children: [
					{ label: 'Phase 1 & 2', to: '/residential/phase-1-2' },
					{ label: 'Phase 3', to: '/residential/phase-3' },
					{ label: 'Phase 5', to: '/residential/phase-5' },
				],
			},
		],
	},
	{
		label: 'About',
		children: [
			{ label: 'Hutu Exclusive Overview', to: '/about/hutu-exclusive' },
			{ label: 'Meet the Developer', to: '/about/meet-the-developer' },
			{ label: 'Meet Your Advisor', to: '/about/meet-your-advisor' },
		],
	},
	{
		label: 'Buyer Resources',
		children: [
			{ label: 'How to Buy', to: '/buying-guides/how-to-buy-at-hutu-exclusive-abuja' },
			{ label: 'Buying Guides', to: '/buying-guides' },
			{ label: 'Buying from Abroad', to: '/buying-guides/buying-hutu-exclusive-from-abroad' },
		],
	},
	{ label: 'Articles', to: '/articles' },
	{ label: 'Book Inspection', to: '/inspection' },
];
