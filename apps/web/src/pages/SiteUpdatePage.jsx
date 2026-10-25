import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin, Phone } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import AdvisorDialog from '@/components/AdvisorDialog';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABand from '@/components/CTABand';
import Seo from '@/components/Seo';
import { UPDATES } from '@/data/site';

const PHASE_ROUTES = {
	'phase-1-2': '/residential/phase-1-2',
	'phase-3': '/residential/phase-3',
	'phase-5': '/residential/phase-5',
};

export default function SiteUpdatePage() {
	const { slug } = useParams();
	const update = UPDATES.find((item) => item.slug === slug);
	if (!update) return <Navigate to="/not-found" replace />;

	const title = `${update.title} — Hutu Exclusive Abuja Site Update`;
	const otherUpdates = UPDATES.filter((item) => item.slug !== update.slug).slice(0, 2);

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={update.excerpt} />
				<script type="application/ld+json">
					{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: update.title, description: update.excerpt, image: update.image, articleSection: update.category, author: { '@type': 'Organization', name: 'Hutu Exclusive' }, mainEntityOfPage: `https://hutuexclusive.com/site-updates/${update.slug}` })}
				</script>
			</Helmet>
			<Seo title={title} description={update.excerpt} image={update.image} type="article" />

			<article>
				<header className="border-b border-border bg-secondary/60">
					<div className="page-container pb-16 pt-8 md:pb-20">
						<Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Site Updates', to: '/site-updates' }, { label: update.title }]} />

						<div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-16">
							<div>
								<div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.17em]">
									<span className="text-accent">{update.category}</span>
									<span className="h-px w-8 bg-border" aria-hidden="true" />
									<span className="inline-flex items-center gap-1.5 text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" /> {update.date}</span>
								</div>
								<h1 className="mt-5 max-w-5xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{update.title}</h1>
								<p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{update.excerpt}</p>
							</div>
							<div className="border-l-2 border-accent pl-6">
								<p className="font-display text-6xl font-medium leading-none tracking-tight text-primary">{update.metric}</p>
								<p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.15em] text-muted-foreground">{update.metricLabel}</p>
								<p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"><MapPin className="h-4 w-4" /> {update.phase}, Abuja</p>
							</div>
						</div>
					</div>
				</header>

				<div className="page-container section-space">
					<figure>
						<div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted md:aspect-[21/9]">
							<img src={update.image} alt="" className="h-full w-full object-cover" />
						</div>
						<figcaption className="mt-3 max-w-3xl text-xs leading-5 text-muted-foreground">{update.imageCaption}</figcaption>
					</figure>

					<div className="mt-14 grid gap-12 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-14 xl:grid-cols-[220px_minmax(0,760px)_minmax(0,1fr)]">
						<aside>
							<div className="border-t-2 border-primary pt-5 lg:sticky lg:top-28">
								<p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-accent">Report details</p>
								<dl className="mt-5 divide-y divide-border border-y border-border text-sm">
									{[
										['Reporting month', update.date],
										['Phase', update.phase],
										['Type', update.category],
										['Status', update.status],
									].map(([label, value]) => (
										<div key={label} className="py-3.5">
											<dt className="text-xs text-muted-foreground">{label}</dt>
											<dd className="mt-1 font-semibold text-foreground">{value}</dd>
										</div>
									))}
								</dl>
								{PHASE_ROUTES[update.relatedPhase] && (
									<Link to={PHASE_ROUTES[update.relatedPhase]} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
										View {update.phase} <ArrowRight className="h-4 w-4" />
									</Link>
								)}
							</div>
						</aside>

						<div>
							<section>
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Update summary</p>
								<h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">What was recorded</h2>
								<p className="mt-6 text-[1.0625rem] leading-8 text-muted-foreground">{update.content}</p>
							</section>

							<section className="mt-12 border-t border-border pt-10">
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Recorded milestones</p>
								<h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">The report, at a glance</h2>
								<ul className="mt-7 divide-y divide-border border-y border-border">
									{update.highlights.map((highlight, index) => (
										<li key={highlight} className="flex gap-4 py-5">
											<span className="text-xs font-semibold tracking-[0.14em] text-accent">{String(index + 1).padStart(2, '0')}</span>
											<span className="text-base leading-7 text-foreground/80">{highlight}</span>
										</li>
									))}
								</ul>
							</section>

							<section className="mt-12 rounded-lg bg-primary p-7 text-primary-foreground sm:p-9">
								<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-primary-foreground/60"><Clock3 className="h-4 w-4 text-accent" /> Important context</div>
								<h2 className="mt-4 font-display text-2xl font-semibold">This report is dated, not live.</h2>
								<p className="mt-3 text-sm leading-7 text-primary-foreground/75">Construction progress, availability and prices can change after publication. Request current dated evidence or inspect the site before relying on this record.</p>
								<div className="mt-6 flex flex-col gap-3 sm:flex-row">
									<Link to="/inspection" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-background px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary">
										Book an inspection <ArrowRight className="h-4 w-4" />
									</Link>
									<AdvisorDialog
										trigger={
											<button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
												<Phone className="h-4 w-4" /> Request current evidence
											</button>
										}
									/>
								</div>
							</section>

							<footer className="mt-12 border-t border-border pt-6">
								<Link to="/site-updates" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> Back to all site updates</Link>
							</footer>
						</div>

						<aside className="hidden xl:block">
							<div className="sticky top-28 border-t border-border pt-5">
								<p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-muted-foreground">Other records</p>
								<div className="mt-4 divide-y divide-border border-b border-border">
									{otherUpdates.map((item) => (
										<Link key={item.slug} to={`/site-updates/${item.slug}`} className="group block py-5">
											<p className="text-xs font-semibold uppercase tracking-[0.13em] text-accent">{item.date}</p>
											<p className="mt-2 font-display text-base font-semibold leading-snug transition-colors group-hover:text-primary">{item.title}</p>
											<span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">Open report <ArrowRight className="h-3.5 w-3.5" /></span>
										</Link>
									))}
								</div>
							</div>
						</aside>
					</div>
				</div>
			</article>

			<CTABand title="See the current site condition" copy="Book an inspection or ask an advisor for the latest dated evidence before making a decision." />
		</>
	);
}
