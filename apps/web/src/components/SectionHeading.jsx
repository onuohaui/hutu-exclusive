import React from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className,
  titleClassName,
  copyClassName,
  as: Heading = "h2",
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {copy && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted-foreground",
            copyClassName,
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
