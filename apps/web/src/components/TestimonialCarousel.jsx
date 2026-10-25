import React, { useCallback, useEffect, useState } from "react";
import { MessageSquareQuote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HOMEPAGE_TESTIMONIALS = [
  {
    id: "t-ifechinyere-uzo",
    quote:
      "“I am extremely satisfied with Amaka’s service. She exceeded my expectations with her performance. She was excellent, thorough and her replies were prompt. I highly recommend her to anyone looking to buy Hutu Exclusive or property in Nigeria.”",
    author: "Ifechinyere Uzo",
    role: null,
    photo: null,
  },
  {
    id: "t-jenniffer-chinyere",
    quote:
      "“As a Nigerian living in the diaspora, deciding to buy real estate in Nigeria was difficult. However, with Amaka, I acquired my first investment back home. From virtual inspections to consistent communication, she made the whole process easy. I definitely recommend her.”",
    author: "Jenniffer Chinyere",
    role: "Diaspora Buyer",
    photo: null,
  },
];

function BuyerAvatar({ author, photo }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={author}
        loading="lazy"
        className="h-12 w-12 shrink-0 rounded-full border border-border object-cover"
      />
    );
  }

  const initials = author
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-secondary font-display text-sm font-bold text-primary shadow-2xs"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="flex h-full w-full flex-col justify-between rounded-lg border border-[#D8D7D1] bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-primary/35 hover:shadow-[0_16px_36px_-28px_rgba(11,36,27,0.45)] sm:p-8">
      <div>
        <MessageSquareQuote
          className="h-7 w-7 text-accent"
          strokeWidth={1.6}
          aria-hidden="true"
        />
        <blockquote className="mt-5">
          <p className="font-display text-lg font-medium leading-8 text-foreground sm:text-xl sm:leading-9">
            {item.quote}
          </p>
        </blockquote>
      </div>

      <div className="mt-8 flex items-center gap-3 border-t border-border/80 pt-5">
        <BuyerAvatar author={item.author} photo={item.photo} />
        <div className="min-w-0 flex-1">
          <p className="font-display text-base font-semibold text-foreground">
            {item.author}
          </p>
          {item.role && (
            <p className="mt-0.5 text-xs text-muted-foreground">{item.role}</p>
          )}
        </div>
      </div>
    </article>
  );
}

function TestimonialCarouselView({ testimonials }) {
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return undefined;
    setScrollSnaps(api.scrollSnapList());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", containScroll: "trimSnaps", skipSnaps: false }}
      aria-label="Client testimonials"
      className="w-full"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-xs font-medium text-muted-foreground">
          Swipe or use the controls to read more client experiences
        </p>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <CarouselPrevious
            aria-label="Previous testimonial"
            className="static h-11 w-11 translate-y-0 border-border bg-card text-foreground hover:border-primary hover:bg-secondary"
          />
          <CarouselNext
            aria-label="Next testimonial"
            className="static h-11 w-11 translate-y-0 border-primary bg-primary text-primary-foreground hover:bg-primary-dark"
          />
        </div>
      </div>

      <CarouselContent className="-ml-5 pb-2">
        {testimonials.map((item) => (
          <CarouselItem
            key={item.id}
            className="flex basis-[88%] pl-5 sm:basis-1/2 lg:basis-1/3"
          >
            <TestimonialCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {scrollSnaps.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className="group grid h-11 w-6 place-items-center rounded-full"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-6 bg-primary" : "w-1.5 bg-border group-hover:bg-muted-foreground"}`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}
    </Carousel>
  );
}

export default function TestimonialCarousel({
  testimonials = HOMEPAGE_TESTIMONIALS,
}) {
  if (testimonials.length <= 2) {
    return (
      <div
        className="grid gap-6 md:grid-cols-2"
        aria-label="Client testimonials"
      >
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return <TestimonialCarouselView testimonials={testimonials} />;
}
