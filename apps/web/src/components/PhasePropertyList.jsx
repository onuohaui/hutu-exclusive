import React from 'react';
import PropertyGrid from '@/components/PropertyGrid';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function PhasePropertyList({ phase, properties }) {
	return (
		<section className="border-t border-border bg-secondary/40">
			<div className="page-container section-space">
				<Reveal>
					<SectionHeading
						eyebrow="Current Inventory"
						title={`Properties in ${phase}`}
						copy={`${properties.length} active ${properties.length === 1 ? 'option is' : 'options are'} currently recorded in the property database.`}
					/>
				</Reveal>
				<PropertyGrid properties={properties} className="mt-12" />
			</div>
		</section>
	);
}
