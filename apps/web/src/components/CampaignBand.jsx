import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { getActiveCampaigns } from "@/data/promotions";
import { getAdvisorWhatsAppUrl } from "@/config/site";
import { cn } from "@/lib/utils";

export default function CampaignBand() {
  const campaigns = useMemo(() => getActiveCampaigns(), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);

  const hasMultiple = campaigns.length > 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % campaigns.length);
  }, [campaigns.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + campaigns.length) % campaigns.length);
  }, [campaigns.length]);

  // Autoplay when multiple campaigns are active
  useEffect(() => {
    if (!hasMultiple || isPaused) return undefined;

    // Respect user's motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return undefined;

    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [hasMultiple, isPaused, nextSlide]);

  // If no campaigns are currently active (e.g. after expiry), do not leave blank space.
  // This check stays after the hooks so hook order remains stable when campaign data changes.
  if (campaigns.length === 0) {
    return null;
  }

  const currentCampaign = campaigns[currentIndex] || campaigns[0];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const whatsappUrl = getAdvisorWhatsAppUrl(
    currentCampaign.whatsappMessage ||
      "Hi Amaka, I’d like to know which Hutu Exclusive properties qualify for the Mshel Homes 8th Anniversary offer.",
  );

  const cleanCtaLabel = (
    currentCampaign.ctaLabel || "Ask Me About This Offer →"
  )
    .replace(/→$/, "")
    .trim();

  return (
    <section
      id="promotional-campaign"
      aria-label="Promotional Campaign"
      className="relative w-full overflow-hidden border-y border-[#1A4A38] bg-[#0B241B] text-white transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Desktop visual height target: ~140–200px */}
      <div className="page-container relative z-10 flex min-h-[140px] flex-col justify-center py-6 sm:min-h-[160px] sm:py-7 lg:min-h-[180px] lg:py-8">
        <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 md:flex-row md:items-center">
          {/* Text & Campaign Details */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent/45 bg-transparent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#E7A184]">
                <Sparkles className="h-3 w-3 text-accent" />
                <span>
                  {currentCampaign.badge || "Limited-Time Developer Promo"}
                </span>
              </span>
              {currentCampaign.endDate && (
                <span className="text-xs text-white/60">
                  Active until{" "}
                  {new Date(currentCampaign.endDate).toLocaleDateString(
                    "en-GB",
                    { day: "numeric", month: "long", year: "numeric" },
                  )}
                </span>
              )}
            </div>

            <h2 className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2rem]">
              {currentCampaign.title}
            </h2>

            <p className="mt-1.5 text-sm font-medium leading-relaxed text-white/85 sm:text-base">
              {currentCampaign.subtitle}
            </p>
          </div>

          {/* Action CTA */}
          <div className="flex shrink-0 items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-[#B85F3E] sm:w-auto"
            >
              <span>{cleanCtaLabel}</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Multi-slide navigation arrows (rendered only if > 1 campaign) */}
            {hasMultiple && (
              <div className="hidden items-center gap-1 sm:flex">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous campaign"
                  className="grid h-11 w-11 place-items-center rounded-md border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next campaign"
                  className="grid h-11 w-11 place-items-center rounded-md border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Multi-slide pagination indicators (rendered ONLY if > 1 campaign) */}
        {hasMultiple && (
          <div className="mt-4 flex items-center justify-center gap-2 sm:justify-start">
            {campaigns.map((c, i) => (
              <button
                key={c.id || i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group grid h-11 w-6 place-items-center rounded-full"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full transition-all duration-300",
                    i === currentIndex
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-white/30 group-hover:bg-white/50",
                  )}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
