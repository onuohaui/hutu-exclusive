import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import BuyingGuideCard from '@/components/BuyingGuideCard';
import CTABand from '@/components/CTABand';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { BUYING_GUIDES } from '@/data/buyingGuides';
import { cn } from '@/lib/utils';

export default function BuyingGuidesPage() {
	const [activeCategory, setActiveCategory] = useState('All');

	const categories = useMemo(() => {
		const cats = ['All'];
		BUYING_GUIDES.forEach((guide) => {
			if (guide.category && !cats.includes(guide.category)) {
				cats.push(guide.category);
			}
		});
		return cats;
	}, []);

	const filteredGuides = useMemo(() => {
		if (activeCategory === 'All') return BUYING_GUIDES;
		return BUYING_GUIDES.filter((guide) => guide.category === activeCategory);
	}, [activeCategory]);

	return (
		<>
			<Helmet>
				<title>Buying Guides — Hutu Exclusive Abuja</title>
				<meta
					name="description"
					content="Practical guides to help you understand Hutu Exclusive, compare your options and know what to expect before, during and after your purchase."
				/>
			</Helmet>
			<Seo
				title="Buying Guides — Hutu Exclusive Abuja"
				description="Practical guides to help you understand Hutu Exclusive, compare your options and know what to expect before, during and after your purchase."
			/>

			{/* Hero Section */}
			<section className="border-b border-border bg-secondary/50">
				<div className="page-container py-14 sm:py-18 lg:py-22">
					<Reveal>
						<div className="max-w-3xl">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
								Buyer Resources
							</p>
							<h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
								Buying Guides
							</h1>
							<p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
								Practical guides to help you understand Hutu Exclusive, compare your options and know what to expect before, during and after your purchase.
							</p>

							{/* Category Filters */}
							<div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Guide Categories">
								{categories.map((cat) => {
									const isSelected = activeCategory === cat;
									return (
										<button
											key={cat}
											type="button"
											role="tab"
											aria-selected={isSelected}
											onClick={() => setActiveCategory(cat)}
											className={cn(
												'rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
												isSelected
													? 'bg-primary text-primary-foreground shadow-xs'
													: 'border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
											)}
										>
											{cat}
										</button>
									);
								})}
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			{/* Guides Grid */}
			<section className="page-container section-space">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{filteredGuides.map((guide, index) => (
						<Reveal key={guide.slug} delay={(index % 3) * 0.07}>
							<BuyingGuideCard guide={guide} />
						</Reveal>
					))}
				</div>

				{filteredGuides.length === 0 && (
					<div className="py-16 text-center">
						<p className="text-base text-muted-foreground">No guides found in this category.</p>
						<button
							type="button"
							onClick={() => setActiveCategory('All')}
							className="mt-4 text-sm font-semibold text-primary hover:underline"
						>
							View all guides
						</button>
					</div>
				)}
			</section>

			<CTABand
				title="Unsure which option fits your timeline?"
				copy="Discuss your budget, payment capacity and preferred phase with Amaka on WhatsApp."
			/>
		</>
	);
}
