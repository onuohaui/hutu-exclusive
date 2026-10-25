import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, Check, Phone } from 'lucide-react';
import AdvisorDialog from '@/components/AdvisorDialog';
import CTABand from '@/components/CTABand';
import PhasePropertyList from '@/components/PhasePropertyList';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import FaqList from '@/components/FaqList';
import { FAQS, PHASES } from '@/data/site';
import { formatNaira, getPhaseInventorySummary, getPropertiesByPhase } from '@/lib/properties';

export default function PhasePage({ slug }) {
	const phase = PHASES.find((p) => p.slug === slug);
	if (!phase) return <Navigate to="/" replace />;

	const listings = getPropertiesByPhase(phase.name);
	const summary = getPhaseInventorySummary(phase.name);
	const sizeLabel = summary.sizes.length ? `${summary.sizes.join(', ')} sqm` : 'No land sizes published';

	return (
		<>
			<Helmet>
				<title>{`Hutu Exclusive Abuja ${phase.name} — Prices, Plots & Payment Plans`}</title>
				<meta name="description" content={`${phase.name} at Hutu Exclusive Abuja: ${phase.short}. See ${summary.count} current property records, prices, deposits and payment plans.`} />
			</Helmet>

			<section className="relative flex min-h-[70dvh] items-end">
				<img src={phase.image} alt={`${phase.name} at Hutu Exclusive`} className="absolute inset-0 h-full w-full object-cover" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
				<div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:px-8">
					<Reveal>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Residential · {phase.status}</p>
						<h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">{phase.name}</h1>
						<p className="mt-3 max-w-2xl text-lg text-white/85">{phase.short} · {summary.count} active options · current prices from {formatNaira(summary.startingPrice)}.</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-5">
					<Reveal className="lg:col-span-3">
						<SectionHeading eyebrow="Overview" title={`What to know about ${phase.name}`} />
						<p className="mt-5 text-base leading-relaxed text-muted-foreground">{phase.overview}</p>
						<ul className="mt-8 space-y-3">
							{phase.highlights.map((h) => (
								<li key={h} className="flex items-start gap-3 text-sm">
									<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
									<span>{h}</span>
								</li>
							))}
						</ul>
					</Reveal>
					<Reveal delay={0.1} className="lg:col-span-2">
						<div className="rounded-lg border border-border bg-card p-6">
							<h2 className="font-display text-xl font-medium">Inventory at a glance</h2>
							<dl className="mt-5 divide-y divide-border border-y border-border text-sm">
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Active property records</dt><dd className="font-semibold">{summary.count}</dd></div>
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Land options</dt><dd className="font-semibold">{summary.landCount}</dd></div>
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">House / apartment options</dt><dd className="font-semibold">{summary.homeCount}</dd></div>
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Published land sizes</dt><dd className="max-w-[14rem] text-right font-semibold">{sizeLabel}</dd></div>
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Current price from</dt><dd className="font-semibold text-primary">{formatNaira(summary.startingPrice)}</dd></div>
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Minimum published deposit</dt><dd className="font-semibold text-primary">{formatNaira(summary.minimumDeposit)}</dd></div>
							</dl>
							<AdvisorDialog
								defaultInterest={slug}
								trigger={
									<button className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]">
										<Phone className="h-4 w-4" />
										Ask About {phase.name}
									</button>
								}
							/>
							<p className="mt-3 text-center text-xs text-muted-foreground">Full cost sheet — including documentation and levies — provided in writing before payment.</p>
						</div>
					</Reveal>
				</div>
			</section>

			<PhasePropertyList phase={phase.name} properties={listings} />

			<section className="border-t border-border bg-secondary/60">
				<div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
					<Reveal><SectionHeading eyebrow="Buyer Questions" title={`Questions about ${phase.name}`} copy="Review the essentials, then confirm phase-specific details in writing before you pay." /></Reveal>
					<Reveal delay={0.08}><FaqList items={FAQS.slice(0, 4)} className="mt-8" idPrefix={`${slug}-faq`} /></Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<Reveal>
					<div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card p-6">
						<p className="text-sm font-medium">Compare before you decide:</p>
						<div className="flex flex-wrap gap-3">
							{PHASES.filter((p) => p.slug !== slug).map((p) => (
								<Link key={p.slug} to={`/residential/${p.slug}`} className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
									{p.name} <ArrowRight className="h-4 w-4" />
								</Link>
							))}
							<Link to="/payment-plans" className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
								Payment Plans <ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</Reveal>
			</section>

			<CTABand title={`Thinking about ${phase.name}?`} copy="An advisor can confirm current availability, exact plot locations on the layout, and a full cost breakdown — before you commit to anything." />
		</>
	);
}
