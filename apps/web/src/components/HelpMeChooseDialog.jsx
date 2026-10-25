import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AdvisorDialog from '@/components/AdvisorDialog';
import { SITE_CONFIG } from '@/config/site';

export default function HelpMeChooseDialog({ trigger }) {
	if (!SITE_CONFIG.tallyFormUrl) {
		return <AdvisorDialog defaultInterest="not-sure" trigger={trigger} />;
	}

	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="max-h-[90dvh] overflow-hidden p-0 sm:max-w-2xl">
				<DialogHeader className="px-6 pb-0 pt-6">
					<DialogTitle className="font-display text-2xl font-semibold">Help Me Choose</DialogTitle>
					<DialogDescription>
						Tell us your budget, timeline and buying goals to get a more suitable starting point.
					</DialogDescription>
				</DialogHeader>
				<iframe
					title="Help Me Choose property questionnaire"
					src={SITE_CONFIG.tallyFormUrl}
					className="h-[70dvh] w-full border-0"
					loading="lazy"
				/>
			</DialogContent>
		</Dialog>
	);
}
