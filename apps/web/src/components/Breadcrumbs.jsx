import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
	return (
		<nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
			<ol className="flex flex-wrap items-center gap-1.5">
				{items.map((item, index) => (
					<React.Fragment key={`${item.label}-${index}`}>
						{index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
						<li>
							{item.to ? (
								<Link to={item.to} className="transition-colors hover:text-primary">{item.label}</Link>
							) : (
								<span aria-current="page" className="text-foreground">{item.label}</span>
							)}
						</li>
					</React.Fragment>
				))}
			</ol>
		</nav>
	);
}
