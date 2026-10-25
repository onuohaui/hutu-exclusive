import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { ACTIVE_PROMOTION } from '@/data/promotions';
import { getAdvisorWhatsAppUrl } from '@/config/site';
import { cn } from '@/lib/utils';

export default function FloatingPromoBar({ promotion = ACTIVE_PROMOTION }) {
	const location = useLocation();
	const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
	const [isDismissed, setIsDismissed] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// 1. Check expiration & active status
	const isCurrentlyValid = useMemo(() => {
		if (!promotion || !promotion.active) return false;
		const now = Date.now();
		if (promotion.startDate && new Date(promotion.startDate).getTime() > now) return false;
		if (promotion.endDate && new Date(promotion.endDate).getTime() < now) return false;
		return true;
	}, [promotion]);

	// 2. Check session dismissal
	useEffect(() => {
		if (!promotion?.id) return;
		try {
			const dismissed = sessionStorage.getItem(`hutu_promo_dismissed_${promotion.id}`);
			if (dismissed === 'true') {
				setIsDismissed(true);
			}
		} catch {
			// fallback in case sessionStorage is restricted
		}
	}, [promotion?.id]);

	// 3. Detect when any fullscreen modal/dialog is open (Budget Matcher, Video modal, etc.)
	useEffect(() => {
		const checkModalState = () => {
			const modal = document.querySelector(
				'[role="dialog"], [data-radix-portal] [role="dialog"], [data-state="open"][aria-modal="true"]'
			);
			setIsModalOpen(Boolean(modal));
		};

		checkModalState();

		const observer = new MutationObserver(() => {
			checkModalState();
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ['data-state', 'aria-hidden'],
		});

		return () => observer.disconnect();
	}, []);

	// 4. Scroll threshold listener (only show once scrolled past hero)
	useEffect(() => {
		const handleScroll = () => {
			// On homepage, scroll past the main hero area (~480px or ~50% of viewport)
			// On subpages, appear smoothly after initial header scroll (~120px)
			const isHome = location.pathname === '/';
			const threshold = isHome ? Math.max(380, window.innerHeight * 0.5) : 120;
			setHasScrolledPastHero(window.scrollY > threshold);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [location.pathname]);

	const handleDismiss = () => {
		setIsDismissed(true);
		if (promotion?.id) {
			try {
				sessionStorage.setItem(`hutu_promo_dismissed_${promotion.id}`, 'true');
			} catch {
				// storage error fallback
			}
		}
	};

	// Completely unmount if invalid, expired, dismissed, or inside an active modal
	if (!isCurrentlyValid || isDismissed || isModalOpen || !hasScrolledPastHero) {
		return null;
	}

	const ctaHref =
		promotion.ctaUrl ||
		getAdvisorWhatsAppUrl(
			promotion.whatsappMessage ||
				'Hi Amaka, I’d like to know which Hutu Exclusive properties qualify for the Mshel Homes 8th Anniversary offer.'
		);

	return (
		<aside
			aria-label="Active Promotion"
			className="fixed inset-x-0 top-[84px] z-40 flex justify-center px-3 pointer-events-none transition-all duration-300 sm:top-[88px] sm:px-4"
		>
			<div
				className={cn(
					'pointer-events-auto flex items-center justify-between gap-2.5 rounded-full border border-accent/40 bg-[#0B241B] px-3.5 py-2 text-white shadow-[0_12px_32px_-10px_rgba(11,36,27,0.55)] backdrop-blur-md transition-all duration-300 animate-in fade-in-0 slide-in-from-top-2 sm:gap-4 sm:px-5 sm:py-2.5 max-w-[96vw] sm:max-w-fit'
				)}
			>
				{/* DESKTOP CONTENT */}
				<div className="hidden items-center gap-3 sm:flex">
					{promotion.badge && (
						<span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
							<Sparkles className="h-3 w-3 text-accent" />
							{promotion.badge}
						</span>
					)}
					<p className="text-xs font-medium text-white/95 lg:text-sm">
						<strong className="font-semibold text-white">{promotion.title}</strong>
						<span className="mx-2 text-white/40">·</span>
						<span>{promotion.desktopMessage}</span>
					</p>
					<a
						href={ctaHref}
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-1 rounded-sm text-xs font-bold text-accent transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B241B]"
					>
						<span>{promotion.ctaLabel}</span>
						<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
					</a>
				</div>

				{/* MOBILE CONTENT */}
				<div className="flex flex-1 items-center justify-between gap-2 min-w-0 sm:hidden">
					<span className="truncate text-xs font-medium text-white">
						{promotion.mobileMessage}
					</span>
					<a
						href={ctaHref}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-0.5 shrink-0 rounded-sm text-xs font-bold text-accent transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B241B]"
					>
						<span>{promotion.mobileCtaLabel}</span>
						<ArrowRight className="h-3 w-3" />
					</a>
				</div>

				{/* Accessible Close Control */}
				<button
					type="button"
					onClick={handleDismiss}
					aria-label="Dismiss promotion"
					className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B241B]"
				>
					<X className="h-3.5 w-3.5" />
				</button>
			</div>
		</aside>
	);
}
