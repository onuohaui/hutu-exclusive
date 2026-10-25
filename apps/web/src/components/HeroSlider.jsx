import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

const AUTOPLAY_DELAY = 6000;

export default function HeroSlider({ slides }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const reduceMotion = useReducedMotion();

	// Preload all slides immediately on mount for seamless transitions
	useEffect(() => {
		slides.forEach((slide) => {
			const img = new Image();
			img.src = slide.src;
		});
	}, [slides]);

	const goToSlide = useCallback((next) => {
		setActiveIndex((current) => {
			const nextIdx = typeof next === 'function' ? next(current) : next;
			setPrevIndex(current);
			return nextIdx;
		});
	}, []);

	const showPrevious = useCallback(() => {
		goToSlide((current) => (current - 1 + slides.length) % slides.length);
	}, [goToSlide, slides.length]);

	const showNext = useCallback(() => {
		goToSlide((current) => (current + 1) % slides.length);
	}, [goToSlide, slides.length]);

	// Clean up previous slide after transition finishes
	useEffect(() => {
		if (activeIndex === prevIndex) return;
		const timer = window.setTimeout(() => {
			setPrevIndex(activeIndex);
		}, 750);
		return () => window.clearTimeout(timer);
	}, [activeIndex, prevIndex]);

	useEffect(() => {
		if (slides.length < 2 || isPaused || reduceMotion) return undefined;

		const timer = window.setInterval(showNext, AUTOPLAY_DELAY);
		return () => window.clearInterval(timer);
	}, [isPaused, reduceMotion, showNext, slides.length]);

	const handleBlur = (event) => {
		if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
	};

	return (
		<div
			className="absolute inset-0"
			role="region"
			aria-roledescription="carousel"
			aria-label="Hutu Exclusive estate gallery"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onFocus={() => setIsPaused(true)}
			onBlur={handleBlur}
		>
			{slides.map((slide, index) => {
				const isActive = index === activeIndex;
				const isPrev = index === prevIndex && !isActive;

				return (
					<img
						key={slide.src}
						src={slide.src}
						alt={isActive ? slide.alt : ''}
						loading="eager"
						decoding="async"
						fetchPriority={index === 0 ? 'high' : 'auto'}
						aria-hidden={!isActive}
						className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
							isActive
								? 'opacity-100 z-10'
								: isPrev
								? 'opacity-100 z-0'
								: 'opacity-0 z-0 pointer-events-none'
						}`}
						style={{ objectPosition: slide.position || 'center' }}
					/>
				);
			})}

			{slides.length > 1 && (
				<div className="absolute bottom-5 right-4 z-30 flex items-center gap-2 rounded-full border border-white/25 bg-black/35 p-1.5 backdrop-blur-md sm:bottom-8 sm:right-6 lg:right-8">
					<button
						type="button"
						onClick={showPrevious}
						className="grid h-9 w-9 place-items-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
						aria-label="Show previous hero image"
					>
						<ChevronLeft className="h-5 w-5" aria-hidden="true" />
					</button>

					<div className="flex items-center gap-1.5 px-1" aria-label="Choose hero image">
						{slides.map((slide, index) => (
							<button
								key={slide.src}
								type="button"
								onClick={() => goToSlide(index)}
								className={`h-2.5 w-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 ${
									index === activeIndex
										? 'bg-white scale-110 shadow-sm'
										: 'bg-white/50 hover:bg-white/80'
								}`}
								aria-label={`Show hero image ${index + 1} of ${slides.length}`}
								aria-current={index === activeIndex ? 'true' : undefined}
							/>
						))}
					</div>

					<button
						type="button"
						onClick={showNext}
						className="grid h-9 w-9 place-items-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
						aria-label="Show next hero image"
					>
						<ChevronRight className="h-5 w-5" aria-hidden="true" />
					</button>
				</div>
			)}

			<p className="sr-only" aria-live="polite">
				Hero image {activeIndex + 1} of {slides.length}: {slides[activeIndex]?.alt}
			</p>
		</div>
	);
}
