import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { CalendarCheck, Check, CheckCircle2, Clock, MapPin, Video } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const inputCls =
	'w-full min-h-12 rounded-md border border-input bg-card px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 transition-colors';

const EXPECT = [
	{ icon: MapPin, title: 'Walk the actual plots', copy: 'Not a showroom — the real phases, roads and beacons. Stand on the plot you are considering.' },
	{ icon: Clock, title: 'About 60–90 minutes', copy: 'Enough time to see every phase you care about, plus the commercial district, without rushing.' },
	{ icon: Video, title: 'Virtual option for diaspora buyers', copy: 'Can’t travel? We do live video inspections over WhatsApp — same route, same plots, your questions in real time.' },
];

export default function InspectionPage() {
	const [submitted, setSubmitted] = useState(false);
	const [interest, setInterest] = useState('phase-3');
	const [mode, setMode] = useState('physical');

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<>
			<Helmet>
				<title>Book a Site Inspection — Hutu Exclusive Abuja</title>
				<meta name="description" content="Book a physical or virtual inspection of Hutu Exclusive Abuja. Walk the phases, see development progress and stand on the plot you're considering." />
			</Helmet>

			<section className="border-b border-border bg-secondary/60">
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
					<Reveal>
						<SectionHeading
							eyebrow="Inspection"
							title="Come and see it for yourself"
							copy="Photos are useful; standing on the land is better. Inspections run Monday to Saturday, and virtual video inspections are available for buyers outside Nigeria."
						/>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
				<div className="grid gap-12 lg:grid-cols-2">
					<Reveal>
						<div className="space-y-8">
							{EXPECT.map((item) => (
								<div key={item.title} className="flex gap-4">
									<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
										<item.icon className="h-5 w-5" strokeWidth={1.75} />
									</span>
									<div>
										<h2 className="font-display text-lg font-medium">{item.title}</h2>
										<p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
									</div>
								</div>
							))}
							<div className="rounded-lg border border-border bg-card p-6">
								<h2 className="font-display text-lg font-medium">What to bring</h2>
								<ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
									<li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Water and sun shades</li>
									<li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Your questions — especially about documents and charges</li>
									<li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Comfortable shoes; parts of Phases 3 and 5 are still unpaved</li>
								</ul>
							</div>
						</div>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="rounded-lg border border-border bg-card p-6 sm:p-8">
							{submitted ? (
								<div className="py-10 text-center">
									<CheckCircle2 className="mx-auto h-12 w-12 text-primary" strokeWidth={1.5} />
									<h2 className="mt-4 font-display text-2xl font-medium">Inspection requested</h2>
									<p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
										An advisor will call within one working day to confirm your date and time, and share directions to the site
										office at the main gate.
									</p>
								</div>
							) : (
								<>
									<div className="flex items-center gap-3">
										<CalendarCheck className="h-6 w-6 text-primary" strokeWidth={1.75} />
										<h2 className="font-display text-2xl font-medium">Book your inspection</h2>
									</div>
									<form onSubmit={handleSubmit} className="mt-6 space-y-4">
										<div className="space-y-2">
											<label htmlFor="ins-name" className="text-sm font-medium">Full name</label>
											<input id="ins-name" required placeholder="Your full name" className={inputCls} />
										</div>
										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<label htmlFor="ins-phone" className="text-sm font-medium">Phone / WhatsApp</label>
												<input id="ins-phone" required type="tel" placeholder="+234 ..." className={inputCls} />
											</div>
											<div className="space-y-2">
												<label htmlFor="ins-date" className="text-sm font-medium">Preferred date</label>
												<input id="ins-date" required type="date" className={inputCls} />
											</div>
										</div>
										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<label className="text-sm font-medium">Inspection type</label>
												<Select value={mode} onValueChange={setMode}>
													<SelectTrigger><SelectValue /></SelectTrigger>
													<SelectContent>
														<SelectItem value="physical">Physical visit</SelectItem>
														<SelectItem value="virtual">Virtual (video call)</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div className="space-y-2">
												<label className="text-sm font-medium">I want to see</label>
												<Select value={interest} onValueChange={setInterest}>
													<SelectTrigger><SelectValue /></SelectTrigger>
													<SelectContent>
														<SelectItem value="phase-1-2">Phase 1 &amp; 2</SelectItem>
														<SelectItem value="phase-3">Phase 3</SelectItem>
														<SelectItem value="phase-5">Phase 5</SelectItem>
														<SelectItem value="commercial">Commercial district</SelectItem>
														<SelectItem value="all">Everything</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
										<button type="submit" className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]">
											Request Inspection
										</button>
										<p className="text-center text-xs text-muted-foreground">Free, no obligation. We confirm every booking by phone.</p>
									</form>
								</>
							)}
						</div>
					</Reveal>
				</div>
			</section>
		</>
	);
}
