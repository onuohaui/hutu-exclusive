import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { AlertTriangle, ArrowRight, Check, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdvisorDialog from '@/components/AdvisorDialog';
import CTABand from '@/components/CTABand';
import PaymentPlanFinder from '@/components/PaymentPlanFinder';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import {
	PROPERTY_META,
	PROPERTIES,
	formatNaira,
	getMinimumDeposit,
	getPaymentDurationLabel,
	getPropertyDisplayPrice,
} from '@/lib/properties';

export default function PaymentPlansPage() {
	const [showAllTable, setShowAllTable] = useState(false);
	const residential = PROPERTIES.filter((property) => property.category === 'Residential');
	const commercial = PROPERTIES.filter((property) => property.category === 'Commercial');
	const durations = [...new Set(PROPERTIES.flatMap((property) => [
		...(property.paymentPlans || []).map((plan) => plan.durationMonths),
		...(property.paymentPlan?.durationMonthsAvailable || []),
	]))].sort((a, b) => a - b);

	return (
		<>
			<Helmet>
				<title>Payment Plans — Hutu Exclusive Abuja Buyer Advisory</title>
				<meta name="description" content="Find the payment plan for your property at Hutu Exclusive Abuja. Compare prices, initial deposits and payment durations from the authoritative database." />
			</Helmet>

			{/* Preserved Hero Section */}
			<section className="border-b border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							eyebrow="Payment Plans"
							title="Every published starting amount, in one place"
							copy="Compare the current property price, lowest published initial deposit and available durations recorded in the authoritative property database."
						/>
					</Reveal>
					<div className="mt-12 grid gap-4 sm:grid-cols-3">
						{[
							['Residential records', residential.length],
							['Commercial records', commercial.length],
							['Published durations', durations.length ? `${durations[0]}–${durations.at(-1)} months` : 'Not published'],
						].map(([label, value]) => (
							<div key={label} className="border-t border-border pt-5"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</p><p className="mt-2 font-display text-3xl font-semibold text-primary">{value}</p></div>
						))}
					</div>
				</div>
			</section>

			{/* Guided, Searchable Payment Plan Finder */}
			<section className="page-container section-space">
				<Reveal>
					<div className="max-w-2xl">
						<h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
							Find the Payment Plan for Your Property
						</h2>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground">
							Choose the property you’re considering and see the current price, minimum amount to start and available payment durations.
						</p>
					</div>
				</Reveal>

				{/* Interactive Payment Plan Finder Component */}
				<div className="mt-10">
					<PaymentPlanFinder />
				</div>

				{/* Optional Browse-All Access (Collapsed / Hidden by Default) */}
				<div className="mt-12 border-t border-border/80 pt-8 text-center sm:text-left">
					<button
						type="button"
						onClick={() => setShowAllTable((prev) => !prev)}
						className="inline-flex min-h-11 items-center gap-1.5 py-2 text-sm font-semibold text-primary transition-colors hover:underline"
					>
						<span>{showAllTable ? 'Hide Complete Overview Table ↑' : 'Browse All Payment Plans →'}</span>
					</button>
					<p className="mt-1 text-xs text-muted-foreground">
						{showAllTable
							? 'Showing all 36 active property records across Phase 1 & 2, Phase 3 and Phase 5.'
							: 'Prefer the full raw database? View all 36 properties in an expandable overview table.'}
					</p>

					{showAllTable && (
						<div className="mt-6 overflow-x-auto overscroll-x-contain rounded-lg border border-border bg-card" role="region" aria-label="Complete property payment plans" tabIndex={0}>
							<table className="w-full min-w-[920px] text-left text-sm">
								<thead>
									<tr className="border-b border-border bg-muted/60">
										<th className="px-5 py-4 font-semibold">Property</th>
										<th className="px-5 py-4 font-semibold">Phase</th>
										<th className="px-5 py-4 font-semibold">Current price from</th>
										<th className="px-5 py-4 font-semibold">Minimum to start</th>
										<th className="px-5 py-4 font-semibold">Durations</th>
										<th className="px-5 py-4 font-semibold"></th>
									</tr>
								</thead>
								<tbody className="divide-y divide-border">
									{PROPERTIES.map((property) => {
										const price = getPropertyDisplayPrice(property);
										const deposit = getMinimumDeposit(property);
										return (
											<tr key={property.id} className="align-top hover:bg-muted/20 transition-colors">
												<td className="px-5 py-5">
													<p className="font-semibold">{property.name}</p>
													<p className="mt-1 text-xs text-muted-foreground">{property.productType} · {property.subtype}</p>
													{property.requiresVerification && (
														<p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-warning">
															<AlertTriangle className="h-3.5 w-3.5" /> Verify pricing
														</p>
													)}
												</td>
												<td className="px-5 py-5 text-muted-foreground">
													{property.phase}
													<span className="mt-1 block text-xs">{property.category}</span>
												</td>
												<td className="px-5 py-5 font-semibold text-primary">
													{formatNaira(price)}
													{property.pricingMode === 'per_sqm' && <span className="block text-xs font-normal text-muted-foreground">per sqm</span>}
												</td>
												<td className="px-5 py-5">{deposit == null ? 'Details on request' : formatNaira(deposit)}</td>
												<td className="px-5 py-5">{getPaymentDurationLabel(property)}</td>
												<td className="px-5 py-5">
													<Link to={`/properties/${property.slug}`} className="inline-flex items-center gap-1.5 whitespace-nowrap font-semibold text-primary hover:underline">
														View details <ArrowRight className="h-4 w-4" />
													</Link>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
							<p className="p-4 text-xs leading-5 text-muted-foreground border-t border-border bg-secondary/30">
								Source database updated {PROPERTY_META.lastUpdated}. Records marked for verification retain the source amount but do not guess missing or inconsistent values.
							</p>
						</div>
					)}
				</div>

				{/* Preserved: Before you pay anything */}
				<Reveal delay={0.1}>
					<div className="mt-14 rounded-lg border border-border bg-secondary/50 p-6 sm:p-8">
						<h2 className="font-display text-xl font-medium">Before you pay anything</h2>
						<ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
							<li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Request a current written cost sheet for the exact property and duration.</li>
							<li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Independently verify the title and transaction documents.</li>
							<li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Use confirmed official payment channels only.</li>
							<li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Keep the contract, payment schedule and every receipt together.</li>
						</ul>
						<AdvisorDialog
							trigger={<button className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"><Phone className="h-4 w-4" /> Get a Personalised Payment Schedule</button>}
						/>
					</div>
				</Reveal>
			</section>

			{/* Preserved: CTABand */}
			<CTABand title="Want a plan built around your budget?" copy="Use the property database to shortlist an option, then ask an advisor for its current written payment schedule." />
		</>
	);
}
