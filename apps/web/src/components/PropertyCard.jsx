import React from "react";
import { ArrowRight, BedDouble, MessageCircle, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import { getAdvisorWhatsAppUrl } from "@/config/site";
import PropertyImage from "@/components/PropertyImage";
import {
  formatNaira,
  getMinimumDeposit,
  getPropertyDisplayPrice,
  getPropertyPriceLabel,
  getPropertySizeLabel,
  getPropertyWhatsAppMessage,
} from "@/lib/properties";
import { cn } from "@/lib/utils";

export default function PropertyCard({ property, imageFallback, className }) {
  const displayPrice = getPropertyDisplayPrice(property);
  const minimumDeposit = getMinimumDeposit(property);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-[border-color,box-shadow] duration-300 hover:border-primary/25 hover:shadow-[0_24px_55px_-36px_rgba(11,36,27,0.3)]",
        className,
      )}
    >
      <PropertyImage
        property={property}
        fallbackImage={imageFallback}
        className="aspect-[3/2]"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.035]"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
          {property.phase} · {property.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
          {property.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{property.subtype}</p>
        <div className="mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
            {getPropertyPriceLabel(property)}
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-primary">
            {formatNaira(displayPrice)}
            {property.pricingMode === "per_sqm" && (
              <span className="text-sm font-medium"> / sqm</span>
            )}
          </p>
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-border py-4 text-xs">
          <div className="flex gap-2">
            <Ruler className="h-4 w-4 shrink-0 text-primary" />
            <div>
              <dt className="text-muted-foreground">Size</dt>
              <dd className="mt-0.5 font-semibold">
                {getPropertySizeLabel(property)}
              </dd>
            </div>
          </div>
          {property.bedrooms != null ? (
            <div className="flex gap-2">
              <BedDouble className="h-4 w-4 shrink-0 text-primary" />
              <div>
                <dt className="text-muted-foreground">Bedrooms</dt>
                <dd className="mt-0.5 font-semibold">{property.bedrooms}</dd>
              </div>
            </div>
          ) : (
            <div>
              <dt className="text-muted-foreground">Minimum to start</dt>
              <dd className="mt-0.5 font-semibold">
                {minimumDeposit == null
                  ? "On request"
                  : formatNaira(minimumDeposit)}
              </dd>
            </div>
          )}
        </dl>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <a
            href={getAdvisorWhatsAppUrl(getPropertyWhatsAppMessage(property))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2.5 text-center text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-dark active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span>Ask About This Property</span>
          </a>
          <Link
            to={`/properties/${property.slug}`}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-border bg-card px-3 py-2.5 text-center text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary active:scale-[0.98]"
          >
            <span>View Property</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </div>
    </article>
  );
}
