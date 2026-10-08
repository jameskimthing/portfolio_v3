export type ProjectLink = { label: string; href: string };
export type ProjectBase = {
	slug: string;
	title: string;
	period: string;
	summary: string;
	technologies: readonly string[];
	links: readonly ProjectLink[];
};
export type FeaturedProject = ProjectBase & {
	highlights: readonly string[];
	image?: string;
	imageAlt?: string;
	visual?: 'infrastructure' | 'reporting';
};
export type ArchiveProject = ProjectBase & { image?: string; imageAlt?: string };

export const featuredProjects = [
	{
		slug: 'shorts-factory',
		title: 'Shorts Factory',
		period: 'Jun. – Aug. 2026',
		summary:
			'Reddit-to-YouTube Shorts pipeline that turns stories into narrated, captioned 1080×1920 vertical videos with YouTube metadata, self-hosted on Hetzner.',
		technologies: [
			'Python',
			'FastAPI',
			'FFmpeg',
			'ElevenLabs',
			'Gemini TTS',
			'Whisper',
			'YouTube API'
		],
		highlights: [
			'Automates TTS narration, word-level captions, AI scene images, and FFmpeg rendering with a human review step; supports six languages (en, ko, ja, hi, de, zh).',
			'Checkpoints every stage of a 30+ minute render so failed runs resume from the step that failed; the CLI and web jobs share one render engine.'
		],
		links: [],
		image: '/pastProjects/shorts-factory.png',
		imageAlt:
			'Shorts Factory output: a finished vertical video with word-level captions and its generated title screen'
	},
	{
		slug: 'minimalist-focus-timer',
		title: 'Minimalist Focus Timer',
		period: 'Feb. 2024',
		summary: 'Zero-dependency Pomodoro extension published for Chrome and Firefox.',
		technologies: ['JavaScript', 'Chrome MV3', 'Firefox MV2', 'WebExtensions'],
		highlights: [
			'1,000+ Chrome users (4.8/5), approximately 800 Firefox users (5/5), and 50+ GitHub stars.',
			'Timestamp-based timing avoids accumulated interval drift; Chrome uses MV3 service-worker/offscreen support, Firefox uses an MV2 background page, with extension messaging and a live progress icon.'
		],
		links: [
			{ label: 'GitHub', href: 'https://github.com/jameskimthing/minimalist-focus-timer' },
			{
				label: 'Chrome Store',
				href: 'https://chromewebstore.google.com/detail/pomodoro-focus-timer/eglbnllngiannimbjimkpjklnjgelnoi'
			},
			{
				label: 'Firefox Add-ons',
				href: 'https://addons.mozilla.org/en-US/firefox/addon/minimalist-focus-timer/'
			}
		],
		image: '/pastProjects/minimalist-focus-timer.png',
		imageAlt: 'Minimalist Focus Timer extension showing focus-session controls'
	},
	{
		slug: 'remote-development-infrastructure',
		title: 'Remote Development Infrastructure',
		period: 'Sep. 2026',
		summary:
			'Security-conscious remote development host with reproducible, public-safe configuration.',
		technologies: ['Linux', 'Hetzner', 'Tailscale', 'Cloudflare', 'Caddy', 'systemd'],
		highlights: [
			'Operates code-server, Jupyter, and development services on Hetzner Ubuntu behind a Hetzner Cloud Firewall, Tailscale private administration, Cloudflare DNS, and Caddy reverse proxying.',
			'Maintains Git-tracked host configuration with environment-specific templates plus setup and drift-detection scripts, excluding secrets and runtime state.'
		],
		links: [{ label: 'GitHub', href: 'https://github.com/jameskimthing/vps-config' }],
		visual: 'infrastructure'
	},
	{
		slug: 'doczilla',
		title: 'Doczilla',
		period: 'Oct. 2022',
		summary: 'Solo-built telemedicine app with doctor and patient workflows.',
		technologies: ['Flutter', 'Firebase', 'Firestore', 'WebRTC'],
		highlights: [
			'Doctor/patient roles, intake, prescriptions, and WebRTC video calls using Firestore signaling.',
			'2nd Place, 2022 Congressional App Challenge, Washington’s 9th District (WA-09).'
		],
		links: [
			{ label: 'Demo', href: 'https://doczilla.projectgiven.org/' },
			{ label: 'GitHub', href: 'https://github.com/project-given/doczilla' }
		],
		image: '/pastProjects/doczilla.png',
		imageAlt: 'Doczilla telemedicine app screens'
	}
] satisfies readonly FeaturedProject[];

export const archiveProjects = [
	{
		slug: 'project-given-site',
		title: 'Project GIVEN Site',
		period: '2023',
		summary: 'Organization homepage/admin experience with responsive content management.',
		technologies: ['SvelteKit', 'Firebase', 'Tailwind', 'Vercel'],
		image: '/pastProjects/projectgiven.png',
		imageAlt: 'Project GIVEN website homepage',
		links: [{ label: 'Live', href: 'https://projectgiven.org/' }]
	},
	{
		slug: 'open-shelter',
		title: 'Open Shelter',
		period: '2023',
		summary: 'Disaster-shelter location and registration app.',
		technologies: ['Flutter', 'Firebase'],
		image: '/pastProjects/openshelter.png',
		imageAlt: 'Open Shelter application screen',
		links: [{ label: 'Live', href: 'https://shelter.projectgiven.org/' }]
	},
	{
		slug: 'aws-icons',
		title: 'AWS Icons',
		period: '2023',
		summary: 'Searchable copy/download utility for AWS assets.',
		technologies: ['SvelteKit', 'Tailwind'],
		image: '/pastProjects/awsicons.png',
		imageAlt: 'AWS Icons search interface',
		links: [
			{ label: 'Live', href: 'https://jameskimthing.github.io/aws-icons/' },
			{ label: 'GitHub', href: 'https://github.com/jameskimthing/aws-icons' }
		]
	},
	{
		slug: 'discord-clone',
		title: 'Discord Clone',
		period: '2023',
		summary: 'Real-time messages, rooms, and voice calling.',
		technologies: ['SvelteKit', 'Supabase', 'WebRTC'],
		image: '/pastProjects/discordclone.png',
		imageAlt: 'Discord Clone messaging interface',
		links: [{ label: 'GitHub', href: 'https://github.com/jameskimthing/discord-clone-web' }]
	},
	{
		slug: 'l-system-playground',
		title: 'L-System Playground',
		period: '2023',
		summary: 'Preset and custom L-system renderer.',
		technologies: ['SvelteKit', 'Tailwind'],
		image: '/pastProjects/lsystemplayground.png',
		imageAlt: 'L-System Playground renderer',
		links: [
			{ label: 'Live', href: 'https://jameskimthing.github.io/l-system-playground/' },
			{ label: 'GitHub', href: 'https://github.com/jameskimthing/l-system-playground' }
		]
	},
	{
		slug: 'neural-network-from-scratch',
		title: 'Neural Network from Scratch',
		period: '2026',
		summary:
			'MNIST handwritten-digit classifier with forward and backward propagation implemented in NumPy only (784-256-128-32-10), reaching 95.21% test accuracy.',
		technologies: ['Python', 'NumPy'],
		image: '/pastProjects/mnist-examples.png',
		imageAlt: 'Sample MNIST digits (Josef Steppan, CC BY-SA 4.0)',
		links: []
	}
] satisfies readonly ArchiveProject[];
