import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, BookOpen, ChevronDown, Clock, ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import AdvisorDialog from '@/components/AdvisorDialog';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABand from '@/components/CTABand';
import Seo from '@/components/Seo';
import { getAdvisorWhatsAppUrl, SITE_CONFIG } from '@/config/site';
import { ARTICLES } from '@/data/site';
import { getArticleReadingTime, getArticleSectionId } from '@/lib/articles';

function ReadingProgress({ articleRef }) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			if (!articleRef.current) return;
			const articleTop = window.scrollY + articleRef.current.getBoundingClientRect().top - 72;
			const articleLength = articleRef.current.offsetHeight - window.innerHeight + 72;
			const nextProgress = articleLength > 0 ? ((window.scrollY - articleTop) / articleLength) * 100 : 100;
			setProgress(Math.min(100, Math.max(0, nextProgress)));
		};

		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		window.addEventListener('resize', updateProgress);
		return () => {
			window.removeEventListener('scroll', updateProgress);
			window.removeEventListener('resize', updateProgress);
		};
	}, [articleRef]);

	return (
		<div className="pointer-events-none fixed left-0 top-[72px] z-40 h-0.5 w-full bg-transparent" aria-hidden="true">
			<div className="h-full bg-accent transition-[width] duration-150 motion-reduce:transition-none" style={{ width: `${progress}%` }} />
		</div>
	);
}

function ArticleContents({ article, mobile = false }) {
	const links = article.body.map((section, index) => {
		const subheadings = (section.blocks || []).filter((block) => block.type === 'subheading');
		return (
			<li key={section.heading}>
				<a href={`#${getArticleSectionId(section.heading)}`} className="group flex gap-3 py-2 text-sm leading-5 text-muted-foreground transition-colors hover:text-primary">
					{!article.hideSectionCounters && <span className="font-semibold text-accent">{String(index + 1).padStart(2, '0')}</span>}
					<span>{section.heading}</span>
				</a>
				{subheadings.length > 0 && (
					<ul className="ml-8 border-l border-border pl-3">
						{subheadings.map((subheading) => (
							<li key={subheading.text}>
								<a href={`#${getArticleSectionId(`${section.heading}-${subheading.text}`)}`} className="block py-1.5 text-xs leading-5 text-muted-foreground transition-colors hover:text-primary">
									{subheading.text}
								</a>
							</li>
						))}
					</ul>
				)}
			</li>
		);
	});

	if (mobile) {
		return (
			<details className="border-y border-border py-4 lg:hidden">
				<summary className="flex min-h-11 cursor-pointer list-none items-center text-sm font-semibold text-primary">On this page · {article.body.length} sections</summary>
				<ol className="mt-3 space-y-1">{links}</ol>
			</details>
		);
	}

	return (
		<nav aria-label="Article contents" className="sticky top-28">
			<p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-foreground">On this page</p>
			<div className="mt-4 h-px w-10 bg-accent" aria-hidden="true" />
			<ol className="mt-4 space-y-1">{links}</ol>
		</nav>
	);
}

const formatChartPrice = (value) => {
	if (!Number.isFinite(value)) return '';
	if (value >= 1_000_000) return `₦${Number((value / 1_000_000).toFixed(1))}M`;
	return `₦${value.toLocaleString('en-NG')}`;
};

function PriceChart({ block }) {
	const isSingleSeries = block.chart === 'phase150' || block.series === 'single';
	const xAxisKey = block.xAxisKey || (block.chart === 'phase150' ? 'phase' : 'size');

	return (
		<figure className="my-9 rounded-lg border border-border bg-secondary/45 p-4 sm:p-6">
			<div className={block.scrollOnMobile ? '-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0' : ''} tabIndex={block.scrollOnMobile ? 0 : undefined} role={block.scrollOnMobile ? 'region' : undefined} aria-label={block.scrollOnMobile ? `${block.caption} Scroll horizontally on smaller screens.` : undefined}>
				<div className={`h-[320px] w-full sm:h-[360px] ${block.scrollOnMobile ? 'min-w-[620px] sm:min-w-0' : ''}`} role="img" aria-label={block.caption}>
					<ResponsiveContainer width="100%" height="100%">
						<BarChart data={block.data} margin={{ top: 12, right: 4, left: -12, bottom: 8 }}>
							<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
							<XAxis dataKey={xAxisKey} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} interval={0} />
							<YAxis tickFormatter={formatChartPrice} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} width={58} />
							<Tooltip formatter={(value, name) => [formatChartPrice(value), name]} contentStyle={{ borderRadius: 8, borderColor: 'hsl(var(--border))', fontSize: 12 }} />
							{isSingleSeries ? (
								<Bar dataKey="price" name="Current price" fill="hsl(var(--primary))" radius={[5, 5, 0, 0]} maxBarSize={74}>
									{block.showValues && <LabelList dataKey={block.valueLabelKey || 'price'} position="top" fill="hsl(var(--foreground))" fontSize={11} fontWeight={600} />}
								</Bar>
							) : (
								<>
									<Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
									<Bar dataKey="phase12" name="Phase 1 & 2" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} />
									<Bar dataKey="phase3" name="Phase 3" fill="hsl(var(--accent))" radius={[3, 3, 0, 0]} />
									<Bar dataKey="phase5" name="Phase 5" fill="hsl(var(--success))" radius={[3, 3, 0, 0]} />
								</>
							)}
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
			<figcaption className="mt-3 text-xs leading-5 text-muted-foreground">{block.caption}</figcaption>
		</figure>
	);
}

function ArticleTable({ block }) {
	return (
		<div className="-mx-4 my-8 overflow-x-auto overscroll-x-contain px-4 pb-2 sm:mx-0 sm:px-0" tabIndex="0" role="region" aria-label={`${block.label}. Scroll horizontally to view all columns on smaller screens.`}>
			<table className="w-full min-w-[680px] border-collapse text-left text-sm">
				<caption className="sr-only">{block.label}</caption>
				<thead>
					<tr className="bg-primary text-primary-foreground">
						{block.headers.map((header) => <th key={header} scope="col" className="px-4 py-3 text-xs font-semibold leading-5">{header}</th>)}
					</tr>
				</thead>
				<tbody>
					{block.rows.map((row, rowIndex) => (
						<tr key={`${row[0]}-${rowIndex}`} className="border-b border-border odd:bg-background even:bg-secondary/45">
							{row.map((cell, cellIndex) => cellIndex === 0
								? <th key={`${cell}-${cellIndex}`} scope="row" className="px-4 py-3 font-semibold leading-6 text-foreground">{cell}</th>
								: <td key={`${cell}-${cellIndex}`} className="px-4 py-3 leading-6 text-muted-foreground">{cell}</td>)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function ArticleFaq({ items }) {
	return (
		<div className="mt-7 divide-y divide-border border-y border-border">
			{items.map((item) => (
				<details key={item.q} className="group py-5">
					<summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-lg font-semibold leading-7 text-foreground marker:hidden">
						<span>{item.q}</span>
						<span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors group-open:border-primary/25 group-open:bg-primary group-open:text-primary-foreground" aria-hidden="true">
							<ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
						</span>
					</summary>
					<p className="mt-3 text-[1.0625rem] leading-8 text-muted-foreground">
						{item.aParts ? <LinkedParts parts={item.aParts} /> : item.a}
					</p>
				</details>
			))}
		</div>
	);
}

function ArticleAdvisorPanel({ article, className = '' }) {
	return (
		<div className={`border-t-2 border-primary pt-5 ${className}`}>
			<p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-accent">Buyer advisory</p>
			<h2 className="mt-3 font-display text-xl font-semibold leading-snug">{article.advisoryPanel?.heading || 'Unsure how this applies to your purchase?'}</h2>
			<p className="mt-3 text-sm leading-7 text-muted-foreground">{article.advisoryPanel?.copy || 'Discuss your budget, timeline and questions with an advisor before making a payment.'}</p>
			<AdvisorDialog
				trigger={
					<button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark">
						<Phone className="h-4 w-4" /> {article.advisoryPanel?.label || 'Ask Amaka'}
					</button>
				}
			/>
			{!article.advisoryPanel?.hideExtraLinks && (
				<>
					<Link to="/inspection" className="mt-3 inline-flex min-h-11 w-full items-center justify-between border-b border-border py-3 text-sm font-semibold text-primary hover:border-primary">
						Book an inspection <ArrowRight className="h-4 w-4" />
					</Link>
					<Link to="/buyer-questions" className="inline-flex min-h-11 w-full items-center justify-between border-b border-border py-3 text-sm font-semibold text-primary hover:border-primary">
						Buyer questions <ArrowRight className="h-4 w-4" />
					</Link>
					<Link to="/about/hutu-exclusive" className="inline-flex min-h-11 w-full items-center justify-between border-b border-border py-3 text-sm font-semibold text-primary hover:border-primary">
						Hutu Exclusive overview <ArrowRight className="h-4 w-4" />
					</Link>
				</>
			)}
		</div>
	);
}

function LinkedParts({ parts }) {
	return parts.map((part, index) => {
		if (typeof part === 'string') return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
		const className = 'font-semibold text-primary underline decoration-primary/25 underline-offset-4 hover:decoration-primary';
		if (part.external) return <a key={`${part.text}-${index}`} href={part.to} target="_blank" rel="noopener noreferrer" className={className}>{part.text}</a>;
		return <Link key={`${part.text}-${index}`} to={part.to} className={className}>{part.text}</Link>;
	});
}

function LinkedParagraph({ parts }) {
	return <p className="mt-5 text-[1.0625rem] leading-8 text-muted-foreground"><LinkedParts parts={parts} /></p>;
}

function IntroductionParagraph({ paragraph }) {
	if (typeof paragraph === 'string') {
		return <p className="text-[1.0625rem] leading-8 text-muted-foreground">{paragraph}</p>;
	}

	return <p className="text-[1.0625rem] leading-8 text-muted-foreground"><LinkedParts parts={paragraph.parts} /></p>;
}

function ArticleImage({ block }) {
	return (
		<figure className="my-9">
			<div className="overflow-hidden rounded-lg border border-border bg-muted">
				<img src={block.src} alt={block.alt || ''} loading="lazy" className="h-auto w-full object-cover" />
			</div>
			{block.caption && <figcaption className="mt-3 text-xs leading-5 text-muted-foreground">{block.caption}</figcaption>}
		</figure>
	);
}

function LocationDiagram({ block }) {
	return (
		<figure className="mb-12 rounded-lg border border-border bg-secondary/45 p-5 sm:p-7">
			<div className="relative grid gap-6 sm:grid-cols-5 sm:gap-3">
				<div className="absolute bottom-auto left-[13px] top-3 h-[calc(100%-1.5rem)] w-px bg-primary/25 sm:left-[10%] sm:right-[10%] sm:top-[13px] sm:h-px sm:w-auto" aria-hidden="true" />
				{block.stops.map((stop, index) => (
					<div key={stop.label} className="relative grid grid-cols-[28px_1fr] items-start gap-3 sm:block sm:text-center">
						<span className={`relative z-10 grid h-7 w-7 place-items-center rounded-full border-2 ${index === 2 ? 'border-accent bg-accent text-accent-foreground' : 'border-primary bg-background text-primary'}`} aria-hidden="true">
							{index === 2 ? <MapPin className="h-3.5 w-3.5" /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
						</span>
						<div className="sm:mt-3">
							<p className="text-sm font-semibold leading-5 text-foreground">{stop.label}</p>
							<p className="mt-1 text-[11px] leading-4 text-muted-foreground">{stop.detail}</p>
						</div>
					</div>
				))}
			</div>
			<figcaption className="mt-7 text-xs leading-5 text-muted-foreground">{block.caption}</figcaption>
		</figure>
	);
}

function RouteCards({ block }) {
	return (
		<figure className="my-9">
			<div className="grid gap-4 md:grid-cols-2">
				{block.routes.map((route) => (
					<div key={route.title} className="rounded-lg border border-border bg-secondary/45 p-5 sm:p-6">
						<div className="flex flex-wrap items-start justify-between gap-2 border-b border-border pb-4">
							<h3 className="font-display text-lg font-semibold text-foreground">{route.title}</h3>
							<span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-primary">{route.time}</span>
						</div>
						<ol className="mt-4 space-y-3">
							{route.steps.map((step, index) => (
								<li key={step} className="flex gap-3 text-sm leading-6 text-muted-foreground">
									<span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">{index + 1}</span>
									<span>{step}</span>
								</li>
							))}
						</ol>
						<p className="mt-5 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">{block.note}</p>
					</div>
				))}
			</div>
			<figcaption className="mt-3 text-xs leading-5 text-muted-foreground">{block.caption}</figcaption>
		</figure>
	);
}

// `credentialless` is a current iframe attribute, but this eslint version does not know it yet.
/* eslint-disable react/no-unknown-property */
function GoogleMap({ block }) {
	return (
		<figure className="my-8">
			<div className="h-[340px] overflow-hidden rounded-lg border border-border bg-muted sm:h-[420px]">
				<iframe
					src={block.embedUrl}
					title={block.title}
					className="h-full w-full border-0"
					loading="lazy"
					referrerPolicy="strict-origin-when-cross-origin"
					credentialless=""
					allowFullScreen
				/>
			</div>
			<a href={block.openUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-sm font-semibold text-primary hover:border-primary">
				{block.linkLabel} <ExternalLink className="h-4 w-4" />
			</a>
		</figure>
	);
}
/* eslint-enable react/no-unknown-property */

function QuickAnswer({ children, className = '', label = 'Quick answer' }) {
	return (
		<div className={`border-l-2 border-accent pl-6 sm:pl-8 ${className}`}>
			<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{label}</p>
			<p className="mt-3 font-display text-xl font-medium leading-8 text-foreground sm:text-2xl">{children}</p>
		</div>
	);
}

function RichArticleBlock({ block, sectionHeading }) {
	if (block.type === 'paragraph') return <p className="mt-5 text-[1.0625rem] leading-8 text-muted-foreground">{block.text}</p>;
	if (block.type === 'richParagraph') return <LinkedParagraph parts={block.parts} />;
	if (block.type === 'lead') return <p className="mt-5 font-display text-lg font-semibold leading-7 text-foreground">{block.text}</p>;
	if (block.type === 'labeledParagraph') return <p className="mt-5 text-[1.0625rem] leading-8 text-muted-foreground"><strong className="font-semibold text-foreground">{block.label}</strong> {block.text}</p>;
	if (block.type === 'subheading') return <h3 id={getArticleSectionId(`${sectionHeading}-${block.text}`)} className="scroll-mt-32 pt-7 font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">{block.text}</h3>;
	if (block.type === 'image') return <ArticleImage block={block} />;
	if (block.type === 'list') return (
		<ul className="mt-6 space-y-4">
			{block.items.map((item) => {
				const itemKey = typeof item === 'string' ? item : `${item.label}-${item.text}`;
				return (
				<li key={itemKey} className="flex gap-4 text-[1.0625rem] leading-8 text-muted-foreground">
					<span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
					<span>{typeof item === 'string' ? item : <><strong className="font-semibold text-foreground">{item.label}</strong> {item.text}</>}</span>
				</li>
				);
			})}
		</ul>
	);
	if (block.type === 'table') return <ArticleTable block={block} />;
	if (block.type === 'chart') return <PriceChart block={block} />;
	if (block.type === 'locationDiagram') return <LocationDiagram block={block} />;
	if (block.type === 'routeCards') return <RouteCards block={block} />;
	if (block.type === 'map') return <GoogleMap block={block} />;
	if (block.type === 'faq') return <ArticleFaq items={block.items} />;
	if (block.type === 'callout') return (
		<aside className="my-8 border-l-4 border-accent bg-secondary/70 px-5 py-6 sm:px-7">
			<p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{block.label}</p>
			{block.paragraphs
				? block.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 text-base leading-8 text-foreground">{paragraph}</p>)
				: <p className="mt-3 text-base leading-8 text-foreground">{block.text}</p>}
		</aside>
	);
	if (block.type === 'cta') return (
		<aside className="my-8 rounded-lg border border-primary/15 bg-primary/[0.045] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
			<div>
				<p className="font-display text-lg font-semibold text-foreground">{block.eyebrow}</p>
				{block.text && <p className="mt-2 text-sm leading-6 text-muted-foreground">{block.text}</p>}
			</div>
			{block.kind === 'whatsapp' ? (
				<a href={getAdvisorWhatsAppUrl(block.message)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-dark sm:mt-0">
					{block.label} <ArrowRight className="h-4 w-4" />
				</a>
			) : (
				<Link to={block.to} className="mt-4 inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-dark sm:mt-0">
					{block.label} <ArrowRight className="h-4 w-4" />
				</Link>
			)}
		</aside>
	);
	return null;
}

function ArticleFinalCta({ article }) {
	const buttons = article.finalCta.buttons || [
		{ label: 'Chat With Me on WhatsApp', kind: 'whatsapp' },
		{ label: 'Find What Fits My Budget', to: '/#budget-matcher', kind: 'internal' },
	];

	return (
		<section className="bg-primary">
			<div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-8 lg:px-10">
				<h2 className="mx-auto max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-primary-foreground sm:text-4xl">{article.finalCta.title}</h2>
				<p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-primary-foreground/80">{article.finalCta.copy}</p>
				{article.finalCta.additionalCopy && <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/70">{article.finalCta.additionalCopy}</p>}
				<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
					{buttons.map((button, index) => {
						const className = `inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold sm:w-auto ${index === 0 ? 'bg-background text-primary hover:bg-background/90' : 'border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10'}`;
						if (button.kind === 'whatsapp') {
							return <a key={button.label} href={getAdvisorWhatsAppUrl(article.whatsAppMessage)} target="_blank" rel="noopener noreferrer" className={className}><MessageCircle className="h-4 w-4" /> {button.label}</a>;
						}
						return <Link key={button.label} to={button.to} className={className}>{button.label} <ArrowRight className="h-4 w-4" /></Link>;
					})}
				</div>
			</div>
		</section>
	);
}

export default function ArticlePage() {
	const { slug } = useParams();
	const articleRef = useRef(null);
	const article = ARTICLES.find((item) => item.slug === slug);

	useEffect(() => {
		if (!article) return undefined;
		const fallbackDescription = document.head.querySelector('meta[data-site-default-description]');
		if (!fallbackDescription) return undefined;
		const nextSibling = fallbackDescription.nextSibling;
		fallbackDescription.remove();

		return () => {
			if (!fallbackDescription.isConnected) {
				document.head.insertBefore(fallbackDescription, nextSibling?.parentNode === document.head ? nextSibling : null);
			}
		};
	}, [article]);

	if (!article) return <Navigate to="/not-found" replace />;

	const related = article.relatedArticles.map((relatedSlug) => ARTICLES.find((item) => item.slug === relatedSlug)).filter(Boolean);
	const readingTime = getArticleReadingTime(article);
	const faqItems = article.body.flatMap((section) => (section.blocks || []).filter((block) => block.type === 'faq').flatMap((block) => block.items));
	const articleSchema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: article.title,
		description: article.metaDescription,
		image: article.featuredImage.startsWith('/') ? `${SITE_CONFIG.baseUrl}${article.featuredImage}` : article.featuredImage,
		articleSection: article.category,
		timeRequired: `PT${readingTime}M`,
		author: article.authorTitle ? { '@type': 'Person', name: article.author, jobTitle: article.authorTitle, url: `${SITE_CONFIG.baseUrl}${article.authorPath}` } : { '@type': 'Organization', name: article.author },
		publisher: { '@type': 'Organization', name: 'Hutu Exclusive' },
		mainEntityOfPage: `${SITE_CONFIG.baseUrl}/articles/${article.slug}`,
	};
	const structuredData = faqItems.length > 0 ? {
		'@context': 'https://schema.org',
		'@graph': [
			{ ...articleSchema, '@context': undefined },
			{ '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
		],
	} : articleSchema;

	return (
		<>
			<Helmet>
				<title>{article.seoTitle}</title><meta name="description" content={article.metaDescription} />
				<script type="application/ld+json">{JSON.stringify(structuredData)}</script>
			</Helmet>
			<Seo title={article.seoTitle} description={article.metaDescription} image={article.featuredImage} type="article" />
			<ReadingProgress articleRef={articleRef} />

			<article ref={articleRef}>
				<header className="bg-primary pb-28 text-primary-foreground md:pb-32">
					<div className="page-container pt-8">
						<div className="[&_nav]:text-primary-foreground/55 [&_a:hover]:text-primary-foreground [&_[aria-current=page]]:text-primary-foreground/75">
							<Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Articles', to: '/articles' }, { label: article.title }]} />
						</div>

						<div className="grid gap-10 pb-5 pt-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end lg:gap-16 lg:pt-16">
							<div>
								<div className="flex items-center gap-4">
									<p className="text-xs font-semibold uppercase tracking-[0.19em] text-accent">{article.category}</p>
									<span className="h-px w-12 bg-primary-foreground/25" aria-hidden="true" />
									<p className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-foreground/60"><Clock className="h-3.5 w-3.5" /> {readingTime} min read</p>
								</div>
								<h1 className="mt-5 max-w-5xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{article.title}</h1>
							</div>
							<div className="border-l border-primary-foreground/20 pl-6">
								<p className="text-base leading-8 text-primary-foreground/75">{article.summary}</p>
								<p className="mt-5 flex items-start gap-2 text-xs font-medium leading-5 text-primary-foreground/55">
									<BookOpen className="mt-0.5 h-4 w-4 shrink-0" />
									<span>
										By {article.authorPath ? <Link to={article.authorPath} className="underline decoration-primary-foreground/30 underline-offset-2 hover:text-primary-foreground">{article.author}</Link> : article.author}
										{article.authorTitle ? `, ${article.authorTitle}` : ''}
										{article.updatedDate ? ` · ${article.dateLabel || (article.quickAnswer ? 'Published / updated' : 'Last updated')}: ${article.updatedDate}` : ''}
									</span>
								</p>
							</div>
						</div>
					</div>
				</header>

				<div className="page-container relative z-10 -mt-20 md:-mt-24">
					<figure>
						<div className="aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-muted shadow-[0_24px_60px_rgba(11,36,27,0.16)] md:aspect-[21/9]">
							<img src={article.featuredImage} alt={article.featuredAlt || ''} className="h-full w-full object-cover" />
						</div>
						<figcaption className="mt-3 text-xs text-muted-foreground">{article.featuredCaption || 'Hutu Exclusive, Abuja · Buyer advisory guide'}</figcaption>
					</figure>
				</div>

				<div className="page-container pb-20 pt-12 md:pb-24 md:pt-16">
					<ArticleContents article={article} mobile />

					<div className="mt-10 grid min-w-0 gap-12 lg:grid-cols-[190px_minmax(0,720px)] lg:gap-10 xl:grid-cols-[190px_minmax(0,720px)_minmax(0,1fr)] xl:gap-12">
						<aside className="hidden lg:block"><ArticleContents article={article} /></aside>

						<div className="min-w-0">
							{article.quickAnswer ? (
								<>
									{article.quickAnswerPosition !== 'after-introduction' && <QuickAnswer className="mb-10" label={article.quickAnswerLabel}>{article.quickAnswer}</QuickAnswer>}
									<div className="mb-12 space-y-5">
										{article.introduction.map((paragraph, index) => <IntroductionParagraph key={typeof paragraph === 'string' ? paragraph : `introduction-${index}`} paragraph={paragraph} />)}
									</div>
									{article.quickAnswerPosition === 'after-introduction' && <QuickAnswer className="mb-10" label={article.quickAnswerLabel}>{article.quickAnswer}</QuickAnswer>}
								</>
							) : (
								<div className="mb-12 border-l-2 border-accent pl-6 sm:pl-8">
									<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">What this article covers</p>
									<p className="mt-3 font-display text-xl font-medium leading-8 text-foreground sm:text-2xl">{article.summary}</p>
								</div>
							)}

							{article.preBodyBlocks?.map((block, blockIndex) => (
								<RichArticleBlock key={`${block.type}-${blockIndex}`} block={block} sectionHeading="Article introduction" />
							))}

							<div className="space-y-12">
								{article.body.map((section, index) => (
									<section key={section.heading} id={getArticleSectionId(section.heading)} className="scroll-mt-32 border-t border-border pt-9">
										{!article.hideSectionCounters && <p className="text-xs font-semibold tracking-[0.16em] text-accent">{String(index + 1).padStart(2, '0')}</p>}
										<h2 className={`${article.hideSectionCounters ? '' : 'mt-3 '}font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl`}>{section.heading}</h2>
										{section.image && (
											<figure className="my-8">
												<div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted"><img src={section.image} alt={section.imageAlt} loading="lazy" className="h-full w-full object-cover" /></div>
												<figcaption className="mt-2 text-xs leading-5 text-muted-foreground">{section.imageCaption}</figcaption>
											</figure>
										)}
										{section.blocks
											? section.blocks.map((block, blockIndex) => <RichArticleBlock key={`${block.type}-${block.text || block.label || blockIndex}`} block={block} sectionHeading={section.heading} />)
											: section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-[1.0625rem] leading-8 text-muted-foreground">{paragraph}</p>)}
										{section.relatedLink && (
											<Link to={section.relatedLink.to} className="mt-6 inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-sm font-semibold text-primary hover:border-primary">
												{section.relatedLink.label} <ArrowRight className="h-4 w-4" />
											</Link>
										)}
									</section>
								))}
							</div>

							{article.authorBio && (
								<section className="mt-14 border-t border-border pt-9" aria-labelledby="about-the-author">
									<p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">About the author</p>
									<div className="mt-5 grid gap-5 rounded-lg bg-secondary/60 p-6 sm:grid-cols-[96px_1fr] sm:items-start">
										<img src={article.authorImage} alt={`Portrait of ${article.author}`} className="h-24 w-24 rounded-full object-cover" />
										<div>
											<h2 id="about-the-author" className="font-display text-xl font-semibold"><Link to={article.authorPath} className="hover:text-primary hover:underline">{article.author}</Link></h2>
											<p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{article.authorTitle}</p>
											<p className="mt-4 text-sm leading-7 text-muted-foreground">{article.authorBio}</p>
										</div>
									</div>
								</section>
							)}

							{article.closing && (
								<section className="mt-12 border-l-2 border-primary pl-6 sm:pl-8">
									<h2 className="font-display text-2xl font-semibold">{article.closing.heading}</h2>
									<p className="mt-4 text-[1.0625rem] leading-8 text-muted-foreground">{article.closing.text}</p>
								</section>
							)}

							<footer className="mt-16 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
								<p className="text-sm text-muted-foreground">Prepared by {article.author}</p>
								<Link to="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
									<ArrowLeft className="h-4 w-4" /> Browse all articles
								</Link>
							</footer>

							<aside className="mt-12 xl:hidden" aria-label="Article buyer advisory">
								<ArticleAdvisorPanel article={article} />
							</aside>
						</div>

						<aside className="hidden xl:block">
							<ArticleAdvisorPanel article={article} className="sticky top-28" />
						</aside>
					</div>
				</div>
			</article>
			{related.length > 0 && (
				<section className="border-t border-border bg-secondary/60">
					<div className="page-container section-space">
						<div className="flex flex-wrap items-end justify-between gap-5">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Continue reading</p>
								<h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Related articles</h2>
							</div>
							<Link to="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View the journal <ArrowRight className="h-4 w-4" /></Link>
						</div>
						<div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">{related.slice(0, 3).map((item) => <ArticleCard key={item.slug} article={item} />)}</div>
					</div>
				</section>
			)}
			{article.finalCta ? <ArticleFinalCta article={article} /> : <CTABand title="Still deciding which option fits?" copy="Talk to an advisor about your budget, timeline and questions before you make a payment." />}
		</>
	);
}
