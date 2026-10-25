import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useParams } from 'react-router-dom';
import PropertyDetail from '@/components/PropertyDetail';
import Seo from '@/components/Seo';
import { PROPERTIES, getPropertyDisplayPrice, getPropertySizeLabel } from '@/lib/properties';

export default function PropertyDetailPage() {
	const { slug } = useParams();
	const property = PROPERTIES.find((item) => item.slug === slug);

	if (!property) return <Navigate to="/not-found" replace />;

	const title = `${property.name} — ${property.phase} | Hutu Exclusive Abuja`;
	const description = `${property.name}, ${property.subtype}, in ${property.phase}. ${getPropertySizeLabel(property)}${property.bedrooms != null ? `, ${property.bedrooms} bedrooms` : ''}. See current published pricing and payment details.`;
	const displayPrice = getPropertyDisplayPrice(property);

	return (
		<>
			<Helmet>
				<title>{title}</title><meta name="description" content={description} />
				<script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'RealEstateListing', name: property.name, description, image: property.image, url: `https://hutuexclusive.com/properties/${property.slug}`, offers: displayPrice == null ? undefined : { '@type': 'Offer', priceCurrency: 'NGN', price: displayPrice, availability: property.active ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock' } })}</script>
			</Helmet>
			<Seo title={title} description={description} image={property.image} />
			<PropertyDetail property={property} />
		</>
	);
}
