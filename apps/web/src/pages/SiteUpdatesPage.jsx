import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Check, ExternalLink, MapPin, Play, Route } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABand from '@/components/CTABand';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { HERO_SLIDES, UPDATES } from '@/data/site';

const YOUTUBE_CHANNEL = 'https://www.youtube.com/channel/UCy4xAfy9yDVJ5BMdsEjGvfQ';

const VIDEO_CARDS = [
	{
		title: 'Phase 3 infrastructure walkthroughs',
		copy: 'See longer field videos covering roads, drainage and the changing condition of Phase 3.',
		image: HERO_SLIDES[5].src,
		label: 'Infrastructure',
	},
	{
		title: 'Construction progress, up close',
		copy: 'Follow building milestones and get a fuller view of work across the developed phases.',
		image: HERO_SLIDES[4].src,
		label: 'Construction',
	},
	{
		title: 'Estate tours and buyer briefings',
		copy: 'Take a wider look around Hutu Exclusive and watch practical updates for prospective buyers.',
		image: HERO_SLIDES[0].src,
		label: 'Estate overview',
	},
];

const groupUpdates = (updates) => updates.reduce((groups, update) => {
	const existingGroup = groups.find((group) => group.date === update.date);
	if (existingGroup) existingGroup.items.push(update);
	else groups.push({ date: update.date, items: [update] });
	return groups;
}, []);

export default function SiteUpdatesPage() {
	const [activeCategory, setActiveCategory] = useState('All updates');
	const [latestUpdate] = UPDATES;
	const categories = [...new Set(UPDATES.map((update) => update.category))];
	const filteredUpdates = useMemo(
		() => activeCategory === 'All updates' ? UPDATES : UPDATES.filter((update) => update.category === activeCategory),
		[activeCategory],
	);
	const groupedUpdates = groupUpdates(filteredUpdates);

	return (
		<>
			<Helmet>
				<title>Site Updates — Hutu Exclusive Abuja</title>
				<meta name="description" content="Development, construction and availability updates from Hutu Exclusive Abuja — dated, specific progress reports you can verify on inspection." />
			</Helmet>
			<Seo title="Site Updates — Hutu Exclusive Abuja" description="Dated development, construction and availability records from Hutu Exclusive Abuja, with clear ways to verify current progress." />

			<section className="border-b border-border bg-background">
				<div className="page-container py-16 md:py-20 lg:py-24">
					<div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:gap-20">
							<div>
								<div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
									<span>Hutu Exclusive</span><span className="h-px w-8 bg-accent/50" /><span>Changelog</span>
								</div>
								<h1 className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
									Every meaningful change, in one place.
								</h1>
							</div>
							<div className="border-l border-border pl-6 lg:pb-1">
								<p className="text-base leading-8 text-muted-foreground">
									A dated log of what changed across the estate—from infrastructure and construction to availability that affects a buying decision.
								</p>
								<div className="mt-7 flex items-center gap-3 text-sm font-medium text-foreground">
									<span className="h-2.5 w-2.5 rounded-full bg-success" />
									Updated through {latestUpdate.date}
								</div>
							</div>
					</div>
				</div>
			</section>

			<section className="bg-primary text-primary-foreground" aria-label="Update summary">
				<div className="page-container grid divide-y divide-primary-foreground/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
					<div className="py-6 sm:pr-8">
						<p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-primary-foreground/55">Latest report</p>
						<p className="mt-2 font-display text-xl font-semibold">{latestUpdate.date}</p>
					</div>
					<div className="py-6 sm:px-8">
						<p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-primary-foreground/55">Published records</p>
						<p className="mt-2 font-display text-xl font-semibold">{String(UPDATES.length).padStart(2, '0')}</p>
					</div>
					<div className="py-6 sm:pl-8">
						<p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-primary-foreground/55">Location</p>
						<p className="mt-2 flex items-center gap-2 font-display text-xl font-semibold"><MapPin className="h-4 w-4 text-accent" /> Abuja</p>
					</div>
				</div>
			</section>

			<section className="bg-secondary/50">
				<div className="page-container section-space">
					<div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
						<aside className="lg:sticky lg:top-28 lg:self-start">
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Browse the log</p>
							<div className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:items-start" role="group" aria-label="Filter site updates">
								{['All updates', ...categories].map((category) => (
									<button
										key={category}
										type="button"
										onClick={() => setActiveCategory(category)}
										aria-pressed={activeCategory === category}
									className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === category ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background text-muted-foreground hover:border-primary/45 hover:text-primary'}`}
									>
										{category}
									</button>
								))}
							</div>
							<p className="mt-8 hidden border-t border-border pt-5 text-xs leading-6 text-muted-foreground lg:block">Each entry is a dated record. Reconfirm present-day progress, price and availability before buying.</p>
						</aside>

						<div aria-live="polite">
							<div className="mb-9 flex items-end justify-between gap-5 border-b border-border pb-5">
								<div>
									<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Development log</p>
									<h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">What changed, and why it matters</h2>
								</div>
								<p className="hidden text-sm text-muted-foreground sm:block">{filteredUpdates.length} {filteredUpdates.length === 1 ? 'record' : 'records'}</p>
							</div>

							<div className="space-y-14">
								{groupedUpdates.map((group) => (
									<section key={group.date} aria-labelledby={`updates-${group.date.replace(/\s/g, '-').toLowerCase()}`}>
										<div className="mb-5 flex items-center gap-4">
											<h3 id={`updates-${group.date.replace(/\s/g, '-').toLowerCase()}`} className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.17em] text-muted-foreground">{group.date}</h3>
											<span className="h-px flex-1 bg-border" />
										</div>

										<div className="space-y-6">
											{group.items.map((update, index) => (
												<Reveal key={update.slug} delay={index * 0.04}>
													<article className="overflow-hidden rounded-lg border border-border bg-card">
														<div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
															<div className="p-6 sm:p-8 lg:p-10">
																<div className="flex flex-wrap items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em]">
																	<span className="rounded-full bg-secondary px-3 py-1.5 text-primary">{update.category}</span>
																	<span className="inline-flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> {update.phase}</span>
																	<span className="text-muted-foreground">•</span>
																	<span className="text-muted-foreground">{update.status}</span>
																</div>
																<h4 className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
																	<Link to={`/site-updates/${update.slug}`} className="transition-colors hover:text-primary">{update.title}</Link>
																</h4>
																<p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{update.excerpt}</p>

																<div className="mt-7 grid gap-5 border-y border-border py-6 sm:grid-cols-[140px_minmax(0,1fr)]">
																	<div>
																		<p className="font-display text-3xl font-semibold leading-none text-primary">{update.metric}</p>
																		<p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{update.metricLabel}</p>
																	</div>
																	<div className="border-t border-border pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
																		<p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">Buyer impact</p>
																		<p className="mt-2 text-sm leading-6 text-foreground/75">{update.buyerImpact}</p>
																	</div>
																</div>

																<div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
																	<div>
																		<p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">What changed</p>
																		<ul className="mt-3 space-y-2.5">
																			{update.highlights.map((highlight) => (
																				<li key={highlight} className="flex gap-2.5 text-sm leading-6 text-foreground/80"><Check className="mt-1 h-3.5 w-3.5 shrink-0 text-success" /> {highlight}</li>
																			))}
																		</ul>
																	</div>
																	<div>
																		<p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Up next</p>
																		<p className="mt-3 flex gap-2.5 text-sm leading-6 text-foreground/80"><Route className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" /> {update.nextStep}</p>
																	</div>
																</div>

																<Link to={`/site-updates/${update.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
																	Open full record <ArrowRight className="h-4 w-4" />
																</Link>
															</div>

															<Link to={`/site-updates/${update.slug}`} className="group relative min-h-64 overflow-hidden border-t border-border bg-muted lg:min-h-full lg:border-l lg:border-t-0" aria-label={`View ${update.title}`}>
																<img src={update.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none" />
																<div className="absolute inset-x-0 bottom-0 bg-black/65 px-5 py-4 text-xs leading-5 text-white">Dated estate record · {update.date}</div>
															</Link>
														</div>
													</article>
												</Reveal>
											))}
										</div>
									</section>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t border-border bg-background">
				<div className="page-container section-space">
					<Reveal>
						<div className="grid gap-5 border-b border-border pb-7 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)] md:items-end">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Watch the field reports</p>
								<h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">Go beyond the changelog</h2>
							</div>
							<p className="text-sm leading-7 text-muted-foreground">For a longer look at the estate, open the Mshel Homes YouTube channel and watch the latest site walkthroughs and buyer updates.</p>
						</div>
					</Reveal>

					<div className="mt-8 grid gap-6 md:grid-cols-3">
						{VIDEO_CARDS.map((video, index) => (
							<Reveal key={video.title} delay={index * 0.06}>
								<a href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer" className="group block h-full overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40" aria-label={`${video.title} on YouTube (opens in a new tab)`}>
									<div className="relative aspect-[16/10] overflow-hidden bg-muted">
										<img src={video.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none" />
										<div className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />
										<span className="absolute left-5 top-5 rounded-full bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-primary">{video.label}</span>
										<span className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-105"><Play className="ml-0.5 h-4 w-4 fill-current" /></span>
									</div>
									<div className="p-6">
										<h3 className="font-display text-xl font-semibold leading-snug tracking-tight">{video.title}</h3>
										<p className="mt-3 text-sm leading-6 text-muted-foreground">{video.copy}</p>
										<span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Watch on YouTube <ExternalLink className="h-3.5 w-3.5" /></span>
									</div>
								</a>
							</Reveal>
						))}
					</div>
					<div className="mt-8 flex justify-center">
						<a href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Visit the YouTube channel <ExternalLink className="h-4 w-4" /></a>
					</div>
				</div>
			</section>
			<CTABand title="Verify progress in person" copy="Book a site inspection or ask an advisor for the latest dated evidence before making a decision." />
		</>
	);
}
