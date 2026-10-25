const advisorEnquiryEndpoint = import.meta.env.VITE_ADVISOR_ENQUIRY_ENDPOINT?.trim();

export const ADVISOR_ENQUIRY_SOURCE = 'advisor enquiry form';

export async function sendAdvisorEnquiry({ fullName, phone, email, interest, message, pageUrl }) {
	if (!advisorEnquiryEndpoint) {
		throw new Error('Advisor enquiry endpoint is not configured.');
	}

	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 12000);

	try {
		const response = await fetch(advisorEnquiryEndpoint, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fullName,
				phone,
				email,
				interest,
				message,
				pageUrl,
				source: ADVISOR_ENQUIRY_SOURCE,
				submittedAt: new Date().toISOString(),
			}),
			signal: controller.signal,
		});

		if (!response.ok) {
			throw new Error('Advisor enquiry request failed.');
		}
	} finally {
		clearTimeout(timeout);
	}
}
