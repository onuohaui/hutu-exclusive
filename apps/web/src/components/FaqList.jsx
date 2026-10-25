import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export default function FaqList({ items, className, idPrefix = 'faq' }) {
	return (
		<Accordion type="single" collapsible className={cn('rounded-lg border border-border bg-card px-4 sm:px-6', className)}>
			{items.map((item, index) => {
				const isDiaspora = item.q === 'I live abroad. Can I buy from the diaspora?';
				return (
					<AccordionItem key={item.q} value={`${idPrefix}-${index}`} id={isDiaspora ? 'buying-from-abroad' : undefined} className={isDiaspora ? 'scroll-mt-24' : undefined}>
						<AccordionTrigger className="py-5 text-left font-medium hover:no-underline">{item.q}</AccordionTrigger>
						<AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}
