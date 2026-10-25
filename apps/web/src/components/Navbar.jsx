import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Menu } from 'lucide-react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AdvisorDialog from '@/components/AdvisorDialog';
import { NAV_LINKS } from '@/data/site';
import { cn } from '@/lib/utils';

const MEGA_MENU_META = {
	Properties: {
		title: 'Choose the right entry point',
		copy: 'Compare residential phases and commercial opportunities across Hutu Exclusive.',
		ctaLabel: 'Book inspection',
		ctaTo: '/inspection',
		secondaryLabel: 'View properties',
		secondaryTo: '/residential',
		featured: {
			image: '/images/hero/hutu-entrance-man-car.jpg',
			title: 'Start with a clear property comparison',
			copy: 'Compare available phases, property types and payment options before making your decision.',
			to: '/residential',
		},
	},
	About: {
		title: 'Clarity before commitment',
		copy: 'Understand the estate, the developer and your buyer representation before you buy.',
		ctaLabel: 'Explore the estate',
		ctaTo: '/about/hutu-exclusive',
		secondaryLabel: 'Meet your advisor',
		secondaryTo: '/about/meet-your-advisor',
		featured: {
			image: '/images/hero/hutu-site-team.jpg',
			title: 'See who is behind your purchase',
			copy: 'Meet the developer, understand the estate vision and learn how your buyer support works.',
			to: '/about/meet-the-developer',
		},
	},
	'Buyer Resources': {
		title: 'Make an informed decision',
		copy: 'Straightforward guidance for comparing options, planning payments and buying safely.',
		ctaLabel: 'Browse guides',
		ctaTo: '/buying-guides',
		secondaryLabel: 'How to buy',
		secondaryTo: '/buying-guides/how-to-buy-at-hutu-exclusive-abuja',
		featured: {
			image: '/images/articles/hutu-exclusive-diaspora-remote-buying.jpg',
			title: 'A safer path to buying from anywhere',
			copy: 'Learn the practical checks, documents and payment steps that help remote buyers purchase confidently.',
			to: '/buying-guides/buying-hutu-exclusive-from-abroad',
		},
	},
};

const LINK_DESCRIPTIONS = {
	'Phase 1 & 2': 'Established phases with active development and available options.',
	'Phase 3': 'A growing residential phase with flexible ways to buy.',
	'Phase 5': 'An early-entry opportunity for longer-term buyers.',
	'Hutu Exclusive Overview': 'See the estate master plan, location, and phase breakdown at a glance.',
	'Meet the Developer': 'Learn about Mshel Homes, the master developer behind Hutu Exclusive.',
	'Meet Your Advisor': 'Understand how independent buyer representation works and what perks apply.',
	'Why Hutu Exclusive': 'Explore the location, infrastructure and buyer advantages.',
	'Our Company': 'Learn about the team and values behind the development.',
	'Site Updates': 'Follow verified construction and infrastructure progress.',
	'How to Buy': 'A clear step-by-step path from enquiry to allocation.',
	'Buying Guides': 'Practical, step-by-step guides to help you navigate your purchase.',
	'Buyer Questions': 'Answers to the questions buyers ask most often.',
	'Buying from Abroad': 'Practical guidance for diaspora and remote buyers.',
	'Payment Plans': 'Compare deposits, durations and available payment options.',
};

function Brand() {
	return (
		<Link
			to="/"
			className="relative z-20 grid h-12 w-12 shrink-0 place-items-center border-x border-b border-[#eceef2] bg-white p-2 sm:h-14 sm:w-14 sm:p-2.5 xl:h-[88px] xl:w-[88px] xl:self-start xl:p-4"
			aria-label="Hutu Exclusive home"
		>
			<img
				src="/images/brand/hutu-exclusive-logo-header.png"
				alt=""
				className="h-full w-full object-contain"
			/>
		</Link>
	);
}
function MegaMenuLink({ item, description, label = item.label }) {
	return (
		<NavigationMenuLink asChild>
			<Link
				to={item.to}
				className="block rounded-[8px] px-3 py-2 transition-colors hover:bg-[#f1f2f6] focus-visible:bg-[#f1f2f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/15"
			>
				<span className="block text-base font-semibold leading-tight text-foreground">{label}</span>
				<span className="mt-1 block max-w-md text-sm leading-5 text-muted-foreground">{description}</span>
			</Link>
		</NavigationMenuLink>
	);
}

function MegaMenuPanel({ item }) {
	const meta = MEGA_MENU_META[item.label];
	const hasGroups = item.children.some((child) => child.children);
	const exploreItems = hasGroups
		? item.children.flatMap((group) =>
				group.children.map((child) => ({
					...child,
					label: group.label === 'Commercial' ? `Commercial — ${child.label}` : child.label,
					description:
						group.label === 'Commercial'
							? 'Commercial property opportunities within Phase 1 & 2.'
							: LINK_DESCRIPTIONS[child.label],
				})))
		: item.children.map((child) => ({ ...child, description: LINK_DESCRIPTIONS[child.label] }));

	return (
		<div className="w-screen">
			<div className="page-container grid grid-cols-[400px_minmax(0,1fr)_340px] pb-5 pt-4">
				<section className="flex flex-col pr-8" aria-label={`${item.label} overview`}>
					<h3 className="max-w-sm font-serif text-[2.4rem] font-normal leading-[1.05] tracking-tight text-foreground">
						{meta.title}
					</h3>
					<p className="mt-3 max-w-sm text-sm leading-6 text-foreground/75">{meta.copy}</p>
					<div className="mt-auto flex flex-nowrap items-center gap-2 pt-6">
						<Button asChild className="shrink-0 rounded-full bg-[#11100f] px-4 text-white hover:bg-primary">
							<Link to={meta.ctaTo}>{meta.ctaLabel}</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							className="shrink-0 rounded-full border-foreground px-4 text-foreground hover:bg-[#f1f2f6] hover:text-foreground"
						>
							<Link to={meta.secondaryTo}>{meta.secondaryLabel}</Link>
						</Button>
					</div>
				</section>

				<section className="-mb-5 -mt-4 border-l border-[#eceef2] px-10 pb-5 pt-4" aria-label={`${item.label} links`}>
					<div className="space-y-1">
						{exploreItems.map((child) => (
							<MegaMenuLink
								key={`${child.to}-${child.label}`}
								item={child}
								label={child.label}
								description={child.description}
							/>
						))}
					</div>
				</section>

				<section className="pl-8" aria-label={`${item.label} featured content`}>
					<NavigationMenuLink asChild>
						<Link
							to={meta.featured.to}
							className="group block rounded-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
						>
							<Card className="overflow-hidden rounded-[12px] border-0 bg-[#11100f] p-2 text-white shadow-none transition-transform group-hover:-translate-y-0.5">
								<img
									src={meta.featured.image}
									alt=""
									className="h-[132px] w-full rounded-[6px] object-cover"
								/>
								<div className="px-1 pb-1 pt-3">
									<h4 className="text-base font-semibold leading-6">{meta.featured.title}</h4>
									<p className="mt-1.5 line-clamp-2 text-sm leading-5 text-white/75">{meta.featured.copy}</p>
								</div>
							</Card>
						</Link>
					</NavigationMenuLink>
				</section>
			</div>
		</div>
	);
}

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [desktopMenu, setDesktopMenu] = useState('');
	const location = useLocation();
	const currentUrl = `${location.pathname}${location.hash}`;

	useEffect(() => {
		setDesktopMenu('');
	}, [location.pathname, location.hash]);

	const isActive = (item) => {
		if (item.children) return item.children.some(isActive);
		if (!item.to) return false;
		if (item.to === '/') return location.pathname === '/';
		return currentUrl === item.to || location.pathname === item.to;
	};

	const linkCls = ({ isActive }) =>
		cn(
			'inline-flex h-auto items-center rounded-[8px] bg-transparent px-2.5 py-2 text-sm font-medium transition-colors hover:!bg-[#f1f2f6] hover:text-primary focus-visible:!bg-[#f1f2f6] focus-visible:text-primary',
			isActive ? 'text-primary' : 'text-foreground/80'
		);

	return (
		<header className="sticky top-0 z-50 border-b border-[#eceef2] bg-background/95 backdrop-blur-md">
			<div className="page-container flex h-[68px] items-center justify-between gap-4">
				<Brand />

				<NavigationMenu
					value={desktopMenu}
					onValueChange={setDesktopMenu}
					delayDuration={100}
					skipDelayDuration={250}
					className="hidden xl:flex"
					aria-label="Primary"
				>
					<NavigationMenuList className="-translate-x-[120px] gap-0.5 space-x-0">
						{NAV_LINKS.map((item) =>
							item.children ? (
								<NavigationMenuItem key={item.label} value={item.label}>
									<NavigationMenuTrigger
									className={cn(
										'h-auto rounded-[8px] bg-transparent px-2.5 py-2 text-sm font-medium text-foreground/80 hover:!bg-[#f1f2f6] hover:text-primary focus:!bg-[#f1f2f6] focus:text-primary data-[state=open]:!bg-[#f1f2f6] data-[state=open]:text-primary data-[state=open]:hover:!bg-[#f1f2f6] data-[state=open]:focus:!bg-[#f1f2f6]',
										isActive(item) && 'text-primary'
									)}
									>
										{item.label}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<MegaMenuPanel item={item} />
									</NavigationMenuContent>
								</NavigationMenuItem>
							) : (
								<NavigationMenuItem key={item.to}>
									<NavigationMenuLink asChild>
										<NavLink to={item.to} end={item.to === '/'} className={linkCls}>
											{item.label}
										</NavLink>
									</NavigationMenuLink>
								</NavigationMenuItem>
							)
						)}
					</NavigationMenuList>
				</NavigationMenu>

				<div className="flex items-center gap-2">
					<AdvisorDialog
						trigger={
							<button className="group hidden min-h-[50px] items-center gap-5 rounded-xl bg-[#11100f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary sm:inline-flex">
								Talk to an Advisor
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
							</button>
						}
					/>
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<button
								className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground xl:hidden"
								aria-label="Open menu"
							>
								<Menu className="h-5 w-5" />
							</button>
						</SheetTrigger>
						<SheetContent side="right" className="w-full max-w-sm overflow-y-auto overscroll-contain pb-[max(1.5rem,env(safe-area-inset-bottom,1.5rem))] pt-14">
							<div className="mt-6 flex flex-col gap-1">
								{NAV_LINKS.map((item) =>
									item.children ? (
										<Accordion key={item.label} type="single" collapsible>
											<AccordionItem value="residential" className="border-b-0">
											<AccordionTrigger className="rounded-md px-3 py-3 text-base font-medium hover:no-underline">
												{item.label}
											</AccordionTrigger>
											<AccordionContent className="pb-1">
												{item.children.map((child) =>
													child.children ? (
														<div key={child.label} className="mb-2 px-3">
															<p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
																{child.label}
															</p>
															{child.children.map((grandchild) => (
																<Link
																	key={grandchild.to}
																	to={grandchild.to}
																	onClick={() => setOpen(false)}
															className="flex min-h-11 items-center rounded-md px-5 py-2.5 text-sm text-foreground/80 hover:bg-muted"
																>
																	{grandchild.label}
																</Link>
															))}
														</div>
													) : (
														<Link
															key={child.to}
															to={child.to}
															onClick={() => setOpen(false)}
													className="flex min-h-11 items-center rounded-md px-6 py-2.5 text-sm text-foreground/80 hover:bg-muted"
														>
															{child.label}
														</Link>
													)
												)}
											</AccordionContent>
											</AccordionItem>
										</Accordion>
									) : (
										<Link
											key={item.to}
											to={item.to}
											onClick={() => setOpen(false)}
										className="flex min-h-11 items-center rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
										>
											{item.label}
										</Link>
									)
								)}
								<AdvisorDialog
									trigger={
										<button className="mt-4 flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
											Talk to an Advisor
											<ArrowRight className="h-4 w-4" />
										</button>
									}
								/>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
