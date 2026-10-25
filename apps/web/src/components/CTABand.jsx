import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import AdvisorDialog from '@/components/AdvisorDialog';
import Reveal from '@/components/Reveal';

export default function CTABand({ title, copy }) {
	return (
		<section className="bg-primary">
			<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-primary-foreground sm:text-4xl">
							{title || 'Not sure which property fits your budget?'}
						</h2>
						<p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
							{copy ||
								'Speak with an advisor who will walk you through the phases, current prices and payment plans — and tell you honestly what your budget can and cannot get.'}
						</p>
						<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<AdvisorDialog
								trigger={
									<button className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-background/90 active:scale-[0.98] sm:w-auto">
										<Phone className="h-4 w-4" />
										Talk to an Advisor
									</button>
								}
							/>
							<Link
								to="/inspection"
								className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 active:scale-[0.98] sm:w-auto"
							>
								Book a Site Inspection
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
