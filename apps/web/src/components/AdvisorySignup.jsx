import React, { useState } from "react";
import { Check, CheckCircle2, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { subscribeToAdvisory } from "@/lib/advisorySubscription";

const VALUE_POINTS = [
  "Current price and payment-plan updates",
  "New developer offers and buyer promotions",
  "Property availability and phase updates",
  "Site and development updates",
  "Practical buyer advice from Amaka",
];

const inputClassName =
  "min-h-12 w-full rounded-md border border-[#D8D7D1] bg-white px-4 py-3 text-base text-foreground transition-[border-color,box-shadow] placeholder:text-muted-foreground/75 hover:border-primary/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-70";

function validateFields({ firstName, email }) {
  const errors = {};

  if (!firstName.trim()) {
    errors.firstName = "Please enter your first name.";
  }

  if (!email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}

export default function AdvisorySignup() {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    phone: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({
      ...current,
      [name]: undefined,
      form: undefined,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateFields(fields);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      await subscribeToAdvisory({
        firstName: fields.firstName.trim(),
        email: fields.email.trim().toLowerCase(),
        phone: fields.phone.trim(),
        location: fields.location.trim(),
      });
      setStatus("success");
    } catch {
      setStatus("idle");
      setErrors({
        form: "I couldn’t add you just now. Please try again in a moment.",
      });
    }
  };

  return (
    <section
      id="advisory-signup"
      className="scroll-mt-20 border-t border-[#D8D7D1] bg-white"
    >
      <div className="page-container py-20 md:py-24 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-2xl lg:pt-3">
            <span
              className="block h-1 w-12 rounded-full bg-accent"
              aria-hidden="true"
            />
            <h2 className="mt-5 font-display text-[1.875rem] font-semibold leading-9 tracking-[-0.01em] text-foreground sm:text-[2rem] sm:leading-10">
              Get Exclusive Updates &amp; Advisory about Hutu Exclusive Estate
              in Your Inbox
            </h2>
            <div className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>
                Get current Hutu Exclusive price changes, offers, property
                availability, site updates and useful buyer information sent
                directly to you.
              </p>
              <p>
                I’ll also share answers to common buyer questions and the things
                I think you should know before making a property decision.
              </p>
            </div>

            <ul
              className="mt-9 grid gap-x-8 border-y border-border py-2 sm:grid-cols-2"
              aria-label="What subscribers may receive"
            >
              {VALUE_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-b border-border/70 py-3 text-sm leading-6 text-foreground/80 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary">
                    <Check
                      className="h-3 w-3"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-[#D8D7D1] bg-[#F7F5F0] p-6 sm:p-8 lg:p-9 xl:p-10">
            {status === "success" ? (
              <div
                className="flex min-h-80 flex-col justify-center py-6"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2
                  className="h-11 w-11 text-success"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  You’re on the list.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                  I’ll send you Hutu Exclusive updates and buyer information
                  when there’s something worth knowing.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Hutu Exclusive advisory email signup"
              >
                <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <label
                      htmlFor="advisory-first-name"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      First Name{" "}
                      <span className="text-accent" aria-hidden="true">
                        *
                      </span>
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="advisory-first-name"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Your first name"
                      value={fields.firstName}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      aria-invalid={Boolean(errors.firstName)}
                      aria-required="true"
                      aria-describedby={
                        errors.firstName
                          ? "advisory-first-name-error"
                          : undefined
                      }
                      className={inputClassName}
                    />
                    {errors.firstName && (
                      <p
                        id="advisory-first-name-error"
                        className="mt-2 text-xs font-medium text-destructive"
                      >
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="advisory-phone"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      id="advisory-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+234"
                      value={fields.phone}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="advisory-email"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      Email Address{" "}
                      <span className="text-accent" aria-hidden="true">
                        *
                      </span>
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="advisory-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      aria-invalid={Boolean(errors.email)}
                      aria-required="true"
                      aria-describedby={
                        errors.email ? "advisory-email-error" : undefined
                      }
                      className={inputClassName}
                    />
                    {errors.email && (
                      <p
                        id="advisory-email-error"
                        className="mt-2 text-xs font-medium text-destructive"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="advisory-location"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      Location
                    </label>
                    <input
                      id="advisory-location"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="City or country"
                      value={fields.location}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className={inputClassName}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:cursor-wait disabled:opacity-75"
                >
                  {status === "submitting" && (
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  <span>
                    {status === "submitting"
                      ? "Adding You…"
                      : "Keep Me Updated"}
                  </span>
                </button>

                {errors.form && (
                  <p
                    className="mt-3 text-sm font-medium leading-5 text-destructive"
                    role="alert"
                  >
                    {errors.form}
                  </p>
                )}

                <p className="mt-4 text-xs leading-5 text-muted-foreground">
                  By subscribing, you agree to receive Hutu Exclusive updates
                  and advisory emails from me. You can unsubscribe at any time.{" "}
                  <Link
                    to="/privacy-policy"
                    className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
