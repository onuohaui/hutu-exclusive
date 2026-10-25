export function getArticleReadingTime(article) {
	if (article.wordCount) return Math.max(1, Math.ceil(article.wordCount / 225));
	if (article.calculateReadingTimeFromContent) {
		const hiddenKeys = new Set(['type', 'to', 'src', 'alt', 'image', 'imageAlt', 'imageCaption', 'external', 'kind', 'aParts']);
		const countWords = (value) => {
			if (typeof value === 'string') return value.trim().split(/\s+/).filter(Boolean).length;
			if (Array.isArray(value)) return value.reduce((total, item) => total + countWords(item), 0);
			if (value && typeof value === 'object') {
				return Object.entries(value).reduce((total, [key, item]) => hiddenKeys.has(key) ? total : total + countWords(item), 0);
			}
			return 0;
		};
		const wordCount = countWords([article.introduction, article.quickAnswer, article.body, article.authorBio]);
		return Math.max(1, Math.ceil(wordCount / 225));
	}

	const words = [article.title, article.summary, ...article.body.flatMap((section) => [section.heading, ...(section.paragraphs || [])])]
		.join(' ')
		.trim()
		.split(/\s+/).length;

	return Math.max(3, Math.ceil(words / 200));
}

export function getArticleSectionId(heading) {
	return heading
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}
