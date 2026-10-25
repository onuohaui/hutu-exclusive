import React, { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import {
  getGoogleReviews,
  GOOGLE_REVIEWS_URL,
  hasGoogleReviewsEndpoint,
} from "@/lib/googleReviews";

const FALLBACK_RATING = 4.9;
const FALLBACK_REVIEW_COUNT = 40;
const REVIEW_PREVIEW_LENGTH = 230;

function Stars({ rating }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-3.5 w-3.5 ${index < Math.round(rating) ? "fill-accent text-accent" : "fill-none text-border"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function GoogleReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = review.text.length > REVIEW_PREVIEW_LENGTH;
  const visibleText =
    needsTruncation && !expanded
      ? `${review.text.slice(0, REVIEW_PREVIEW_LENGTH).trimEnd()}…`
      : review.text;

  return (
    <article className="flex min-w-[85%] snap-start flex-col rounded-lg border border-[#D8D7D1] bg-white p-5 sm:min-w-[55%] lg:min-w-0 lg:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
          Google Review
        </span>
        <Stars rating={review.rating} />
      </div>
      <blockquote className="mt-4 flex-1">
        <p className="text-sm leading-7 text-foreground/80">“{visibleText}”</p>
      </blockquote>
      {needsTruncation && (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="mt-3 w-fit text-xs font-semibold text-primary hover:underline"
          aria-expanded={expanded}
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-sm font-semibold text-foreground">
          {review.authorUri ? (
            <a
              href={review.authorUri}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:underline"
            >
              {review.authorName}
            </a>
          ) : (
            review.authorName
          )}
        </p>
        {review.date && (
          <p className="mt-1 text-xs text-muted-foreground">{review.date}</p>
        )}
      </div>
    </article>
  );
}

export default function GoogleReviews() {
  const [liveData, setLiveData] = useState(null);

  useEffect(() => {
    if (!hasGoogleReviewsEndpoint()) return undefined;

    const controller = new AbortController();
    getGoogleReviews({ signal: controller.signal })
      .then((data) => setLiveData(data))
      .catch(() => setLiveData(null));

    return () => controller.abort();
  }, []);

  const rating = liveData?.rating ?? FALLBACK_RATING;
  const reviewCount = liveData?.reviewCount ?? FALLBACK_REVIEW_COUNT;
  const reviews = liveData?.reviews || [];
  const listingUrl = liveData?.googleMapsUri || GOOGLE_REVIEWS_URL;

  return (
    <div className="rounded-lg border border-[#D8D7D1] bg-[#EEEBE3]/70 px-4 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-2xl">
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
            What People Say About Hutu Exclusive on Google
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Public reviews from people who have shared their experience with
            Hutu Exclusive on Google.
          </p>
        </div>

        <div className="flex items-end justify-between gap-6 border-l-2 border-accent pl-5 lg:min-w-64">
          <div>
            <p className="font-display text-3xl font-semibold text-foreground">
              {rating.toFixed(1)} <span className="text-accent">★</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Based on {reviewCount} Google reviews
            </p>
          </div>
        </div>
      </div>

      {reviews.length > 0 ? (
        <>
          <div className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
            {reviews.map((review) => (
              <GoogleReviewCard key={review.id} review={review} />
            ))}
          </div>
          <a
            href={listingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View on Google{" "}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </>
      ) : (
        <div className="mt-7 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-foreground">
            {rating.toFixed(1)} / 5 on Google · {reviewCount} public reviews
          </p>
          <a
            href={listingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-primary bg-white px-4 py-2.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-[#F7F5F0] sm:w-fit"
          >
            Read Reviews on Google{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}
