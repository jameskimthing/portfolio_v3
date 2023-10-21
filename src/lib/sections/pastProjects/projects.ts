interface Project {
	title: string;
	description: string;
	complexity: number;
	initialCommit: string; // '07/09/2023'
	madeWith: string[];
	demo: string;
	code?: string;
	features: string[];
	image: string; // under /static/pastProjects/[image]
}

// update Project.svelte when adding, cause I hardcoded some stuff out of lazines :)
const projects: Project[] = [
	{
		title: 'Project GIVEN Site',
		description: 'A homepage with menus, with past achievements.',
		complexity: 90,
		initialCommit: '07/09/2023',
		madeWith: ['SvelteKit', 'Firebase', 'Tailwind', 'Vercel'],
		demo: 'https://projectgiven.org/',
		features: ['main page', 'admin page', 'responsive design'],
		image: 'projectgiven.png'
	},
	{
		title: 'Open Shelter',
		description: 'App for diaster victims providing shelter.',
		complexity: 60,
		initialCommit: '09/09/2023',
		madeWith: ['Flutter', 'Firebase'],
		demo: 'https://shelter.projectgiven.org/',
		features: ['user authentication', 'form registration for location'],
		image: 'openshelter.png'
	},
	{
		title: 'My Utilities',
		description: 'A set of tools, each of them with their own uses.',
		complexity: 60,
		initialCommit: '11/12/2022',
		madeWith: ['SvelteKit', 'Tailwind', 'Supabase'],
		demo: 'https://jameskimthing.github.io/my-utilities',
		code: 'https://github.com/jameskimthing/my-utilities',
		features: [
			'password manager (with encryption)',
			'user authentication',
			'l-systems',
			'page transition animation'
		],
		image: 'myutilities.png'
	},
	{
		title: 'AWS Icons',
		description: 'A user-friendly click-and-copy site for the various aws icons',
		complexity: 40,
		initialCommit: '01/09/2023',
		madeWith: ['SvelteKit', 'Tailwind'],
		demo: 'https://jameskimthing.github.io/aws-icons/',
		code: 'https://github.com/jameskimthing/aws-icons',
		features: ['copy-and-paste'],
		image: 'awsicons.png'
	},
	{
		title: 'Discord Clone',
		description: 'A clone of discord, all with message, and real-time communication',
		complexity: 80,
		initialCommit: '04/17/2023',
		madeWith: ['Supabase', 'SvelteKit', 'Tailwind', 'WebRTC'],
		demo: 'https://discord-clone-thing.vercel.app/',
		code: 'https://github.com/jameskimthing/discord-clone-web',
		features: ['real time voice calling', 'message', 'servers, chat rooms'],
		image: 'discordclone.png'
	},
	{
		title: 'Tab Container',
		description: 'A simple container allowing me to change tabs name and the icon',
		complexity: 20,
		initialCommit: '01/17/2023',
		madeWith: ['JavaScript', 'HTML5', 'CSS3'],
		demo: 'https://container.jkim.app',
		code: 'https://github.com/jameskimthing/tab-container',
		features: ['site title modification', 'site icon modification'],
		image: 'tabcontainer.png'
	},
	{
		title: 'Portfolio v1',
		description: 'The first iteration of my portfolio website',
		complexity: 70,
		initialCommit: '04/10/2023',
		madeWith: ['SvelteKit', 'Intersection Observers', 'Tailwind', 'Three js'],
		demo: 'https://james-portfolio-v1.vercel.app/',
		code: 'https://github.com/jameskimthing/portfolio_v1',
		features: ['3d skills cloud', '3d gallery of past projects'],
		image: 'portfolio1.png'
	},
	{
		title: 'Tables',
		description:
			'A way to organize folders under accounts, each under a group, where I can add individual items',
		complexity: 75,
		initialCommit: '03/18/2023',
		madeWith: ['Supabase', 'SvelteKit', 'Tailwind'],
		demo: 'https://james-tables.vercel.app/',
		code: 'https://github.com/jameskimthing/tables',
		features: ['folders', 'public / private folders'],
		image: 'tables.png'
	},
	{
		title: 'L System Playground',
		description: 'A playground to make your own l-system',
		complexity: 55,
		initialCommit: '10/16/2023',
		madeWith: ['SvelteKit', 'Tailwind'],
		demo: 'https://jameskimthing.github.io/l-system-playground',
		code: 'https://github.com/jameskimthing/l-system-playground',
		features: ['l-system presets', 'custom l-systems'],
		image: 'lsystemplayground.png'
	},
	{
		title: 'Doczilla',
		description:
			'A mobile telemedicine app, to connect underprivileged communities with distant doctors',
		complexity: 95,
		initialCommit: '10/14/2022',
		madeWith: ['Flutter', 'Firebase', 'WebRTC'],
		demo: 'https://doczilla.projectgiven.org/',
		code: 'https://github.com/project-given/doczilla',
		features: ['prescriptions', 'real time video calling'],
		image: 'doczilla.png'
	}
];

export { projects };
export type { Project };
