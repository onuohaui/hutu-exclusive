import React from 'react';
import { Helmet } from 'react-helmet';
import { Check, Phone } from 'lucide-react';
import AdvisorDialog from '@/components/AdvisorDialog';
import CTABand from '@/components/CTABand';
import PropertyGrid from '@/components/PropertyGrid';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import FaqList from '@/components/FaqList';
import { COMMERCIAL, FAQS } from '@/data/site';
import { formatNaira, getCommercialPricePerSqm, getPaymentDurationLabel, getPropertiesByCategory } from '@/lib/properties';

export default function CommercialPage() {
	const listings = getPropertiesByCategory('Commercial');
	const commercialProperty = listings[0];
	const pricePerSqm = getCommercialPricePerSqm(commercialProperty);

	return (
		<>
			<Helmet>
				<title>Hutu Exclusive Shopping Mall — Commercial Property in Abuja</title>
				<meta name="description" content="Hutu Exclusive Shopping Mall space in Phase 1 & 2. See the published floor-by-floor price per sqm, minimum space and payment-plan duration." />
			</Helmet>

			<section className="relative flex min-h-[70dvh] items-end">
				<img src={COMMERCIAL.image} alt="Commercial district at Hutu Exclusive" className="absolute inset-0 h-full w-full object-cover" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
				<div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:px-8">
					<Reveal>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Commercial · {COMMERCIAL.status}</p>
						<h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">Hutu Exclusive Shopping Mall</h1>
						<p className="mt-3 max-w-xl text-lg text-white/85">{COMMERCIAL.short} · from {formatNaira(pricePerSqm)} per sqm · {commercialProperty.minimumSqm} sqm minimum.</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-5">
					<Reveal className="lg:col-span-3">
						<SectionHeading eyebrow="Overview" title="Business space where the residents already are" />
						<p className="mt-5 text-base leading-relaxed text-muted-foreground">{COMMERCIAL.overview}</p>
						<ul className="mt-8 space-y-3">
							{COMMERCIAL.highlights.map((h) => (
								<li key={h} className="flex items-start gap-3 text-sm">
									<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
									<span>{h}</span>
								</li>
							))}
						</ul>
					</Reveal>
					<Reveal delay={0.1} className="lg:col-span-2">
						<div className="rounded-lg border border-border bg-card p-6">
							<h2 className="font-display text-xl font-medium">Published commercial terms</h2>
							<dl className="mt-5 divide-y divide-border border-y border-border text-sm">
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Property</dt><dd className="text-right font-semibold">{commercialProperty.name}</dd></div>
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Phase</dt><dd className="font-semibold">{commercialProperty.phase}</dd></div>
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Minimum space</dt><dd className="font-semibold">{commercialProperty.minimumSqm} sqm</dd></div>
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Payment duration</dt><dd className="font-semibold">{getPaymentDurationLabel(commercialProperty)}</dd></div>
								<div className="flex items-center justify-between gap-4 py-3.5"><dt className="text-muted-foreground">Initial deposit</dt><dd className="font-semibold">Details on request</dd></div>
							</dl>
							<AdvisorDialog
								defaultInterest="commercial"
								trigger={
									<button className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]">
										<Phone className="h-4 w-4" />
										Ask About Commercial
									</button>
								}
							/>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="border-t border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading eyebrow="Floor Pricing" title="Published price per square metre" copy={`Every calculation uses the ${commercialProperty.minimumSqm} sqm minimum recorded in the property database.`} />
					</Reveal>
					<div className="mt-10 overflow-x-auto overscroll-x-contain rounded-lg border border-border bg-card" role="region" aria-label="Commercial floor pricing" tabIndex={0}>
						<table className="w-full min-w-[520px] text-left text-sm">
							<thead><tr className="border-b border-border bg-muted/60"><th className="px-5 py-4 font-semibold">Floor</th><th className="px-5 py-4 font-semibold">Price per sqm</th><th className="px-5 py-4 font-semibold">Minimum {commercialProperty.minimumSqm} sqm total</th></tr></thead>
							<tbody className="divide-y divide-border">
								{commercialProperty.floorPricing.map((floor) => (
									<tr key={floor.floor}><td className="px-5 py-4 font-medium">{floor.floor}</td><td className="px-5 py-4 text-primary">{formatNaira(floor.pricePerSqm)}</td><td className="px-5 py-4 font-semibold text-primary">{formatNaira(floor.pricePerSqm * commercialProperty.minimumSqm)}</td></tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{listings.length > 0 && (
				<section className="border-t border-border bg-secondary/60">
					<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
						<Reveal>
							<SectionHeading eyebrow="Available Now" title="Commercial listings" />
						</Reveal>
						<PropertyGrid properties={listings} className="mt-10" />
					</div>
				</section>
			)}

			<section className="border-t border-border bg-secondary/60">
				<div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
					<Reveal><SectionHeading eyebrow="Buyer Questions" title="Questions about buying commercial property" copy="Start with the common documentation, payment and allocation questions, then request the current commercial cost sheet." /></Reveal>
					<Reveal delay={0.08}><FaqList items={FAQS.slice(0, 3)} className="mt-8" idPrefix="commercial-faq" /></Reveal>
				</div>
			</section>

			<CTABand title="Want the commercial layout and price list?" copy="An advisor will send the boulevard layout, available unit numbers and a full cost sheet — and can arrange a site walk-through." />
		</>
	);
}
