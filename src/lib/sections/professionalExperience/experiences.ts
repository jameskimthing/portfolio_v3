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
		company: 'D.LAB Coding · Wirye Campus',
		role: 'Full-Stack Developer (Volunteer Project)',
		location: 'South Korea',
		period: 'Jul. 2026 – Sep. 2026',
		summary:
			'Built and deployed a Next.js/TypeScript weekly-report platform that replaces per-teacher Google Docs with centralized report histories; piloting with one admin/teacher ahead of a rollout to 6–10 teachers and approximately 40 students.',
		highlights: [
			'Integrated Google Drive via OAuth and a service account; prevented lost edits with optimistic locking and immutable revisions.',
			'Built token-protected PDF export and byte-range video streaming, with integration tests covering core flows.',
			'Built an AI report coach with teacher-approved edits; cut latency from 4–5 s to 1–2 s by switching to GroqCloud.'
		],
		technologies: ['Next.js', 'TypeScript', 'Firebase', 'Google Drive API', 'GroqCloud', 'Vercel']
	},
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
			'Designed and shipped a 26-endpoint developer API across five sources and redesigned the Chrome extension UI for InfraNodus, a paid text-analysis tool with 1,000+ users.',
		highlights: [
			'Built the API over web, Google Search, YouTube, Twitter, and PDF sources, adding async job polling, caching, pgvector similarity search, bcrypt API-key auth, rate limits, and Swagger documentation.',
			'Reduced benchmark processing-stage time 73% (6.2 s to 1.65 s) by replacing jsdom with Cheerio; reduced mean YouTube caption retrieval time 58% (7.7 s to 3.2 s) in a five-run, single-video benchmark by changing retrieval method and proxy configuration.',
			'Implemented Figma mockups for the extension, handled client-side-rendered pages, and auto-refreshed AI results.',
			'Prototyped Telegram and WhatsApp chat interfaces to InfraNodus via messaging webhooks.'
		],
		technologies: [
			'JavaScript',
			'Node.js',
			'Express',
			'Cheerio',
			'Puppeteer',
			'Supabase',
			'pgvector',
			'Docker',
			'fly.io',
			'Swagger',
			'Figma'
		]
	},
	{
		company: 'G-TELP Korea',
		role: 'Full Stack Developer Intern',
		location: 'Seoul, South Korea',
		period: 'Oct. 2023 – Jan. 2024',
		summary:
			'Built the website and admin CMS for Impact School, an experimental education project, in SvelteKit and TypeScript.',
		highlights: [
			'Split site copy (Cloud Storage JSON) from news (Firestore) so nontechnical admins can edit both without code.',
			'Containerized with Docker and deployed to Google Cloud Run via Artifact Registry for stakeholder review.',
			'Wrote a Korean handoff guide covering architecture, deployment, and known limitations.'
		],
		technologies: [
			'SvelteKit',
			'TypeScript',
			'Tailwind CSS',
			'Docker',
			'Cloud Run',
			'Cloud Storage',
			'Firestore'
		]
	}
] satisfies readonly Experience[];
