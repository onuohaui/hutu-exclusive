import React, { useMemo } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ACTIVE_PROMOTION } from '@/data/promotions';
import { getAdvisorWhatsAppUrl } from '@/config/site';

export default function PromotionalTicker({ promotion = ACTIVE_PROMOTION }) {
	// Check validity & expiration
	const isCurrentlyValid = useMemo(() => {
		if (!promotion || !promotion.active) return false;
		const now = Date.now();
		if (promotion.startDate && new Date(promotion.startDate).getTime() > now) return false;
		if (promotion.endDate && new Date(promotion.endDate).getTime() < now) return false;
		return true;
	}, [promotion]);

	// If expired or inactive, do NOT render anything (no empty space left behind)
	if (!isCurrentlyValid) {
		return null;
	}

	const ctaUrl =
		promotion.ctaUrl ||
		getAdvisorWhatsAppUrl(
			promotion.whatsappMessage ||
				'Hi Amaka, I’d like to know which Hutu Exclusive properties qualify for the Mshel Homes 8th Anniversary offer.'
		);

	const messageText =
		promotion.tickerText ||
		'Mshel Homes 8th Anniversary Offer: Up to 10% off selected purchases until 30 September 2026';

	const ctaLabel = promotion.ctaLabel || 'Ask Me About It →';

	// Define ticker item content
	const renderTickerItem = (keyPrefix) => (
		<span key={keyPrefix} className="inline-flex items-center gap-3 px-6 sm:px-8 text-xs sm:text-sm font-medium text-white/90">
			<Sparkles className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
			<span>{messageText}</span>
			<span className="text-white/40" aria-hidden="true">•</span>
			<a
				href={ctaUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="group inline-flex items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B241B]"
			>
				<span>{ctaLabel.replace(/→$/, '').trim()}</span>
				<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
			</a>
			<span className="ml-4 h-1 w-1 rounded-full bg-accent/60" aria-hidden="true" />
		</span>
	);

	// Duplicate elements across two sets to ensure a seamless -50% CSS translate3d loop
	const repetitions = [0, 1, 2, 3];

	return (
		<section
			id="anniversary-ticker"
			aria-label="Limited-Time Promotion"
			className="pause-marquee relative w-full overflow-hidden border-y border-[#1A4A38] bg-[#0B241B] py-3 text-white transition-colors select-none"
		>
			<div className="animate-marquee">
				{/* Set 1 */}
				<div className="flex shrink-0 items-center">
					{repetitions.map((i) => renderTickerItem(`set1-${i}`))}
				</div>
				{/* Set 2 (Identical mirror for seamless infinite loop) */}
				<div className="flex shrink-0 items-center" aria-hidden="true">
					{repetitions.map((i) => renderTickerItem(`set2-${i}`))}
				</div>
			</div>
		</section>
	);
}
