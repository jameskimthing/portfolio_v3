export const profile = {
	name: 'James Kim',
	headline: 'Software Engineer · Statistics & Computer Science',
	summary:
		'I build reliable web products, browser tools, and developer infrastructure—from concurrency-safe reporting systems to extensions used by thousands.',
	email: 'jamesk8@illinois.edu',
	emailHref: 'mailto:jamesk8@illinois.edu',
	portfolio: 'https://portfolio.jkim.app',
	github: 'https://github.com/jameskimthing',
	linkedin: 'https://www.linkedin.com/in/jameskimthing/',
	location: 'South Korea',
	availability: 'Available Jan.–Aug. 2027'
} as const;

export const education = {
	institution: 'University of Illinois Urbana-Champaign',
	degree: 'B.S. in Statistics & Computer Science',
	graduation: 'Expected Dec. 2029',
	gpa: 'GPA: 4.00/4.00',
	status: 'Military leave; returning Fall 2027',
	coursework: [
		'Data Structures',
		'Discrete Structures',
		'Probability & Statistics',
		'Multivariable Calculus'
	]
} as const;

export const certification = 'AWS Certified Solutions Architect – Associate' as const;

export const courseCertificates = [
	{ name: 'Claude Code 101', issuer: 'Anthropic' },
	{
		name: 'CS50x',
		issuer: 'Harvard CS50',
		href: 'https://cs50.harvard.edu/certificates/ece3eb60-e5a0-4835-a4c8-0e08d6cd2574'
	},
	{
		name: "CS50's Introduction to Artificial Intelligence with Python",
		issuer: 'Harvard CS50',
		href: 'https://cs50.harvard.edu/certificates/0146bb4b-e155-4cba-a03c-dea19348c332'
	},
	{
		name: "CS50's Introduction to Game Development",
		issuer: 'Harvard CS50',
		href: 'https://cs50.harvard.edu/certificates/e5d21003-5653-42a0-aa88-8cba1f170442'
	},
	{
		name: 'AP® Calculus BC',
		issuer: 'DavidsonNext (edX)',
		href: 'https://courses.edx.org/certificates/bf4007c397174fe8a192928a83623a06'
	},
	{
		name: 'Single Variable Calculus',
		issuer: 'University of Pennsylvania (Coursera)',
		href: 'https://coursera.org/verify/7594FXUK63UM'
	},
	{
		name: 'Introduction to Calculus',
		issuer: 'University of Sydney (Coursera)',
		href: 'https://coursera.org/verify/DD9YHXF9LKUL'
	},
	{
		name: 'Flutter & Dart — The Complete Guide [2023 Edition]',
		issuer: 'Udemy / Academind',
		href: 'https://ude.my/UC-e412ff3a-e831-44b2-99f6-892bc9e50be0'
	},
	{
		name: 'AWS Certified Cloud Practitioner (CLF-C01) | AWS Essentials',
		issuer: 'Udemy / Academind',
		href: 'https://ude.my/UC-e472305d-9216-42bd-a2be-c18749197b1e'
	},
	{
		name: 'Introduction to TensorFlow for AI, Machine Learning, and Deep Learning',
		issuer: 'DeepLearning.AI (Coursera)',
		href: 'https://coursera.org/verify/MQUFHM24FOUW'
	},
	{
		name: 'Convolutional Neural Networks in TensorFlow',
		issuer: 'DeepLearning.AI (Coursera)',
		href: 'https://coursera.org/verify/4VQL7ENCA7WR'
	},
	{
		name: 'Natural Language Processing in TensorFlow',
		issuer: 'DeepLearning.AI (Coursera)',
		href: 'https://coursera.org/verify/G3GB6MN8AUVE'
	},
	{
		name: 'Sequences, Time Series and Prediction',
		issuer: 'DeepLearning.AI (Coursera)',
		href: 'https://coursera.org/verify/DNCTEERSPHHT'
	},
	{
		name: 'DeepLearning.AI TensorFlow Developer Professional Certificate',
		issuer: 'DeepLearning.AI (Coursera)',
		href: 'https://coursera.org/verify/professional-cert/2LQQDXB7ZAW4'
	}
] satisfies readonly { name: string; issuer: string; href?: string }[];

export const skillGroups = [
	{ label: 'Languages', skills: ['TypeScript/JavaScript', 'Python', 'C++'] },
	{
		label: 'Web & Backend',
		skills: [
			'React',
			'Next.js',
			'SvelteKit',
			'Tailwind CSS',
			'Node.js/Express',
			'FastAPI',
			'REST APIs',
			'Puppeteer'
		]
	},
	{
		label: 'Cloud & Tools',
		skills: ['AWS', 'GCP', 'Firebase/Firestore', 'Vercel', 'fly.io', 'Docker', 'Linux', 'Git']
	},
	{
		label: 'Data',
		skills: ['Supabase/PostgreSQL (pgvector)', 'scikit-learn', 'pandas', 'NumPy', 'FFmpeg']
	},
	{ label: 'Spoken', skills: ['English (native)', 'Korean (native)'] }
] as const;
