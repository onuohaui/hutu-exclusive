import React from 'react';
import { AlertTriangle, BedDouble, Building2, CalendarDays, Check, Clock3, MapPin, MessageCircle, Ruler, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdvisorDialog from '@/components/AdvisorDialog';
import Breadcrumbs from '@/components/Breadcrumbs';
import PropertyImage from '@/components/PropertyImage';
import {
	PROPERTY_META,
	formatNaira,
	getCommercialPricePerSqm,
	getMinimumDeposit,
	getPaymentDurationLabel,
	getPaymentPlans,
	getPropertySizeLabel,
	getStartingPrice,
} from '@/lib/properties';

const formatUpdatedMonth = (value) => {
	const [year, month] = String(value).split('-').map(Number);
	if (!year || !month) return value;
	return new Intl.DateTimeFormat('en-NG', { month: 'long', year: 'numeric' }).format(new Date(year, month - 1, 1));
};

export default function PropertyDetail({ property }) {
	const plans = getPaymentPlans(property);
	const startingPrice = getStartingPrice(property);
	const minimumDeposit = getMinimumDeposit(property);
	const commercialPrice = getCommercialPricePerSqm(property);
	const isCommercial = property.pricingMode === 'per_sqm';

	return (
		<>
			<section className="border-b border-border bg-secondary/50">
				<div className="page-container py-8">
					<Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Properties', to: '/#explore' }, { label: property.name }]} />
				</div>
			</section>

			<section className="page-container section-space">
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-7">
						<PropertyImage property={property} eager className="aspect-[4/3] rounded-lg border border-border" />
						<div className="mt-4 grid grid-cols-2 gap-4">
							{['Additional property view', 'Floor plan / layout'].map((label) => (
								<div key={label} className="flex aspect-[16/10] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-secondary/50 px-5 text-center">
									<Building2 className="h-6 w-6 text-primary/45" strokeWidth={1.4} />
									<p className="mt-3 text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">{label}</p>
									<p className="mt-1 text-xs text-muted-foreground">Placeholder</p>
								</div>
							))}
						</div>
					</div>

					<div className="lg:col-span-5 lg:pt-2">
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{property.phase} · {property.category}</p>
						<h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{property.name}</h1>
						<p className="mt-4 text-lg leading-relaxed text-muted-foreground">{property.subtype}</p>
						<div className="mt-8 border-l-2 border-accent pl-5">
							<p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{isCommercial ? 'Current price from, per sqm' : 'Current price from'}</p>
							<p className="mt-2 font-display text-3xl font-semibold text-primary">{formatNaira(isCommercial ? commercialPrice : startingPrice)}{isCommercial && <span className="text-base font-medium"> / sqm</span>}</p>
						</div>

						<dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6 border-y border-border py-7 text-sm">
							<div className="flex gap-3"><Building2 className="h-5 w-5 text-primary" /><div><dt className="text-muted-foreground">Property type</dt><dd className="mt-1 font-semibold">{property.productType}</dd></div></div>
							<div className="flex gap-3"><Ruler className="h-5 w-5 text-primary" /><div><dt className="text-muted-foreground">Size</dt><dd className="mt-1 font-semibold">{getPropertySizeLabel(property)}</dd></div></div>
							{property.bedrooms != null && <div className="flex gap-3"><BedDouble className="h-5 w-5 text-primary" /><div><dt className="text-muted-foreground">Bedrooms</dt><dd className="mt-1 font-semibold">{property.bedrooms}</dd></div></div>}
							<div className="flex gap-3"><Clock3 className="h-5 w-5 text-primary" /><div><dt className="text-muted-foreground">Payment duration</dt><dd className="mt-1 font-semibold">{getPaymentDurationLabel(property)}</dd></div></div>
							<div className="flex gap-3"><Wallet className="h-5 w-5 text-primary" /><div><dt className="text-muted-foreground">Minimum to start</dt><dd className="mt-1 font-semibold">{minimumDeposit == null ? 'Details on request' : formatNaira(minimumDeposit)}</dd></div></div>
							<div className="flex gap-3"><MapPin className="h-5 w-5 text-primary" /><div><dt className="text-muted-foreground">Location</dt><dd className="mt-1 font-semibold">{PROPERTY_META.location}</dd></div></div>
						</dl>

						<div className="mt-8 grid gap-3 sm:grid-cols-2">
							<AdvisorDialog
								defaultInterest={property.slug}
								trigger={<button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"><MessageCircle className="h-4 w-4" /> Chat with an Advisor</button>}
							/>
							<Link to="/inspection" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-secondary"><CalendarDays className="h-4 w-4" /> Book Inspection</Link>
						</div>

						<p className="mt-5 text-xs leading-5 text-muted-foreground">Database updated {formatUpdatedMonth(property.lastUpdated)}. Confirm current availability and receive a written cost sheet before making payment.</p>
					</div>
				</div>
			</section>

			<section className="border-y border-border bg-secondary/40">
				<div className="page-container section-space">
					<div className="grid min-w-0 gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
						<div className="min-w-0">
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Payment details</p>
							<h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Choose from the published plans</h2>
							<p className="mt-4 text-sm leading-7 text-muted-foreground">Every amount below comes directly from the property database. Where the source requires confirmation, it is marked clearly.</p>
						</div>

						<div className="min-w-0">
							{isCommercial ? (
								<>
									<div className="overflow-x-auto overscroll-x-contain rounded-lg border border-border bg-card" role="region" aria-label="Commercial property payment rates" tabIndex={0}>
										<table className="w-full min-w-[560px] text-left text-sm">
											<thead><tr className="border-b border-border bg-muted/60"><th className="px-5 py-4 font-semibold">Floor</th><th className="px-5 py-4 font-semibold">Price per sqm</th><th className="px-5 py-4 font-semibold">Minimum space total</th></tr></thead>
											<tbody className="divide-y divide-border">{property.floorPricing.map((floor) => <tr key={floor.floor}><td className="px-5 py-4 font-medium">{floor.floor}</td><td className="px-5 py-4">{formatNaira(floor.pricePerSqm)}</td><td className="px-5 py-4 font-semibold text-primary">{formatNaira(floor.pricePerSqm * property.minimumSqm)}</td></tr>)}</tbody>
										</table>
									</div>
									<div className="mt-5 rounded-lg border border-border bg-card p-5 text-sm leading-6 text-muted-foreground"><strong className="text-foreground">Payment plan:</strong> {property.paymentPlan.note}</div>
								</>
							) : plans.length ? (
								<div className="overflow-x-auto overscroll-x-contain rounded-lg border border-border bg-card" role="region" aria-label="Property payment plans" tabIndex={0}>
									<table className="w-full min-w-[720px] text-left text-sm">
										<thead><tr className="border-b border-border bg-muted/60"><th className="px-5 py-4 font-semibold">Duration</th><th className="px-5 py-4 font-semibold">Total price</th><th className="px-5 py-4 font-semibold">Initial deposit</th><th className="px-5 py-4 font-semibold">Monthly payment</th></tr></thead>
										<tbody className="divide-y divide-border">
											{plans.map((plan) => (
												<React.Fragment key={`${plan.durationMonths}-${plan.totalPrice}`}>
													<tr><td className="px-5 py-4 font-medium">{plan.durationMonths} months</td><td className="px-5 py-4 font-semibold text-primary">{formatNaira(plan.totalPrice)}</td><td className="px-5 py-4">{formatNaira(plan.initialDeposit)}{plan.depositPercent != null && <span className="block text-xs text-muted-foreground">{plan.depositPercent}%</span>}</td><td className="px-5 py-4">{formatNaira(plan.monthlyPayment)}</td></tr>
													{plan.note && <tr><td colSpan="4" className="bg-secondary/60 px-5 py-3 text-xs leading-5 text-muted-foreground"><span className="inline-flex items-start gap-2"><AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning" /> {plan.note}</span></td></tr>}
												</React.Fragment>
											))}
										</tbody>
									</table>
								</div>
							) : (
								<div className="rounded-lg border border-warning/30 bg-card p-6">
									<div className="flex gap-3"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" /><div><h3 className="font-display text-lg font-semibold">Payment plan requires verification</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{property.pricingNote}</p></div></div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{property.finishing && (
				<section className="page-container section-space">
					<div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
						<div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Finishing</p><h2 className="mt-3 font-display text-3xl font-semibold">{property.finishing}</h2></div>
						<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{property.finishingIncludes.map((item) => <div key={item} className="flex gap-2.5 border-t border-border py-4 text-sm"><Check className="h-4 w-4 shrink-0 text-success" /> {item}</div>)}</div>
					</div>
				</section>
			)}
		</>
	);
}
