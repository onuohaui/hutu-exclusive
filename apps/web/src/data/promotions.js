/**
 * Active and upcoming campaigns configuration.
 * Allows updating time-limited promotions without changing component code.
 */
export const CAMPAIGNS = [
	{
		id: 'mshel-8th-anniversary',
		active: true,
		badge: 'Limited-Time Developer Offer',
		title: 'Mshel Homes 8th Anniversary Offer',
		subtitle: 'Up to 10% off selected purchases until 30 September 2026',
		ctaLabel: 'Ask Me About This Offer →',
		whatsappMessage:
			'Hi Amaka, I’d like to know which Hutu Exclusive properties qualify for the Mshel Homes 8th Anniversary offer.',
		startDate: '2026-09-01T00:00:00+01:00',
		endDate: '2026-09-30T23:59:59+01:00',
	},
];

export const getActiveCampaigns = () => {
	const now = Date.now();
	return CAMPAIGNS.filter((campaign) => {
		if (!campaign || !campaign.active) return false;
		if (campaign.startDate && new Date(campaign.startDate).getTime() > now) return false;
		if (campaign.endDate && new Date(campaign.endDate).getTime() < now) return false;
		return true;
	});
};

export const ACTIVE_PROMOTION = CAMPAIGNS[0];


