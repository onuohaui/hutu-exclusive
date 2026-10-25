import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BuyingGuideCard({ guide }) {
	return (
		<article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_20px_45px_-24px_rgba(11,36,27,0.18)]">
			<Link
				to={`/buying-guides/${guide.slug}`}
				className="relative block aspect-[16/10] overflow-hidden bg-muted"
			>
				<img
					src={guide.featuredImage}
					alt={guide.title}
					loading="lazy"
					className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
				/>
				{guide.category && (
					<span className="absolute left-4 top-4 rounded-full bg-background/95 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary shadow-xs backdrop-blur-xs">
						{guide.category}
					</span>
				)}
			</Link>

			<div className="flex flex-1 flex-col p-6">
				<div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
					<Clock className="h-3.5 w-3.5" aria-hidden="true" />
					<span>{guide.readTimeMinutes} min read</span>
					{guide.lastUpdated && (
						<>
							<span className="text-border" aria-hidden="true">·</span>
							<span>Updated {guide.lastUpdated}</span>
						</>
					)}
				</div>

				<h2 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight">
					<Link
						to={`/buying-guides/${guide.slug}`}
						className="transition-colors hover:text-primary"
					>
						{guide.title}
					</Link>
				</h2>

				<p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
					{guide.summary}
				</p>

				<div className="mt-6 pt-4 border-t border-border/70">
					<Link
						to={`/buying-guides/${guide.slug}`}
						className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark group-hover:translate-x-0.5"
					>
						<span>Read Guide</span>
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
					</Link>
				</div>
			</div>
		</article>
	);
}
