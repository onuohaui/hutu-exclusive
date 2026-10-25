import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import PropertyGrid from '@/components/PropertyGrid';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { PROPERTIES, getAvailableSizes } from '@/lib/properties';

const filterClass = 'min-h-12 rounded-md border border-input bg-background px-3 py-2.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/10';

export default function ResidentialPage() {
	const [phase, setPhase] = useState('All phases');
	const [productType, setProductType] = useState('All property types');
	const [size, setSize] = useState('Any size');
	const residential = PROPERTIES.filter((property) => property.category === 'Residential');
	const phases = [...new Set(residential.map((property) => property.phase))];
	const productTypes = [...new Set(residential.map((property) => property.productType))];
	const sizes = getAvailableSizes('Residential');
	const filtered = useMemo(() => residential.filter((property) => (
		(phase === 'All phases' || property.phase === phase)
		&& (productType === 'All property types' || property.productType === productType)
		&& (size === 'Any size' || property.sizeSqm === Number(size))
	)), [phase, productType, size, residential]);

	return (
		<>
			<Helmet>
				<title>Residential Properties — Hutu Exclusive Abuja</title>
				<meta name="description" content="Browse all current residential land, house and apartment records in Hutu Exclusive Phases 1 & 2, Phase 3 and Phase 5." />
			</Helmet>

			<header className="border-b border-border bg-secondary/40">
				<div className="page-container section-space">
					<Reveal><SectionHeading eyebrow="Residential Properties" title="All residential inventory" copy={`${residential.length} active property records across Phases 1 & 2, 3 and 5. Filter the same database used by the homepage, phase pages and property details.`} /></Reveal>
				</div>
			</header>

			<section className="page-container section-space">
				<div className="grid gap-4 rounded-lg border border-border bg-card p-5 sm:grid-cols-3 sm:p-6">
					<div><label htmlFor="res-phase" className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">Phase</label><select id="res-phase" value={phase} onChange={(event) => setPhase(event.target.value)} className={`${filterClass} mt-2 w-full`}><option>All phases</option>{phases.map((item) => <option key={item}>{item}</option>)}</select></div>
					<div><label htmlFor="res-type" className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">Property type</label><select id="res-type" value={productType} onChange={(event) => setProductType(event.target.value)} className={`${filterClass} mt-2 w-full`}><option>All property types</option>{productTypes.map((item) => <option key={item}>{item}</option>)}</select></div>
					<div><label htmlFor="res-size" className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">Land size</label><select id="res-size" value={size} onChange={(event) => setSize(event.target.value)} className={`${filterClass} mt-2 w-full`}><option>Any size</option>{sizes.map((item) => <option key={item} value={item}>{item} sqm</option>)}</select></div>
				</div>
				<div className="mt-10 flex items-center justify-between gap-5 border-b border-border pb-4"><p className="text-sm font-semibold">{filtered.length} {filtered.length === 1 ? 'property' : 'properties'}</p><button type="button" onClick={() => { setPhase('All phases'); setProductType('All property types'); setSize('Any size'); }} className="text-sm font-semibold text-primary hover:underline">Reset filters</button></div>
				<PropertyGrid properties={filtered} className="mt-8" />
			</section>
		</>
	);
}
