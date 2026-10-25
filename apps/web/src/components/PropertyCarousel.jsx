import React, { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IMAGES } from "@/data/site";

const FALLBACK_IMAGES = {
  "Phase 1 & 2": IMAGES.phase12,
  "Phase 3": IMAGES.phase3,
  "Phase 5": IMAGES.phase5,
  Commercial: IMAGES.commercial,
};

export default function PropertyCarousel({
  properties,
  ariaLabel = "Best-selling properties",
  cardClassName,
}) {
  const [api, setApi] = useState(null);
  const [activePosition, setActivePosition] = useState(1);
  const [positionCount, setPositionCount] = useState(1);

  useEffect(() => {
    if (!api) return undefined;

    const syncPosition = () => {
      setActivePosition(api.selectedScrollSnap() + 1);
      setPositionCount(Math.max(1, api.scrollSnapList().length));
    };

    syncPosition();
    api.on("select", syncPosition);
    api.on("reInit", syncPosition);

    return () => {
      api.off("select", syncPosition);
      api.off("reInit", syncPosition);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", containScroll: "trimSnaps", skipSnaps: false }}
      aria-label={ariaLabel}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-xs font-medium text-muted-foreground sm:hidden">
          Swipe to explore all {properties.length} properties
        </p>
        <p className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:block">
          Position {String(activePosition).padStart(2, "0")} /{" "}
          {String(positionCount).padStart(2, "0")}
        </p>
        <div className="hidden items-center gap-2 sm:flex">
          <CarouselPrevious
            aria-label="Previous properties"
            className="static h-11 w-11 translate-y-0 border-border text-primary transition-colors hover:border-primary hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-35"
          />
          <CarouselNext
            aria-label="Next properties"
            className="static h-11 w-11 translate-y-0 border-primary bg-primary text-primary-foreground transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:border-border disabled:bg-background disabled:text-muted-foreground disabled:opacity-50"
          />
        </div>
      </div>

      <CarouselContent className="-ml-6 pb-5">
        {properties.map((property, index) => (
          <CarouselItem
            key={property.id}
            className="flex basis-[88%] pl-6 sm:basis-1/2 lg:basis-1/3"
            aria-label={`${index + 1} of ${properties.length}`}
          >
            <PropertyCard
              property={property}
              imageFallback={
                property.category === "Commercial"
                  ? FALLBACK_IMAGES.Commercial
                  : FALLBACK_IMAGES[property.phase]
              }
              className={cardClassName}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
