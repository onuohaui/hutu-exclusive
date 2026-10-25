import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
	Activity,
	ArrowRight,
	Building,
	Building2,
	CalendarClock,
	Check,
	CheckCircle2,
	Compass,
	ExternalLink,
	Eye,
	Flag,
	Home,
	Leaf,
	MapPin,
	MessageCircle,
	Navigation,
	Palmtree,
	Play,
	Ruler,
	ShieldCheck,
	Sparkles,
	Trophy,
	Users,
	Video,
	X,
	Zap,
} from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { IMAGES } from '@/data/site';
import { getAdvisorWhatsAppUrl } from '@/config/site';

const YOUTUBE_CHANNEL = 'https://www.youtube.com/channel/UCy4xAfy9yDVJ5BMdsEjGvfQ';
const MSHEL_HOMES_URL = 'https://www.mshelhomes.com/';

export default function OverviewPage() {
	const [videoModalOpen, setVideoModalOpen] = useState(false);
	const [videoType, setVideoType] = useState('overview'); // 'overview' or 'drive'

	const openVideo = (type = 'overview') => {
		setVideoType(type);
		setVideoModalOpen(true);
	};

	return (
		<>
			{/* SEO Tags */}
			<Helmet>
				<title>Hutu Exclusive Abuja by Mshel Homes | Location, Phases &amp; Properties</title>
				<meta
					name="description"
					content="Explore Hutu Exclusive Abuja by Mshel Homes. See the Airport Road location, Phase 1 & 2, Phase 3, Phase 5, property options, prices, amenities and current buying opportunities."
				/>
			</Helmet>
			<Seo
				title="Hutu Exclusive Abuja by Mshel Homes | Location, Phases & Properties"
				description="Explore Hutu Exclusive Abuja by Mshel Homes. See the Airport Road location, Phase 1 & 2, Phase 3, Phase 5, property options, prices, amenities and current buying opportunities."
			/>

			{/* =========================================================================
			    1. HERO SECTION
			   ========================================================================= */}
			<section className="border-b border-border bg-secondary/60">
				<div className="page-container py-16 sm:py-20 lg:py-24">
					<div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
						{/* Left: Headline & Copy */}
						<Reveal>
							<div className="max-w-2xl">
								<h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
									Hutu Exclusive Abuja: Understand the Estate Before You Buy
								</h1>

								<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
									<p>
										Hutu Exclusive by{' '}
										<a
											href={MSHEL_HOMES_URL}
											target="_blank"
											rel="noopener noreferrer"
											className="font-semibold text-primary underline underline-offset-4 decoration-primary/30 transition-colors hover:decoration-primary"
										>
											Mshel Homes
										</a>{' '}
										is a 250+ hectare residential, leisure and commercial development located along Airport Road, Lugbe
										South, before Centenary City, Abuja.
									</p>
									<p>
										Designed as Abuja’s first eco-friendly golf estate and integrated residential community, the development
										brings together serviced plots, luxury homes, apartments, commercial spaces, recreation and resort-style
										amenities within one master-planned destination.
									</p>
									<p>
										Whether you are comparing phases, checking prices, looking for the right plot size or simply trying to
										understand whether Hutu Exclusive fits your plans, this page gives you the information you need to make
										a clearer decision.
									</p>
								</div>

								<div className="mt-8 flex flex-wrap items-center gap-4">
									<Link
										to="/residential"
										className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark active:scale-[0.98]"
									>
										<span>Explore Available Properties</span>
										<ArrowRight className="h-4 w-4" />
									</Link>
									<Link
										to="/#budget-matcher"
										className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary/25 bg-card px-5 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary active:scale-[0.98]"
									>
										<span>Find What Fits Your Budget</span>
									</Link>
								</div>
							</div>
						</Reveal>

						{/* Right: Video Card in Hero */}
						<Reveal delay={0.1}>
							<div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all hover:border-primary/40 hover:shadow-lg">
								<div className="group relative aspect-[16/10] overflow-hidden bg-muted">
									<img
										src="/images/hero/hutu-entrance-man-car.jpg"
										alt="Hutu Exclusive Estate Entrance, Abuja"
										loading="eager"
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
									<button
										type="button"
										onClick={() => openVideo('overview')}
										className="absolute inset-0 flex items-center justify-center focus:outline-none"
										aria-label="Play Hutu Exclusive Overview video"
									>
										<div className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl ring-4 ring-white/30 transition-transform duration-300 group-hover:scale-110">
											<Play className="ml-1 h-7 w-7 fill-current" />
										</div>
									</button>
									<span className="absolute bottom-3 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
										Estate Overview · Video Walkthrough
									</span>
								</div>

								<div className="p-6 sm:p-7">
									<h2 className="font-display text-xl font-bold text-foreground">Watch Hutu Exclusive Overview</h2>
									<p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
										Get a visual introduction to the estate, its location, phases and the wider Hutu Exclusive vision before
										you start comparing properties.
									</p>
									<button
										type="button"
										onClick={() => openVideo('overview')}
										className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:underline"
									>
										<Play className="h-4 w-4 fill-current" />
										<span>Watch Overview</span>
									</button>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* =========================================================================
			    2. WHAT IS HUTU EXCLUSIVE?
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="max-w-3xl">
						<SectionHeading
							title="A Master-Planned Estate Built Around More Than Housing"
							copy="Hutu Exclusive is a major lifestyle development by Mshel Homes combining residential property, leisure, tourism, recreation and commercial activity."
						/>
					</div>
				</Reveal>

				<div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
					<Reveal delay={0.06}>
						<div className="space-y-4 text-base leading-relaxed text-muted-foreground">
							<p>
								The project spans more than 250 hectares and forms part of an estimated $3 billion development vision
								designed to create a premium residential and resort community along Abuja’s Airport Road corridor.
							</p>
							<p>
								Unlike a conventional estate where the focus is simply on buying a plot and building a house, Hutu
								Exclusive has been planned as a complete community.
							</p>
							<p>
								The wider development is also projected to support more than 20,000 jobs as commercial, hospitality, tourism
								and residential activity expands.
							</p>
						</div>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="rounded-xl border border-border bg-secondary/50 p-6 sm:p-8">
							<p className="text-xs font-bold uppercase tracking-wider text-foreground">
								Depending on the phase, buyers can access:
							</p>
							<ul className="mt-5 space-y-3">
								{[
									'fully serviced residential plots',
									'luxury houses',
									'apartments',
									'apartment blocks',
									'commercial property',
									'shopping mall spaces',
									'lifestyle and recreational infrastructure',
								].map((item) => (
									<li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground">
										<span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
											<Check className="h-3 w-3" strokeWidth={3} />
										</span>
										<span className="capitalize">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    3. HUTU EXCLUSIVE AT A GLANCE
			   ========================================================================= */}
			<section className="border-y border-border bg-secondary/60">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							title="Hutu Exclusive at a Glance"
							copy="Key scale, zoning and property parameters defined in the master development plan."
						/>
					</Reveal>

					<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								value: '250+ Hectares',
								desc: 'Large-scale integrated residential and lifestyle development.',
								icon: Compass,
							},
							{
								value: '3 Residential Phases',
								desc: 'Phase 1 & 2, Phase 3 and Phase 5.',
								icon: Home,
							},
							{
								value: '150sqm–1,000sqm',
								desc: 'Residential plot sizes across different approved prototypes.',
								icon: Ruler,
							},
							{
								value: 'Residential + Commercial',
								desc: 'Land, houses, apartments and commercial property within the wider development.',
								icon: Building2,
							},
						].map((card, index) => (
							<Reveal key={card.value} delay={index * 0.05}>
								<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
									<div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">
										<card.icon className="h-5 w-5" />
									</div>
									<p className="mt-5 font-display text-2xl font-bold text-primary sm:text-3xl">{card.value}</p>
									<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* =========================================================================
			    4. WHERE IS HUTU EXCLUSIVE LOCATED?
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="max-w-3xl">
						<SectionHeading
							title="Mshel Hutu Exclusive Location — Airport Road, Abuja"
							copy="Hutu Exclusive is located in Lugbe South District along Airport Road, before Centenary City, Abuja."
						/>
					</div>
				</Reveal>

				<div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
					<Reveal delay={0.06}>
						<div className="space-y-4 text-base leading-relaxed text-muted-foreground">
							<p>
								Its position gives you direct access to one of Abuja’s major residential and investment corridors while
								remaining connected to the airport and central parts of the city.
							</p>
							<p className="font-medium text-foreground">The estate is:</p>
							<ul className="space-y-2.5 text-sm text-foreground">
								{[
									'less than 10 minutes from Nnamdi Azikiwe International Airport',
									'minutes from the Presidential Expressway',
									'approximately 25 minutes from town',
									'accessible through the Airport Road corridor',
									'located before Centenary City',
								].map((point) => (
									<li key={point} className="flex items-start gap-3">
										<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
										<span>{point}</span>
									</li>
								))}
							</ul>
							<p className="pt-2 text-xs leading-relaxed text-muted-foreground">
								If you have been searching for <em>Mshel Hutu Exclusive Airport Road Abuja</em>,{' '}
								<em>Mshel Hutu Exclusive location</em> or <em>Hutu Exclusive Abuja</em>, this is the development being
								referred to.
							</p>
							<div className="pt-4">
								<Link
									to="/inspection"
									className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
								>
									<Navigation className="h-4 w-4" />
									<span>See the Route to Hutu Exclusive</span>
								</Link>
							</div>
						</div>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
							<div className="flex items-center gap-3">
								<div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
									<MapPin className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-display text-lg font-bold text-foreground">Strategic Corridor Access</h3>
									<p className="text-xs text-muted-foreground">Lugbe South District, Airport Road</p>
								</div>
							</div>
							<div className="mt-6 space-y-3 divide-y divide-border text-sm">
								<div className="flex items-center justify-between pb-3">
									<span className="text-muted-foreground">To International Airport</span>
									<span className="font-semibold text-foreground">&lt; 10 mins</span>
								</div>
								<div className="flex items-center justify-between py-3">
									<span className="text-muted-foreground">To Presidential Expressway</span>
									<span className="font-semibold text-foreground">Minutes away</span>
								</div>
								<div className="flex items-center justify-between py-3">
									<span className="text-muted-foreground">To Centenary City Gate</span>
									<span className="font-semibold text-foreground">Direct neighbor</span>
								</div>
								<div className="flex items-center justify-between pt-3">
									<span className="text-muted-foreground">To Central Business District</span>
									<span className="font-semibold text-foreground">~25 mins</span>
								</div>
							</div>
							<div className="mt-6 rounded-lg bg-secondary/80 p-3.5 text-xs text-muted-foreground">
								Direct paved and graded road connectivity currently connects the main gatehouse to the Airport Road corridor.
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    5. WHAT CAN YOU BUY AT HUTU EXCLUSIVE?
			   ========================================================================= */}
			<section className="border-y border-border bg-secondary/60">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							title="Choose a Property Based on Your Budget and Goal"
							copy="Hutu Exclusive gives you several ways to own property within the development. Your best option depends on whether you want to build, move into a completed home, invest for the future or own commercial property."
						/>
					</Reveal>

					<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{/* Serviced Residential Land */}
						<Reveal delay={0.04}>
							<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
								<div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">
									<Ruler className="h-5 w-5" />
								</div>
								<h3 className="mt-5 font-display text-xl font-bold text-foreground">Serviced Residential Land</h3>
								<p className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-accent">150sqm to 1,000sqm</p>
								<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
									Different plot sizes are linked to approved residential prototypes, including terraces, semi-detached
									duplexes, fully detached duplexes and larger residential buildings.
								</p>
								<div className="mt-6 border-t border-border pt-4">
									<Link
										to="/residential"
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
									>
										Explore Residential Land <ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</Reveal>

						{/* Houses */}
						<Reveal delay={0.08}>
							<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
								<div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">
									<Home className="h-5 w-5" />
								</div>
								<h3 className="mt-5 font-display text-xl font-bold text-foreground">Houses</h3>
								<p className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-accent">Developer-Built Homes</p>
								<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
									You can also buy developer-built houses across selected phases, including terrace duplexes,
									semi-detached duplexes, fully detached duplexes, and larger premium detached homes.
								</p>
								<div className="mt-6 border-t border-border pt-4">
									<Link
										to="/residential"
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
									>
										Explore Houses <ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</Reveal>

						{/* Apartments */}
						<Reveal delay={0.12}>
							<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
								<div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">
									<Building className="h-5 w-5" />
								</div>
								<h3 className="mt-5 font-display text-xl font-bold text-foreground">Apartments</h3>
								<p className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-accent">Single Units &amp; Blocks</p>
								<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
									Selected phases include individual apartments as well as complete apartment-block investment opportunities
									(e.g., 6-unit buildings).
								</p>
								<div className="mt-6 border-t border-border pt-4">
									<Link
										to="/residential"
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
									>
										Explore Apartments <ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</Reveal>

						{/* Commercial Property */}
						<Reveal delay={0.16}>
							<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
								<div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">
									<Building2 className="h-5 w-5" />
								</div>
								<h3 className="mt-5 font-display text-xl font-bold text-foreground">Commercial Property</h3>
								<p className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-accent">Shopping Mall Retail</p>
								<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
									Hutu Exclusive Phase 1 &amp; 2 also includes commercial opportunities within the estate’s shopping mall
									development, sold per square metre.
								</p>
								<div className="mt-6 border-t border-border pt-4">
									<Link
										to="/commercial"
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
									>
										Explore Commercial Property <ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* =========================================================================
			    6. THE HUTU EXCLUSIVE MASTER PLAN
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<SectionHeading
						title="Designed as an Integrated Residential and Lifestyle Community"
						copy="The vision for Hutu Exclusive extends beyond houses and plots. The master plan brings together residential neighbourhoods, commercial activity, recreation, hospitality, sporting facilities and supporting community infrastructure."
					/>
				</Reveal>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						{
							category: 'Golf',
							icon: Flag,
							items: ['2 golf courses including a 9-hole course'],
						},
						{
							category: 'Polo & Equestrian',
							icon: Trophy,
							items: ['polo facilities', 'horse ranch'],
						},
						{
							category: 'Leisure & Hospitality',
							icon: Palmtree,
							items: ['artificial lakes', 'amusement park', 'resort hotel', 'clubhouse', 'Olympic-size swimming pool'],
						},
						{
							category: 'Sports & Recreation',
							icon: Activity,
							items: [
								'tennis courts',
								'basketball courts',
								'badminton courts',
								'volleyball courts',
								'football pitches',
								'sports centre',
							],
						},
						{
							category: 'Everyday Infrastructure',
							icon: Building,
							items: [
								'shopping mall',
								'schools',
								'hospital and medical centre',
								'police station',
								'gas station',
								'commercial areas',
							],
						},
						{
							category: 'Eco-Friendly Infrastructure',
							icon: Leaf,
							items: [
								'underground electricity',
								'underground sewage',
								'reduced dependence on individual generators',
								'landscaped green areas',
								'integrated estate infrastructure',
							],
						},
					].map((feature, index) => (
						<Reveal key={feature.category} delay={index * 0.05}>
							<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
								<div className="flex items-center gap-3">
									<div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
										<feature.icon className="h-5 w-5" />
									</div>
									<h3 className="font-display text-lg font-bold text-foreground">{feature.category}</h3>
								</div>
								<ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
									{feature.items.map((item) => (
										<li key={item} className="flex items-start gap-2.5">
											<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
											<span className="capitalize">{item}</span>
										</li>
									))}
								</ul>
							</div>
						</Reveal>
					))}
				</div>

				<Reveal delay={0.1}>
					<div className="mt-10 rounded-xl border border-border bg-secondary/50 p-6 text-center text-sm font-medium text-foreground sm:text-base">
						The goal is to create a community where residential life, leisure, commerce and recreation exist within the same
						development.
					</div>
				</Reveal>
			</section>

			{/* =========================================================================
			    7. WHY HUTU EXCLUSIVE STANDS OUT
			   ========================================================================= */}
			<section className="border-y border-border bg-secondary/60">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							title="Why Hutu Exclusive Stands Out"
							copy="Four practical advantages that differentiate this master development from conventional suburban residential estates."
						/>
					</Reveal>

					<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								title: 'Airport Road Location',
								copy: 'You are buying within the Lugbe South/Airport Road corridor, with direct access towards the airport, Centenary City and central Abuja.',
								icon: Navigation,
							},
							{
								title: 'Different Entry Points',
								copy: 'You can enter Hutu Exclusive at different price levels depending on phase, property type, size and payment structure.',
								icon: Compass,
							},
							{
								title: 'Multiple Ways to Own',
								copy: 'Land, houses, apartments and commercial property give you more choices than a single-purpose residential estate.',
								icon: Home,
							},
							{
								title: 'Long-Term Master Plan',
								copy: 'Residential development is supported by a larger leisure, sporting, hospitality and commercial vision.',
								icon: Sparkles,
							},
						].map((item, index) => (
							<Reveal key={item.title} delay={index * 0.06}>
								<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
									<div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">
										<item.icon className="h-5 w-5" />
									</div>
									<h3 className="mt-5 font-display text-lg font-bold text-foreground">{item.title}</h3>
									<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* =========================================================================
			    8. UNDERSTANDING THE HUTU EXCLUSIVE PHASES
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<SectionHeading
						title="Three Residential Phases. Different Prices. Different Buying Decisions."
						copy="The phases are not identical. You should choose based on what you want from the property rather than simply choosing the cheapest or most expensive phase."
					/>
				</Reveal>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{/* Phase 1 & 2 */}
					<Reveal delay={0.04}>
						<article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
							<div className="relative aspect-[4/3] overflow-hidden bg-muted">
								<img
									src={IMAGES.phase12}
									alt="Hutu Exclusive Phase 1 & 2"
									loading="lazy"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
									Phase 1 &amp; 2
								</span>
							</div>
							<div className="flex flex-1 flex-col p-6">
								<h3 className="font-display text-lg font-bold text-foreground">The Established Residential and Commercial Phase</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									Phase 1 &amp; 2 gives you the broadest mix of current property options within Hutu Exclusive.
								</p>
								<div className="mt-4 rounded-md bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
									<span className="font-semibold text-foreground">Available inventory:</span> serviced residential plots,
									houses, apartments, apartment blocks, commercial spaces.
								</div>
								<div className="mt-6 border-t border-border pt-4">
									<Link
										to="/residential/phase-1-2"
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
									>
										Explore Phase 1 &amp; 2 <ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</article>
					</Reveal>

					{/* Phase 3 */}
					<Reveal delay={0.08}>
						<article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
							<div className="relative aspect-[4/3] overflow-hidden bg-muted">
								<img
									src={IMAGES.phase3}
									alt="Hutu Exclusive Phase 3"
									loading="lazy"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
									Phase 3
								</span>
							</div>
							<div className="flex flex-1 flex-col p-6">
								<h3 className="font-display text-lg font-bold text-foreground">Residential Options Across Multiple Price Points</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									Mshel Hutu Exclusive Phase 3 offers serviced plots, houses and apartment opportunities across several
									property sizes and prototypes.
								</p>
								<div className="mt-4 rounded-md bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
									For many buyers, it provides another option between the earlier development phases and newer expansion areas.
								</div>
								<div className="mt-6 border-t border-border pt-4">
									<Link
										to="/residential/phase-3"
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
									>
										Explore Phase 3 <ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</article>
					</Reveal>

					{/* Phase 5 */}
					<Reveal delay={0.12}>
						<article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
							<div className="relative aspect-[4/3] overflow-hidden bg-muted">
								<img
									src={IMAGES.phase5}
									alt="Hutu Exclusive Phase 5"
									loading="lazy"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
									Phase 5
								</span>
							</div>
							<div className="flex flex-1 flex-col p-6">
								<h3 className="font-display text-lg font-bold text-foreground">A Newer Residential Expansion</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									Phase 5 currently focuses on serviced land and approved residential prototypes. Available plot sizes range
									from smaller entry-level options through larger plots.
								</p>
								<div className="mt-4 rounded-md bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
									No apartments or commercial properties are currently listed for sale in Phase 5.
								</div>
								<div className="mt-6 border-t border-border pt-4">
									<Link
										to="/residential/phase-5"
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
									>
										Explore Phase 5 <ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</article>
					</Reveal>

					{/* Commercial */}
					<Reveal delay={0.16}>
						<article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
							<div className="relative aspect-[4/3] overflow-hidden bg-muted">
								<img
									src={IMAGES.commercial}
									alt="Hutu Exclusive Commercial District"
									loading="lazy"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
									Commercial
								</span>
							</div>
							<div className="flex flex-1 flex-col p-6">
								<h3 className="font-display text-lg font-bold text-foreground">Commercial Property in Phase 1 &amp; 2</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									Commercial opportunities are currently available within Hutu Exclusive Phase 1 &amp; 2, including shopping
									mall spaces sold by square metre.
								</p>
								<div className="mt-4 rounded-md bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
									High-traffic frontage along the main estate boulevard with flexible retail space configurations.
								</div>
								<div className="mt-6 border-t border-border pt-4">
									<Link
										to="/commercial"
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
									>
										Explore Commercial <ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</article>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    9. COMPARE HUTU EXCLUSIVE RESIDENTIAL PHASES
			   ========================================================================= */}
			<section className="border-t border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							title="Compare Hutu Exclusive Residential Phases"
							copy="An objective side-by-side comparison of current inventory, land entry prices and building readiness."
						/>
					</Reveal>

					<Reveal delay={0.08}>
						<div className="mt-10 overflow-x-auto overscroll-x-contain rounded-xl border border-border bg-card shadow-sm" role="region" aria-label="Residential phase comparison" tabIndex={0}>
							<table className="w-full min-w-[720px] text-left text-sm">
								<thead>
									<tr className="border-b border-border bg-muted/60">
										<th className="px-6 py-4 font-semibold text-muted-foreground">Compare</th>
										<th className="px-6 py-4 font-display text-base font-semibold text-foreground">Phase 1 &amp; 2</th>
										<th className="px-6 py-4 font-display text-base font-semibold text-foreground">Phase 3</th>
										<th className="px-6 py-4 font-display text-base font-semibold text-foreground">Phase 5</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-border">
									<tr>
										<td className="px-6 py-4 font-medium text-muted-foreground">Current property options</td>
										<td className="px-6 py-4">Land, houses, apartments &amp; commercial</td>
										<td className="px-6 py-4">Land, houses &amp; apartments</td>
										<td className="px-6 py-4">Land / prototype options</td>
									</tr>
									<tr>
										<td className="px-6 py-4 font-medium text-muted-foreground">Residential plot sizes</td>
										<td className="px-6 py-4">150sqm–1,000sqm</td>
										<td className="px-6 py-4">150sqm–1,000sqm</td>
										<td className="px-6 py-4">150sqm–1,000sqm</td>
									</tr>
									<tr>
										<td className="px-6 py-4 font-medium text-muted-foreground">Entry land price</td>
										<td className="px-6 py-4 font-bold text-primary">From ₦22,453,200</td>
										<td className="px-6 py-4 font-bold text-primary">From ₦11,689,453</td>
										<td className="px-6 py-4 font-bold text-primary">From ₦8,250,000</td>
									</tr>
									<tr>
										<td className="px-6 py-4 font-medium text-muted-foreground">Apartments currently available</td>
										<td className="px-6 py-4">
											<span className="inline-flex items-center rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
												Yes
											</span>
										</td>
										<td className="px-6 py-4">
											<span className="inline-flex items-center rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
												Yes
											</span>
										</td>
										<td className="px-6 py-4">
											<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
												No
											</span>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 font-medium text-muted-foreground">Houses currently available</td>
										<td className="px-6 py-4">
											<span className="inline-flex items-center rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
												Yes
											</span>
										</td>
										<td className="px-6 py-4">
											<span className="inline-flex items-center rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
												Yes
											</span>
										</td>
										<td className="px-6 py-4">
											<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
												No
											</span>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 font-medium text-muted-foreground">Commercial currently available</td>
										<td className="px-6 py-4">
											<span className="inline-flex items-center rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
												Yes
											</span>
										</td>
										<td className="px-6 py-4">
											<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
												No
											</span>
										</td>
										<td className="px-6 py-4">
											<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
												No
											</span>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 font-medium text-muted-foreground">Best starting point if…</td>
										<td className="px-6 py-4 text-xs leading-relaxed text-foreground">
											You want the widest choice of property types
										</td>
										<td className="px-6 py-4 text-xs leading-relaxed text-foreground">
											You want residential choices at a different price level
										</td>
										<td className="px-6 py-4 text-xs leading-relaxed text-foreground">
											You want the lowest current land entry price
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4"></td>
										<td className="px-6 py-4">
											<Link
												to="/residential/phase-1-2"
												className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
											>
												View Phase 1 &amp; 2 <ArrowRight className="h-4 w-4" />
											</Link>
										</td>
										<td className="px-6 py-4">
											<Link
												to="/residential/phase-3"
												className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
											>
												View Phase 3 <ArrowRight className="h-4 w-4" />
											</Link>
										</td>
										<td className="px-6 py-4">
											<Link
												to="/residential/phase-5"
												className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
											>
												View Phase 5 <ArrowRight className="h-4 w-4" />
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    10. WHICH HUTU EXCLUSIVE PHASE IS RIGHT FOR YOU?
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="max-w-3xl">
						<SectionHeading
							title="Start With What You Want the Property to Do for You"
							copy="The right phase is not automatically the cheapest phase. Before choosing, consider:"
						/>
					</div>
				</Reveal>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						{
							title: 'Your budget',
							desc: 'How much can you comfortably spend now, and do you need a payment plan?',
						},
						{
							title: 'Your property type',
							desc: 'Do you want land, a house, an apartment or commercial property?',
						},
						{
							title: 'Your timeline',
							desc: 'Are you buying for immediate use, future development or a longer-term investment?',
						},
						{
							title: 'Your preferred size',
							desc: 'Hutu Exclusive has several plot and prototype sizes, so your preferred building type can determine which options fit.',
						},
						{
							title: 'Your reason for buying',
							desc: 'A property for your own home may require a different decision from land you are buying to hold for the future.',
						},
					].map((item, index) => (
						<Reveal key={item.title} delay={index * 0.05}>
							<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
								<h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
								<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
							</div>
						</Reveal>
					))}

					{/* Matcher Trigger Card */}
					<Reveal delay={0.25}>
						<div className="flex h-full flex-col justify-between rounded-xl border-2 border-primary/40 bg-primary/5 p-6 shadow-sm">
							<div>
								<p className="text-xs font-bold uppercase tracking-wider text-accent">Budget Tool</p>
								<h3 className="mt-2 font-display text-lg font-bold text-foreground">Find Matching Properties</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									Filter the current database by your deposit, preferred duration, and prototype.
								</p>
							</div>
							<div className="mt-6">
								<Link
									to="/#budget-matcher"
									className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
								>
									<span>Find Hutu Properties Within Your Budget</span>
								</Link>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    11. HUTU EXCLUSIVE BY MSHEL HOMES
			   ========================================================================= */}
			<section className="border-y border-border bg-secondary/60">
				<div className="page-container section-space">
					<div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
						<Reveal>
							<div className="max-w-2xl">
								<SectionHeading
									title="The Developer Behind the Estate"
									copy="Hutu Exclusive is developed by Mshel Homes Limited, a Nigerian real estate company with developments across Abuja and other parts of Nigeria."
								/>
								<p className="mt-4 text-base leading-relaxed text-muted-foreground">
									The wider Hutu Exclusive concept combines{' '}
									<a
										href={MSHEL_HOMES_URL}
										target="_blank"
										rel="noopener noreferrer"
										className="font-semibold text-primary underline underline-offset-4 decoration-primary/30 transition-colors hover:decoration-primary"
									>
										Mshel Homes
									</a>
									' residential property development with an ambitious golf, hospitality, recreation and commercial master
									plan.
								</p>
								<div className="mt-8">
									<Link
										to="/about/meet-the-developer"
										className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
									>
										<span>Meet the Developer</span>
										<ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</Reveal>

						<Reveal delay={0.1}>
							<div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
								<div className="flex items-center gap-3">
									<div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-xl font-bold">
										M
									</div>
									<div>
										<h3 className="font-display text-lg font-bold text-foreground">Mshel Homes Limited</h3>
										<p className="text-xs text-muted-foreground">Established Abuja Real Estate Developer</p>
									</div>
								</div>
								<p className="mt-5 text-sm leading-relaxed text-muted-foreground">
									With an eight-year legacy in master-planned communities across Abuja, Mshel Homes manages land
									administration, infrastructure construction, beacon allocation, and title documentation directly for all
									Hutu Exclusive buyers.
								</p>
								<div className="mt-6 border-t border-border pt-4">
									<a
										href={MSHEL_HOMES_URL}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
									>
										<span>Visit official Mshel Homes website</span>
										<ExternalLink className="h-3.5 w-3.5" />
									</a>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* =========================================================================
			    12. SEE HUTU EXCLUSIVE BEFORE YOU BUY
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="max-w-3xl">
						<SectionHeading
							title="Visit the Estate or Explore It Remotely"
							copy="Seeing the location can make the differences between phases much easier to understand."
						/>
					</div>
				</Reveal>

				<div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
					<Reveal delay={0.06}>
						<div className="space-y-4 text-base leading-relaxed text-muted-foreground">
							<p>
								You can book a physical inspection of Hutu Exclusive, or if you're outside Abuja, begin with a virtual
								inspection.
							</p>
							<p className="font-medium text-foreground">You can also watch the journey to Hutu Exclusive from:</p>
							<ul className="space-y-2 text-sm text-foreground">
								<li className="flex items-center gap-2.5">
									<Navigation className="h-4 w-4 text-primary shrink-0" />
									<span>Nnamdi Azikiwe International Airport</span>
								</li>
								<li className="flex items-center gap-2.5">
									<Navigation className="h-4 w-4 text-primary shrink-0" />
									<span>Abuja City Gate</span>
								</li>
							</ul>

							<div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
								<Link
									to="/inspection"
									className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
								>
									<span>Book an Inspection</span>
									<ArrowRight className="h-4 w-4" />
								</Link>
								<button
									type="button"
									onClick={() => openVideo('drive')}
									className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary/30 bg-card px-5 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
								>
									<Play className="h-4 w-4 fill-current" />
									<span>Watch the Drive to Hutu Exclusive</span>
								</button>
							</div>
						</div>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
							<div className="relative aspect-[16/10] overflow-hidden bg-muted">
								<img
									src="/images/hero/hutu-golf-sign.jpg"
									alt="Drive to Hutu Exclusive"
									loading="lazy"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
								<button
									type="button"
									onClick={() => openVideo('drive')}
									className="absolute inset-0 flex items-center justify-center"
									aria-label="Play Drive to Hutu Exclusive video"
								>
									<div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
										<Play className="ml-1 h-6 w-6 fill-current" />
									</div>
								</button>
							</div>
							<div className="p-5">
								<p className="font-display font-semibold text-foreground">Drive Route &amp; Access Corridor</p>
								<p className="mt-1 text-xs text-muted-foreground">From Airport Road to the Hutu Exclusive Main Gate</p>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    13. MAKE THE DECISION WITH THE FULL PICTURE
			   ========================================================================= */}
			<section className="border-t border-border bg-secondary/50">
				<div className="page-container section-space">
					<Reveal>
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
								Make the Decision With the Full Picture
							</h2>

							<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
								<p>
									Prices matter, but they are only one part of choosing a property.
								</p>
								<p>
									You should also understand the phase, location, property type, payment structure and what is currently
									happening within the part of the estate you are considering.
								</p>
								<p>
									That is what this website is designed to help you do.
								</p>
								<p className="font-medium text-foreground">
									If you still have questions after exploring the information here, you can speak directly with me before making a decision.
								</p>
							</div>

							<div className="mt-8 flex justify-center">
								<a
									href={getAdvisorWhatsAppUrl(
										'Hi Amaka, I have a few questions about Hutu Exclusive after reading the estate overview.'
									)}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark active:scale-[0.98]"
								>
									<MessageCircle className="h-4 w-4" />
									<span>Ask Amaka a Question</span>
								</a>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    14. FINAL CTA
			   ========================================================================= */}
			<section className="border-t border-border bg-primary text-primary-foreground">
				<div className="page-container py-16 sm:py-20">
					<Reveal>
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
								Ready to Buy Hutu Exclusive?
							</h2>
							<p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
								Explore the properties currently available, compare your options and choose the Hutu Exclusive property that
								fits your budget and plans.
							</p>

							<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
								<Link
									to="/residential"
									className="inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-secondary active:scale-[0.98]"
								>
									<span>Buy Hutu Exclusive</span>
									<ArrowRight className="h-4 w-4" />
								</Link>
								<a
									href={getAdvisorWhatsAppUrl('Hi Amaka, I’d like to discuss buying a property at Hutu Exclusive.')}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/30 bg-primary-dark/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark/70 active:scale-[0.98]"
								>
									<MessageCircle className="h-4 w-4" />
									<span>Chat With Amaka</span>
								</a>
							</div>

							<p className="mx-auto mt-10 max-w-xl text-xs leading-relaxed text-primary-foreground/60">
								This is an independent Hutu Exclusive buyer information and advisory website. I am not the developer or the
								official website of Mshel Homes. Property purchase payments are made directly to Mshel Homes.
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			{/* Video Modal Dialog */}
			<Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
				<DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-black text-white border-white/20">
					<DialogHeader className="p-4 bg-black/90 text-white">
						<DialogTitle className="font-display text-lg text-white">
							{videoType === 'drive' ? 'Drive to Hutu Exclusive Estate' : 'Hutu Exclusive Overview'}
						</DialogTitle>
						<DialogDescription className="text-xs text-white/70">
							Official Mshel Homes video walkthrough and estate updates
						</DialogDescription>
					</DialogHeader>
					<div className="relative aspect-video w-full bg-black">
						<iframe
							src="https://www.youtube-nocookie.com/embed?listType=user_uploads&list=UCy4xAfy9yDVJ5BMdsEjGvfQ"
							title="Hutu Exclusive Video Walkthrough"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="h-full w-full border-0"
						/>
					</div>
					<div className="flex items-center justify-between p-4 bg-black/90">
						<p className="text-xs text-white/60">Watch more field reports on the official YouTube channel</p>
						<a
							href={YOUTUBE_CHANNEL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
						>
							<span>Visit Channel</span>
							<ExternalLink className="h-3.5 w-3.5" />
						</a>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
