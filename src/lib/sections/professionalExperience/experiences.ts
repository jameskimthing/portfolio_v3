export type Experience = {
	company: string;
	role: string;
	location: string;
	period: string;
	summary: string;
	highlights: readonly string[];
	technologies: readonly string[];
};

export const experiences = [
	{
		company: 'University of Illinois Urbana-Champaign',
		role: 'CS 128 Course Assistant',
		location: 'Urbana, IL',
		period: 'Jan. 2025 – May 2025',
		summary:
			'Led office hours and supported labs/course forums for Intro to CS II, helping students debug C++ and reason through program design.',
		highlights: [],
		technologies: ['C++', 'Teaching', 'Program Design']
	},
	{
		company: 'Nodus Labs · InfraNodus',
		role: 'Contract Software Engineer',
		location: 'Remote · U.K. client',
		period: 'Mar. 2024 – Jul. 2024',
		summary:
			'Developed Chrome extension features for the paid InfraNodus text-analysis product with 1,000+ users.',
		highlights: [
			'Built scraping/content-ingestion APIs for webpages, PDFs, and YouTube plus embeddings, caching, vector search, request queuing, and Swagger documentation.',
			'Reduced benchmark processing-stage time 73% (6.2 s to 1.65 s) by replacing jsdom with Cheerio; reduced mean YouTube caption retrieval time 58% (7.71 s to 3.21 s) in a five-run, single-video benchmark by changing retrieval method and proxy configuration.',
			'Started an Obsidian plugin prototype and explored experimental Telegram integration and AI chat features.'
		],
		technologies: [
			'JavaScript',
			'Node.js',
			'Express',
			'Cheerio',
			'REST APIs',
			'Vector Search',
			'Swagger'
		]
	}
] satisfies readonly Experience[];
