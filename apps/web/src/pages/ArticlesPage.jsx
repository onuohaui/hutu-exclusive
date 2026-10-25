import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArticleCard from '@/components/ArticleCard';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { ARTICLES } from '@/data/site';
import { getArticleReadingTime } from '@/lib/articles';

export default function ArticlesPage() {
	const featuredArticle = ARTICLES.find((article) => article.slug === 'why-abuja-airport-road-attracts-property-development') || ARTICLES[0];
	const moreArticles = ARTICLES.filter((article) => article.slug !== featuredArticle.slug);
	const readingTime = getArticleReadingTime(featuredArticle);
	const categories = [...new Set(ARTICLES.map((article) => article.category))];

	return (
		<>
			<Helmet><title>Hutu Exclusive Abuja Articles — Buyer Education &amp; Property Guides</title><meta name="description" content="Practical, SEO-focused articles about Hutu Exclusive Abuja properties, phases, prices, payment plans, documents, inspections and buying from abroad." /></Helmet>
			<Seo title="Hutu Exclusive Abuja Articles — Buyer Education & Property Guides" description="Practical, SEO-focused articles about Hutu Exclusive Abuja properties, phases, prices, payment plans, documents, inspections and buying from abroad." />

			<section className="overflow-hidden border-b border-primary-foreground/10 bg-primary text-primary-foreground">
				<div className="page-container py-16 md:py-20 lg:py-24">
					<Reveal>
						<div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:gap-16">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">Hutu Exclusive Journal</p>
								<h1 className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
									Buy property with clarity.
								</h1>
							</div>
							<div className="border-l border-primary-foreground/20 pl-6 lg:pb-1">
								<p className="text-base leading-8 text-primary-foreground/75">
									Practical, straightforward guidance for understanding Hutu Exclusive Abuja before you inspect, compare or commit.
								</p>
								<div className="mt-6 flex flex-wrap gap-2">
									{categories.map((category) => (
										<span key={category} className="rounded-full border border-primary-foreground/25 px-3 py-1.5 text-xs font-medium text-primary-foreground/75">
											{category}
										</span>
									))}
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="page-container section-space">
				<Reveal>
					<div className="mb-8 flex items-center justify-between gap-6 border-b border-border pb-4">
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Featured article</p>
						<p className="text-sm text-muted-foreground">Market insights · Abuja</p>
					</div>
				</Reveal>

				<Reveal delay={0.06}>
					<article className="grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[1.15fr_0.85fr]">
						<Link to={`/articles/${featuredArticle.slug}`} className="group relative min-h-[340px] overflow-hidden bg-muted lg:min-h-[520px]">
							<img src={featuredArticle.featuredImage} alt={featuredArticle.featuredAlt || ''} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none" />
							<span className="absolute left-5 top-5 rounded-full bg-background px-3 py-1.5 text-xs font-semibold text-primary">Featured analysis</span>
						</Link>
						<div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
							<div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
								<span className="text-accent">{featuredArticle.category}</span>
								<span className="h-px w-8 bg-border" aria-hidden="true" />
								<span className="inline-flex items-center gap-1.5 text-muted-foreground"><Clock className="h-3.5 w-3.5" /> {readingTime} min read</span>
							</div>
							<h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{featuredArticle.title}</h2>
							<p className="mt-5 text-base leading-8 text-muted-foreground">{featuredArticle.summary}</p>
							<p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><BookOpen className="h-4 w-4 text-primary" /> By {featuredArticle.author}</p>
							<Link to={`/articles/${featuredArticle.slug}`} className="mt-8 inline-flex min-h-12 w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark">
								{featuredArticle.cardCta || 'Read article'} <ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</article>
				</Reveal>
			</section>

			<section className="border-t border-border bg-secondary/55">
				<div className="page-container section-space">
					<Reveal>
						<div className="mb-10 max-w-2xl">
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">More from the journal</p>
							<h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Guidance for every stage of the decision</h2>
						</div>
					</Reveal>
					<div className="grid gap-10 md:grid-cols-2 lg:gap-12">
						{moreArticles.map((article, index) => (
							<Reveal key={article.slug} delay={index * 0.06}><ArticleCard article={article} /></Reveal>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
