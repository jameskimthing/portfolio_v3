<script lang="ts">
	import { education, profile } from '$lib/profile';
	import Menu from '$lib/items/Menu.svelte';
	import Introduction from './Introduction.svelte';
	import ProfessionalExperience from './ProfessionalExperience.svelte';
	import PastProjects from './PastProjects.svelte';
	import Credentials from './Credentials.svelte';
	import Contact from './Contact.svelte';

	const sections = [
		{ id: 'home', label: 'Home' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'credentials', label: 'Credentials' },
		{ id: 'contact', label: 'Contact' }
	] as const;

	const description =
		'James Kim is a software engineer and Statistics & Computer Science student at UIUC building reliable web products, browser tools, and developer infrastructure.';
	const title = 'James Kim — Software Engineer';
	const person = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: profile.name,
		jobTitle: 'Software Engineer',
		description: profile.summary,
		url: profile.portfolio,
		email: profile.emailHref,
		affiliation: { '@type': 'EducationalOrganization', name: education.institution },
		sameAs: [profile.github, profile.linkedin]
	};
	const jsonLd =
		'<script type="application/ld+json">' +
		JSON.stringify(person).replace(/</g, '\\u003c') +
		'</scr' +
		'ipt>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={profile.portfolio} />
	<meta name="theme-color" content="#f9f9f7" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={profile.portfolio} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON is serialized and escapes HTML delimiters. -->
	{@html jsonLd}
</svelte:head>

<a
	href="#main"
	class="bg-ink text-paper fixed -top-24 left-4 z-[60] px-5 py-3 font-mono focus:top-4"
	>Skip to content</a
>
<Menu {sections} />
<main id="main" tabindex="-1" class="site-grid overflow-clip">
	<Introduction />
	<ProfessionalExperience />
	<PastProjects />
	<Credentials />
	<Contact />
</main>
<footer class="bg-paper border-ink border-t-4 px-4 py-8">
	<div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
		<div>
			<p class="font-display text-3xl font-black">JAMES KIM<span class="text-accent">.</span></p>
			<p class="eyebrow text-muted mt-3">Edition: Vol. 01 / 2026<br />Filed from South Korea</p>
		</div>
		<div class="border-ink md:border-l md:pl-8">
			<p class="eyebrow border-ink border-b pb-2">Index / Navigate this issue</p>
			<nav aria-label="Footer">
				<ul
					class="mt-2 grid grid-cols-2 gap-x-4 font-sans text-xs font-bold uppercase sm:grid-cols-3"
				>
					{#each sections as section, index (section.id)}<li>
							<a
								href="#{section.id}"
								class="hover:text-accent inline-flex min-h-11 items-center gap-2"
								><span class="text-muted font-mono">0{index + 1}</span>{section.label}</a
							>
						</li>{/each}
				</ul>
			</nav>
		</div>
	</div>
	<p class="eyebrow border-ink text-muted mx-auto mt-8 max-w-7xl border-t pt-3">
		Independent by design. Built for the web.
	</p>
</footer>
