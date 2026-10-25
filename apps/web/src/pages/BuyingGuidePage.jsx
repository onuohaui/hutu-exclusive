import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
	ArrowRight,
	Calendar,
	CheckCircle2,
	ChevronDown,
	Clock,
	FileText,
	HelpCircle,
	Info,
	Lightbulb,
	MessageCircle,
	ShieldAlert,
	Target,
	Wrench
} from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';
import BuyingGuideCard from '@/components/BuyingGuideCard';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BUYING_GUIDES } from '@/data/buyingGuides';
import { WHATSAPP_NUMBER } from '@/config/site';
import { cn } from '@/lib/utils';

function CalloutBox({ callout }) {
	if (!callout) return null;

	const configs = {
		'advisor-tip': {
			bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200',
			icon: <Lightbulb className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />,
			label: 'Advisor Tip'
		},
		'before-you-pay': {
			bg: 'bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-200',
			icon: <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />,
			label: 'Before You Pay'
		},
		'important': {
			bg: 'bg-rose-500/10 border-rose-500/30 text-rose-950 dark:text-rose-200',
			icon: <ShieldAlert className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />,
			label: 'Important'
		},
		'good-to-know': {
			bg: 'bg-primary/10 border-primary/25 text-foreground',
			icon: <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />,
			label: 'Good to Know'
		}
	};

	const config = configs[callout.type] || configs['good-to-know'];

	return (
		<aside className={cn('my-6 rounded-lg border p-4.5 sm:p-5 text-sm leading-relaxed', config.bg)}>
			<div className="flex items-start gap-3">
				{config.icon}
				<div>
					<p className="font-semibold">{callout.title || config.label}</p>
					<p className="mt-1 opacity-90">{callout.text}</p>
				</div>
			</div>
		</aside>
	);
}

export default function BuyingGuidePage() {
	const { slug } = useParams();
	const guide = BUYING_GUIDES.find((item) => item.slug === slug);

	if (!guide) {
		return <Navigate to="/not-found" replace />;
	}

	const relatedGuides = (guide.relatedGuideSlugs || [])
		.map((s) => BUYING_GUIDES.find((item) => item.slug === s))
		.filter(Boolean)
		.slice(0, 3);

	const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
		`Hi Amaka, I was reading the "${guide.title}" guide and I would like to discuss my options.`
	)}`;

	return (
		<>
			<Helmet>
				<title>{guide.seoTitle}</title>
				<meta name="description" content={guide.metaDescription} />
				<script type="application/ld+json">
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'HowTo',
						name: guide.title,
						description: guide.summary,
						totalTime: `PT${guide.readTimeMinutes}M`,
						step: guide.steps.map((step) => ({
							'@type': 'HowToStep',
							name: step.title,
							text: step.paragraphs.join(' ')
						}))
					})}
				</script>
			</Helmet>
			<Seo
				title={guide.seoTitle}
				description={guide.metaDescription}
				image={guide.featuredImage}
				type="article"
			/>

			{/* A. Guide Hero (Handbook Style) */}
			<header className="border-b border-border bg-card/60 pt-8 pb-12 sm:pb-16">
				<div className="page-container">
					<Breadcrumbs
						items={[
							{ label: 'Home', to: '/' },
							{ label: 'Buyer Resources', to: '/buying-guides' },
							{ label: 'Buying Guides', to: '/buying-guides' },
							{ label: guide.title }
						]}
					/>

					<div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center">
						<div>
							<div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
								<span className="rounded-md bg-primary/10 px-2.5 py-1 text-primary">
									{guide.category}
								</span>
								<span className="text-muted-foreground flex items-center gap-1">
									<Clock className="h-3.5 w-3.5" />
									{guide.readTimeMinutes} min read
								</span>
								<span className="text-muted-foreground flex items-center gap-1">
									<Calendar className="h-3.5 w-3.5" />
									Updated {guide.lastUpdated}
								</span>
							</div>

							<h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
								{guide.title}
							</h1>

							<p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
								{guide.summary}
							</p>
						</div>

						<div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
							<img
								src={guide.featuredImage}
								alt={guide.title}
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</header>

			{/* B. At a Glance (Compact Summary) */}
			{guide.atAGlance && (
				<section className="border-b border-border bg-secondary/35 py-8">
					<div className="page-container">
						<div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-xs">
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
								At a Glance
							</p>
							<div className="mt-5 grid gap-6 sm:grid-cols-3">
								<div className="flex gap-3">
									<Target className="h-5 w-5 shrink-0 text-primary mt-0.5" />
									<div>
										<h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
											Who this is for
										</h2>
										<p className="mt-1.5 text-sm leading-relaxed text-foreground">
											{guide.atAGlance.whoFor}
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
									<div>
										<h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
											What you will learn
										</h2>
										<p className="mt-1.5 text-sm leading-relaxed text-foreground">
											{guide.atAGlance.whatYouWillLearn}
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<FileText className="h-5 w-5 shrink-0 text-primary mt-0.5" />
									<div>
										<h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
											What you may need
										</h2>
										<p className="mt-1.5 text-sm leading-relaxed text-foreground">
											{guide.atAGlance.whatYouNeed}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Main Content Layout with Sticky TOC */}
			<div className="page-container py-12 lg:py-16">
				{/* Mobile Expandable Table of Contents */}
				<details className="mb-8 rounded-lg border border-border bg-card p-4 lg:hidden">
					<summary className="flex min-h-11 cursor-pointer items-center justify-between text-sm font-semibold text-primary">
						<span>On This Guide ({guide.steps.length} Steps)</span>
						<ChevronDown className="h-4 w-4" />
					</summary>
					<ol className="mt-4 space-y-2 text-sm">
						{guide.steps.map((step) => (
							<li key={step.number}>
								<a
									href={`#step-${step.number}`}
									className="flex gap-2 text-muted-foreground hover:text-primary transition-colors"
								>
									<span className="font-semibold text-accent">{step.number}</span>
									<span>{step.title}</span>
								</a>
							</li>
						))}
					</ol>
				</details>

				<div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_300px]">
					{/* C. Desktop Sticky Table of Contents */}
					<aside className="hidden lg:block">
						<div className="sticky top-28 space-y-4">
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
								On This Guide
							</p>
							<div className="h-px w-10 bg-accent" aria-hidden="true" />
							<ol className="space-y-3 text-sm">
								{guide.steps.map((step) => (
									<li key={step.number}>
										<a
											href={`#step-${step.number}`}
											className="group flex items-start gap-2.5 text-muted-foreground transition-colors hover:text-primary"
										>
											<span className="text-xs font-bold text-accent group-hover:text-primary">
												{step.number}
											</span>
											<span className="leading-snug">{step.title}</span>
										</a>
									</li>
								))}
							</ol>
						</div>
					</aside>

					{/* D & E. Step-by-Step Content & Practical Callouts */}
					<main>
						<div className="space-y-12">
							{guide.steps.map((step) => (
								<section
									key={step.number}
									id={`step-${step.number}`}
									className="scroll-mt-28 border-b border-border/80 pb-10 last:border-b-0"
								>
									<div className="flex items-center gap-3">
										<span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
											{step.number}
										</span>
										<h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
											{step.title}
										</h2>
									</div>

									<div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
										{step.paragraphs.map((p, idx) => (
											<p key={idx}>{p}</p>
										))}
									</div>

									{step.callout && <CalloutBox callout={step.callout} />}
								</section>
							))}
						</div>

						{/* F. Relevant Tool Banner */}
						{guide.relevantTool && (
							<aside className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
										<Wrench className="h-5 w-5" />
									</div>
									<div className="flex-1">
										<p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
											Interactive Tool
										</p>
										<h2 className="mt-1 font-display text-xl font-semibold text-foreground">
											{guide.relevantTool.title}
										</h2>
										<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
											{guide.relevantTool.description}
										</p>
										<Link
											to={guide.relevantTool.to}
											className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
										>
											<span>{guide.relevantTool.buttonText}</span>
											<ArrowRight className="h-4 w-4" />
										</Link>
									</div>
								</div>
							</aside>
						)}

						{/* G. Related Buyer Questions */}
						{guide.relatedQuestions && guide.relatedQuestions.length > 0 && (
							<section className="mt-14 border-t border-border pt-10">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2 text-foreground font-display text-xl font-semibold">
										<HelpCircle className="h-5 w-5 text-accent" />
										<span>Common Buyer Questions</span>
									</div>
									<Link
										to="/buyer-questions"
										className="text-xs font-semibold text-primary hover:underline"
									>
										View All FAQ →
									</Link>
								</div>

								<Accordion type="single" collapsible className="mt-6 w-full">
									{guide.relatedQuestions.map((item, idx) => (
										<AccordionItem key={idx} value={`item-${idx}`}>
											<AccordionTrigger className="text-left font-medium text-base">
												{item.q}
											</AccordionTrigger>
											<AccordionContent className="text-sm leading-relaxed text-muted-foreground">
												{item.a}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</section>
						)}
					</main>

					{/* Desktop Contextual Right Sidebar */}
					<aside className="hidden xl:block">
						<div className="sticky top-28 space-y-6">
							<div className="rounded-xl border border-border bg-card p-6 shadow-xs">
								<p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
									Advisor Guidance
								</p>
								<h2 className="mt-2 font-display text-lg font-semibold leading-snug">
									Need help applying this guide?
								</h2>
								<p className="mt-2 text-xs leading-relaxed text-muted-foreground">
									Share your budget and timeline directly with Amaka for personalized phase and prototype recommendations.
								</p>
								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
								>
									<MessageCircle className="h-4 w-4" />
									Chat on WhatsApp
								</a>
								<Link
									to="/inspection"
									className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
								>
									Book Site Inspection
								</Link>
							</div>
						</div>
					</aside>
				</div>
			</div>

			{/* H. Related Buying Guides */}
			{relatedGuides.length > 0 && (
				<section className="border-t border-border bg-secondary/40 py-16">
					<div className="page-container">
						<div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
									Continue Reading
								</p>
								<h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
									Related Buying Guides
								</h2>
							</div>
							<Link
								to="/buying-guides"
								className="text-sm font-semibold text-primary hover:underline"
							>
								Browse All Guides →
							</Link>
						</div>

						<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{relatedGuides.map((item) => (
								<BuyingGuideCard key={item.slug} guide={item} />
							))}
						</div>
					</div>
				</section>
			)}

			{/* I. Final Conversion CTA */}
			<section className="bg-primary text-primary-foreground py-16 sm:py-20">
				<div className="page-container text-center max-w-3xl">
					<Reveal>
						<h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
							Still unsure which option fits you?
						</h2>
						<p className="mt-4 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
							Tell me what you are considering and I can help you narrow down your options.
						</p>
						<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
							>
								<MessageCircle className="h-4 w-4" />
								<span>Chat With Me on WhatsApp</span>
							</a>
							<Link
								to="/inspection"
								className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-dark/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
							>
								<span>Book a Site Inspection</span>
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</Reveal>
				</div>
			</section>
		</>
	);
}
