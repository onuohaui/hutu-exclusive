import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getArticleReadingTime } from '@/lib/articles';

export default function ArticleCard({ article }) {
	const readingTime = getArticleReadingTime(article);

	return (
		<article className="group flex h-full flex-col">
			<Link to={`/articles/${article.slug}`} className="relative block aspect-[3/2] overflow-hidden rounded-lg bg-muted">
				<img
					src={article.featuredImage}
					alt={article.featuredAlt || ''}
					loading="lazy"
					className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
				/>
				<span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background text-primary opacity-0 transition-all group-hover:opacity-100 group-focus-within:opacity-100">
					<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
				</span>
			</Link>
			<div className="flex flex-1 flex-col pt-5">
				<div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.15em]">
					<span className="text-accent">{article.category}</span>
					<span className="h-px w-6 bg-border" aria-hidden="true" />
					<span className="inline-flex items-center gap-1.5 text-muted-foreground">
						<Clock className="h-3.5 w-3.5" aria-hidden="true" />
						{readingTime} min read
					</span>
				</div>
				<h2 className="mt-3 font-display text-2xl font-semibold leading-snug tracking-tight">
					<Link to={`/articles/${article.slug}`} className="transition-colors hover:text-primary">{article.title}</Link>
				</h2>
				<p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{article.summary}</p>
				<Link to={`/articles/${article.slug}`} className="mt-5 inline-flex w-fit items-center gap-2 border-b border-primary/30 pb-1 text-sm font-semibold text-primary transition-colors hover:border-primary">
					{article.cardCta || 'Read article'} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
				</Link>
			</div>
		</article>
	);
}
