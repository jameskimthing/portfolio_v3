interface Experience {
	title: string;
	description: string;
	duration: string;
}

// const years: number[] = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const today = new Date();
const mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const untilCurrent = `${mm}/${yyyy}`;

const months: string[] = [
	'January', // 00
	'February', // 01
	'March', // 02
	'April', // 03
	'May', // 04
	'June', // 05
	'July', // 06
	'August', // 07
	'September', // 08
	'October', // 09
	'November', // 10
	'December' // 11
];

const years = ['2022', '2023', '2024'];
const firstYear = parseInt(years[0]);
const lastYear = parseInt(years[years.length - 1]);

const experiences: Experience[] = [
	{
		title: 'Nodus Labs (InfraNodus)',
		description:
			'Freelance contract developer remotely with a company based on the United Kingdom. Focused on implementing advanced AI features for a browser extension (1000+ users, paid) on text network analysis, established a robust backend with Express, Node, Docker, developed experimental AI-powered chat interfaces for Telegram & WhatsApp, and launched an obsidian plugin from scratch incorporating AI-driven topic summarization & question generation.',
		duration: '02/2024-06/2024'
	},
	{
		title: 'G-Telp Website',
		description:
			'Developed the new Official Education Service Homepage (Frontend, backend, UIUX); Brainstormed with teammates to create new features',
		duration: '09/2023-00/2024'
	},
	{
		title: 'Project GIVEN',
		description:
			'Arranged 20+ local healthcare events and cured 200+ patients; Established a local library from 500+ donated books for 50+ unprivileged students',
		duration: '00/2018-06/2023'
	},
	{
		title: 'Haemill School',
		description:
			'Upgraded the online database to a Google Workspace based platform (30+TB); Instructed 15+ school faculty and 60+ students with Google for Education',
		duration: '00/2022-07/2022'
	},
	{
		title: 'Together Village',
		description:
			'Organized boot camp for grades 5-10; Taught 20+ students in-person & online sessions; Concluded with each holding a 5 minute English presentation',
		duration: '00/2022-07/2022'
	},
	{
		title: 'Church Broadcast Team',
		description:
			'Supervised the sound/recording system & maintained weekly live streaming of sermons; Managed technical aspects (transitions, visuals, etc)',
		duration: '04/2017-11/2022'
	},
	{
		title: 'Doczilla',
		description:
			'Developed telemedicine app connecting distant doctors with unprivileged communities; Treated 50+ patients with medical events held in the Philippines',
		duration: '06/2022-10/2022'
	},
	{
		title: 'Project GIVEN Website',
		description:
			'Developed and designed the homepage of the Project GIVEN organization, complete with the main homepage, alongside multiple sections for different topics, and a separate admin page for Project GIVEN insiders to update, or edit existing information',
		duration: '05/2023-06/2023'
	},
	{
		title: 'Open Shelter',
		description:
			'Developed app providing free shelter & electricity for disaster victims reliant on electric equipment; 10+ locations over 4 countries',
		duration: '08/2023-09/2023'
	}
];

export { experiences, months, years, firstYear, lastYear, untilCurrent };
export type { Experience };
