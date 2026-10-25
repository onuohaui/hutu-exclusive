import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '@/components/Breadcrumbs';
import Seo from '@/components/Seo';

export default function TermsDisclaimersPage() {
	return (
		<>
			{/* SEO Metadata */}
			<Helmet>
				<title>Terms & Disclaimers | Hutu Exclusive Buyer Advisory</title>
				<meta
					name="description"
					content="Read the terms and disclaimers for this independent Hutu Exclusive buyer information and property advisory website operated by Amaka Okorie."
				/>
			</Helmet>
			<Seo
				title="Terms & Disclaimers | Hutu Exclusive Buyer Advisory"
				description="Read the terms and disclaimers for this independent Hutu Exclusive buyer information and property advisory website operated by Amaka Okorie."
			/>

			{/* Hero Header */}
			<section className="border-b border-border bg-secondary/60">
				<div className="page-container py-6">
					<Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Terms & Disclaimers' }]} />
				</div>
				<div className="page-container pb-12 pt-2 md:pb-16">
					<h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
						Terms &amp; Disclaimers
					</h1>
					<p className="mt-3 text-sm font-medium text-muted-foreground">
						Last updated: September 2026
					</p>
				</div>
			</section>

			{/* Main Content */}
			<section className="page-container py-12 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-3xl space-y-12 sm:space-y-14">
					{/* Intro */}
					<div className="border-b border-border/60 pb-10">
						<p className="font-display text-xl font-bold text-foreground sm:text-2xl">
							By using this website, you agree to the following terms.
						</p>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground">
							This website is designed to help you research, compare and enquire about Hutu Exclusive properties. Please read these terms before relying on information published here or proceeding with a property transaction.
						</p>
					</div>

					{/* 1. Independent Website */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							1. Independent Website
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							This is an independent buyer information and property advisory website operated by Amaka Okorie.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							It is:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Not the official website of Mshel Homes</li>
							<li>Not owned or operated by Mshel Homes</li>
							<li>Not the developer of Hutu Exclusive</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							Mshel Homes Limited is the developer of Hutu Exclusive.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							When you purchase a Hutu Exclusive property through me, the property transaction itself remains between you and the developer.
						</p>
					</section>

					{/* 2. Purpose of the Website */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							2. Purpose of the Website
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							The website provides information intended to help prospective buyers understand matters such as:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Hutu Exclusive phases</li>
							<li>Available property types</li>
							<li>Prices</li>
							<li>Plot sizes</li>
							<li>Payment plans</li>
							<li>Promotions</li>
							<li>Inspections</li>
							<li>Amenities</li>
							<li>Development information</li>
							<li>The property-buying process</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							I make reasonable efforts to keep this information useful and current.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							However, property information can change.
						</p>
					</section>

					{/* 3. Prices, Availability and Promotions */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							3. Prices, Availability and Promotions
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Property prices, availability, discounts, payment plans and promotional offers may be changed by the developer.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							A property shown on this website may:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Change in price</li>
							<li>Become unavailable</li>
							<li>Receive a new payment plan</li>
							<li>Be affected by a new promotion</li>
							<li>Be withdrawn or replaced</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							You should obtain confirmation of the current applicable terms before making payment.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Where a promotion includes an expiry date, that date will be displayed where known.
						</p>
					</section>

					{/* 4. Property Database and Matcher */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							4. Property Database and Matcher
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Tools such as the budget-to-property matcher are designed to help you narrow down possible options based on the information available in the website's property database.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							A match is not a reservation, allocation, approval or guarantee that the property remains available.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Results should be treated as a starting point for further enquiry.
						</p>
					</section>

					{/* 5. Development Plans and Amenities */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							5. Development Plans and Amenities
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Some information on Hutu Exclusive relates to the wider master plan or facilities planned for the development.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Master plans, proposed facilities and future infrastructure should not automatically be interpreted as already completed.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Where possible, use current Site Updates, inspections and developer information to understand the stage of development relevant to the property you are considering.
						</p>
					</section>

					{/* 6. Images, Videos and Renderings */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							6. Images, Videos and Renderings
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							The website may contain:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Property photographs</li>
							<li>Site photographs</li>
							<li>Videos</li>
							<li>Architectural renderings</li>
							<li>Prototype illustrations</li>
							<li>Master-plan images</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							Renderings and illustrations may show intended or proposed appearances and should not be interpreted as photographs of completed construction unless clearly identified as such.
						</p>
					</section>

					{/* 7. Inspections */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							7. Inspections
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Physical and virtual inspections are provided to help you understand the estate before making a decision.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							An inspection:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Does not obligate you to purchase</li>
							<li>Does not reserve a property</li>
							<li>Does not guarantee availability</li>
							<li>Does not replace any independent professional review you may wish to obtain</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							Inspection schedules may be subject to availability and estate access arrangements.
						</p>
					</section>

					{/* 8. No Investment Guarantee */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							8. No Investment Guarantee
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Property may be purchased for residential, commercial or investment reasons, but no statement on this website should be interpreted as a guaranteed investment return.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							I do not guarantee:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Future appreciation</li>
							<li>Resale value</li>
							<li>Rental yield</li>
							<li>Infrastructure completion dates</li>
							<li>Investment performance</li>
							<li>Future demand</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							Your purchase decision remains your own.
						</p>
					</section>

					{/* 9. Not Legal, Tax or Financial Advice */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							9. Not Legal, Tax or Financial Advice
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Property guidance provided through this website does not replace advice from a qualified:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Lawyer</li>
							<li>Tax professional</li>
							<li>Accountant</li>
							<li>Financial adviser</li>
							<li>Surveyor</li>
							<li>Other relevant professional</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							If you require independent legal or title verification, I can help coordinate a qualified lawyer, but any separate professional service may carry its own fee.
						</p>
					</section>

					{/* 10. My Role as Your Advisor */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							10. My Role as Your Advisor
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							My role is to help you:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Understand Hutu Exclusive</li>
							<li>Compare available properties</li>
							<li>Consider different phases</li>
							<li>Work within your budget</li>
							<li>Arrange inspections</li>
							<li>Communicate with the developer</li>
							<li>Follow up on documentation and allocation</li>
							<li>Navigate the purchasing process</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							I may also receive a commission when a property purchase is successfully completed through me.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							You do not pay your property purchase funds to me.
						</p>
					</section>

					{/* 11. Third-Party Websites */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							11. Third-Party Websites
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							The website may link to third-party websites such as:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Mshel Homes</li>
							<li>WhatsApp</li>
							<li>YouTube</li>
							<li>Google</li>
							<li>Other relevant services</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							Those websites are independently operated.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							I am not responsible for their content, availability, security or privacy practices.
						</p>
					</section>

					{/* 12. Website Availability */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							12. Website Availability
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							I aim to keep the website accurate and accessible, but uninterrupted availability cannot be guaranteed.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Features may occasionally be:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Updated</li>
							<li>Temporarily unavailable</li>
							<li>Corrected</li>
							<li>Replaced</li>
							<li>Removed</li>
						</ul>
					</section>

					{/* 13. Intellectual Property */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							13. Intellectual Property
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Unless otherwise stated, the original written content, website structure and advisory materials created specifically for this website may not be copied or republished commercially without permission.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Third-party trademarks, logos, property materials, photographs and developer materials remain the property of their respective owners.
						</p>
					</section>

					{/* 14. Limitation of Responsibility */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							14. Limitation of Responsibility
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							You should independently review the information relevant to your transaction before committing funds.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							To the extent permitted by applicable law, I am not responsible for losses arising solely from:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Changes made by the developer after information was published</li>
							<li>Reliance on outdated pricing or availability</li>
							<li>Third-party services</li>
							<li>Future investment performance</li>
							<li>Circumstances outside my reasonable control</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							Nothing in these terms excludes responsibility that cannot lawfully be excluded.
						</p>
					</section>

					{/* 15. Nigerian Law */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							15. Nigerian Law
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							These terms are intended to operate under the applicable laws of the Federal Republic of Nigeria.
						</p>
					</section>

					{/* 16. Contact */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							16. Contact
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Questions about these terms can be directed to:
						</p>
						<div className="space-y-2 text-base text-muted-foreground">
							<p>
								<strong className="font-semibold text-foreground">Email:</strong>{' '}
								<a
									href="mailto:hutoexclusive@gmail.com"
									className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
								>
									hutoexclusive@gmail.com
								</a>
							</p>
							<p>
								<strong className="font-semibold text-foreground">WhatsApp:</strong>{' '}
								<a
									href="https://wa.me/2349123229422?text=Hi%20Amaka%2C%20I%20have%20a%20question%20regarding%20the%20Terms%20%26%20Disclaimers%20on%20the%20website."
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
								>
									+234 912 322 9422
								</a>
							</p>
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
