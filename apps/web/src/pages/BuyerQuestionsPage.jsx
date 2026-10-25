import React from 'react';
import { Helmet } from 'react-helmet';
import CTABand from '@/components/CTABand';
import BuyingGuideCard from '@/components/BuyingGuideCard';
import FaqList from '@/components/FaqList';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { FAQS } from '@/data/site';
import { BUYING_GUIDES } from '@/data/buyingGuides';

const EXTRA = [
	{
		q: 'Can I resell my plot later?',
		a: 'Yes. Once your documentation is complete you own the plot and can resell. The estate office should be notified so records and subsequent documents reflect the new owner — your advisor can explain the transfer process and any administrative fee.',
	},
	{
		q: 'What happens if I miss an instalment?',
		a: 'Plans include a grace window, and advisors will usually try to restructure before anything else. But persistent default can lead to the plan being cancelled and payments refunded less an administrative charge, per your contract. Read the default clause before signing — and choose a duration you can sustain.',
	},
	{
		q: 'Is the estate title genuine?',
		a: 'The title documents are available for inspection before you pay, and we actively encourage independent verification — take the details to your own lawyer or conduct a search at the land registry. Any seller who discourages verification is a red flag; we are not that seller.',
	},
	{
		q: 'Can I visit the site before deciding?',
		a: 'Yes — and you should. Inspections run Monday to Saturday. You can walk the phases, see the development stage with your own eyes, and stand on the actual plot you are considering. Book through the inspection page and an advisor will meet you at the gate.',
	},
];

export default function BuyerQuestionsPage() {
	return (
		<>
			<Helmet>
				<title>FAQ — Hutu Exclusive Abuja</title>
				<meta
					name="description"
					content="Straight answers to the questions buyers ask most often about Hutu Exclusive: documents, extra charges, allocation, building, diaspora purchases and what happens after payment."
				/>
			</Helmet>

			<section className="border-b border-border bg-secondary/60">
				<div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
					<Reveal>
						<SectionHeading
							align="center"
							as="h1"
							eyebrow="Buyer Resources"
							title="FAQ"
							copy="Straight answers to the questions buyers ask most often about Hutu Exclusive."
						/>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
				<Reveal>
					<FaqList items={[...FAQS, ...EXTRA]} idPrefix="buyer-question" />
				</Reveal>
			</section>

			<section className="border-t border-border bg-secondary/60">
				<div className="page-container section-space">
					<Reveal>
						<SectionHeading
							eyebrow="Buying Guides"
							title="Want More In-Depth Information?"
							copy="Explore step-by-step Buying Guides for topics that need more than a short answer."
						/>
					</Reveal>
					<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{BUYING_GUIDES.slice(0, 3).map((guide, index) => (
							<Reveal key={guide.slug} delay={index * 0.06}>
								<BuyingGuideCard guide={guide} />
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<CTABand
				title="Have a question that isn’t listed?"
				copy="Send it to an advisor — you’ll get a direct answer, not a sales script. If it’s a good question, we’ll add it to this page."
			/>
		</>
	);
}
