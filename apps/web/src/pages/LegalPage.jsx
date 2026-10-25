import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';
import Seo from '@/components/Seo';

const LEGAL_PAGES = {
	privacy: {
		title: 'Privacy Policy',
		description: 'How information submitted through the Hutu Exclusive Buyer Advisory website is handled.',
		sections: [
			['Information you provide', 'When connected enquiry, inspection or questionnaire forms are enabled, they may collect the contact details and property preferences you choose to submit.'],
			['How information is used', 'Submitted information is intended to be used to respond to your request, arrange an inspection or provide relevant property information.'],
			['Form providers', 'The Help Me Choose questionnaire may be delivered through Tally. When enabled, information submitted through that form is also subject to the provider’s privacy practices.'],
		],
	},
	terms: {
		title: 'Terms & Disclaimer',
		description: 'Important terms for using the Hutu Exclusive Buyer Advisory website and its property information.',
		sections: [
			['Information only', 'Website content is provided to help buyers compare options and prepare questions. It is not legal, financial or investment advice.'],
			['Confirm before payment', 'Prices, payment terms, availability and development information can change. Obtain a current written cost sheet and independently verify relevant documents before paying.'],
			['Independent advice', 'Buyers should use their own qualified legal and financial advisers when reviewing a property transaction.'],
		],
	},
	disclosure: {
		title: 'Disclosure',
		description: 'The relationship between this buyer-information website and the Hutu Exclusive development.',
		sections: [
			['Independent buyer information', 'This is an independent buyer information and advisory website. It is not the developer’s official corporate website.'],
			['Property information', 'Property information is presented to support comparison and enquiry. Current details must be confirmed in writing through the appropriate transaction channel.'],
			['No guaranteed outcome', 'Nothing on this website guarantees availability, future value, investment return or development completion.'],
		],
	},
};

export default function LegalPage({ page }) {
	const content = LEGAL_PAGES[page];
	if (!content) return <Navigate to="/not-found" replace />;
	const seoTitle = `${content.title} — Hutu Exclusive Buyer Advisory`;

	return (
		<>
			<Helmet><title>{seoTitle}</title><meta name="description" content={content.description} /></Helmet>
			<Seo title={seoTitle} description={content.description} />
			<section className="border-b border-border bg-secondary">
				<div className="page-container py-8"><Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: content.title }]} /></div>
				<div className="page-container pb-14 pt-6 md:pb-20"><h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{content.title}</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{content.description}</p></div>
			</section>
			<section className="page-container section-space"><div className="mx-auto max-w-3xl space-y-10">{content.sections.map(([heading, body]) => <section key={heading}><h2 className="font-display text-2xl font-semibold">{heading}</h2><p className="mt-4 leading-8 text-muted-foreground">{body}</p></section>)}</div></section>
		</>
	);
}
