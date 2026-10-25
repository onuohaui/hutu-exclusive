import React, { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  MessageCircle,
  Pencil,
  RotateCcw,
  Search,
  WalletCards,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import PropertyImage from "@/components/PropertyImage";
import { getAdvisorWhatsAppUrl } from "@/config/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  formatNaira,
  getAvailableSizes,
  getMatcherCandidates,
  getPaymentDurationLabel,
  getPropertyWhatsAppMessage,
  parseBudgetInput,
} from "@/lib/properties";

const inputClass =
  "min-h-12 w-full rounded-md border border-[#D8D7D1] bg-white px-4 py-3 text-base text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10";

const compactNaira = new Intl.NumberFormat("en-NG", {
  maximumFractionDigits: 2,
});

const formatCompactNaira = (value) => {
  if (!Number.isFinite(value)) return "Not published";
  if (value >= 1_000_000_000)
    return `₦${compactNaira.format(value / 1_000_000_000)}B`;
  if (value >= 1_000_000) return `₦${compactNaira.format(value / 1_000_000)}M`;
  return formatNaira(value);
};

const formatBudget = (parsed) =>
  parsed.isRange
    ? `${formatCompactNaira(parsed.min)}–${formatCompactNaira(parsed.max)}`
    : formatCompactNaira(parsed.max);

function MatcherResultCard({ candidate, mode, status }) {
  const { property } = candidate;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#D8D7D1] bg-white transition-[border-color,box-shadow] duration-200 hover:border-primary/35 hover:shadow-[0_16px_36px_-28px_rgba(11,36,27,0.45)]">
      <PropertyImage
        property={property}
        className="aspect-[16/9]"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.035]"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
            {property.phase} · {property.productType}
          </span>
          {status && (
            <span className="rounded-sm border border-[#D8D7D1] bg-[#F7F5F0] px-2.5 py-1 text-[10px] font-semibold text-primary">
              {status}
            </span>
          )}
        </div>
        <h4 className="mt-3 font-display text-lg font-semibold leading-snug">
          {property.name}
        </h4>
        <p className="mt-1 text-xs text-muted-foreground">
          {candidate.context}
          {candidate.sizeSqm ? ` · ${candidate.sizeSqm} sqm` : ""}
          {property.bedrooms != null
            ? ` · ${property.bedrooms} bedroom${property.bedrooms === 1 ? "" : "s"}`
            : ""}
        </p>

        <div className="mt-5 border-t border-border pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
            {property.pricingMode === "per_sqm"
              ? "Calculated current total"
              : "Current price from"}
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-primary">
            {formatNaira(candidate.price)}
          </p>
          {candidate.pricePerSqm && (
            <p className="mt-1 text-xs text-muted-foreground">
              {formatNaira(candidate.pricePerSqm)} per sqm
            </p>
          )}
          {mode === "start" && candidate.deposit != null && (
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                Minimum published deposit
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-foreground">
                {formatNaira(candidate.deposit)}
              </p>
            </div>
          )}
        </div>

        <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2">
          <a
            href={getAdvisorWhatsAppUrl(
              getPropertyWhatsAppMessage(property, {
                sizeSqm: candidate.sizeSqm,
              }),
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-dark active:scale-[0.98]"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0" />
            <span>Ask About This Property</span>
          </a>
          <Link
            to={`/properties/${property.slug}`}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-center text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary active:scale-[0.98]"
          >
            <span>View Property</span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ResultGroup({ title, copy, candidates, mode, getStatus }) {
  if (!candidates.length) return null;

  return (
    <section className="border-t border-border pt-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{copy}</p>
        </div>
        <p className="text-xs font-semibold text-muted-foreground">
          {candidates.length} {candidates.length === 1 ? "match" : "matches"}
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {candidates.map((candidate) => (
          <MatcherResultCard
            key={`${candidate.property.id}-${candidate.context}`}
            candidate={candidate}
            mode={mode}
            status={getStatus?.(candidate)}
          />
        ))}
      </div>
    </section>
  );
}

export default function BudgetPropertyMatcher() {
  const [mode, setMode] = useState("afford");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("Residential");
  const [sizeSqm, setSizeSqm] = useState("any");
  const [query, setQuery] = useState(null);
  const [error, setError] = useState("");
  const [resultsOpen, setResultsOpen] = useState(false);
  const budgetInputRef = useRef(null);
  const submitButtonRef = useRef(null);
  const returnFocusRef = useRef("submit");
  const sizes = useMemo(() => getAvailableSizes(category), [category]);

  const results = useMemo(() => {
    if (!query) return null;
    const candidates = getMatcherCandidates(query).filter(
      (candidate) => candidate.price != null,
    );
    const { parsed } = query;

    if (query.mode === "afford") {
      const lowerBoundary = parsed.isRange ? parsed.min : parsed.max * 0.75;
      return {
        within: candidates
          .filter(
            (item) => item.price >= lowerBoundary && item.price <= parsed.max,
          )
          .sort((a, b) => b.price - a.price),
        close: candidates
          .filter(
            (item) =>
              item.price > parsed.max && item.price <= parsed.max * 1.15,
          )
          .sort((a, b) => a.price - b.price),
        lower: candidates
          .filter((item) => item.price < lowerBoundary)
          .sort((a, b) => b.price - a.price),
      };
    }

    const knownDeposits = candidates.filter((item) => item.deposit != null);
    return {
      canStart: knownDeposits
        .filter((item) => item.deposit <= parsed.max)
        .sort((a, b) => b.deposit - a.deposit),
      short: knownDeposits
        .filter((item) => item.deposit > parsed.max)
        .sort((a, b) => a.deposit - b.deposit),
      unpublished: candidates.filter((item) => item.deposit == null),
    };
  }, [query]);

  const submit = (event) => {
    event.preventDefault();
    const parsed = parseBudgetInput(budget);
    if (!parsed) {
      setError(
        "Enter a valid amount such as 40m, ₦40m, 40 million, 40000000 or 40m-50m.",
      );
      setQuery(null);
      return;
    }
    setError("");
    setQuery({
      mode,
      parsed,
      category,
      sizeSqm: sizeSqm === "any" ? null : Number(sizeSqm),
    });
    returnFocusRef.current = "submit";
    setResultsOpen(true);
  };

  const returnToMatcher = () => {
    window.setTimeout(() => {
      document
        .getElementById("budget-matcher")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  };

  const closeResults = (focusTarget = "submit") => {
    returnFocusRef.current = focusTarget;
    setResultsOpen(false);
    returnToMatcher();
  };

  const handleDialogOpenChange = (open) => {
    if (open) {
      setResultsOpen(true);
      return;
    }
    closeResults();
  };

  const editSearch = () => closeResults("budget");

  const startOver = () => {
    setMode("afford");
    setBudget("");
    setCategory("Residential");
    setSizeSqm("any");
    setQuery(null);
    setError("");
    closeResults("budget");
  };

  const changeCategory = (event) => {
    setCategory(event.target.value);
    setSizeSqm("any");
  };

  const budgetLabel = query ? formatBudget(query.parsed) : "";
  const resultTitle =
    query?.mode === "start"
      ? `Here are the Hutu Exclusive properties you can start with ${budgetLabel}`
      : `Here’s what you can get for ${budgetLabel}`;
  const activeFilters = query
    ? [
        ["Budget", budgetLabel],
        ["Category", query.category],
        ["Preferred size", query.sizeSqm ? `${query.sizeSqm} sqm` : "Any size"],
        [
          "Search mode",
          query.mode === "afford"
            ? "What can I afford?"
            : "How much do I need to start?",
        ],
      ]
    : [];

  return (
    <div>
      <div
        className="inline-flex w-full rounded-lg border border-[#D8D7D1] bg-white p-1 sm:w-auto"
        aria-label="Choose matcher mode"
      >
        {[
          ["afford", "What can I afford?", Search],
          ["start", "How much do I need to start?", WalletCards],
        ].map(([value, label, Icon]) => (
          <button
            key={value}
            type="button"
            onClick={() => setMode(value)}
            aria-pressed={mode === value}
            className={`inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors sm:flex-none ${mode === value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}
          >
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>

      <form
        onSubmit={submit}
        className="mt-7 rounded-lg border border-[#D8D7D1] bg-white p-5 sm:p-7 lg:p-8"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <label
              htmlFor="matcher-budget"
              className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground"
            >
              {mode === "afford" ? "Your budget" : "Amount available now"}
            </label>
            <input
              ref={budgetInputRef}
              id="matcher-budget"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className={`${inputClass} mt-2`}
              placeholder="e.g. ₦40m or 40m-50m"
              inputMode="decimal"
            />
          </div>
          <div>
            <label
              htmlFor="matcher-category"
              className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground"
            >
              Property category
            </label>
            <select
              id="matcher-category"
              value={category}
              onChange={changeCategory}
              className={`${inputClass} mt-2`}
            >
              <option>Residential</option>
              <option>Commercial</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="matcher-size"
              className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground"
            >
              Preferred size
            </label>
            <select
              id="matcher-size"
              value={sizeSqm}
              onChange={(event) => setSizeSqm(event.target.value)}
              className={`${inputClass} mt-2`}
            >
              <option value="any">
                Any size
                {category === "Commercial" && sizes[0]
                  ? ` (uses ${sizes[0]} sqm minimum)`
                  : ""}
              </option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size} sqm{category === "Commercial" ? " minimum" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>
        {error && (
          <p className="mt-4 text-sm font-medium text-destructive" role="alert">
            {error}
          </p>
        )}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <p className="max-w-xl text-xs leading-5 text-muted-foreground">
            {category === "Commercial"
              ? "Commercial totals are calculated from the selected floor’s price per sqm and the published minimum space."
              : "Matches use the lowest published total price or initial deposit for each property."}
          </p>
          <button
            ref={submitButtonRef}
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark sm:w-auto"
          >
            Find matching properties <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>

      <Dialog
        open={resultsOpen && Boolean(results)}
        onOpenChange={handleDialogOpenChange}
      >
        <DialogContent
          className="block h-[100dvh] w-full max-w-none overflow-y-auto overscroll-contain rounded-none border-0 p-0 sm:h-[calc(100dvh-2rem)] sm:w-[calc(100%-2rem)] sm:max-w-6xl sm:rounded-lg sm:border [&>button.absolute]:hidden"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            window.requestAnimationFrame(() => {
              const target =
                returnFocusRef.current === "budget"
                  ? budgetInputRef.current
                  : submitButtonRef.current;
              target?.focus({ preventScroll: true });
            });
          }}
        >
          <div className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-background/95 px-5 py-3 backdrop-blur-md sm:px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Property matcher results
            </p>
            <button
              type="button"
              onClick={() => closeResults()}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X className="h-4 w-4" /> Close / Exit
            </button>
          </div>

          <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            <DialogHeader className="max-w-4xl space-y-3 text-left">
              <DialogTitle className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                {resultTitle}
              </DialogTitle>
              <DialogDescription className="max-w-2xl text-sm leading-6 sm:text-base">
                Results are grouped against the current Hutu Exclusive property
                database and the filters used for this search.
              </DialogDescription>
            </DialogHeader>

            <dl className="mt-7 grid grid-cols-2 border-y border-border md:grid-cols-4">
              {activeFilters.map(([label, value], index) => (
                <div
                  key={label}
                  className={`py-4 ${index % 2 === 0 ? "pr-4" : "border-l border-border pl-4"} ${index > 1 ? "border-t border-border md:border-t-0" : ""} md:border-l md:px-5 md:first:border-l-0 md:first:pl-0`}
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={editSearch}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <Pencil className="h-4 w-4" /> Edit Search
              </button>
              <button
                type="button"
                onClick={startOver}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <RotateCcw className="h-4 w-4" /> Start Over
              </button>
              <button
                type="button"
                onClick={() => closeResults()}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                <X className="h-4 w-4" /> Close Results
              </button>
            </div>

            <div className="mt-10 space-y-10" aria-live="polite">
              {results && query?.mode === "afford" && (
                <>
                  <ResultGroup
                    title="Within Your Budget"
                    copy="Options closest to the budget or range you entered."
                    candidates={results.within}
                    mode="afford"
                    getStatus={() => "Within budget"}
                  />
                  <ResultGroup
                    title="Close to Your Budget"
                    copy="Options up to 15% above the upper end of your budget."
                    candidates={results.close}
                    mode="afford"
                    getStatus={(item) =>
                      `${formatNaira(item.price - query.parsed.max)} more`
                    }
                  />
                  <ResultGroup
                    title="Lower-Cost Alternatives"
                    copy="Lower-priced options that leave more room in your budget."
                    candidates={results.lower}
                    mode="afford"
                    getStatus={() => "Lower cost"}
                  />
                  {!results.within.length &&
                    !results.close.length &&
                    !results.lower.length && (
                      <p className="rounded-lg border border-border bg-card p-7 text-sm text-muted-foreground">
                        No properties match these filters. Try Any size or
                        another category.
                      </p>
                    )}
                </>
              )}

              {results && query?.mode === "start" && (
                <>
                  <ResultGroup
                    title="You Can Start Now"
                    copy="The amount entered meets or exceeds the lowest published initial deposit."
                    candidates={results.canStart}
                    mode="start"
                    getStatus={() => "Ready to start"}
                  />
                  <ResultGroup
                    title="Amount Still Required"
                    copy="These are the closest options above the amount you currently have, with the exact additional amount shown."
                    candidates={results.short}
                    mode="start"
                    getStatus={(item) =>
                      `${formatNaira(item.deposit - query.parsed.max)} short`
                    }
                  />
                  {results.unpublished.length > 0 && (
                    <div className="rounded-lg border border-warning/30 bg-secondary p-6">
                      <div className="flex gap-3">
                        <CircleDollarSign className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
                        <div>
                          <h3 className="font-display text-lg font-semibold">
                            Deposit details are not published
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            The commercial record publishes floor-by-floor
                            prices, a{" "}
                            {results.unpublished[0].property.minimumSqm} sqm
                            minimum and a{" "}
                            {getPaymentDurationLabel(
                              results.unpublished[0].property,
                            )}{" "}
                            plan, but no initial deposit. The matcher will not
                            invent one.
                          </p>
                          <a
                            href={getAdvisorWhatsAppUrl(
                              getPropertyWhatsAppMessage(
                                results.unpublished[0].property,
                              ),
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-background active:scale-[0.98]"
                          >
                            <MessageCircle className="h-4 w-4 shrink-0" />
                            <span>Ask for the commercial deposit</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {!results.canStart.length &&
                    !results.short.length &&
                    !results.unpublished.length && (
                      <p className="rounded-lg border border-border bg-card p-7 text-sm text-muted-foreground">
                        No properties match these filters. Try Any size or
                        another category.
                      </p>
                    )}
                </>
              )}
            </div>

            <div className="mt-12 border-t border-border pt-7">
              <p className="flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />{" "}
                Results use the current property database. Confirm availability
                and receive a written cost sheet before paying.
              </p>
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={editSearch}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  <Pencil className="h-4 w-4" /> Edit Search
                </button>
                <button
                  type="button"
                  onClick={() => closeResults()}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                >
                  <X className="h-4 w-4" /> Close Results
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
