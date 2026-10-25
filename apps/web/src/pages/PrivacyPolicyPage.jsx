import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';
import Seo from '@/components/Seo';

export default function PrivacyPolicyPage() {
	return (
		<>
			{/* SEO Metadata */}
			<Helmet>
				<title>Privacy Policy | Hutu Exclusive Buyer Advisory</title>
				<meta
					name="description"
					content="Read the privacy policy for this independent Hutu Exclusive buyer information and property advisory website operated by Amaka Okorie."
				/>
			</Helmet>
			<Seo
				title="Privacy Policy | Hutu Exclusive Buyer Advisory"
				description="Read the privacy policy for this independent Hutu Exclusive buyer information and property advisory website operated by Amaka Okorie."
			/>

			{/* Hero Header */}
			<section className="border-b border-border bg-secondary/60">
				<div className="page-container py-6">
					<Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />
				</div>
				<div className="page-container pb-12 pt-2 md:pb-16">
					<h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
						Privacy Policy
					</h1>
					<p className="mt-3 text-sm font-medium text-muted-foreground">
						Last updated: September 2026
					</p>
				</div>
			</section>

			{/* Main Policy Content */}
			<section className="page-container py-12 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-3xl space-y-12 sm:space-y-14">
					{/* Intro */}
					<div className="border-b border-border/60 pb-10">
						<p className="font-display text-xl font-bold text-foreground sm:text-2xl">
							Your privacy matters to me.
						</p>
						<div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
							<p>
								This Privacy Policy explains what information may be collected when you use this website, why it may be collected, how it may be used and the choices available to you.
							</p>
							<p>
								This website is an independent Hutu Exclusive property information and advisory website operated by Amaka Okorie.
							</p>
							<p>
								It is not the official website of Mshel Homes.
							</p>
						</div>
					</div>

					{/* Section 1 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Information You May Provide
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Depending on how you use the website, you may provide information such as:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Your name</li>
							<li>Phone number</li>
							<li>WhatsApp number</li>
							<li>Email address</li>
							<li>Current location or country</li>
							<li>Property preferences</li>
							<li>Budget or budget range</li>
							<li>Preferred property size</li>
							<li>Preferred Hutu Exclusive phase</li>
							<li>Inspection preferences</li>
							<li>Messages or questions you send</li>
							<li>Information you voluntarily provide while discussing a potential property purchase</li>
						</ul>
						<p className="pt-2 text-base leading-relaxed text-muted-foreground">
							You are not required to provide personal information simply to browse the website.
						</p>
					</section>

					{/* Section 2 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Information Collected Automatically
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							The website may collect limited technical information automatically, including:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>IP address</li>
							<li>Browser type</li>
							<li>Device type</li>
							<li>Pages viewed</li>
							<li>Approximate location</li>
							<li>Referring website</li>
							<li>Time spent on pages</li>
							<li>Interactions with website features</li>
						</ul>
						<p className="pt-2 text-base leading-relaxed text-muted-foreground">
							This information may be collected through hosting services, analytics tools, cookies or similar technologies.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							It is primarily used to understand how the website is being used and improve its performance and user experience.
						</p>
					</section>

					{/* Section 3 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							How I Use Your Information
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Information you provide may be used to:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Respond to your questions</li>
							<li>Recommend relevant Hutu Exclusive properties</li>
							<li>Help you compare phases, prices and payment options</li>
							<li>Arrange physical or virtual inspections</li>
							<li>Contact you through WhatsApp, phone or email when requested</li>
							<li>Register or follow up on a property enquiry</li>
							<li>Assist with a transaction you choose to pursue</li>
							<li>Provide property, promotion or site information you have requested</li>
							<li>Support documentation and allocation follow-up</li>
							<li>Improve the website and buyer experience</li>
							<li>Prevent misuse, fraud or security issues</li>
						</ul>
						<p className="pt-2 text-base leading-relaxed text-muted-foreground">
							Your information will not be used for unrelated purposes without an appropriate basis.
						</p>
					</section>

					{/* Section 4 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Sharing Information With Mshel Homes
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							This is an independent advisory website, but Mshel Homes is the developer of Hutu Exclusive.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							If you ask me to arrange an inspection, register your interest, purchase a property or follow up on a transaction, relevant information may need to be shared with Mshel Homes so the requested service can be completed.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Only information reasonably necessary for that purpose should be shared.
						</p>
					</section>

					{/* Section 5 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Other Service Providers
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							The website may rely on third-party services for functions such as:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Website hosting</li>
							<li>Forms</li>
							<li>Analytics</li>
							<li>Email</li>
							<li>WhatsApp communication</li>
							<li>Video hosting or YouTube embeds</li>
							<li>Website security</li>
						</ul>
						<p className="pt-2 text-base leading-relaxed text-muted-foreground">
							Those providers may process limited information according to their own privacy terms.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							External platforms such as WhatsApp, YouTube or Google operate independently and may collect information when you use their services.
						</p>
					</section>

					{/* Section 6 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Cookies
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							This website may use cookies or similar technologies to:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Keep the website functioning properly</li>
							<li>Understand website usage</li>
							<li>Remember certain preferences</li>
							<li>Measure performance</li>
						</ul>
						<p className="pt-2 text-base leading-relaxed text-muted-foreground">
							Where non-essential cookies are used, appropriate consent controls should be provided where required.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							You can also manage cookies through your browser settings.
						</p>
					</section>

					{/* Section 7 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							How Long Information Is Kept
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Personal information should only be kept for as long as reasonably necessary for:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>The purpose for which it was collected</li>
							<li>An ongoing property enquiry or transaction</li>
							<li>Follow-up requested by you</li>
							<li>Legitimate record-keeping</li>
							<li>Applicable legal or regulatory requirements</li>
						</ul>
						<p className="pt-2 text-base leading-relaxed text-muted-foreground">
							Information that is no longer reasonably required should be deleted or securely disposed of.
						</p>
					</section>

					{/* Section 8 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Your Privacy Rights
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Subject to applicable Nigerian data protection law, you may have rights to:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>Know how your information is being used</li>
							<li>Request access to your personal data</li>
							<li>Correct inaccurate information</li>
							<li>Object to certain processing</li>
							<li>Request restriction of processing</li>
							<li>Withdraw consent where processing depends on consent</li>
							<li>Request deletion where applicable</li>
							<li>Request portability of eligible information</li>
							<li>Raise a concern about how your information is handled</li>
						</ul>
						<p className="pt-2 text-base leading-relaxed text-muted-foreground">
							The Nigeria Data Protection Commission also provides a mechanism for individuals to raise data protection complaints.
						</p>
					</section>

					{/* Section 9 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Security
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							Reasonable steps are taken to protect personal information from unauthorised access, loss, misuse or disclosure.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							However, no website, internet transmission or electronic storage system can guarantee absolute security.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Please avoid sending passwords, card details or other highly sensitive financial information through ordinary website forms or WhatsApp messages.
						</p>
					</section>

					{/* Section 10 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Property Payment Information
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							I do not collect your property purchase funds through this website.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Property payments for Hutu Exclusive are made directly to Mshel Homes Limited through its official company payment channels.
						</p>
						<p className="text-base leading-relaxed text-muted-foreground">
							Please read the separate{' '}
							<Link
								to="/payment-disclosure"
								className="font-semibold text-primary underline underline-offset-4 hover:text-primary-dark"
							>
								Payment Disclosure
							</Link>{' '}
							before making a property payment.
						</p>
					</section>

					{/* Section 11 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Updates to This Policy
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							This Privacy Policy may be updated when:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-primary">
							<li>The website changes</li>
							<li>New tools or services are introduced</li>
							<li>Data-processing practices change</li>
							<li>Applicable legal requirements change</li>
						</ul>
						<p className="pt-2 text-base leading-relaxed text-muted-foreground">
							The latest version will always show its update date at the top of this page.
						</p>
					</section>

					{/* Section 12 */}
					<section className="space-y-4">
						<h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Contact
						</h2>
						<p className="text-base leading-relaxed text-muted-foreground">
							For privacy questions or requests relating to information submitted through this website, contact:
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
									href="https://wa.me/2349123229422?text=Hi%20Amaka%2C%20I%20have%20a%20privacy%20question%20regarding%20the%20Hutu%20Exclusive%20website."
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
