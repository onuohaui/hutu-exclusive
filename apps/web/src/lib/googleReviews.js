export const GOOGLE_PLACE_ID = 'ChIJnxS3BgBxThARdnHV1zRwBwU';
export const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=Mshel%20Hutu%20Exclusive&query_place_id=${GOOGLE_PLACE_ID}`;

const googleReviewsEndpoint = import.meta.env.VITE_GOOGLE_REVIEWS_ENDPOINT?.trim();

export function hasGoogleReviewsEndpoint() {
	return Boolean(googleReviewsEndpoint);
}

function normalizeReview(review, index) {
	const text = typeof review.text === 'string' ? review.text : review.text?.text;
	const authorName = review.authorName || review.authorAttribution?.displayName;
	const rating = Number(review.rating);

	if (!text || !authorName || !Number.isFinite(rating)) return null;

	return {
		id: review.id || review.name || `${authorName}-${index}`,
		authorName,
		authorUri: review.authorUri || review.authorAttribution?.uri || null,
		text,
		rating,
		date: review.date || review.relativePublishTimeDescription || review.publishTime || null,
	};
}

export async function getGoogleReviews({ signal } = {}) {
	if (!googleReviewsEndpoint) return null;

	const separator = googleReviewsEndpoint.includes('?') ? '&' : '?';
	const response = await fetch(`${googleReviewsEndpoint}${separator}placeId=${encodeURIComponent(GOOGLE_PLACE_ID)}`, {
		headers: { Accept: 'application/json' },
		signal,
	});

	if (!response.ok) throw new Error('Google Reviews request failed.');

	const data = await response.json();
	const rating = Number(data.rating);
	const reviewCount = Number(data.reviewCount ?? data.userRatingCount);
	const reviews = Array.isArray(data.reviews)
		? data.reviews.map(normalizeReview).filter(Boolean).slice(0, 3)
		: [];

	return {
		rating: Number.isFinite(rating) ? rating : null,
		reviewCount: Number.isFinite(reviewCount) ? reviewCount : null,
		reviews,
		googleMapsUri: data.googleMapsUri || GOOGLE_REVIEWS_URL,
	};
}
