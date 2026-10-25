import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes, BrowserRouter as Router, useLocation, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PersistentWhatsAppCTA from './components/PersistentWhatsAppCTA';
import HomePage from './pages/HomePage';
import { SITE_CONFIG } from './config/site';

const PhasePage = lazy(() => import('./pages/PhasePage'));
const ResidentialPage = lazy(() => import('./pages/ResidentialPage'));
const CommercialPage = lazy(() => import('./pages/CommercialPage'));
const PaymentPlansPage = lazy(() => import('./pages/PaymentPlansPage'));
const BuyerQuestionsPage = lazy(() => import('./pages/BuyerQuestionsPage'));
const BuyingGuidesPage = lazy(() => import('./pages/BuyingGuidesPage'));
const BuyingGuidePage = lazy(() => import('./pages/BuyingGuidePage'));
const SiteUpdatesPage = lazy(() => import('./pages/SiteUpdatesPage'));
const SiteUpdatePage = lazy(() => import('./pages/SiteUpdatePage'));
const InspectionPage = lazy(() => import('./pages/InspectionPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const PropertyDetailPage = lazy(() => import('./pages/PropertyDetailPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const OverviewPage = lazy(() => import('./pages/OverviewPage'));
const MeetDeveloperPage = lazy(() => import('./pages/MeetDeveloperPage'));
const MeetAdvisorPage = lazy(() => import('./pages/MeetAdvisorPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsDisclaimersPage = lazy(() => import('./pages/TermsDisclaimersPage'));
const PaymentDisclosurePage = lazy(() => import('./pages/PaymentDisclosurePage'));

function GlobalSeo() {
	const { pathname } = useLocation();
	const canonical = `${SITE_CONFIG.baseUrl}${pathname}`;
	return <Helmet><link rel="canonical" href={canonical} /><meta property="og:url" content={canonical} /></Helmet>;
}

function App() {
	return (
		<Router>
			<GlobalSeo />
			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: SITE_CONFIG.name,
						url: SITE_CONFIG.baseUrl,
						areaServed: SITE_CONFIG.location,
					})}
				</script>
			</Helmet>
			<ScrollToTop />
			<div className="flex min-h-screen flex-col bg-background text-foreground">
				<Navbar />
				<main className="flex-1 pb-16 sm:pb-0">
					<Suspense fallback={<div className="page-container flex min-h-[50dvh] items-center justify-center text-sm text-muted-foreground" role="status">Loading page…</div>}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about/hutu-exclusive" element={<OverviewPage />} />
						<Route path="/overview" element={<Navigate to="/about/hutu-exclusive" replace />} />
						<Route path="/about/meet-the-developer" element={<MeetDeveloperPage />} />
						<Route path="/meet-the-developer" element={<Navigate to="/about/meet-the-developer" replace />} />
						<Route path="/about/meet-your-advisor" element={<MeetAdvisorPage />} />
						<Route path="/meet-your-advisor" element={<Navigate to="/about/meet-your-advisor" replace />} />
						<Route path="/residential/phase-1-2" element={<PhasePage slug="phase-1-2" />} />
						<Route path="/residential/phase-3" element={<PhasePage slug="phase-3" />} />
						<Route path="/residential/phase-5" element={<PhasePage slug="phase-5" />} />
						<Route path="/residential" element={<ResidentialPage />} />
						<Route path="/commercial" element={<CommercialPage />} />
						<Route path="/properties/:slug" element={<PropertyDetailPage />} />
						<Route path="/payment-plans" element={<PaymentPlansPage />} />
						<Route path="/buyer-questions" element={<BuyerQuestionsPage />} />
						<Route path="/buying-guides" element={<BuyingGuidesPage />} />
						<Route path="/buying-guides/:slug" element={<BuyingGuidePage />} />
						<Route path="/site-updates" element={<SiteUpdatesPage />} />
						<Route path="/site-updates/:slug" element={<SiteUpdatePage />} />
						<Route path="/articles/how-to-buy-at-hutu-exclusive-abuja" element={<Navigate to="/buying-guides/how-to-buy-at-hutu-exclusive-abuja" replace />} />
						<Route path="/articles/buying-hutu-exclusive-from-abroad" element={<Navigate to="/buying-guides/buying-hutu-exclusive-from-abroad" replace />} />
						<Route path="/articles/understanding-hutu-exclusive-payment-plans" element={<Navigate to="/buying-guides/understanding-hutu-exclusive-payment-plans" replace />} />
						<Route path="/articles" element={<ArticlesPage />} />
						<Route path="/articles/:slug" element={<ArticlePage />} />
						<Route path="/inspection" element={<InspectionPage />} />
						<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
						<Route path="/terms-disclaimers" element={<TermsDisclaimersPage />} />
						<Route path="/terms-disclaimer" element={<Navigate to="/terms-disclaimers" replace />} />
						<Route path="/payment-disclosure" element={<PaymentDisclosurePage />} />
						<Route path="/disclosure" element={<Navigate to="/payment-disclosure" replace />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
					</Suspense>
				</main>
				<Footer />
				<PersistentWhatsAppCTA />
			</div>
		</Router>
	);
}

export default App;
