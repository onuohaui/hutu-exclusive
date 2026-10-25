import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
	ArrowRight,
	Award,
	Building,
	Building2,
	CheckCircle2,
	ChevronRight,
	Compass,
	ExternalLink,
	Globe,
	Handshake,
	HardHat,
	Home,
	Landmark,
	MapPin,
	MessageCircle,
	ShieldCheck,
	Sparkles,
	UserCheck,
} from 'lucide-react';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { getAdvisorWhatsAppUrl } from '@/config/site';

const MSHEL_HOMES_URL = 'https:\u002F\u002Fwww.mshelhomes.com/';

export default function MeetDeveloperPage() {
	const glanceStats = [
		{
			value: '2018',
			label: 'Established',
			description: 'Mshel Homes was incorporated in September 2018.',
		},
		{
			value: 'Abuja',
			label: 'Headquartered',
			description: 'The company is headquartered in Abuja, Nigeria.',
		},
		{
			value: '20+ Estates',
			label: 'Development Track Record',
			description: 'The company’s official leadership profile reports more than twenty estates developed.',
		},
		{
			value: '1,500+ Housing Units',
			label: 'Residential Development',
			description: 'The company’s official leadership profile reports more than 1,500 housing units developed across locations in Abuja.',
		},
	];

	const portfolioPillars = [
		{
			title: 'Estate Land',
			copy: 'Serviced and residential plots within planned communities.',
			icon: Compass,
		},
		{
			title: 'Apartments',
			copy: 'Residential apartment developments across different locations and price levels.',
			icon: Building,
		},
		{
			title: 'Terrace Homes',
			copy: 'Multi-level residential properties within selected estates.',
			icon: Home,
		},
		{
			title: 'Duplexes',
			copy: 'Semi-detached and fully detached homes across several developments.',
			icon: Building2,
		},
		{
			title: 'Construction & Infrastructure',
			copy: 'Building construction and supporting infrastructure associated with residential developments.',
			icon: HardHat,
		},
	];

	const groupBusinesses = [
		{ name: 'Mshel Homes', category: 'Real Estate & Development' },
		{ name: 'Mshel Construction', category: 'Civil & Structural Engineering' },
		{ name: 'Lisa Suites', category: 'Hospitality & Short Let' },
		{ name: 'Mshel Logistics', category: 'Supply Chain & Haulage' },
		{ name: 'Mshel Consult', category: 'Project & Strategic Advisory' },
		{ name: 'Mshel Foundation', category: 'Community & Social Impact' },
		{ name: 'Mshel Blocks & Machineries', category: 'Building Materials Manufacturing' },
		{ name: 'Mshel Prints', category: 'Publishing & Media Production' },
	];

	const hutuBreakdown = [
		'serviced residential land',
		'developer-built houses',
		'apartments',
		'commercial property',
		'recreation',
		'sporting facilities',
		'hospitality',
		'supporting community infrastructure',
	];

	return (
		<>
			{/* SEO Metadata */}
			<Helmet>
				<title>Meet Mshel Homes | Developer of Hutu Exclusive Abuja</title>
				<meta
					name="description"
					content="Learn about Mshel Homes, the Abuja real estate developer behind Hutu Exclusive, its leadership, development experience and role in your Hutu Exclusive property purchase."
				/>
			</Helmet>
			<Seo
				title="Meet Mshel Homes | Developer of Hutu Exclusive Abuja"
				description="Learn about Mshel Homes, the Abuja real estate developer behind Hutu Exclusive, its leadership, development experience and role in your Hutu Exclusive property purchase."
			/>

			{/* =========================================================================
			    1. HERO SECTION
			   ========================================================================= */}
			<section className="border-b border-border bg-secondary/60">
				<div className="page-container py-16 sm:py-20 lg:py-24">
					<Reveal>
						<div className="max-w-3xl">
							<h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
								Meet the Developer Behind Hutu Exclusive
							</h1>

							<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
								<p>
									<a
										href={MSHEL_HOMES_URL}
										target="_blank"
										rel="noopener noreferrer"
										className="font-semibold text-primary underline underline-offset-4 decoration-primary/30 transition-colors hover:decoration-primary"
									>
										Mshel Homes Limited
									</a>{' '}
									is the real estate developer behind Hutu Exclusive, the residential, leisure and commercial development along
									Airport Road, Abuja.
								</p>
								<p>
									Established in 2018 and headquartered in Abuja, Mshel Homes develops estate land, apartments, terraces, duplexes
									and other residential property across Nigeria.
								</p>
								<p>
									If you are considering Hutu Exclusive, this page gives you a clearer understanding of the company responsible
									for developing the estate and processing your property purchase.
								</p>
							</div>

							{/* Hero CTAs */}
							<div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
								<Link
									to="/about/hutu-exclusive"
									className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
								>
									<span>Explore Hutu Exclusive</span>
									<ArrowRight className="h-4 w-4" />
								</Link>
								<a
									href={MSHEL_HOMES_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-xs transition-all hover:bg-secondary"
								>
									<span>Visit Mshel Homes</span>
									<ExternalLink className="h-4 w-4 text-muted-foreground" />
								</a>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    2. ABOUT MSHEL HOMES
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
						<div>
							<SectionHeading
								title="A Nigerian Real Estate Developer Based in Abuja"
								copy="Mshel Homes Limited is a real estate development and marketing company incorporated in September 2018 and headquartered in Abuja."
							/>

							<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
								<p>
									The company works across real estate development, building construction, housing estates, infrastructure and
									property-related services.
								</p>
								<p>
									Mshel Homes describes its approach around real estate value, home ownership, honesty, integrity and customer
									experience.
								</p>
								<p>
									Hutu Exclusive is one of the developments within this wider real estate portfolio.
								</p>
							</div>
						</div>

						{/* Portfolio Checklist Card */}
						<div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
							<p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Property Portfolio</p>
							<h2 className="mt-2 font-display text-xl font-bold text-foreground">
								What Mshel Homes Develops &amp; Builds
							</h2>
							<p className="mt-2 text-xs leading-relaxed text-muted-foreground">
								Across Abuja and selected national locations, the company&apos;s portfolio encompasses:
							</p>

							<ul className="mt-5 space-y-2.5 text-sm text-foreground">
								{[
									'estate land',
									'apartments',
									'terrace homes',
									'semi-detached duplexes',
									'fully detached duplexes',
									'residential developments',
									'infrastructure and construction projects',
								].map((item) => (
									<li key={item} className="flex items-center gap-3">
										<div className="grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
											<CheckCircle2 className="h-3.5 w-3.5" />
										</div>
										<span className="capitalize">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Reveal>
			</section>

			{/* =========================================================================
			    3. COMPANY AT A GLANCE
			   ========================================================================= */}
			<section className="border-y border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							title="Company at a Glance"
							copy="Factual milestones and official operational scale behind Mshel Homes Limited."
						/>
					</Reveal>

					<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{glanceStats.map((stat, index) => (
							<Reveal key={stat.label} delay={index * 0.05}>
								<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
									<p className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">{stat.value}</p>
									<p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
										{stat.label}
									</p>
									<p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{stat.description}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* =========================================================================
			    4. MEET THE LEADERSHIP
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
						<div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr]">
							{/* Official Portrait */}
							<div className="relative min-h-[380px] bg-muted sm:min-h-[460px] lg:min-h-full">
								<img
									src="/images/leadership/barka-umaru-mshelia.png"
									alt="Arc. Dr. Barka Umaru Mshelia — GMD/CEO, Mshel Homes Limited"
									className="h-full w-full object-cover object-top"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
								<div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
									<p className="font-display text-lg font-bold">Arc. Dr. Barka Umaru Mshelia</p>
									<p className="text-xs text-white/80">GMD/CEO, Mshel Homes Limited</p>
								</div>
							</div>

							{/* Bio & Details */}
							<div className="p-7 sm:p-10 lg:p-12">
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Executive Leadership</p>
								<h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
									Arc. Dr. Barka Umaru Mshelia
								</h2>
								<p className="mt-1 text-base font-semibold text-primary">GMD/CEO, Mshel Homes Limited</p>

								<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
									<p>
										Mshel Homes is led by <strong>Arc. Dr. Barka Umaru Mshelia</strong>, an architect and business leader with
										experience across real estate development, project management, business development and strategic
										management.
									</p>
									<p>
										His professional background combines architecture with property development and business leadership, and he
										has overseen the growth of Mshel Homes since its early years.
									</p>
									<p>
										According to his official company profile, he has led the development of more than twenty estates and over
										1,500 housing units across Abuja.
									</p>
								</div>

								<div className="mt-8 border-t border-border pt-6">
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="rounded-lg border border-border bg-secondary/50 p-4">
											<p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estates Led</p>
											<p className="mt-1 font-display text-xl font-bold text-foreground">20+ Developments</p>
											<p className="mt-1 text-xs text-muted-foreground">Master-planned residential schemes in Abuja</p>
										</div>
										<div className="rounded-lg border border-border bg-secondary/50 p-4">
											<p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Housing Units</p>
											<p className="mt-1 font-display text-xl font-bold text-foreground">1,500+ Delivered</p>
											<p className="mt-1 text-xs text-muted-foreground">Architectural design and construction</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
			</section>

			{/* =========================================================================
			    5. WHAT MSHEL HOMES DEVELOPS
			   ========================================================================= */}
			<section className="border-t border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							title="More Than One Type of Property"
							copy="Different buyers have different property needs, so Mshel Homes' portfolio extends across several real estate categories."
						/>
					</Reveal>

					<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{portfolioPillars.map((item, index) => {
							const IconComponent = item.icon;
							return (
								<Reveal key={item.title} delay={index * 0.05}>
									<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
										<div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
											<IconComponent className="h-5 w-5" />
										</div>
										<h2 className="mt-5 font-display text-lg font-bold text-foreground">{item.title}</h2>
										<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
									</div>
								</Reveal>
							);
						})}
					</div>
				</div>
			</section>

			{/* =========================================================================
			    6. MSHEL HOMES AND HUTU EXCLUSIVE
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10 lg:p-12">
						<div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
							<div>
								<SectionHeading
									title="The Developer Behind Hutu Exclusive"
									copy="Hutu Exclusive forms part of Mshel Homes' wider property development portfolio."
								/>

								<p className="mt-4 text-base leading-relaxed text-muted-foreground">
									The project goes beyond a conventional residential estate by combining:
								</p>

								<div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
									{hutuBreakdown.map((feature) => (
										<div key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
											<CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
											<span className="capitalize">{feature}</span>
										</div>
									))}
								</div>

								<p className="mt-6 text-sm leading-relaxed text-muted-foreground">
									For a full breakdown of the development, phases, amenities and currently available property options, explore
									the dedicated Hutu Exclusive Overview page.
								</p>

								<div className="mt-8">
									<Link
										to="/about/hutu-exclusive"
										className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
									>
										<span>Understand Hutu Exclusive</span>
										<ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>

							<div className="rounded-xl border border-border bg-secondary/50 p-6 sm:p-8">
								<h2 className="font-display text-lg font-bold text-foreground">The Hutu Exclusive Vision</h2>
								<p className="mt-2 text-xs leading-relaxed text-muted-foreground">
									Abuja&apos;s 250+ hectare eco-friendly golf estate and integrated community along Airport Road, Lugbe South, before
									Centenary City.
								</p>
								<div className="mt-6 space-y-3 border-t border-border pt-4 text-xs text-muted-foreground">
									<div className="flex justify-between py-1 border-b border-border/50">
										<span className="font-medium text-foreground">Master Developer:</span>
										<span>Mshel Homes Limited</span>
									</div>
									<div className="flex justify-between py-1 border-b border-border/50">
										<span className="font-medium text-foreground">Master Scale:</span>
										<span>250+ Hectares</span>
									</div>
									<div className="flex justify-between py-1 border-b border-border/50">
										<span className="font-medium text-foreground">Active Phases:</span>
										<span>Phase 1 &amp; 2, Phase 3, Phase 5</span>
									</div>
									<div className="flex justify-between py-1">
										<span className="font-medium text-foreground">Corridor:</span>
										<span>Airport Road, Lugbe South</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
			</section>

			{/* =========================================================================
			    7. THE WIDER MSHEL GROUP
			   ========================================================================= */}
			<section className="border-t border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							title="Part of a Broader Business Group"
							copy="Mshel Homes operates within Mshel Group, a Nigerian group of companies with interests across real estate, construction, hospitality, logistics, consulting and other services."
						/>
					</Reveal>

					<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{groupBusinesses.map((biz, index) => (
							<Reveal key={biz.name} delay={index * 0.04}>
								<div className="rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:border-primary/40">
									<div className="flex items-center gap-2.5">
										<div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary font-display text-xs font-bold">
											M
										</div>
										<h2 className="font-display text-sm font-bold text-foreground">{biz.name}</h2>
									</div>
									<p className="mt-2.5 text-xs text-muted-foreground">{biz.category}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* =========================================================================
			    8. PRESERVED — ANTI-FRAUD & PAYMENT INTEGRITY POLICY
			   ========================================================================= */}
			<section className="border-y border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal>
						<div className="overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-8 shadow-sm sm:p-10 lg:p-12">
							<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
								<div className="max-w-2xl">
									<div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-accent">
										<ShieldCheck className="h-4 w-4" />
										<span>Anti-Fraud &amp; Payment Integrity Policy</span>
									</div>
									<h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
										All property payments go directly to Mshel Homes
									</h2>
									<p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
										Buying through an independent advisor does <strong>not</strong> mean paying the advisor. Every Naira for your
										land, home, or commercial unit is paid directly into the official corporate bank account of Mshel Homes
										Limited. No agent, staff, or representative is authorized to collect cash or receive payments into personal
										accounts.
									</p>
									<ul className="mt-6 space-y-3 text-sm text-foreground">
										<li className="flex items-start gap-2.5">
											<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
											<span>
												<strong>Your property purchase funds are never paid to your advisor or into a personal bank account.</strong>
											</span>
										</li>
										<li className="flex items-start gap-2.5">
											<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
											<span>
												<strong>
													Confirm that the beneficiary details provided for your property payment belong to Mshel Homes Limited
													before making a transfer.
												</strong>
											</span>
										</li>
										<li className="flex items-start gap-2.5">
											<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
											<span>
												<strong>
													After payment, send your payment confirmation to your advisor so your transaction can be registered,
													followed up and supported with Mshel Homes.
												</strong>
											</span>
										</li>
									</ul>
								</div>

								{/* Official Site Office Card */}
								<div className="rounded-xl border border-border bg-secondary/80 p-6 lg:max-w-xs">
									<p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Official Site Office</p>
									<p className="mt-2 font-display text-lg font-semibold text-foreground">Hutu Exclusive Main Gate</p>
									<p className="mt-1 text-xs text-muted-foreground">Abuja, Federal Capital Territory</p>
									<p className="mt-4 text-xs font-medium text-muted-foreground">
										Inspections run Monday to Saturday. Book your inspection with your advisor in advance so your visit can be
										coordinated and you can focus on the phases and property options relevant to you.
									</p>
									<Link
										to="/inspection"
										className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
									>
										Schedule Inspection <ArrowRight className="h-3.5 w-3.5" />
									</Link>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    9. PRESERVED — WORKING TOGETHER SECTION
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<SectionHeading
						title="How the Developer and Your Advisor Complement Each Other"
						copy="Understanding the distinct roles ensures you receive both developer-backed legal security and dedicated buyer representation."
					/>
				</Reveal>

				<div className="mt-12 grid gap-8 md:grid-cols-2">
					{/* Master Developer Card */}
					<Reveal delay={0.05}>
						<div className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-sm">
							<div className="flex items-center gap-3">
								<div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
									<Building2 className="h-5 w-5" />
								</div>
								<div>
									<p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Master Developer</p>
									<h2 className="font-display text-xl font-bold text-foreground">Mshel Homes</h2>
								</div>
							</div>
							<ul className="mt-6 flex-1 space-y-3.5 text-sm text-muted-foreground">
								<li className="flex items-start gap-2.5">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
									<span>Acquires the land, surveys boundaries, and holds master estate title</span>
								</li>
								<li className="flex items-start gap-2.5">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
									<span>Constructs roads, drainage channels, gates, and utility corridors</span>
								</li>
								<li className="flex items-start gap-2.5">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
									<span>Issues official receipts, Contracts of Sale, and Deeds of Assignment</span>
								</li>
								<li className="flex items-start gap-2.5">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
									<span>Executes physical plot and prototype house allocations</span>
								</li>
							</ul>
							<div className="mt-8 border-t border-border pt-4">
								<p className="text-xs text-muted-foreground">
									Official corporate developer for all property legal agreements.
								</p>
							</div>
						</div>
					</Reveal>

					{/* Buyer Representation Card */}
					<Reveal delay={0.1}>
						<div className="flex h-full flex-col rounded-xl border-2 border-primary/40 bg-card p-8 shadow-sm">
							<div className="flex items-center gap-3">
								<div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
									<Handshake className="h-5 w-5" />
								</div>
								<div>
									<p className="text-[10px] font-bold uppercase tracking-wider text-accent">Buyer Representation</p>
									<h2 className="font-display text-xl font-bold text-foreground">Your Hutu Advisor</h2>
								</div>
							</div>
							<ul className="mt-6 flex-1 space-y-3.5 text-sm text-muted-foreground">
								<li className="flex items-start gap-2.5">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
									<span>Guides you through phase selection without pushing developer inventory targets</span>
								</li>
								<li className="flex items-start gap-2.5">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
									<span>Coordinates private physical walkthroughs or live diaspora video calls</span>
								</li>
								<li className="flex items-start gap-2.5">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
									<span>
										<strong>Gives you exclusive buyer perks and promotional discounts</strong>
									</span>
								</li>
								<li className="flex items-start gap-2.5">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
									<span>Follows through with documentation, receipts, and allocation tracking</span>
								</li>
							</ul>
							<div className="mt-8 border-t border-border pt-4">
								<Link
									to="/about/meet-your-advisor"
									className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
								>
									Learn more about advisory representation <ArrowRight className="h-3.5 w-3.5" />
								</Link>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    10. WHY THE TWO ROLES MATTER
			   ========================================================================= */}
			<section className="border-t border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal>
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
								The Developer Handles the Property. Your Advisor Helps You Navigate the Decision.
							</h2>
							<div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
								<p>
									Mshel Homes remains responsible for the development, property transaction, official documentation,
									infrastructure and allocation process.
								</p>
								<p>
									Your advisor&apos;s role is different.
								</p>
								<p>
									You get someone who can help you compare phases, understand available properties, arrange inspections, ask
									questions before committing, follow up after payment and navigate the buying process from your perspective.
								</p>
								<p className="font-medium text-foreground">
									You still transact directly with Mshel Homes for the property itself.
								</p>
							</div>

							<div className="mt-8">
								<Link
									to="/about/meet-your-advisor"
									className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
								>
									<span>Meet Your Advisor</span>
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    11. FINAL CTA
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-12 lg:p-16">
						<div className="mx-auto max-w-2xl">
							<h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Explore Hutu Exclusive Properties
							</h2>
							<p className="mt-4 text-base leading-relaxed text-muted-foreground">
								Now that you know the company behind the development, compare the Hutu Exclusive phases, current property types,
								prices and payment options available to you.
							</p>

							<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
								<Link
									to="/residential"
									className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
								>
									<span>View Available Properties</span>
									<ArrowRight className="h-4 w-4" />
								</Link>
								<a
									href={getAdvisorWhatsAppUrl(
										'Hi Amaka, I have a few questions about Mshel Homes and the properties at Hutu Exclusive.'
									)}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-xs transition-all hover:bg-secondary"
								>
									<MessageCircle className="h-4 w-4 text-primary" />
									<span>Chat With Amaka</span>
								</a>
							</div>
						</div>
					</div>
				</Reveal>

				{/* Independent Website Disclosure */}
				<div className="mx-auto mt-8 max-w-3xl text-center">
					<p className="text-xs leading-relaxed text-muted-foreground">
						Mshel Homes is the developer of Hutu Exclusive. This website is independently operated to provide buyer information
						and advisory support and is not the official website of Mshel Homes. Property purchase payments are made directly to
						Mshel Homes.
					</p>
				</div>
			</section>
		</>
	);
}
