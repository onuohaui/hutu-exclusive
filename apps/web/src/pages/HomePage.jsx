import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  BadgePercent,
  Bell,
  Building2,
  Calendar,
  CalendarClock,
  Clock,
  Gift,
  Home,
  House,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Video,
  WalletCards,
} from "lucide-react";
import BudgetPropertyMatcher from "@/components/BudgetPropertyMatcher";
import AdvisorySignup from "@/components/AdvisorySignup";
import FaqList from "@/components/FaqList";
import GoogleReviews from "@/components/GoogleReviews";
import HeroSlider from "@/components/HeroSlider";
import PropertyCarousel from "@/components/PropertyCarousel";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CampaignBand from "@/components/CampaignBand";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { getAdvisorWhatsAppUrl } from "@/config/site";
import { COMMERCIAL, HERO_SLIDES, IMAGES, PHASES, UPDATES } from "@/data/site";
import {
  formatNaira,
  getCommercialPricePerSqm,
  getFeaturedProperties,
  getPhaseInventorySummary,
  getPropertiesByCategory,
  getStartingPrice,
  PROPERTIES,
} from "@/lib/properties";

const HOMEPAGE_OFFERS = [
  {
    id: "anniversary-promo",
    featured: true,
    badge: "Limited-Time Developer Promo",
    icon: Sparkles,
    title: "Mshel Homes 8th Anniversary Discounts",
    description:
      "Celebrate Mshel Homes’ 8th Anniversary with special discounts on qualifying Hutu Exclusive land and house purchases from 7–30 September 2026.",
    rates: {
      paymentPlan: [
        { label: "Houses", discount: "2.5% off" },
        { label: "Land", discount: "5% off" },
      ],
      outright: [
        { label: "Houses", discount: "5% off" },
        { label: "Land", discount: "10% off" },
      ],
    },
    validity: "7 September – 30 September 2026",
    cta: "Ask Me About the Anniversary Offer",
    whatsappMessage:
      "Hi, I’d like to know more about the Mshel Homes 8th Anniversary discounts for Hutu Exclusive.",
  },
  {
    id: "standard-outright",
    featured: false,
    badge: "Developer Offer",
    icon: BadgePercent,
    title: "2.5% Outright Purchase Discount",
    description:
      "Mshel Homes currently offers a 2.5% discount on outright property purchases, regardless of purchase amount or number of properties purchased.",
    validity: null,
    cta: "Ask About Outright Pricing",
    whatsappMessage:
      "Hi, I’d like to know more about the 2.5% outright purchase discount.",
  },
  {
    id: "buy-through-me",
    featured: false,
    badge: "Limited-Time Buyer Offer",
    icon: Sparkles,
    title: "Get Up to 5% Off When You Buy Through Me",
    description:
      "Buying a Hutu Exclusive property worth ₦50 million or more outright? You may qualify for up to 5% discount when you purchase through me.",
    validity: "Until 31 December 2026",
    qualificationNote:
      "Up to 5% total discount. Not an additional 5% added to another developer discount. Not guaranteed; subject to qualification.",
    cta: "Check If I Qualify",
    whatsappMessage:
      "Hi, I’d like to check if I qualify for the up to 5% outright discount when buying through you.",
  },
  {
    id: "black-friday",
    featured: false,
    badge: "Coming Soon",
    icon: Bell,
    title: "Black Friday Offers Are Coming",
    description:
      "Confirmed Hutu Exclusive Black Friday offers will be added here as soon as they are announced.",
    validity: null,
    cta: "Tell Me When It Drops",
    whatsappMessage:
      "Hi, please let me know when the Hutu Exclusive Black Friday offers are announced.",
  },
  {
    id: "buyer-gift",
    featured: false,
    badge: "Personal Buyer Perk",
    icon: Gift,
    title: "A Curated Buyer Gift",
    description:
      "Complete your Hutu Exclusive purchase through me and enjoy a thoughtful buyer gift selected especially for you.",
    validity: null,
    cta: "Ask About Buyer Perks",
    whatsappMessage:
      "Hi, I’d like to know more about the buyer perks available when I purchase through you.",
  },
];

const BUYER_COMPARISON_ROWS = [
  {
    compare: "Property payment",
    mine: "Paid directly to Mshel Homes",
    developer: "Paid directly to Mshel Homes",
  },
  {
    compare: "Choosing what to buy",
    mine: "Personal help comparing phases, sizes, prices and payment plans around your goals",
    developer: "Guidance based on available developer inventory",
  },
  {
    compare: "Inspection support",
    mine: "Physical or virtual inspection coordinated with you",
    developer: "Standard developer inspection process",
  },
  {
    compare: "After you pay",
    mine: "I follow up on documentation, receipts, allocation and communication",
    developer: "Standard developer processing",
  },
  {
    compare: "Buyer relationship",
    mine: "You have someone personally following your purchase from enquiry through allocation",
    developer:
      "You work through the developer’s normal sales/customer-service process",
  },
];

const HOMEPAGE_FAQS = [
  {
    q: "What documents do I receive when I buy?",
    plainText:
      "Every purchase comes with a contract of sale, a payment receipt for each instalment, and — on completion — a deed of assignment, registered survey plan and allocation letter. The estate title is available for independent verification before you pay anything, and we encourage buyers to involve their own lawyer.",
    a: (
      <p>
        Every purchase comes with a contract of sale, a payment receipt for each
        instalment, and — on completion — a deed of assignment, registered
        survey plan and allocation letter. The estate title is available for
        independent verification before you pay anything, and we encourage
        buyers to involve their own lawyer.
      </p>
    ),
  },
  {
    q: "Are there any hidden charges or fees?",
    plainText:
      "All fees associated with a land purchase are the applicable development levy, infrastructure fees and a ₦10,000 form fee. For apartments, the development-related costs are already absorbed into the price of the property. The only additional cost is a ₦20,000 form fee. You can request a complete breakdown of all applicable fees and costs from the beginning so you know exactly what your purchase will cost before making a decision.",
    a: (
      <div className="space-y-3">
        <p>
          All fees associated with a{" "}
          <strong className="font-semibold text-foreground">
            land purchase
          </strong>{" "}
          are the applicable{" "}
          <strong className="font-semibold text-foreground">
            development levy, infrastructure fees and a ₦10,000 form fee
          </strong>
          .
        </p>
        <p>
          For{" "}
          <strong className="font-semibold text-foreground">apartments</strong>,
          the development-related costs are already absorbed into the price of
          the property. The only additional cost is a{" "}
          <strong className="font-semibold text-foreground">
            ₦20,000 form fee
          </strong>
          .
        </p>
        <p>
          You can request a complete breakdown of all applicable fees and costs
          from the beginning so you know exactly what your purchase will cost
          before making a decision.
        </p>
      </div>
    ),
  },
  {
    q: "How do I know if my investment is safe?",
    plainText:
      "Hutu Exclusive is developed by Mshel Homes, a developer with more than 40 estates across Abuja, Lagos and Yola and a proven track record of delivering legally secure properties. Hutu Exclusive is FCDA-approved and has a Certificate of Occupancy (C of O) title. The necessary title and property documentation is provided as part of the purchase process, giving buyers clear documentation for the property they are acquiring.",
    a: (
      <div className="space-y-3">
        <p>
          Hutu Exclusive is developed by{" "}
          <strong className="font-semibold text-foreground">Mshel Homes</strong>
          , a developer with more than{" "}
          <strong className="font-semibold text-foreground">
            40 estates across Abuja, Lagos and Yola
          </strong>{" "}
          and a proven track record of delivering legally secure properties.
        </p>
        <p>
          Hutu Exclusive is{" "}
          <strong className="font-semibold text-foreground">
            FCDA-approved
          </strong>{" "}
          and has a{" "}
          <strong className="font-semibold text-foreground">
            Certificate of Occupancy (C of O)
          </strong>{" "}
          title.
        </p>
        <p>
          The necessary title and property documentation is provided as part of
          the purchase process, giving buyers clear documentation for the
          property they are acquiring.
        </p>
      </div>
    ),
  },
  {
    q: "Can I sell the property later?",
    plainText:
      "Yes. You are free to resell your Hutu Exclusive property at any time, subject to the applicable documentation and transfer process. Real estate values in Abuja continue to rise, and your property is expected to appreciate significantly as development around the area progresses. I can also help you find prospective buyers if you decide to sell your property later.",
    a: (
      <div className="space-y-3">
        <p>
          Yes. You are free to resell your Hutu Exclusive property at any time,
          subject to the applicable documentation and transfer process.
        </p>
        <p>
          Real estate values in Abuja continue to rise, and your property is
          expected to appreciate significantly as development around the area
          progresses.
        </p>
        <p>
          I can also help you find prospective buyers if you decide to sell your
          property later.
        </p>
      </div>
    ),
  },
  {
    q: "How soon can I start building?",
    plainText:
      "Hutu Exclusive originally started as an off-plan development, which allowed buyers to purchase property while construction and estate infrastructure were still being developed. Development is now ongoing, particularly in Phase 1 & 2, with estate infrastructure and amenities currently being built. The necessary building approval has now been received, and clients will soon begin receiving physical allocations. Once your plot has been physically allocated and the relevant estate requirements have been completed, you can move to site and begin construction in line with the approved building prototype and estate guidelines.",
    a: (
      <div className="space-y-3">
        <p>
          Hutu Exclusive originally started as an{" "}
          <strong className="font-semibold text-foreground">
            off-plan development
          </strong>
          , which allowed buyers to purchase property while construction and
          estate infrastructure were still being developed.
        </p>
        <p>
          Development is now ongoing, particularly in{" "}
          <strong className="font-semibold text-foreground">Phase 1 & 2</strong>
          , with estate infrastructure and amenities currently being built.
        </p>
        <p>
          The necessary building approval has now been received, and clients
          will soon begin receiving{" "}
          <strong className="font-semibold text-foreground">
            physical allocations
          </strong>
          .
        </p>
        <p>
          Once your plot has been physically allocated and the relevant estate
          requirements have been completed, you can move to site and begin
          construction in line with the approved building prototype and estate
          guidelines.
        </p>
      </div>
    ),
  },
  {
    q: "What is the title document for Hutu Exclusive?",
    plainText:
      "Hutu Exclusive is FCDA-approved and has a Certificate of Occupancy (C of O) title. This provides the legal title supporting the development and confirms the recognised interest in the land. Relevant property and title documentation is provided as part of the purchase process.",
    a: (
      <div className="space-y-3">
        <p>
          Hutu Exclusive is{" "}
          <strong className="font-semibold text-foreground">
            FCDA-approved
          </strong>{" "}
          and has a{" "}
          <strong className="font-semibold text-foreground">
            Certificate of Occupancy (C of O)
          </strong>{" "}
          title.
        </p>
        <p>
          This provides the legal title supporting the development and confirms
          the recognised interest in the land.
        </p>
        <p>
          Relevant property and title documentation is provided as part of the
          purchase process.
        </p>
      </div>
    ),
  },
  {
    q: "Will I get instant allocation?",
    plainText:
      "Yes. Hutu Exclusive provides instant allocation on the estate layout, which is included in your allocation letter. This allows you to know where your plot is located on the estate plan from the beginning. Layout allocation is different from physical allocation, where your actual plot is identified and handed over to you on site. Physical allocation takes place when the necessary building approvals have been obtained and clients are moved onto the site. For Phase 1 & 2, building approval has now been received and physical allocation will begin as development progresses.",
    a: (
      <div className="space-y-3">
        <p>Yes.</p>
        <p>
          Hutu Exclusive provides{" "}
          <strong className="font-semibold text-foreground">
            instant allocation on the estate layout
          </strong>
          , which is included in your allocation letter.
        </p>
        <p>
          This allows you to know where your plot is located on the estate plan
          from the beginning.
        </p>
        <p>
          Layout allocation is different from{" "}
          <strong className="font-semibold text-foreground">
            physical allocation
          </strong>
          , where your actual plot is identified and handed over to you on site.
        </p>
        <p>
          Physical allocation takes place when the necessary building approvals
          have been obtained and clients are moved onto the site.
        </p>
        <p>
          For{" "}
          <strong className="font-semibold text-foreground">Phase 1 & 2</strong>
          , building approval has now been received and physical allocation will
          begin as development progresses.
        </p>
      </div>
    ),
  },
  {
    q: "I live abroad. Can I buy from the diaspora?",
    plainText:
      "Yes — a large share of our buyers live outside Nigeria. The whole process can be handled remotely: virtual inspections over video call, documents sent for review before payment, payments through official company accounts only, and the option to nominate a representative with a power of attorney for physical allocation.",
    a: (
      <p>
        Yes — a large share of our buyers live outside Nigeria. The whole
        process can be handled remotely: virtual inspections over video call,
        documents sent for review before payment, payments through official
        company accounts only, and the option to nominate a representative with
        a power of attorney for physical allocation.
      </p>
    ),
  },
  {
    q: "What happens after I complete payment?",
    plainText:
      "Three things, in order: your final documentation is prepared (deed of assignment and registered survey), you receive your allocation letter, and a date is set for physical allocation on site. From there you can fence your plot, apply for building approval, or hold — the choice is yours.",
    a: (
      <p>
        Three things, in order: your final documentation is prepared (deed of
        assignment and registered survey), you receive your allocation letter,
        and a date is set for physical allocation on site. From there you can
        fence your plot, apply for building approval, or hold — the choice is
        yours.
      </p>
    ),
  },
];

export default function HomePage() {
  const phaseSummaries = Object.fromEntries(
    PHASES.map((phase) => [phase.name, getPhaseInventorySummary(phase.name)]),
  );
  const commercialProperties = getPropertiesByCategory("Commercial");
  const commercialProperty = commercialProperties[0];
  const explore = [
    {
      name: "Phase 1 & 2",
      description: "Land, houses, apartments & commercial opportunities",
      status: "Residential inventory",
      image: IMAGES.phase12,
      to: "/residential/phase-1-2",
      startingPrice: phaseSummaries["Phase 1 & 2"]?.startingPrice || 22453200,
      cta: "Explore Phase 1 & 2",
    },
    {
      name: "Phase 3",
      description:
        "Land, houses & apartment options across multiple prototypes",
      status: "Residential inventory",
      image: IMAGES.phase3,
      to: "/residential/phase-3",
      startingPrice: phaseSummaries["Phase 3"]?.startingPrice || 11689453,
      cta: "Explore Phase 3",
    },
    {
      name: "Phase 5",
      description: "Residential land and prototype options",
      status: "Residential land inventory",
      image: IMAGES.phase5,
      to: "/residential/phase-5",
      startingPrice: phaseSummaries["Phase 5"]?.startingPrice || 8250000,
      cta: "Explore Phase 5",
    },
    {
      name: "Commercial",
      description: "Shopping mall spaces within Phase 1 & 2",
      status: "Commercial inventory",
      image: IMAGES.commercial,
      to: "/commercial",
      startingPrice: getCommercialPricePerSqm(commercialProperty) || 1925000,
      priceSuffix: " / sqm",
      supportingDetail: commercialProperty
        ? `${commercialProperty.minimumSqm}sqm minimum`
        : "30sqm minimum",
      cta: "Explore Commercial",
    },
  ];
  const featuredProperties = getFeaturedProperties();

  const activePropertiesCount = PROPERTIES.length;
  const residentialPhasesCount = PHASES.length;
  const commercialCount =
    getPropertiesByCategory("Commercial").length > 0 ? 1 : 0;
  const lowestResidentialPrice = Math.min(
    ...getPropertiesByCategory("Residential")
      .map(getStartingPrice)
      .filter(Number.isFinite),
  );
  const entryPriceFormatted = Number.isFinite(lowestResidentialPrice)
    ? `From ₦${lowestResidentialPrice / 1_000_000}M`
    : "From ₦8.25M";

  const propertyMetrics = [
    {
      value: activePropertiesCount.toString(),
      label: "Listed Property Options",
      description: "Current land, house and commercial listings available to compare.",
      icon: House,
    },
    {
      value: residentialPhasesCount.toString(),
      label: "Residential Phases",
      description: "Explore Phase 1 & 2, Phase 3 and Phase 5 in one place.",
      icon: MapPinned,
    },
    {
      value: commercialCount.toString(),
      label: "Commercial Development",
      description: "A dedicated commercial opportunity within Phase 1 & 2.",
      icon: Building2,
    },
    {
      value: entryPriceFormatted,
      label: "Current Entry Price",
      description: "The lowest currently published residential property price.",
      icon: WalletCards,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Hutu Exclusive Abuja — Find the Right Property for Your Budget
        </title>
        <meta
          name="description"
          content="Compare available residential and commercial properties at Hutu Exclusive Abuja — phases, prices and payment plans — before making a buying decision. Talk to an advisor today."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOMEPAGE_FAQS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  item.plainText ||
                  (typeof item.a === "string" ? item.a : item.q),
              },
            })),
          })}
        </script>
      </Helmet>

      {/* 1. Hero */}
      <section className="relative flex min-h-[calc(100dvh-68px)] items-center overflow-hidden bg-primary-dark">
        <HeroSlider slides={HERO_SLIDES} />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,27,42,0.74)_0%,rgba(8,35,50,0.48)_49%,rgba(8,28,39,0.12)_78%),linear-gradient(0deg,rgba(5,19,28,0.58)_0%,rgba(5,19,28,0.04)_58%)]" />
        <div className="page-container relative z-20 py-20 sm:py-24 lg:py-28">
          <Reveal>
            <div className="max-w-[790px] lg:ml-5">
            <div className="inline-flex items-center gap-0.5 text-[#11100f]">
              <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-[8px] bg-white shadow-sm">
                <Home className="h-3 w-3" aria-hidden="true" />
              </span>
              <span className="inline-flex h-[26px] items-center whitespace-nowrap rounded-full bg-white px-3 text-[11px] font-medium shadow-sm sm:px-4 sm:text-xs">
                Residential &amp; commercial properties in Abuja
              </span>
            </div>
            <h1 className="mt-5 max-w-[780px] font-display text-[2.6rem] font-medium leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.25rem]">
              Find &amp; Buy the Right Hutu Exclusive Property for Your Budget
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-6 text-white/90 sm:text-lg sm:leading-7">
              Compare available residential and commercial properties across
              Hutu Exclusive, including phases, prices and payment plans, before
              making a buying decision.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-4">
              <Link
                to="/residential"
                className="group inline-flex min-h-[50px] items-center justify-center gap-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#11100f] transition-colors hover:bg-[#F7F5F0] active:bg-[#EEEBE3]"
              >
                <span>View All Properties</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#budget-matcher"
                className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-xl border border-white/70 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white backdrop-blur-[2px] transition-colors hover:bg-white/10"
              >
                Find What Fits My Budget
                <WalletCards className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-7 max-w-2xl text-xs leading-relaxed text-white/80">
              Buying through me does not change how you pay — property payments
              are made directly to the developer.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Property Metrics Cards */}
      <section
        id="property-metrics"
        aria-label="Estate and property metrics"
        className="scroll-mt-20 border-b border-[#eceef2] bg-white py-5 sm:py-6"
      >
        <div className="page-container grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[184px_184px]">
          {propertyMetrics.map((metric, index) => {
            const MetricIcon = metric.icon;

            return (
              <article
                key={metric.label}
                className={cn(
                  "relative flex min-h-[184px] flex-col overflow-hidden rounded-[18px] border border-[#eceef2] bg-[#f1f2f6] p-5 sm:p-6",
                  index < 2 && "lg:row-span-2 lg:min-h-[384px]",
                )}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/60" />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-white text-primary shadow-sm ring-1 ring-black/[0.03]">
                    <MetricIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-auto pt-5">
                  <p
                    className={cn(
                      "font-display text-4xl font-semibold tracking-[-0.04em] text-primary",
                      index < 2 && "lg:text-6xl",
                    )}
                  >
                    {metric.value}
                  </p>
                  <h2 className="mt-1.5 text-sm font-semibold text-foreground sm:text-base">{metric.label}</h2>
                  <p
                    className={cn(
                      "mt-1 text-xs leading-5 text-muted-foreground",
                      index < 2 ? "max-w-xs lg:mt-3 lg:text-sm lg:leading-6" : "line-clamp-1",
                    )}
                  >
                    {metric.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Budget-to-Property Matcher */}
      <section
        id="budget-matcher"
        className="scroll-mt-20 border-y border-[#D8D7D1] bg-[#F7F5F0]"
      >
        <div className="page-container home-section-space">
          <Reveal>
            <SectionHeading
              eyebrow="Start With Your Budget"
              title="Match your budget to the current property database"
              copy="Check what your total budget can afford, or compare the amount you have now with the published initial deposits."
              titleClassName="text-[1.875rem] leading-9 tracking-[-0.01em] sm:text-[2rem] sm:leading-10"
              copyClassName="leading-6"
            />
          </Reveal>
          <div className="mt-12">
            <BudgetPropertyMatcher />
          </div>
        </div>
      </section>

      {/* 3. Large Promotional Slider / Campaign Band */}
      <CampaignBand />

      {/* 4. Explore Hutu Exclusive */}
      <section id="explore" className="scroll-mt-20 bg-white">
        <div className="page-container home-section-space">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-[1.875rem] font-semibold leading-9 tracking-[-0.01em] text-foreground sm:text-[2rem] sm:leading-10">
                Explore Hutu Exclusive
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Three residential phases and one commercial opportunity. Start
                with the option closest to your budget and buying goal.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {explore.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <Link
                  to={item.to}
                  className="group grid h-full overflow-hidden rounded-lg border border-[#D8D7D1] bg-white transition-[border-color,box-shadow] duration-200 hover:border-primary/35 hover:shadow-[0_16px_36px_-28px_rgba(11,36,27,0.45)] md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted md:aspect-auto md:min-h-64">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {item.status && (
                      <span className="absolute left-3 top-3 rounded-sm border border-white/25 bg-primary-dark/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-2xl font-semibold leading-8 text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-primary">
                      From {formatNaira(item.startingPrice)}
                      {item.priceSuffix || ""}
                      {item.supportingDetail && (
                        <span className="font-normal text-muted-foreground">
                          {" "}
                          · {item.supportingDetail}
                        </span>
                      )}
                    </p>
                    <span className="mt-4 inline-flex items-center justify-between gap-2 border-t border-[#D8D7D1] pt-4 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                      {item.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Below the cards: Compact Decision Help Area */}
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[#D8D7D1] pt-6 sm:flex-row sm:items-center">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Not sure where to start?
              </h3>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="#budget-matcher"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-dark active:scale-[0.98]"
                >
                  Find What Fits My Budget
                </a>
                <Link
                  to="/about/hutu-exclusive"
                  className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Learn More About Hutu Exclusive
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Best-Selling Properties */}
      <section
        id="best-selling-properties"
        className="scroll-mt-20 overflow-hidden border-t border-[#D8D7D1] bg-[#F7F5F0]"
      >
        <div className="page-container home-section-space">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Property Shortlist"
                title="Best-Selling Properties"
                copy="A snapshot of what buyers are asking about right now — plots, homes and commercial units with deposits and payment durations shown up front."
                titleClassName="text-[1.875rem] leading-9 tracking-[-0.01em] sm:text-[2rem] sm:leading-10"
                copyClassName="leading-6"
              />
              <Link
                to="/residential"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                View all properties <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10">
              <PropertyCarousel
                properties={featuredProperties}
                cardClassName="border-[#D8D7D1] bg-white transition-[border-color,box-shadow] duration-200 hover:border-primary/35 hover:shadow-[0_16px_36px_-28px_rgba(11,36,27,0.45)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Meet Your Advisor */}
      <section id="meet-amaka" className="border-t border-[#D8D7D1] bg-white">
        <div className="page-container py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Photo Column: Mobile First (order-1), Desktop (lg:col-span-5) */}
            <div className="order-1 lg:col-span-5">
              <Reveal>
                <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-[#D8D7D1] bg-white sm:max-w-md lg:max-w-none">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src="/images/advisor/amaka-okorie.png"
                      alt="Amaka Okorie — Hutu Exclusive Property Advisor"
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div
                      style={{ display: "none" }}
                      className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-muted-foreground"
                    >
                      <p className="font-mono text-xs uppercase tracking-wider text-foreground">
                        [AMAKA HOMEPAGE PHOTO PLACEHOLDER]
                      </p>
                    </div>
                  </div>
                  <figcaption className="flex items-center justify-between gap-4 border-t border-[#D8D7D1] bg-white px-5 py-4">
                    <div>
                      <p className="font-display text-sm font-semibold text-foreground">
                        Amaka Okorie
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Hutu Exclusive Property Advisor
                      </p>
                    </div>
                    <span className="rounded-sm border border-[#D8D7D1] bg-[#F7F5F0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                      Abuja
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            {/* Copy Column: Mobile Second (order-2), Desktop (lg:col-span-7) */}
            <div className="order-2 lg:col-span-7">
              <Reveal delay={0.06}>
                <h2 className="font-display text-[1.875rem] font-semibold leading-9 tracking-[-0.01em] text-foreground sm:text-[2rem] sm:leading-10">
                  Hi, I’m Amaka.
                </h2>
                <div className="mt-5 space-y-4 text-base leading-6 text-muted-foreground sm:text-lg sm:leading-7">
                  <p>
                    I’m a Hutu Exclusive Property Advisor based in Abuja, and
                    I’ve helped several clients navigate Hutu Exclusive since
                    the estate launched in 2024.
                  </p>
                  <p>
                    I’ve handled more than{" "}
                    <strong className="font-semibold text-foreground">
                      ₦500M in Hutu Exclusive property sales
                    </strong>{" "}
                    and served more than{" "}
                    <strong className="font-semibold text-foreground">
                      20 clients
                    </strong>
                    , but what matters most to me is helping you understand what
                    you’re buying and choose an option that genuinely fits your
                    budget, plans and timeline.
                  </p>
                  <p>
                    I built this website because buyers deserve clear
                    information, honest answers and someone who will still be
                    there after the payment is made.
                  </p>
                </div>
                <p className="mt-6 border-l-2 border-accent pl-4 text-base font-semibold leading-6 text-foreground sm:text-lg sm:leading-7">
                  Honest guidance. Clear answers. Personal follow-through.
                </p>
                <div className="mt-8">
                  <Link
                    to="/about/meet-your-advisor"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-dark active:scale-[0.98]"
                  >
                    <span>Meet Your Advisor →</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Buy Through Me */}
      <section
        id="buyer-support"
        className="scroll-mt-20 border-y border-[#D8D7D1] bg-[#F7F5F0]"
      >
        <div className="page-container home-section-space">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-[1.875rem] font-semibold leading-9 tracking-[-0.01em] text-foreground sm:text-[2rem] sm:leading-10">
                Why Buy Hutu Exclusive Through Me?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                You still pay Mshel Homes directly. The difference is the level
                of guidance, follow-through and buyer support you receive along
                the way.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-10">
              {/* Desktop & Tablet Comparison Table */}
              <div className="hidden overflow-hidden rounded-lg border border-[#D8D7D1] bg-white md:block">
                <table className="w-full table-fixed text-left text-sm">
                  <colgroup>
                    <col className="w-[26%]" />
                    <col className="w-[37%]" />
                    <col className="w-[37%]" />
                  </colgroup>
                  <thead>
                    <tr className="border-b border-[#D8D7D1] bg-[#EEEBE3]/70">
                      <th
                        scope="col"
                        className="px-6 py-4.5 text-xs font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Compare
                      </th>
                      <th
                        scope="col"
                        className="border-l border-border bg-primary/[0.05] px-6 py-4.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-base font-semibold text-primary">
                            Buy Through Me
                          </span>
                          <span className="rounded-sm border border-primary/20 bg-primary/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
                            Personal Advisory
                          </span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="border-l border-border px-6 py-4.5 font-display text-base font-semibold text-foreground"
                      >
                        Buy Direct from Mshel Homes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {BUYER_COMPARISON_ROWS.map((row) => (
                      <tr
                        key={row.compare}
                        className="transition-colors hover:bg-muted/10"
                      >
                        <th
                          scope="row"
                          className="px-6 py-5 font-semibold text-foreground align-top"
                        >
                          {row.compare}
                        </th>
                        <td className="border-l border-border bg-primary/[0.025] px-6 py-5 leading-relaxed text-foreground align-top">
                          {row.mine}
                        </td>
                        <td className="border-l border-border px-6 py-5 leading-relaxed text-muted-foreground align-top">
                          {row.developer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked Comparison Cards */}
              <div className="space-y-4 md:hidden">
                {BUYER_COMPARISON_ROWS.map((row) => (
                  <div
                    key={row.compare}
                    className="overflow-hidden rounded-lg border border-[#D8D7D1] bg-white p-4.5"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {row.compare}
                    </h3>
                    <div className="mt-3 space-y-2.5">
                      <div className="rounded-md border border-primary/25 bg-primary/[0.04] p-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-primary">
                            Buy Through Me
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-foreground">
                          {row.mine}
                        </p>
                      </div>
                      <div className="rounded-md border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-xs font-semibold text-muted-foreground">
                          Buy Direct from Mshel Homes
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {row.developer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Payment Reassurance Note */}
          <Reveal delay={0.08}>
            <div className="mt-8 flex items-start gap-3 rounded-md border border-[#D8D7D1] bg-white px-4 py-3.5 text-sm leading-relaxed text-muted-foreground sm:items-center">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary sm:mt-0" />
              <p>
                Whichever route you choose, your property payment goes directly
                to Mshel Homes. Buying through me simply gives you an additional
                layer of personal guidance and follow-through.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Discounts, Perks & Promos */}
      <section
        id="offers-and-perks"
        className="scroll-mt-20 border-b border-[#D8D7D1] bg-white"
      >
        <div className="page-container home-section-space">
          <Reveal>
            <SectionHeading
              title="Discounts, Perks & Promos"
              copy="See current Hutu Exclusive discounts, limited-time promotions and additional perks available when you buy through me."
              titleClassName="text-[1.875rem] leading-9 tracking-[-0.01em] sm:text-[2rem] sm:leading-10"
              copyClassName="leading-6"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {HOMEPAGE_OFFERS.map((offer, index) => {
              const isAnniversary = offer.id === "anniversary-promo";
              const isBuyThroughMe = offer.id === "buy-through-me";
              const isBlackFriday = offer.id === "black-friday";

              // Responsive layout:
              // Desktop: 3 + 2 layout (Cards 0, 1, 2 in row 1; Cards 3, 4 centered in row 2)
              // Tablet: 2-column layout (Card 0 hero spans 2 cols, Cards 1-4 form two 2-col rows)
              // Mobile: 1 column
              const gridClasses = isAnniversary
                ? "sm:col-span-2 lg:col-span-2 lg:col-start-1"
                : index === 3
                  ? "col-start-auto sm:col-span-1 lg:col-span-2 lg:col-start-2"
                  : "col-start-auto sm:col-span-1 lg:col-span-2";

              return (
                <Reveal
                  key={offer.id}
                  delay={(index % 3) * 0.07}
                  className={cn("flex flex-col h-full", gridClasses)}
                >
                  <article
                    className={cn(
                      "group flex h-full flex-col rounded-lg border bg-white p-6 transition-[border-color,box-shadow] duration-200 sm:p-7",
                      isAnniversary
                        ? "border-primary/45 shadow-[inset_0_3px_0_0_#12372A] hover:border-primary"
                        : "border-[#D8D7D1] hover:border-primary/40 hover:shadow-[0_16px_36px_-28px_rgba(11,36,27,0.45)]",
                    )}
                  >
                    {/* Top Badge & Icon Row */}
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={cn(
                          "grid h-11 w-11 shrink-0 place-items-center rounded-md border",
                          isAnniversary
                            ? "border-primary bg-primary text-primary-foreground"
                            : isBuyThroughMe
                              ? "border-accent/25 bg-accent/10 text-accent"
                              : "border-[#D8D7D1] bg-[#F7F5F0] text-primary",
                        )}
                      >
                        <offer.icon className="h-5 w-5" />
                      </div>
                      <span
                        className={cn(
                          "rounded-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.13em]",
                          isAnniversary
                            ? "bg-accent text-accent-foreground shadow-sm"
                            : isBuyThroughMe
                              ? "border border-accent/30 bg-accent/10 text-accent"
                              : isBlackFriday
                                ? "border border-border bg-muted text-muted-foreground"
                                : "border border-border bg-secondary text-muted-foreground",
                        )}
                      >
                        {offer.badge}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3
                      className={cn(
                        "mt-5 font-display font-semibold leading-snug text-foreground",
                        isAnniversary
                          ? "text-xl sm:text-2xl"
                          : "text-lg sm:text-xl",
                      )}
                    >
                      {offer.title}
                    </h3>

                    {/* Copy */}
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {offer.description}
                    </p>

                    {/* Card 1: 8th Anniversary Detailed Breakdown */}
                    {isAnniversary && offer.rates && (
                      <div className="mt-5 rounded-md border border-[#D8D7D1] bg-[#F7F5F0] p-3.5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                          Anniversary Discount Breakdown
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-3 divide-x divide-border">
                          <div>
                            <p className="text-xs font-semibold text-foreground">
                              Payment Plan Purchases
                            </p>
                            <ul className="mt-2 space-y-1 text-xs">
                              {offer.rates.paymentPlan.map((item) => (
                                <li
                                  key={item.label}
                                  className="flex items-center justify-between text-muted-foreground"
                                >
                                  <span>{item.label}</span>
                                  <span className="font-bold text-primary">
                                    {item.discount}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pl-3">
                            <p className="text-xs font-semibold text-foreground">
                              Outright Purchases
                            </p>
                            <ul className="mt-2 space-y-1 text-xs">
                              {offer.rates.outright.map((item) => (
                                <li
                                  key={item.label}
                                  className="flex items-center justify-between text-muted-foreground"
                                >
                                  <span>{item.label}</span>
                                  <span className="font-bold text-accent">
                                    {item.discount}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Card 3: Important Qualification Notice */}
                    {isBuyThroughMe && offer.qualificationNote && (
                      <div className="mt-4 rounded-md border border-border/80 bg-secondary/50 p-2.5 text-[11px] leading-relaxed text-muted-foreground">
                        <p>{offer.qualificationNote}</p>
                      </div>
                    )}

                    {/* Validity Date */}
                    {offer.validity && (
                      <div
                        className={cn(
                          "mt-4 flex items-center gap-1.5 text-xs",
                          isAnniversary
                            ? "font-semibold text-accent"
                            : "font-medium text-muted-foreground",
                        )}
                      >
                        <CalendarClock className="h-3.5 w-3.5 shrink-0" />
                        <span>
                          Validity:{" "}
                          <strong className="font-semibold text-foreground">
                            {offer.validity}
                          </strong>
                        </span>
                      </div>
                    )}

                    {/* WhatsApp CTA */}
                    <div className="mt-auto pt-6">
                      <a
                        href={getAdvisorWhatsAppUrl(offer.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex w-full items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all active:scale-[0.98]",
                          isAnniversary
                            ? "bg-primary px-4 py-3 text-primary-foreground shadow-sm hover:bg-primary-dark"
                            : "border border-primary/25 bg-secondary/70 px-4 py-2.5 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
                        )}
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" />
                        <span>{offer.cta}</span>
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. What Buyers Say About Working With Me */}
      <section id="testimonials" className="scroll-mt-20 bg-[#F7F5F0]">
        <div className="page-container home-section-space">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-[1.875rem] font-semibold leading-9 tracking-[-0.01em] text-foreground sm:text-[2rem] sm:leading-10">
                What Buyers Say About Working With Me
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Real experiences from buyers I’ve personally helped navigate
                Hutu Exclusive.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10">
              <TestimonialCarousel />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-14 border-t border-border pt-12 md:mt-16 md:pt-14">
              <GoogleReviews />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. FAQ */}
      <section
        id="buyer-questions"
        className="scroll-mt-20 border-y border-[#D8D7D1] bg-white"
      >
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28 xl:py-32">
          <Reveal>
            <SectionHeading
              align="center"
              title="FAQ"
              copy="Quick answers to the questions buyers ask most often about Hutu Exclusive."
              titleClassName="text-[1.875rem] leading-9 tracking-[-0.01em] sm:text-[2rem] sm:leading-10"
              copyClassName="leading-6"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <FaqList
              items={HOMEPAGE_FAQS}
              className="mt-10 border-[#D8D7D1] bg-white"
              idPrefix="home-faq"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 text-center">
              <Link
                to="/buyer-questions"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark hover:underline"
              >
                <span>See the Full FAQ →</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 11. See What’s Happening at Hutu Exclusive */}
      <section id="site-updates" className="scroll-mt-20 bg-[#F7F5F0]">
        <div className="page-container home-section-space">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-[1.875rem] font-semibold leading-9 tracking-[-0.01em] text-foreground sm:text-[2rem] sm:leading-10">
                  See What’s Happening at Hutu Exclusive
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Recent site visits, infrastructure progress and development
                  updates you can actually see.
                </p>
              </div>
              <Link
                to="/site-updates"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                <span>View All Site Updates</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UPDATES.slice(0, 3).map((update, index) => (
              <Reveal key={update.slug} delay={index * 0.05}>
                <Link
                  to={`/site-updates/${update.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#D8D7D1] bg-white transition-[border-color,box-shadow] duration-200 hover:border-primary/35 hover:shadow-[0_16px_36px_-28px_rgba(11,36,27,0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={update.image}
                      alt={update.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {update.phase && (
                      <span className="absolute left-3 top-3 rounded-sm bg-primary-dark/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                        {update.phase}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 font-medium">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        {update.date}
                      </span>
                      {update.category && (
                        <>
                          <span className="text-border">·</span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                            {update.category}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {update.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {update.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover:text-primary-dark">
                      <span>View Update</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center sm:hidden">
              <Link
                to="/site-updates"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <span>View All Site Updates</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. Hutu Exclusive Email Advisory Signup */}
      <AdvisorySignup />

      {/* 13. Large Final CTA */}
      <section
        id="final-cta"
        className="border-t border-[#1A4A38] bg-primary-dark text-primary-foreground"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-[1.875rem] font-semibold leading-9 tracking-[-0.01em] text-primary-foreground sm:text-[2rem] sm:leading-10">
                Ready to Buy Hutu Exclusive?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Tell me your budget, the property you’re considering or simply
                what you’re unsure about. I’ll help you work through the next
                step.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={getAdvisorWhatsAppUrl(
                    "Hi Amaka, I’m considering buying Hutu Exclusive and I’d like to discuss my options.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-[#F7F5F0] sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>Chat With Me on WhatsApp</span>
                </a>
                <Link
                  to="/inspection"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-primary-foreground/45 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto"
                >
                  <span>Book a Site Inspection</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-primary-foreground/70">
                No pressure. Tell me what you’re trying to achieve and we’ll
                start there.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
