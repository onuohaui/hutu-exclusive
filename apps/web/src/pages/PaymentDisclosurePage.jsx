import React from 'react';
import { Helmet } from 'react-helmet';
import { MessageCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import Seo from '@/components/Seo';
import { getAdvisorWhatsAppUrl } from '@/config/site';

export default function PaymentDisclosurePage() {
	const verifyWhatsAppUrl = getAdvisorWhatsAppUrl(
		'Hi Amaka, I want to confirm my Hutu Exclusive payment details before I make a transfer.'
	);

	return (
		<>
			{/* SEO Metadata */}
			<Helmet>
				<title>Payment Disclosure | Hutu Exclusive Buyer Advisory</title>
				<meta
					name="description"
					content="Read how Hutu Exclusive property payments work when buying through Amaka Okorie, including direct payment to Mshel Homes, advisor roles, commissions and payment verification."
				/>
			</Helmet>
			<Seo
				title="Payment Disclosure | Hutu Exclusive Buyer Advisory"
				description="Read how Hutu Exclusive property payments work when buying through Amaka Okorie, including direct payment to Mshel Homes, advisor roles, commissions and payment verification."
			/>

			{/* Hero Header */}
			<section className="border-b border-border bg-secondary/60">
				<div className="page-container py-6">
					<Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Payment Disclosure' }]} />
				</div>
				<div className="page-container pb-12 pt-2 md:pb-16">
					<h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
						Payment Disclosure
					</h1>
					<p className="mt-3 text-base font-semibold text-primary sm:text-lg">
						Please read this before making any payment for Hutu Exclusive.
					</p>
				</div>
			</section>

			{/* Main Content */}
			<section className="page-container py-12 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-3xl space-y-12 sm:space-y-14">
					{/* Key Principle Callout */}
					<div className="border-b border-border/60 pb-10">
						<p className="text-lg leading-relaxed text-foreground sm:text-xl">
							One of the most important things I want you to understand when buying through this website is{' '}
							<strong className="font-semibold text-foreground">
								where your money goes and what my role is in your transaction.
							</strong>
						</p>
					</div>

					{/* Your Property Payment Goes Directly to Mshel Homes */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Your Property Payment Goes Directly to Mshel Homes
						</h2>
						<div className="space-y-3 text-base leading-relaxed text-muted-foreground">
							<p>
								Buying through me does <strong className="font-semibold text-foreground">not</strong> mean paying me for your property.
							</p>
							<p>
								All funds relating to your Hutu Exclusive property purchase should be paid directly through the official payment channel provided for{' '}
								<strong className="font-semibold text-foreground">Mshel Homes Limited</strong>.
							</p>
							<p>
								Your land, house, apartment or commercial property purchase price does not pass through my personal bank account.
							</p>
						</div>
					</section>

					{/* I Am Your Property Advisor, Not the Developer */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							I Am Your Property Advisor, Not the Developer
						</h2>
						<div className="space-y-3 text-base leading-relaxed text-muted-foreground">
							<p>
								I am <strong className="font-semibold text-foreground">Amaka Okorie, a Hutu Exclusive Property Advisor</strong>.
							</p>
							<p>
								I operate this website independently to help buyers:
							</p>
							<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
								<li>Understand Hutu Exclusive</li>
								<li>Compare phases and properties</li>
								<li>Identify suitable options</li>
								<li>Arrange inspections</li>
								<li>Navigate payment and documentation</li>
								<li>Follow up with Mshel Homes after payment</li>
							</ul>
							<p className="pt-2">
								<strong className="font-semibold text-foreground">
									Mshel Homes Limited remains the developer and seller of the Hutu Exclusive property you purchase.
								</strong>
							</p>
							<p>
								This website is not the official website of Mshel Homes.
							</p>
						</div>
					</section>

					{/* How Buying Through Me Works */}
					<section className="space-y-5">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							How Buying Through Me Works
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							A typical transaction works like this:
						</p>

						<div className="space-y-6 pt-2">
							<div className="space-y-2">
								<h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
									1. You choose your property
								</h3>
								<p className="text-base leading-relaxed text-muted-foreground">
									I help you compare available options and confirm what is relevant to your budget and goal.
								</p>
							</div>

							<div className="space-y-2">
								<h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
									2. Your transaction is connected to me
								</h3>
								<p className="text-base leading-relaxed text-muted-foreground">
									Before or as you proceed with your purchase, your interest should be registered through me so I can represent and follow up on the transaction.
								</p>
							</div>

							<div className="space-y-2">
								<h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
									3. You pay Mshel Homes directly
								</h3>
								<p className="text-base leading-relaxed text-muted-foreground">
									Your property purchase payment is made directly to the official Mshel Homes company payment channel.
								</p>
							</div>

							<div className="space-y-2">
								<h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
									4. You send me your payment confirmation
								</h3>
								<p className="text-base leading-relaxed text-muted-foreground">
									Once you make payment, send me your confirmation.
								</p>
								<p className="text-base leading-relaxed text-muted-foreground">
									I need this so I can identify the transaction, register/follow up on it correctly with Mshel Homes and continue supporting your purchase.
								</p>
							</div>

							<div className="space-y-2">
								<h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
									5. I continue following up
								</h3>
								<p className="text-base leading-relaxed text-muted-foreground">
									I can then assist with follow-up relating to matters such as:
								</p>
								<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
									<li>Payment confirmation</li>
									<li>Documentation</li>
									<li>Receipts</li>
									<li>Allocation</li>
									<li>Developer communication</li>
									<li>Site information</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Never Pay Your Property Purchase Into My Personal Account */}
					<section className="space-y-4 border-l-2 border-primary pl-6 sm:pl-8">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Never Pay Your Property Purchase Into My Personal Account
						</h2>
						<div className="space-y-3 text-base leading-relaxed text-muted-foreground">
							<p>
								I will not ask you to send your Hutu Exclusive <strong className="font-semibold text-foreground">property purchase price</strong> to my personal bank account.
							</p>
							<p>
								If anyone claims to represent this website and asks you to divert your property payment into an unrelated personal or third-party account, stop and verify the request before paying.
							</p>
						</div>
					</section>

					{/* Always Confirm Payment Details */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Always Confirm Payment Details
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Before transferring property purchase funds:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Confirm the beneficiary details you have been given</li>
							<li>Ensure the payment instructions relate to Mshel Homes</li>
							<li>Ask me if anything appears unusual</li>
							<li>Do not rely solely on forwarded screenshots or payment details received from an unknown person</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							If you are unsure, <strong className="font-semibold text-foreground">contact me before making the transfer.</strong>
						</p>

						<div className="pt-2">
							<a
								href={verifyWhatsAppUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
							>
								<MessageCircle className="h-4 w-4 fill-current" />
								<span>Verify Payment Details on WhatsApp</span>
							</a>
						</div>
					</section>

					{/* My Commission */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							My Commission
						</h2>
						<div className="space-y-3 text-base leading-relaxed text-muted-foreground">
							<p>
								When you successfully purchase a property through me, I may receive a sales or referral commission connected to the transaction.
							</p>
							<p>
								That commission does <strong className="font-semibold text-foreground">not</strong> mean your property purchase payment should be sent to me.
							</p>
							<p>
								The property payment itself still goes directly to Mshel Homes.
							</p>
						</div>
					</section>

					{/* Discounts and Buyer Perks */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Discounts and Buyer Perks
						</h2>
						<div className="space-y-3 text-base leading-relaxed text-muted-foreground">
							<p>
								From time to time, you may qualify for:
							</p>
							<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
								<li>Developer discounts</li>
								<li>Promotional discounts</li>
								<li>Buyer discounts available through me</li>
								<li>Limited-time offers</li>
								<li>Curated buyer gifts or other perks</li>
							</ul>
							<p className="pt-2">
								Eligibility, percentages and validity periods may differ by transaction.
							</p>
							<p>
								A discount should not be assumed unless it has been confirmed as applicable to your particular purchase.
							</p>
						</div>
					</section>

					{/* Separate Professional Services */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Separate Professional Services
						</h2>
						<div className="space-y-3 text-base leading-relaxed text-muted-foreground">
							<p>
								Certain optional services may involve separate professional fees.
							</p>
							<p>
								For example, if you request <strong className="font-semibold text-foreground">independent legal or title verification</strong>, this may be carried out by a qualified lawyer for a separately disclosed professional fee.
							</p>
							<p>
								Any such fee is separate from your property purchase payment and should be explained before you engage the service.
							</p>
						</div>
					</section>

					{/* Prices and Offers Can Change */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Prices and Offers Can Change
						</h2>
						<div className="space-y-3 text-base leading-relaxed text-muted-foreground">
							<p>
								Developer pricing, payment plans and promotional offers may change.
							</p>
							<p>
								Always confirm the current:
							</p>
							<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
								<li>Property price</li>
								<li>Applicable discount</li>
								<li>Payment schedule</li>
								<li>Promotion</li>
								<li>Availability</li>
							</ul>
							<p className="pt-2">
								before transferring funds.
							</p>
						</div>
					</section>

					{/* Payment Does Not Guarantee an Investment Return */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Payment Does Not Guarantee an Investment Return
						</h2>
						<div className="space-y-3 text-base leading-relaxed text-muted-foreground">
							<p>
								Purchasing a property does not guarantee:
							</p>
							<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
								<li>Appreciation</li>
								<li>Rental income</li>
								<li>Resale profit</li>
								<li>A specific development timeline</li>
							</ul>
							<p className="pt-2">
								The purpose of my support is to help you make a better-informed buying decision, not to promise a financial outcome.
							</p>
						</div>
					</section>

					{/* If You Are Unsure, Ask Before You Pay */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							If You Are Unsure, Ask Before You Pay
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							If anything about:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>The property</li>
							<li>The price</li>
							<li>The discount</li>
							<li>The account details</li>
							<li>The payment process</li>
							<li>The documentation</li>
						</ul>
						<p className="text-base leading-relaxed text-muted-foreground">
							does not make sense to you, please ask before sending money.
						</p>

						<div className="pt-2">
							<a
								href={verifyWhatsAppUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark"
							>
								<MessageCircle className="h-4 w-4 fill-current" />
								<span>Chat With Me on WhatsApp</span>
							</a>
						</div>
					</section>

					{/* Final Disclosure */}
					<section className="space-y-4 border-t border-border/60 pt-10">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Final Disclosure
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							<strong className="font-semibold text-foreground">
								This website is independently operated by Amaka Okorie as a Hutu Exclusive Property Advisor. It is not the official website of Mshel Homes Limited. Mshel Homes is the developer of Hutu Exclusive, and property purchase payments are made directly to the developer. I may receive a commission where a property transaction is successfully completed through me.
							</strong>
						</p>
					</section>
				</div>
			</section>
		</>
	);
}
