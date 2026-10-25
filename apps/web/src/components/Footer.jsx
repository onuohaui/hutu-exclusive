import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t border-white/10 bg-primary-dark text-white">
			<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
					<div id="our-company" className="scroll-mt-20">
						<div className="flex items-center gap-2.5">
							<span className="flex h-9 w-9 items-center justify-center rounded-sm bg-white font-display text-lg font-semibold text-primary-dark">H</span>
							<span className="font-display text-lg font-semibold tracking-tight">Hutu Exclusive</span>
						</div>
						<p className="mt-4 max-w-xs text-sm leading-relaxed text-[#B9C2BC]">
							An independent buyer advisory site for the Hutu Exclusive estate — helping you compare phases, prices and payment
							plans before you commit.
						</p>
					</div>
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-white">Properties</h3>
						<ul className="mt-4 space-y-2.5 text-sm text-[#B9C2BC]">
							<li><Link className="transition-colors hover:text-accent" to="/residential/phase-1-2">Residential — Phase 1 &amp; 2</Link></li>
							<li><Link className="transition-colors hover:text-accent" to="/residential/phase-3">Residential — Phase 3</Link></li>
							<li><Link className="transition-colors hover:text-accent" to="/residential/phase-5">Residential — Phase 5</Link></li>
							<li><Link className="transition-colors hover:text-accent" to="/commercial">Commercial — Phase 1 &amp; 2</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-white">Buyer Resources</h3>
						<ul className="mt-4 space-y-2.5 text-sm text-[#B9C2BC]">
							<li><Link className="transition-colors hover:text-accent" to="/payment-plans">Payment Plans</Link></li>
							<li><Link className="transition-colors hover:text-accent" to="/buyer-questions">Buyer Questions &amp; Guides</Link></li>
							<li><Link className="transition-colors hover:text-accent" to="/site-updates">Site Updates</Link></li>
							<li><Link className="transition-colors hover:text-accent" to="/inspection">Book an Inspection</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
						<ul className="mt-4 space-y-3 text-sm text-[#B9C2BC]">
							<li className="flex items-start gap-2.5">
								<Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
								<a className="transition-colors hover:text-accent" href="tel:+2349123229422">
									+234 912 322 9422
								</a>
							</li>
							<li className="flex items-start gap-2.5">
								<Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
								<a className="transition-colors hover:text-accent" href="mailto:amaka@hutuexclusive.com">
									amaka@hutuexclusive.com
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
						<ul className="mt-4 space-y-2.5 text-sm text-[#B9C2BC]">
							<li><Link className="transition-colors hover:text-accent" to="/privacy-policy">Privacy Policy</Link></li>
							<li><Link className="transition-colors hover:text-accent" to="/terms-disclaimers">Terms &amp; Disclaimers</Link></li>
							<li><Link className="transition-colors hover:text-accent" to="/payment-disclosure">Payment Disclosure</Link></li>
						</ul>
					</div>
				</div>
				<div className="mt-12 border-t border-white/10 pt-6">
					<p className="text-xs leading-relaxed text-[#B9C2BC]">
						This is an independent buyer information and advisory website. It is not the developer’s official corporate website.
						Prices and availability shown here are indicative and confirmed in writing before any payment.
					</p>
					<p className="mt-3 text-xs text-[#B9C2BC]">© {year} Hutu Exclusive Buyer Advisory. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
