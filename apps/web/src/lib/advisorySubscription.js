const advisorySubscriptionEndpoint = import.meta.env.VITE_ADVISORY_SUBSCRIBE_ENDPOINT?.trim();

export const ADVISORY_SUBSCRIPTION_SOURCE = 'homepage advisory signup';

export async function subscribeToAdvisory({ firstName, email, phone, location }) {
	if (!advisorySubscriptionEndpoint) {
		throw new Error('Advisory subscription endpoint is not configured.');
	}

	const subscriber = {
		firstName,
		email,
		source: ADVISORY_SUBSCRIPTION_SOURCE,
		subscribedAt: new Date().toISOString(),
		tags: ['Hutu Exclusive Updates'],
	};

	if (phone?.trim()) subscriber.phone = phone.trim();
	if (location?.trim()) subscriber.location = location.trim();

	const response = await fetch(advisorySubscriptionEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(subscriber),
	});

	if (!response.ok) {
		throw new Error('Advisory subscription request failed.');
	}
}
