import React, { useState } from 'react';
import { Building2, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PropertyImage({ property, className, imageClassName, eager = false, fallbackImage }) {
	const [primaryFailed, setPrimaryFailed] = useState(false);
	const [fallbackFailed, setFallbackFailed] = useState(false);
	const imageSource = primaryFailed ? fallbackImage : property.image;
	const showPlaceholder = !imageSource || (primaryFailed && fallbackFailed);

	return (
		<div className={cn('relative overflow-hidden bg-secondary', className)}>
			{showPlaceholder ? (
				<div className="absolute inset-0 flex flex-col justify-between p-6">
					<div className="flex items-center justify-between text-primary/45">
						<Building2 className="h-10 w-10" strokeWidth={1.25} />
						<ImageIcon className="h-5 w-5" strokeWidth={1.5} />
					</div>
					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Image coming soon</p>
						<p className="mt-2 max-w-[18rem] font-display text-xl font-semibold leading-snug text-primary">{property.name}</p>
						<p className="mt-1 text-xs text-muted-foreground">{property.phase} · {property.productType}</p>
					</div>
				</div>
			) : (
				<img
					src={imageSource}
					alt={primaryFailed ? `Estate view for ${property.phase} at Hutu Exclusive Abuja` : `${property.name} at Hutu Exclusive Abuja`}
					loading={eager ? 'eager' : 'lazy'}
					onError={() => primaryFailed ? setFallbackFailed(true) : setPrimaryFailed(true)}
					className={cn('h-full w-full object-cover', imageClassName)}
				/>
			)}
		</div>
	);
}
