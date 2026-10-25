import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NotFoundPage() {
	return (
		<>
			<Helmet>
				<title>Page Not Found — Hutu Exclusive Buyer Advisory</title>
				<meta name="description" content="The page you are looking for does not exist. Explore Hutu Exclusive properties, phases and payment plans from the homepage." />
			</Helmet>
			<section className="mx-auto flex min-h-[60dvh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
				<p className="font-display text-6xl font-semibold text-primary">404</p>
				<h1 className="mt-4 font-display text-3xl font-medium">This page isn’t on the map</h1>
				<p className="mt-3 text-muted-foreground">The link may be old or mistyped. Head back home to keep exploring Hutu Exclusive.</p>
				<Link to="/" className="mt-8 inline-flex min-h-[48px] items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]">
					Back to Home
				</Link>
			</section>
		</>
	);
}
