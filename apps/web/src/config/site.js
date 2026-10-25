export const WHATSAPP_NUMBER = '2349123229422';
export const PHONE_NUMBER = '+234 912 322 9422';
export const EMAIL_ADDRESS = 'hutoexclusive@gmail.com';

export const SITE_CONFIG = {
	name: 'Hutu Exclusive Buyer Advisory',
	shortName: 'Hutu Exclusive',
	location: 'Abuja, Nigeria',
	baseUrl: 'https://hutuexclusive.com',
	tallyFormUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_TALLY_FORM_URL) || '',
	advisorPhone: PHONE_NUMBER,
	advisorWhatsApp: WHATSAPP_NUMBER,
	advisorEmail: EMAIL_ADDRESS,
};

export function getAdvisorWhatsAppUrl(message = '') {
	const cleanNumber = WHATSAPP_NUMBER;
	return `https://wa.me/${cleanNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}


