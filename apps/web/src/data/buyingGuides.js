import { IMAGES, HERO_SLIDES } from './site';

export const BUYING_GUIDES = [
	{
		slug: 'how-to-buy-at-hutu-exclusive-abuja',
		title: 'How to Buy at Hutu Exclusive Abuja, Step by Step',
		category: 'Getting Started',
		readTimeMinutes: 6,
		lastUpdated: 'September 2026',
		featuredImage: HERO_SLIDES[4].src,
		summary: 'A clear step-by-step roadmap from choosing your phase to site inspection, title review, official payment and physical allocation.',
		seoTitle: 'How to Buy at Hutu Exclusive Abuja | Step-by-Step Buyer Guide',
		metaDescription: 'Step-by-step guide to buying property at Hutu Exclusive Abuja. Learn how to compare phases, inspect on-site, verify documents, pay safely and secure allocation.',
		atAGlance: {
			whoFor: 'First-time and seasoned buyers looking for a transparent, verified path to purchasing residential or commercial property in Hutu Exclusive.',
			whatYouWillLearn: 'The 7 specific milestones required to complete your purchase safely without administrative delays or unexpected fees.',
			whatYouNeed: 'Government ID, intended development timeline, initial deposit readiness, and access to official developer accounts.'
		},
		steps: [
			{
				number: '01',
				title: 'Clarify Your Budget and Timeline',
				paragraphs: [
					'Before browsing individual plots, establish whether you want to build immediately, build within 1 to 2 years, or land-bank for medium-term capital growth.',
					'Calculate both the initial deposit and the sustainable monthly or quarterly instalment you can commit to without straining your personal cash flow.'
				],
				callout: {
					type: 'advisor-tip',
					title: 'Advisor Tip',
					text: 'Phases 1 & 2 suit buyers wanting to start construction right away, whereas Phase 3 and Phase 5 offer longer runway and lower initial capital outlay.'
				}
			},
			{
				number: '02',
				title: 'Compare the Phases and Available Prototypes',
				paragraphs: [
					'Review the current inventory across Phase 1 & 2 (paved roads and active building), Phase 3 (roads graded, drainage progressing), and Phase 5 (early-bird pricing).',
					'Match your home design to approved prototype plots: 150sqm for 3-bedroom terraces, 250sqm for 4-bedroom semi-detached duplexes, or 350sqm to 500sqm for full detached homes.'
				]
			},
			{
				number: '03',
				title: 'Request a Written Cost Sheet Before Committing',
				paragraphs: [
					'Never rely on word-of-mouth quotes. Request an authoritative cost breakdown showing the exact plot price, documentation fee, survey fee, and infrastructure/development levy.',
					'Having these figures documented upfront prevents any surprise charges during allocation.'
				],
				callout: {
					type: 'before-you-pay',
					title: 'Before You Pay',
					text: 'Always ensure your written cost sheet reflects the current promo discounts or anniversary perks before making any financial commitment.'
				}
			},
			{
				number: '04',
				title: 'Inspect the Site (Physical or Live Virtual)',
				paragraphs: [
					'Visit the estate along Airport Road, Lugbe South, Abuja. Walk the specific street, observe the topography, inspect beacon markers, and evaluate internal road connectivity.',
					'If buying from outside Abuja or abroad, request a live video tour with your advisor covering the access gate, spine road, and your chosen sector.'
				]
			},
			{
				number: '05',
				title: 'Review the Title and Contract of Sale',
				paragraphs: [
					'Obtain copies of the estate layout, statutory title documentation (FCDA approved layout / C of O backing), and draft Contract of Sale.',
					'Engage your legal counsel to verify ownership details and terms of allocation.'
				],
				callout: {
					type: 'important',
					title: 'Important',
					text: 'Title verification is standard practice. Hutu Exclusive provides title documentation freely for independent verification prior to deposit.'
				}
			},
			{
				number: '06',
				title: 'Pay Exclusively into Verified Corporate Accounts',
				paragraphs: [
					'Payments must be remitted strictly to verified corporate bank accounts of the master developer, Mshel Homes Limited. Never transfer funds to personal agent or advisor accounts.',
					'Retain your official bank payment confirmation and obtain an official company receipt within 24 to 48 hours.'
				]
			},
			{
				number: '07',
				title: 'Receive Contract, Complete Schedule and Get Allocated',
				paragraphs: [
					'Upon initial payment, sign and receive your official Contract of Sale and Payment Schedule.',
					'Following plan completion (or milestone criteria), your physical plot allocation exercise is conducted on site with beacons confirmed, followed by issuance of your Deed of Assignment and Registered Survey.'
				],
				callout: {
					type: 'good-to-know',
					title: 'Good to Know',
					text: 'Physical allocation gives you confirmed beacon numbers and exact geographic coordinates registered with estate administration.'
				}
			}
		],
		relevantTool: {
			title: 'Find What Fits Your Budget',
			description: 'Match your available deposit and monthly cash flow to available Hutu Exclusive properties across Phase 1 & 2, Phase 3, and Phase 5.',
			to: '/#budget-matcher',
			buttonText: 'Use Budget Matcher'
		},
		relatedQuestions: [
			{
				q: 'What documents do I receive when I buy?',
				a: 'Every purchase comes with a contract of sale, official payment receipts, and on completion, a deed of assignment, registered survey plan, and allocation letter.'
			},
			{
				q: 'Are there charges beyond the listed price?',
				a: 'Yes: documentation, survey, and development levy. Your advisor will provide a written cost sheet itemising all fees before your first payment.'
			},
			{
				q: 'How does plot allocation work?',
				a: 'Allocation happens after you complete your payment plan (or milestone threshold), with a physical site visit to identify your beaconed plot.'
			}
		],
		relatedGuideSlugs: [
			'understanding-hutu-exclusive-payment-plans',
			'choosing-between-hutu-phases',
			'buying-hutu-exclusive-from-abroad'
		]
	},
	{
		slug: 'understanding-hutu-exclusive-payment-plans',
		title: 'Understanding Hutu Exclusive Payment Plans',
		category: 'Payment',
		readTimeMinutes: 5,
		lastUpdated: 'September 2026',
		featuredImage: IMAGES.phase5,
		summary: 'How instalment plans are structured across different phases, what deposits are required, and how to avoid default penalties.',
		seoTitle: 'Hutu Exclusive Payment Plans Explained | Deposits & Schedules',
		metaDescription: 'Complete breakdown of Hutu Exclusive payment plans: outright vs instalment options, deposit minimums, durations from 3 to 18 months, and payment safety.',
		atAGlance: {
			whoFor: 'Buyers planning to spread payments over 3, 6, 12, or 18 months rather than paying outright.',
			whatYouWillLearn: 'How deposit thresholds, instalment timing, and completion milestones affect plot reservation and physical allocation.',
			whatYouNeed: 'Your monthly disposable savings figure and preferred payment duration (outright, 6 months, or 12–18 months).'
		},
		steps: [
			{
				number: '01',
				title: 'Compare Outright vs Instalment Pricing',
				paragraphs: [
					'Outright purchase offers the lowest total cost and immediate allocation qualification once paperwork is processed.',
					'Instalment options spread payments over 3 to 18 months depending on the phase, requiring an initial deposit (typically 20% to 30%) with the balance amortised across agreed milestones.'
				],
				callout: {
					type: 'advisor-tip',
					title: 'Advisor Tip',
					text: 'If your cash flow allows completion within 3 to 6 months, you can often negotiate the most favorable promo discounts or lock in early-bird rates.'
				}
			},
			{
				number: '02',
				title: 'Understand Phase-Specific Payment Durations',
				paragraphs: [
					'Phase 1 & 2 properties offer outright to 12-month payment options due to completed infrastructure and imminent occupancy.',
					'Phase 3 and Phase 5 feature extended payment structures up to 12 and 18 months, making them highly accessible for mid-term planners.'
				]
			},
			{
				number: '03',
				title: 'Review the Default and Grace Period Terms',
				paragraphs: [
					'Every contract specifies grace windows for instalment payments. Discuss expected income cycles with your advisor before signing so your schedule aligns with your salary or business dividends.',
					'Understanding the default protocol gives you peace of mind and ensures you never face unexpected plan restructuring fees.'
				],
				callout: {
					type: 'before-you-pay',
					title: 'Before You Pay',
					text: 'Do not commit to a short 3-month plan if your revenue is back-weighted. Choose a realistic 6 to 12-month timeline to maintain buffer.'
				}
			},
			{
				number: '04',
				title: 'Factor in Anomaly-Free Secondary Levies',
				paragraphs: [
					'A complete payment plan accounts for ancillary charges: documentation, survey registration, and infrastructure levy.',
					'Clarify whether secondary levies can be paid upon final allocation or are integrated into your instalment breakdown.'
				]
			},
			{
				number: '05',
				title: 'Verify Each Receipt and Maintain an Audit Trail',
				paragraphs: [
					'Each instalment must be paid into the official Mshel Homes Limited designated accounts with your unique buyer reference.',
					'Demand and archive stamped payment receipts after every transfer.'
				]
			}
		],
		relevantTool: {
			title: 'Search Available Payment Plans',
			description: 'Filter all Hutu Exclusive properties by budget, phase, and available payment durations with the Payment Plan Finder.',
			to: '/payment-plans',
			buttonText: 'Open Payment Plan Finder'
		},
		relatedQuestions: [
			{
				q: 'What happens if I miss an instalment?',
				a: 'Payment plans feature grace windows and advisors work to restructure schedules before any default clauses are triggered.'
			},
			{
				q: 'Are there charges beyond the listed price?',
				a: 'Yes, documentation, survey, and development levy apply. All figures are provided in writing before your first deposit.'
			}
		],
		relatedGuideSlugs: [
			'how-to-buy-at-hutu-exclusive-abuja',
			'choosing-between-hutu-phases',
			'understanding-plot-sizes-and-prototypes'
		]
	},
	{
		slug: 'buying-hutu-exclusive-from-abroad',
		title: 'Buying at Hutu Exclusive from Outside Nigeria',
		category: 'Buying From Abroad',
		readTimeMinutes: 7,
		lastUpdated: 'September 2026',
		featuredImage: HERO_SLIDES[2].src,
		summary: 'A secure, transparent playbook for diaspora buyers: live virtual walkthroughs, legal representation, official FX transactions, and allocation proxies.',
		seoTitle: 'Buying Hutu Exclusive Abuja Property from the Diaspora | Remote Buyer Guide',
		metaDescription: 'Practical guide for Nigerians in the diaspora buying Hutu Exclusive Abuja. Safe remittance, virtual inspections, legal representation, and remote documentation.',
		atAGlance: {
			whoFor: 'Diaspora investors in the UK, US, Canada, Europe, and Middle East seeking trusted real estate acquisition in Abuja.',
			whatYouWillLearn: 'How to manage site verification, document authentication, foreign exchange remittance, and allocation representation without flying to Nigeria.',
			whatYouNeed: 'WhatsApp/Zoom for video tours, email for electronic document reviews, and official corporate domiciliary or Naira payment channels.'
		},
		steps: [
			{
				number: '01',
				title: 'Schedule a Dedicated Live Video Walkthrough',
				paragraphs: [
					'Never rely on recorded promotional clips alone. Schedule a dedicated live video call with your advisor on site.',
					'Ask the advisor to walk from the estate entrance gate along Airport Road, through the spine road, into your specific target phase, and show active construction and neighbouring homes in real time.'
				],
				callout: {
					type: 'advisor-tip',
					title: 'Advisor Tip',
					text: 'We routinely conduct live Zoom or WhatsApp inspections for diaspora buyers, adjusting for UK, US, and European time zones.'
				}
			},
			{
				number: '02',
				title: 'Engage Independent Legal Counsel in Abuja',
				paragraphs: [
					'Remote buying should never compromise due diligence. Provide your family lawyer or independent solicitor in Nigeria with copies of the title documents and draft contract.',
					'Independent legal verification confirms land registry status, excision validity, and developer authority.'
				]
			},
			{
				number: '03',
				title: 'Utilise Official Corporate Remittance Channels',
				paragraphs: [
					'Remit funds strictly through official banking channels into the developer’s verified corporate domiciliary or designated Naira collection accounts.',
					'Avoid third-party intermediaries, informal currency swaps with individuals, or private agent accounts.'
				],
				callout: {
					type: 'important',
					title: 'Important',
					text: 'Official invoices and receipts are issued by Mshel Homes Limited for every inward remittance, guaranteeing your financial audit trail.'
				}
			},
			{
				number: '04',
				title: 'Execute Electronic Documentation',
				paragraphs: [
					'Contracts of sale and preliminary reservation documents can be executed electronically via secure signature platforms or scanned counterparts.',
					'Original physical documentation is sealed and archived securely at the corporate office until you or your appointed attorney retrieves it.'
				]
			},
			{
				number: '05',
				title: 'Appoint an Allocation Proxy with Power of Attorney',
				paragraphs: [
					'For physical plot allocation, you may either inspect in person during your next visit to Nigeria, or nominate a trusted family member or legal representative via Power of Attorney.',
					'The representative physically witnesses beacon positioning, signs allocation registers, and sends live timestamped photographs.'
				]
			}
		],
		relevantTool: {
			title: 'Book a Virtual Live Inspection',
			description: 'Connect directly with Amaka on WhatsApp to arrange a live video tour of Hutu Exclusive adapted to your time zone.',
			to: '/inspection',
			buttonText: 'Book Video Inspection'
		},
		relatedQuestions: [
			{
				q: 'I live abroad. Can I buy from the diaspora?',
				a: 'Yes. Virtual inspections, electronic contracts, verified corporate bank accounts, and representative allocation protocols make remote acquisition straightforward.'
			},
			{
				q: 'What documents do I receive when I buy?',
				a: 'Contract of sale, official payment receipts, deed of assignment, registered survey plan, and formal allocation letter.'
			}
		],
		relatedGuideSlugs: [
			'how-to-buy-at-hutu-exclusive-abuja',
			'understanding-hutu-exclusive-payment-plans',
			'preparing-for-site-inspection'
		]
	},
	{
		slug: 'choosing-between-hutu-phases',
		title: 'How to Choose Between Phase 1 & 2, Phase 3 and Phase 5',
		category: 'Property Selection',
		readTimeMinutes: 5,
		lastUpdated: 'September 2026',
		featuredImage: IMAGES.phase3,
		summary: 'A direct comparison of development stages, infrastructure progress, price points, and intended timelines across each phase.',
		seoTitle: 'Choosing Between Hutu Exclusive Phases 1 & 2, Phase 3, and Phase 5',
		metaDescription: 'Compare Hutu Exclusive residential phases: Phase 1 & 2 (completed roads, immediate building), Phase 3 (growing, balanced value), and Phase 5 (early-bird land banking).',
		atAGlance: {
			whoFor: 'Buyers deciding which sector of Hutu Exclusive matches their development timeline and budget.',
			whatYouWillLearn: 'The key differences in infrastructure completion, immediate livability, price per square metre, and future appreciation potential.',
			whatYouNeed: 'Clarity on whether your priority is immediate building, medium-term investment, or low-entry land banking.'
		},
		steps: [
			{
				number: '01',
				title: 'Understand Phase 1 & 2: The Established Core',
				paragraphs: [
					'Phases 1 and 2 represent the most developed district of Hutu Exclusive. Internal roads are asphalt-paved, drainage networks are fully channelled, and multiple private residences and terrace blocks are already built or under roof.',
					'If your priority is seeing physical infrastructure before paying and beginning construction within 6 months, Phase 1 & 2 is your natural choice.'
				],
				callout: {
					type: 'good-to-know',
					title: 'Good to Know',
					text: 'Commercial mall space and primary estate amenities are directly integrated into Phase 1 & 2.'
				}
			},
			{
				number: '02',
				title: 'Understand Phase 3: The Growth Engine',
				paragraphs: [
					'Phase 3 is currently undergoing intensive site works: spine roads are graded and compacted, and drainage installation is progressing steadily across Streets 1 to 4.',
					'Plots are clearly beaconed, and pricing sits comfortably below Phase 1 & 2 for equivalent square meterage. This phase offers the sweet spot between progressive infrastructure and high capital upside.'
				]
			},
			{
				number: '03',
				title: 'Understand Phase 5: The Early-Bird Frontier',
				paragraphs: [
					'Phase 5 is the most recent release and offers the lowest entry price in the estate. Infrastructure is in earlier stages, which allows early investors to enter at pre-infrastructure rates.',
					'This phase is ideally suited for land banking, long-term wealth creation, or securing plots for children before highway expansion drives up land values.'
				],
				callout: {
					type: 'advisor-tip',
					title: 'Advisor Tip',
					text: 'Early-bird rates in Phase 5 adjust upward as major access-road milestones are reached, creating predictable equity gains for early subscribers.'
				}
			},
			{
				number: '04',
				title: 'Compare Price per Square Metre Across Phases',
				paragraphs: [
					'Because land value mirrors infrastructure completion, the same 250sqm or 500sqm plot will carry distinct pricing across Phase 1 & 2, Phase 3, and Phase 5.',
					'Review your total acquisition budget against the required completion timeline to select the phase that maximises value.'
				]
			}
		],
		relevantTool: {
			title: 'Explore Residential Phases',
			description: 'Compare detailed specifications, photos, and current listings for Phase 1 & 2, Phase 3, and Phase 5.',
			to: '/residential',
			buttonText: 'View All Phases'
		},
		relatedQuestions: [
			{
				q: 'Can I start building immediately?',
				a: 'In Phase 1 & 2, yes — once allocated and building approval is secured. In Phases 3 and 5, building follows scheduled road and drainage timetables.'
			},
			{
				q: 'How does plot allocation work?',
				a: 'Physical allocation assigns specific beacon numbers upon payment milestone completion, with dates scheduled regularly by estate management.'
			}
		],
		relatedGuideSlugs: [
			'how-to-buy-at-hutu-exclusive-abuja',
			'understanding-plot-sizes-and-prototypes',
			'understanding-hutu-exclusive-payment-plans'
		]
	},
	{
		slug: 'understanding-plot-sizes-and-prototypes',
		title: 'Understanding Hutu Exclusive Plot Sizes and Prototypes',
		category: 'Property Selection',
		readTimeMinutes: 6,
		lastUpdated: 'September 2026',
		featuredImage: '/images/articles/plot-sizes-scale.jpg',
		summary: 'How 150sqm, 250sqm, 350sqm and 500sqm plots translate into actual building footprints, setbacks, bedrooms and parking spaces.',
		seoTitle: 'Hutu Exclusive Plot Sizes & Building Prototypes Explained',
		metaDescription: 'Comprehensive guide to Hutu Exclusive plot sizes: 150sqm terrace, 250sqm semi-detached, 350sqm penthouse, and 500sqm detached duplex architectural footprints.',
		atAGlance: {
			whoFor: 'Buyers evaluating plot options to determine what house design each size comfortably accommodates.',
			whatYouWillLearn: 'Architectural space planning, approved estate prototypes, mandatory setbacks, and car parking capacity for each plot size.',
			whatYouNeed: 'Your desired home layout (number of bedrooms, staff quarters, garden, and parking requirements).'
		},
		steps: [
			{
				number: '01',
				title: '150sqm: The Efficient 3-Bedroom Terrace Footprint',
				paragraphs: [
					'150sqm is engineered specifically for attached and semi-attached 3-bedroom terrace duplexes.',
					'By building vertically across two floors, you preserve adequate front parking for 2 cars while enjoying spacious ensuite bedrooms, a contemporary living/dining area, and a private rear utility yard.'
				],
				callout: {
					type: 'advisor-tip',
					title: 'Advisor Tip',
					text: '150sqm is our most popular entry-level size for young families and rental-yield investors seeking high occupancy in the Airport Road corridor.'
				}
			},
			{
				number: '02',
				title: '250sqm: The 4-Bedroom Semi-Detached Duplex Plot',
				paragraphs: [
					'A 250sqm plot provides the lateral width necessary for a 4-bedroom semi-detached duplex with attached boys’ quarters (BQ).',
					'It accommodates parking for 3 vehicles, a dedicated side walkway, and enhanced natural lighting along three building elevations.'
				]
			},
			{
				number: '03',
				title: '350sqm: The Executive 4-Bedroom Penthouse / Duplex',
				paragraphs: [
					'350sqm offers generous spatial flexibility. It supports an expansive 4-bedroom penthouse duplex with panoramic rooftop terrace, perimeter green strip, and parking for up to 4 cars.'
				],
				callout: {
					type: 'good-to-know',
					title: 'Good to Know',
					text: 'All building plans must adhere to estate building regulations regarding setbacks, roof lines, and drainage connections.'
				}
			},
			{
				number: '04',
				title: '500sqm: The Prestigious 5-Bedroom Fully Detached Villa',
				paragraphs: [
					'500sqm is the premier residential land tier at Hutu Exclusive. It easily accommodates a 5-bedroom fully detached mansion with double living lounges, detached BQ, private lawn, swimming pool option, and parking for 5+ cars.'
				]
			}
		],
		relevantTool: {
			title: 'Check Property Availability by Size',
			description: 'See all active listings across 150sqm, 250sqm, 350sqm, and 500sqm plots with current pricing.',
			to: '/residential/phase-1-2',
			buttonText: 'View Plot Inventory'
		},
		relatedQuestions: [
			{
				q: 'Can I design my own house or must I use estate prototypes?',
				a: 'Buyers can customise internal architecture as long as exterior elevations, roof profiles, setbacks, and height limits align with estate guidelines.'
			},
			{
				q: 'What documents do I receive when I buy?',
				a: 'Contract of sale, payment receipts, deed of assignment, registered survey plan, and allocation letter.'
			}
		],
		relatedGuideSlugs: [
			'choosing-between-hutu-phases',
			'how-to-buy-at-hutu-exclusive-abuja',
			'understanding-hutu-exclusive-payment-plans'
		]
	},
	{
		slug: 'preparing-for-site-inspection',
		title: 'How to Prepare for a Hutu Exclusive Site Inspection',
		category: 'Inspection',
		readTimeMinutes: 4,
		lastUpdated: 'September 2026',
		featuredImage: HERO_SLIDES[0].src,
		summary: 'What to observe, what questions to ask, and how to verify topography, beacons, and road access during your physical site visit.',
		seoTitle: 'How to Prepare for a Hutu Exclusive Site Inspection | Buyer Checklist',
		metaDescription: 'Essential checklist for inspecting Hutu Exclusive Abuja: route access from Airport Road, beacon checks, infrastructure inspection, and key questions for advisors.',
		atAGlance: {
			whoFor: 'Buyers planning to visit Hutu Exclusive in person along Airport Road, Lugbe South, Abuja.',
			whatYouWillLearn: 'The 5 critical inspection checkpoints: access route, terrain/drainage, beacon boundary lines, road network, and development timeline.',
			whatYouNeed: 'Comfortable walking footwear, notebook or smartphone for photos/videos, and your preliminary plot preference.'
		},
		steps: [
			{
				number: '01',
				title: 'Confirm the Access Route and Travel Time',
				paragraphs: [
					'Hutu Exclusive is accessed via the main Abuja Airport Road expressway, turning into the Lugbe South growth corridor.',
					'Time your journey from the Central Business District (approx. 20–25 minutes) or from Nnamdi Azikiwe International Airport (approx. 12–15 minutes) to gauge everyday commuting convenience.'
				]
			},
			{
				number: '02',
				title: 'Observe Soil Topography and Natural Drainage',
				paragraphs: [
					'Inspect the natural lay of the land. Hutu Exclusive features firm, dry, gently undulating ground that does not require expensive piling or deep swamp reclamation.',
					'Look at internal runoff channels to verify how rainwater naturally flows toward designated estate drainage outfalls.'
				],
				callout: {
					type: 'advisor-tip',
					title: 'Advisor Tip',
					text: 'Visiting during or after a rain shower is often an excellent way to witness estate drainage efficiency firsthand.'
				}
			},
			{
				number: '03',
				title: 'Walk the Exact Boundary Beacons',
				paragraphs: [
					'Ask your advisor to walk you to the specific phase and street you are evaluating. Inspect physical concrete survey beacons and confirm boundary dimensions against the estate layout map.'
				]
			},
			{
				number: '04',
				title: 'Ask About Infrastructure Timelines and Phasing',
				paragraphs: [
					'Verify the current status of perimeter fencing, security gatehouses, electrified utility poles, and internal road surfacing for the phase you are considering.'
				],
				callout: {
					type: 'before-you-pay',
					title: 'Before You Pay',
					text: 'Always ensure your advisor confirms whether the plot shown matches the exact lot number that will appear on your Contract of Sale.'
				}
			}
		],
		relevantTool: {
			title: 'Book a Guided Site Walkthrough',
			description: 'Inspections run Monday through Saturday with an advisor meeting you directly at the estate gate.',
			to: '/inspection',
			buttonText: 'Book Free Inspection'
		},
		relatedQuestions: [
			{
				q: 'Can I visit the site before deciding?',
				a: 'Yes — and we strongly recommend it. Inspections run Monday to Saturday, guided by an advisor who walks you through the phases and beacons.'
			},
			{
				q: 'Is the estate title genuine?',
				a: 'The estate title is available for independent verification before any payment. We actively encourage buyers to involve their own legal counsel.'
			}
		],
		relatedGuideSlugs: [
			'how-to-buy-at-hutu-exclusive-abuja',
			'choosing-between-hutu-phases',
			'buying-hutu-exclusive-from-abroad'
		]
	}
];
