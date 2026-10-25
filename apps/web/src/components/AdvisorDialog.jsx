import React, { useId, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { PROPERTIES } from '@/lib/properties';
import { sendAdvisorEnquiry } from '@/lib/advisorEnquiry';

const inputCls =
	'w-full min-h-12 rounded-md border border-input bg-card px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 transition-colors';

export default function AdvisorDialog({ trigger, defaultInterest }) {
	const [open, setOpen] = useState(false);
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState('');
	const [interest, setInterest] = useState(defaultInterest || 'phase-3');
	const formId = useId();
	const selectedProperty = PROPERTIES.find((property) => property.slug === defaultInterest);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);

		setStatus('submitting');
		setError('');

		try {
			await sendAdvisorEnquiry({
				fullName: data.get('fullName')?.toString().trim() || '',
				phone: data.get('phone')?.toString().trim() || '',
				email: data.get('email')?.toString().trim().toLowerCase() || '',
				interest,
				message: data.get('message')?.toString().trim() || '',
				pageUrl: window.location.href,
			});
			setStatus('success');
		} catch {
			setStatus('idle');
			setError('I couldn’t send your message just now. Please try again.');
		}
	};

	const handleOpenChange = (next) => {
		setOpen(next);
		if (!next) {
			setTimeout(() => {
				setStatus('idle');
				setError('');
			}, 300);
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				{status === 'success' ? (
					<div className="py-8 text-center">
						<CheckCircle2 className="mx-auto h-12 w-12 text-primary" strokeWidth={1.5} aria-hidden="true" />
						<DialogHeader className="mt-4 pr-10 sm:pr-0">
							<DialogTitle className="font-display text-2xl font-medium">Talk to an Advisor</DialogTitle>
							<DialogDescription className="text-base leading-relaxed" role="status" aria-live="polite">
								Thank you for your message, I’ll be in touch within 24 hours.
							</DialogDescription>
						</DialogHeader>
					</div>
				) : (
					<>
						<DialogHeader className="pr-10 sm:pr-0">
							<DialogTitle className="font-display text-2xl font-medium">Talk to an Advisor</DialogTitle>
							<DialogDescription>
								Hi, I’m Amaka, your advisor. Tell me what you’re looking for and I’ll reply with honest answers — prices,
								documents, payment plans, anything.
							</DialogDescription>
						</DialogHeader>
						<form onSubmit={handleSubmit} className="mt-2 space-y-4">
							<div className="space-y-2">
								<label htmlFor={`${formId}-name`} className="text-sm font-medium">Full name</label>
								<input id={`${formId}-name`} name="fullName" required autoComplete="name" placeholder="Your full name" disabled={status === 'submitting'} className={inputCls} />
							</div>
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="space-y-2">
									<label htmlFor={`${formId}-phone`} className="text-sm font-medium">Phone / WhatsApp</label>
									<input id={`${formId}-phone`} name="phone" required type="tel" autoComplete="tel" inputMode="tel" placeholder="+234 ..." disabled={status === 'submitting'} className={inputCls} />
								</div>
								<div className="space-y-2">
									<label htmlFor={`${formId}-email`} className="text-sm font-medium">Email</label>
									<input id={`${formId}-email`} name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@email.com" disabled={status === 'submitting'} className={inputCls} />
								</div>
							</div>
							<div className="space-y-2">
								<label htmlFor={`${formId}-interest`} className="text-sm font-medium">I’m interested in</label>
								<Select value={interest} onValueChange={(value) => { setInterest(value); setError(''); }} disabled={status === 'submitting'}>
									<SelectTrigger id={`${formId}-interest`}>
										<SelectValue placeholder="Choose an option" />
									</SelectTrigger>
									<SelectContent>
										{selectedProperty && <SelectItem value={selectedProperty.slug}>{selectedProperty.name} — {selectedProperty.phase}</SelectItem>}
										<SelectItem value="phase-1-2">Residential — Phase 1 &amp; 2</SelectItem>
										<SelectItem value="phase-3">Residential — Phase 3</SelectItem>
										<SelectItem value="phase-5">Residential — Phase 5</SelectItem>
										<SelectItem value="commercial">Commercial property</SelectItem>
										<SelectItem value="not-sure">Not sure yet — help me choose</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<label htmlFor={`${formId}-message`} className="text-sm font-medium">Anything specific? <span className="text-muted-foreground font-normal">(optional)</span></label>
								<textarea id={`${formId}-message`} name="message" rows={3} placeholder="Budget, timeline, questions…" disabled={status === 'submitting'} className={inputCls} />
							</div>
							<button
								type="submit"
								disabled={status === 'submitting'}
								aria-busy={status === 'submitting'}
								className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98] disabled:cursor-wait disabled:opacity-75"
							>
								{status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
								Send Message
							</button>
							{error && (
								<p className="text-sm font-medium leading-5 text-destructive" role="alert">
									{error}
								</p>
							)}
							<p className="text-center text-xs text-muted-foreground">
								No spam, no pressure. Your details go to me and my team only.
							</p>
						</form>
					</>
				)}
			</DialogContent>
		</Dialog>
	);
}
