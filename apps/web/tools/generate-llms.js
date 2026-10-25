#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const CLEAN_CONTENT_REGEX = {
	comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
	templateLiterals: /`[\s\S]*?`/g,
	strings: /'[^']*'|"[^"]*"/g,
	jsxExpressions: /\{.*?\}/g,
	htmlEntities: {
		quot: /&quot;/g,
		amp: /&amp;/g,
		lt: /&lt;/g,
		gt: /&gt;/g,
		apos: /&apos;/g
	}
};

const EXTRACTION_REGEX = {
	// `element={<Page />}` puts a `>` inside the tag, so the attribute scan has
	// to step over brace groups instead of stopping at the first `>`.
	route: /<Route\s+(?:[^>{]|\{[^}]*\})*\/?>/g,
	path: /path=["']([^"']+)["']/,
	element: /element=\{([\s\S]*)\}/,
	elementComponent: /<(\w+)/g,
	helmet: /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i,
	helmetTest: /<Helmet[\s\S]*?<\/Helmet>/i,
	title: /<title[^>]*?>\s*(.*?)\s*<\/title>/i,
	description: /<meta\s+name=["']description["']\s+content=(["'])([\s\S]*?)\1/i
};

function cleanContent(content) {
	return content
		.replace(CLEAN_CONTENT_REGEX.comments, '')
		.replace(CLEAN_CONTENT_REGEX.templateLiterals, '""')
		.replace(CLEAN_CONTENT_REGEX.strings, '""');
}

function cleanText(text) {
	if (!text) return text;

	return text
		.replace(CLEAN_CONTENT_REGEX.jsxExpressions, '')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.quot, '"')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.amp, '&')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.lt, '<')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.gt, '>')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.apos, "'")
		.trim();
}

function extractRoutes(appJsxPath) {
	if (!fs.existsSync(appJsxPath)) return new Map();

	try {
		const content = fs.readFileSync(appJsxPath, 'utf8');
		const routes = new Map();
		const routeMatches = [...content.matchAll(EXTRACTION_REGEX.route)];

		for (const match of routeMatches) {
			const routeTag = match[0];
			const pathMatch = routeTag.match(EXTRACTION_REGEX.path);
			const elementMatch = routeTag.match(EXTRACTION_REGEX.element);
			const isIndex = routeTag.includes('index');

			if (elementMatch) {
				// A guarded route reads `element={<ProtectedRoute><SettingsPage /></ProtectedRoute>}`,
				// so the page is the innermost component rather than the first one.
				const componentNames = [...elementMatch[1].matchAll(EXTRACTION_REGEX.elementComponent)];
				const componentName = componentNames.at(-1)?.[1];

				if (!componentName) continue;

				let routePath;

				if (isIndex) {
					routePath = '/';
				} else if (pathMatch) {
					routePath = pathMatch[1].startsWith('/') ? pathMatch[1] : `/${pathMatch[1]}`;
				}

				routes.set(componentName, routePath);
			}
		}

		return routes;
	} catch (error) {
		return new Map();
	}
}

function findReactFiles(dir) {
	return fs.readdirSync(dir).map(item => path.join(dir, item));
}

function extractHelmetData(content, filePath, routes) {
	const cleanedContent = cleanContent(content);

	if (!EXTRACTION_REGEX.helmetTest.test(cleanedContent)) {
		return null;
	}

	const helmetMatch = content.match(EXTRACTION_REGEX.helmet);
	if (!helmetMatch) return null;

	const helmetContent = helmetMatch[1];
	const titleMatch = helmetContent.match(EXTRACTION_REGEX.title);
	const descMatch = helmetContent.match(EXTRACTION_REGEX.description);
	const rawTitle = titleMatch?.[1];
	const rawDescription = descMatch?.[2];

	// Dynamic detail pages are represented by their index pages and should not
	// appear in llms.txt as unresolved route patterns or "Untitled Page" rows.
	if (!rawTitle || rawTitle.includes('{') || !rawDescription || rawDescription.includes('{')) {
		return null;
	}

	const title = cleanText(rawTitle);
	const description = cleanText(rawDescription);

	const fileName = path.basename(filePath, path.extname(filePath));
	const url = routes.size && routes.has(fileName)
		? routes.get(fileName)
		: generateFallbackUrl(fileName);

	if (!url || url.includes(':') || url.includes('*')) return null;

	return {
		url,
		title: title || 'Untitled Page',
		description: description || 'No description available'
	};
}

function generateFallbackUrl(fileName) {
	const cleanName = fileName.replace(/Page$/, '').toLowerCase();
	return cleanName === 'app' ? '/' : `/${cleanName}`;
}

function generateLlmsTxt(pages) {
	const sortedPages = pages.sort((a, b) => a.title.localeCompare(b.title));
	const pageEntries = sortedPages.map(page =>
		`- [${page.title}](${page.url}): ${page.description}`
	).join('\n');

	return `## Pages\n${pageEntries}`;
}

function generateSitemap() {
	const propertyDataPath = path.join(process.cwd(), 'src', 'data', 'hutuExclusiveProperties.json');
	if (!fs.existsSync(propertyDataPath)) return;

	const propertyData = JSON.parse(fs.readFileSync(propertyDataPath, 'utf8'));
	const staticRoutes = [
		'/',
		'/residential',
		'/residential/phase-1-2',
		'/residential/phase-3',
		'/residential/phase-5',
		'/commercial',
		'/payment-plans',
		'/buyer-questions',
		'/buying-guides',
		'/articles',
		'/articles/hutu-exclusive-price-list-2026',
		'/articles/hutu-exclusive-location',
		'/articles/hutu-exclusive-phase-3',
		'/articles/hutu-abuja-vs-hutu-exclusive',
		'/articles/who-developed-hutu-exclusive-mshel-homes',
		'/articles/hutu-exclusive-golf-resort-estate',
		'/articles/hutu-exclusive-phase-comparison',
		'/articles/is-hutu-exclusive-right-for-you',
		'/articles/buy-hutu-exclusive-from-abroad',
		'/articles/buying-property-in-abuja-from-abroad',
		'/articles/what-to-consider-before-buying-property-off-plan-abuja',
		'/articles/how-to-buy-at-hutu-exclusive-abuja',
		'/articles/buying-hutu-exclusive-from-abroad',
		'/articles/understanding-hutu-exclusive-payment-plans',
		'/site-updates',
		'/site-updates/phase-3-internal-roads-progress',
		'/site-updates/phase-2-terrace-construction-progress',
		'/site-updates/phase-5-early-bird-pricing-update',
		'/inspection',
		'/privacy-policy',
		'/terms-disclaimers',
		'/payment-disclosure',
	];
	const propertyRoutes = propertyData.properties
		.filter((property) => property.active)
		.map((property) => `/properties/${property.slug}`);
	const routes = [...staticRoutes, ...propertyRoutes];
	const urls = routes.map((route) => `  <url><loc>https://hutuexclusive.com${route}</loc></url>`).join('\n');
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap, 'utf8');
}

function ensureDirectoryExists(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

function processPageFile(filePath, routes) {
	try {
		const content = fs.readFileSync(filePath, 'utf8');
		return extractHelmetData(content, filePath, routes);
	} catch (error) {
		console.error(`❌ Error processing ${filePath}:`, error.message);
		return null;
	}
}

function main() {
	const pagesDir = path.join(process.cwd(), 'src', 'pages');
	const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');

	let pages = [];

	if (!fs.existsSync(pagesDir)) {
		pages.push(processPageFile(appJsxPath, new Map()))
		pages = pages.filter(Boolean);
	} else {
		const routes = extractRoutes(appJsxPath);
		const reactFiles = findReactFiles(pagesDir);

		pages = reactFiles
			.map(filePath => processPageFile(filePath, routes))
			.filter(Boolean);
	}

	if (pages.length === 0) {
		console.error('❌ No pages with Helmet components found!');
		process.exit(1);
	}


	const llmsTxtContent = generateLlmsTxt(pages);
	const outputPath = path.join(process.cwd(), 'public', 'llms.txt');

	ensureDirectoryExists(path.dirname(outputPath));
	fs.writeFileSync(outputPath, llmsTxtContent, 'utf8');
	generateSitemap();
}

const isMainModule = fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isMainModule) {
	main();
}
