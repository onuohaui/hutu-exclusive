import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
	ArrowRight,
	Camera,
	CheckCircle2,
	Compass,
	FileCheck,
	Gift,
	HeartHandshake,
	HelpCircle,
	MapPin,
	MessageCircle,
	Phone,
	Quote,
	Search,
	ShieldCheck,
	Sparkles,
	Star,
	Video,
} from 'lucide-react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { getAdvisorWhatsAppUrl } from '@/config/site';

function PhotoPlaceholder({ label, aspect = 'aspect-[4/5]', className = '', sublabel = '' }) {
	return (
		<div
			className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-border bg-secondary/60 p-6 text-center transition-all hover:border-primary/40 hover:bg-secondary/80 ${aspect} ${className}`}
		>
			<div className="grid h-12 w-12 place-items-center rounded-full bg-background/90 text-muted-foreground shadow-xs transition-transform group-hover:scale-110 group-hover:text-primary">
				<Camera className="h-5 w-5" />
			</div>
			<p className="mt-3.5 max-w-xs font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
				{label}
			</p>
			{sublabel && <p className="mt-1.5 max-w-xs text-xs text-muted-foreground">{sublabel}</p>}
			<span className="absolute bottom-3 rounded-full bg-background/80 px-3 py-0.5 text-[10px] font-medium tracking-wider text-muted-foreground backdrop-blur-xs">
				Photo Space
			</span>
		</div>
	);
}

export default function MeetAdvisorPage() {
	const credibilityStats = [
		{
			value: '₦500M+',
			label: 'Hutu Exclusive property sales handled',
		},
		{
			value: '20+ Clients',
			label: 'Served since Hutu Exclusive launched',
		},
		{
			value: 'Abuja-Based',
			label: 'Local knowledge and inspection support',
		},
		{
			value: 'Buyer-Focused',
			label: 'Clear advice without unnecessary pressure',
		},
	];

	const supportAreas = [
		{
			number: '01',
			title: 'Find What Fits Your Budget',
			copy: 'I help you narrow down the available properties, phases, sizes and payment options based on what you can realistically spend.',
		},
		{
			number: '02',
			title: 'Compare Before You Choose',
			copy: 'Compare Phase 1 & 2, Phase 3, Phase 5, land, houses, apartments and commercial options before deciding.',
		},
		{
			number: '03',
			title: 'Inspect Before You Commit',
			copy: 'I can coordinate a physical site inspection or help you inspect virtually if you are outside Abuja.',
		},
		{
			number: '04',
			title: 'Get Straight Answers',
			copy: 'If there is something I think you should consider before choosing a property or phase, I’ll tell you.',
		},
		{
			number: '05',
			title: 'Follow Through After Payment',
			copy: 'I remain involved with payment confirmation, documentation, allocation follow-up and communication with Mshel Homes.',
		},
		{
			number: '06',
			title: 'Independent Verification When Needed',
			copy: 'If you want an additional legal opinion, I can coordinate independent document or title verification through a lawyer for a separate professional fee.',
		},
	];

	const testimonials = [
		{
			quote:
				'“I am extremely satisfied with Amaka’s service. She exceeded my expectations with her performance. She was excellent, thorough and her replies were prompt. I highly recommend her to anyone looking to buy Hutu Exclusive or property in Nigeria.”',
			author: 'Ifechinyere Uzo',
			location: 'Verified Hutu Exclusive Buyer',
			isPlaceholder: false,
		},
		{
			quote:
				'“As a Nigerian living in the diaspora, deciding to buy real estate in Nigeria was difficult. However, with Amaka, I acquired my first investment back home. From virtual inspections to consistent communication, she made the whole process easy. I definitely recommend her.”',
			author: 'Jenniffer Chinyere',
			location: 'Diaspora Buyer',
			isPlaceholder: false,
		},
		{
			quote: '[REAL BUYER TESTIMONIAL PLACEHOLDER]',
			author: '[BUYER NAME]',
			location: 'Verified Client',
			isPlaceholder: true,
		},
		{
			quote: '[REAL BUYER TESTIMONIAL PLACEHOLDER]',
			author: '[BUYER NAME]',
			location: 'Verified Client',
			isPlaceholder: true,
		},
		{
			quote: '[REAL BUYER TESTIMONIAL PLACEHOLDER]',
			author: '[BUYER NAME]',
			location: 'Verified Client',
			isPlaceholder: true,
		},
		{
			quote: '[REAL BUYER TESTIMONIAL PLACEHOLDER]',
			author: '[BUYER NAME]',
			location: 'Verified Client',
			isPlaceholder: true,
		},
	];

	return (
		<>
			{/* SEO Metadata */}
			<Helmet>
				<title>Meet Amaka Okorie | Hutu Exclusive Property Advisor Abuja</title>
				<meta
					name="description"
					content="Meet Amaka Okorie, a Hutu Exclusive Property Advisor in Abuja who has handled ₦500M+ in Hutu Exclusive property sales and helps buyers compare phases, inspect properties and navigate their purchase."
				/>
			</Helmet>
			<Seo
				title="Meet Amaka Okorie | Hutu Exclusive Property Advisor Abuja"
				description="Meet Amaka Okorie, a Hutu Exclusive Property Advisor in Abuja who has handled ₦500M+ in Hutu Exclusive property sales and helps buyers compare phases, inspect properties and navigate their purchase."
			/>

			{/* =========================================================================
			    1. HERO + CREDIBILITY
			   ========================================================================= */}
			<section className="border-b border-border bg-secondary/60">
				<div className="page-container py-16 sm:py-20 lg:py-24">
					<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
						{/* Left Column: Copy & CTAs */}
						<div className="lg:col-span-7">
							<Reveal>
								<h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
									Hi, I’m Amaka. I’ll Help You Make Sense of Hutu Exclusive.
								</h1>

								<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
									<p>
										Buying property can get confusing quickly. There are different phases, plot sizes, prototypes, prices,
										payment plans and plenty of opinions about what you should buy.
									</p>
									<p>
										I help you cut through all of that.
									</p>
									<p>
										<strong>
											As a Hutu Exclusive Property Advisor based in Abuja, I’ve helped several clients navigate Hutu Exclusive
											since the estate launched in 2024.
										</strong>
									</p>
									<p>
										My goal is simple: help you understand your options, ask the right questions and choose a property that
										makes sense for your budget, plans and timeline.
									</p>
								</div>

								{/* CTAs */}
								<div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
									<a
										href={getAdvisorWhatsAppUrl(
											'Hi Amaka, I’m considering Hutu Exclusive and I’d like some guidance.'
										)}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
									>
										<MessageCircle className="h-4 w-4 fill-current" />
										<span>Chat With Me on WhatsApp</span>
									</a>
									<Link
										to="/inspection"
										className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-xs transition-all hover:bg-secondary"
									>
										<span>Book a Site Inspection</span>
										<ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</Reveal>
						</div>

						{/* Right Column: Hero Photo */}
						<div className="lg:col-span-5">
							<Reveal delay={0.1}>
								<div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-md">
									<div className="aspect-square overflow-hidden bg-muted">
										<img
											src="/images/advisor/amaka-okorie.png"
											alt="Amaka Okorie — Hutu Exclusive Property Advisor Abuja"
											className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
											loading="eager"
										/>
									</div>
									<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border/60 bg-background/85 p-3.5 shadow-sm backdrop-blur-md">
										<div>
											<p className="font-display text-sm font-bold text-foreground">Amaka Okorie</p>
											<p className="text-xs text-muted-foreground">Hutu Exclusive Property Advisor</p>
										</div>
										<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
											<span className="h-1.5 w-1.5 rounded-full bg-primary" />
											Abuja
										</span>
									</div>
								</div>
							</Reveal>
						</div>
					</div>

					{/* Credibility Strip */}
					<div className="mt-14 border-t border-border/80 pt-10">
						<div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border/70">
							{credibilityStats.map((stat, index) => (
								<Reveal key={stat.label} delay={index * 0.05}>
									<div className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
										<p className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
											{stat.value}
										</p>
										<p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
											{stat.label}
										</p>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* =========================================================================
			    2. WHY I DO THIS
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
						{/* Secondary Photo */}
						<div className="order-2 lg:order-1 lg:col-span-5">
							<div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-md">
								<div className="aspect-[3/5] overflow-hidden bg-muted">
									<img
										src="/images/advisor/amaka-okorie-secondary.png"
										alt="Amaka Okorie — Property Advisor at Hutu Exclusive Abuja"
										className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
										loading="lazy"
									/>
								</div>
								<div className="border-t border-border/60 bg-secondary/50 p-4 text-center">
									<p className="font-display text-sm font-semibold text-foreground">
										Independent Buyer Guidance
									</p>
									<p className="mt-0.5 text-xs text-muted-foreground">
										Objective advice, clear information &amp; dedicated support
									</p>
								</div>
							</div>
						</div>

						{/* Narrative Copy */}
						<div className="order-1 lg:order-2 lg:col-span-7">
							<SectionHeading
								title="Why I Built This for Buyers"
								copy="When Hutu Exclusive launched, I noticed that buyers kept asking the same questions."
							/>

							<div className="mt-6 space-y-2 border-l-2 border-primary/30 pl-4 text-sm font-medium italic text-muted-foreground sm:text-base">
								<p>What is the difference between Hutu Abuja and Hutu Exclusive?</p>
								<p>Which phase should I choose?</p>
								<p>What can I actually afford?</p>
								<p>Which property suits what I’m trying to achieve?</p>
								<p>Where can I find clear information without immediately being pushed to buy?</p>
							</div>

							<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
								<p>
									That is one of the reasons I created this website.
								</p>
								<p>
									I wanted you to have somewhere you could understand the development, compare your options, check current
									information and ask questions before making a major financial decision.
								</p>
								<p>
									And that is still how I work with buyers today.
								</p>
							</div>

							{/* Three Principles */}
							<div className="mt-8 space-y-5 border-t border-border pt-6">
								<div>
									<h2 className="font-display text-lg font-bold text-foreground">Honesty</h2>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										If I think another phase, a cheaper property or a different option makes more sense for you, I’ll tell
										you.
									</p>
								</div>
								<div>
									<h2 className="font-display text-lg font-bold text-foreground">Transparency</h2>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										I want you to understand what you are buying, what you are paying for and what happens next.
									</p>
								</div>
								<div>
									<h2 className="font-display text-lg font-bold text-foreground">Exceptional Customer Experience</h2>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										For me, good customer service goes beyond replying to a message. It means being responsive, paying
										attention, remembering the details that matter to you, following through and doing the extra work that makes
										the process easier.
									</p>
								</div>
							</div>

							{/* Highlighted Statement */}
							<div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-foreground sm:p-6">
								<p className="font-display text-lg font-bold text-primary sm:text-xl">
									“I’d rather help you make the right decision than make the fastest sale.”
								</p>
							</div>
						</div>
					</div>
				</Reveal>
			</section>

			{/* =========================================================================
			    3. WHAT WORKING WITH ME LOOKS LIKE
			   ========================================================================= */}
			<section className="border-y border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							title="You Don’t Have to Figure Everything Out Alone"
							copy="You may already know exactly what you want, or you may only know how much you can afford. Either is a good place to start."
						/>
					</Reveal>

					{/* Editorial List Layout (2 columns on desktop, 1 column on mobile) */}
					<div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
						{supportAreas.map((area, index) => (
							<Reveal key={area.title} delay={index * 0.04}>
								<div className="flex items-start gap-4 border-b border-border/60 pb-6">
									<span className="font-mono text-xs font-bold text-accent shrink-0 pt-0.5">
										{area.number}
									</span>
									<div>
										<h2 className="font-display text-lg font-bold text-foreground">{area.title}</h2>
										<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{area.copy}</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>

					{/* Buyer Perk Callout */}
					<Reveal delay={0.2}>
						<div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
							<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
								<div className="flex items-start gap-4">
									<div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
										<Gift className="h-6 w-6" />
									</div>
									<div>
										<h2 className="font-display text-xl font-bold text-foreground">A Little Extra for My Buyers</h2>
										<p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
											Where applicable, buyers purchasing through me may also receive special discounts, promotional benefits
											and a personal curated buyer gift after completing their purchase.
										</p>
									</div>
								</div>
								<div className="shrink-0">
									<Link
										to="/#offers-and-perks"
										className="inline-flex min-h-11 items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-border"
									>
										<span>See Current Discounts &amp; Perks</span>
										<ArrowRight className="h-3.5 w-3.5" />
									</Link>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    4. PAYMENT TRUST + DIASPORA SUPPORT
			   ========================================================================= */}
			<section className="bg-card/25">
				<div className="page-container py-16 sm:py-20 lg:py-24">
					<Reveal>
						<div className="grid grid-cols-1 divide-y divide-border/60 md:grid-cols-2 md:divide-y-0 md:divide-x">
							{/* Left side: Payment Trust */}
							<div className="flex flex-col justify-between pb-12 md:pb-0 md:pr-8 lg:pr-14">
								<div>
									{/* Compact Icon */}
									<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
										<ShieldCheck className="h-5 w-5" />
									</div>

									<h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
										Your Property Payment Goes Directly to Mshel Homes
									</h2>

									<div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
										<p>
											Buying through me does not mean paying me for your property.
										</p>
										<p>
											Your property purchase funds are paid directly into the official{' '}
											<strong className="font-semibold text-foreground">Mshel Homes company account</strong>.
										</p>
										<p>
											After payment, you send me your confirmation so I can register the transaction correctly and continue
											following up with Mshel Homes on your behalf.
										</p>
										<p>
											You get my support without having to route your property money through an agent.
										</p>
									</div>
								</div>

								{/* Small Trust Note */}
								<div className="mt-8 border-t border-border/60 pt-5">
									<p className="text-xs font-semibold uppercase tracking-wider text-foreground">
										Zero Third-Party Accounts
									</p>
									<p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
										Property payments should always be made directly to the official Mshel Homes company account.
									</p>
								</div>
							</div>

							{/* Right side: Diaspora Support */}
							<div className="flex flex-col justify-between pt-12 md:pt-0 md:pl-8 lg:pl-14">
								<div>
									{/* Compact Icon */}
									<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
										<Video className="h-5 w-5" />
									</div>

									<h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
										Buying From Outside Abuja or Nigeria?
									</h2>

									<div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
										<p>
											Distance should not mean buying blindly.
										</p>
										<p>
											If you cannot visit Hutu Exclusive yourself, I can support you with:
										</p>

										<ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-foreground sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
											{[
												'Live or recorded virtual inspections',
												'WhatsApp video walkthroughs',
												'Property and phase comparisons',
												'Remote buying guidance',
												'Documentation follow-up',
												'Allocation follow-up',
												'Site and development updates',
											].map((item) => (
												<li key={item} className="flex items-start gap-2">
													<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
													<span className="leading-snug">{item}</span>
												</li>
											))}
										</ul>

										<p className="pt-1">
											You can understand what you are considering before committing your money.
										</p>
									</div>

									{/* Integrated Editorial Photo Area */}
									<div className="relative mt-6 flex aspect-[16/7] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-secondary/50 p-4 text-center sm:aspect-[21/8]">
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-muted-foreground shadow-xs">
											<Camera className="h-4 w-4" />
										</div>
										<p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground sm:text-xs">
											[AMAKA SITE VISIT / INSPECTION PHOTO PLACEHOLDER]
										</p>
										<p className="mt-1 hidden max-w-sm text-[11px] text-muted-foreground sm:block">
											Amaka conducting a live on-site inspection or remote walkthrough at Hutu Exclusive
										</p>
									</div>
								</div>

								{/* Diaspora CTAs */}
								<div className="mt-8 flex flex-wrap items-center gap-3">
									<a
										href={getAdvisorWhatsAppUrl(
											'Hi Amaka, I’m buying remotely and I’d like help understanding my Hutu Exclusive options.'
										)}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-dark"
									>
										<MessageCircle className="h-4 w-4 fill-current" />
										<span>Chat With Me on WhatsApp</span>
									</a>
									<Link
										to="/inspection"
										className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-secondary px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-border"
									>
										<span>Book a Virtual Inspection</span>
									</Link>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* =========================================================================
			    5. ABOUT ME + TESTIMONIALS
			   ========================================================================= */}
			<section className="border-t border-border bg-secondary/40">
				<div className="page-container section-space">
					{/* Part 1: A Little About Me */}
					<Reveal>
						<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
							<div className="lg:col-span-6">
								<SectionHeading
									title="A Little About Me"
									copy="Outside property, I’m also a business owner."
								/>

								<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
									<p>
										I enjoy travelling, reading, building businesses and learning new things — which probably explains why I’m
										naturally drawn to solving problems and finding better ways to serve people.
									</p>
									<p>
										Property may be the transaction, but there is always a person behind it making a very real decision with
										their money.
									</p>
									<p className="font-medium text-foreground">
										I try not to forget that.
									</p>
								</div>
							</div>

							{/* Lifestyle Photos (2 cards) */}
							<div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-6">
								<div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md">
									<div className="aspect-[4/5] overflow-hidden bg-muted">
										<img
											src="/images/advisor/amaka-okorie-lifestyle-1.jpg"
											alt="Amaka Okorie — Entrepreneur &amp; Property Advisor"
											className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
											loading="lazy"
										/>
									</div>
								</div>

								<div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md">
									<div className="aspect-[4/5] overflow-hidden bg-muted">
										<img
											src="/images/advisor/amaka-okorie-lifestyle-2.png"
											alt="Amaka Okorie — Personal &amp; Professional Journey"
											className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
											loading="lazy"
										/>
									</div>
								</div>
							</div>
						</div>
					</Reveal>

					{/* Part 2: What Buyers Say About Working With Me */}
					<div className="mt-20 border-t border-border pt-16">
						<Reveal>
							<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
								<div>
									<h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
										What Buyers Say About Working With Me
									</h2>
									<p className="mt-2 text-base text-muted-foreground">
										Real feedback from buyers who navigated Hutu Exclusive with my guidance.
									</p>
								</div>
							</div>
						</Reveal>

						{/* Testimonials Carousel */}
						<div className="mt-10">
							<Carousel
								opts={{
									align: 'start',
									loop: false,
								}}
								className="w-full"
							>
								<div className="mb-6 flex items-center justify-end gap-2">
									<CarouselPrevious className="static translate-y-0" />
									<CarouselNext className="static translate-y-0" />
								</div>
								<CarouselContent className="-ml-4">
									{testimonials.map((t, idx) => (
										<CarouselItem key={idx} className="pl-4 sm:basis-1/2 lg:basis-1/3">
											<div
												className={`flex h-full flex-col justify-between rounded-2xl border p-6 sm:p-7 shadow-xs transition-all ${
													t.isPlaceholder
														? 'border-dashed border-border bg-secondary/30'
														: 'border-border bg-card hover:border-primary/40 hover:shadow-md'
												}`}
											>
												<div>
													<div className="flex items-center justify-between">
														<div className="flex items-center gap-1 text-accent">
															{[...Array(5)].map((_, i) => (
																<Star
																	key={i}
																	className={`h-4 w-4 ${t.isPlaceholder ? 'fill-muted text-muted' : 'fill-accent text-accent'}`}
																/>
															))}
														</div>
														<Quote className="h-6 w-6 text-muted-foreground/30" />
													</div>
													<p
														className={`mt-4 text-sm leading-relaxed ${
															t.isPlaceholder
																? 'font-mono text-xs uppercase tracking-wider text-muted-foreground'
																: 'text-foreground'
														}`}
													>
														{t.quote}
													</p>
												</div>

												<div className="mt-6 border-t border-border pt-4">
													<p
														className={`font-display text-sm font-bold ${
															t.isPlaceholder ? 'font-mono text-xs text-muted-foreground' : 'text-foreground'
														}`}
													>
														{t.author}
													</p>
													<p className="text-xs text-muted-foreground">{t.location}</p>
												</div>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>
					</div>
				</div>
			</section>

			{/* =========================================================================
			    6. FINAL CTA
			   ========================================================================= */}
			<section className="page-container section-space">
				<Reveal>
					<div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-12 lg:p-16">
						<div className="mx-auto max-w-2xl">
							<h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Have a Question About Hutu Exclusive? Ask Me.
							</h2>
							<div className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
								<p>
									You don’t need to have everything figured out before reaching out.
								</p>
								<p>
									Tell me what you’re considering, your budget or even what you’re confused about, and I’ll help you work
									through the options.
								</p>
							</div>

							<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
								<a
									href={getAdvisorWhatsAppUrl('Hi Amaka, I have a question about Hutu Exclusive.')}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
								>
									<MessageCircle className="h-4 w-4 fill-current" />
									<span>Chat With Me on WhatsApp</span>
								</a>
								<Link
									to="/inspection"
									className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-xs transition-all hover:bg-secondary"
								>
									<span>Book a Site Inspection</span>
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>

							<p className="mt-6 text-sm font-medium text-muted-foreground">
								No pressure. Just tell me what you’re trying to achieve and we’ll start there.
							</p>
						</div>
					</div>
				</Reveal>
			</section>
		</>
	);
}
