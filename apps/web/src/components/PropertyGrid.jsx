import React from 'react';
import PropertyCard from '@/components/PropertyCard';
import Reveal from '@/components/Reveal';
import { cn } from '@/lib/utils';

export default function PropertyGrid({ properties, className, emptyMessage = 'No matching properties are currently listed.' }) {
	if (!properties.length) {
		return <div className="rounded-lg border border-border bg-card p-8 text-center text-sm text-muted-foreground">{emptyMessage}</div>;
	}

	return (
		<div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>
			{properties.map((property, index) => (
				<Reveal key={property.id} delay={(index % 3) * 0.05}>
					<PropertyCard property={property} />
				</Reveal>
			))}
		</div>
	);
}

