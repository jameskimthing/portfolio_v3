<script lang="ts">
	import Menu from '$lib/items/Menu.svelte';
	import { onMount } from 'svelte';
	import Introduction from './Introduction.svelte';
	import Skills from './Skills.svelte';
	import { initializeMenu } from '$lib/menu';

	const sections: string[] = [
		'introduction',
		'skills',
		'professional_experience',
		'certificates',
		'past_projects'
	];

	onMount(() => initializeMenu(sections));
</script>

<Menu {sections} />

<Introduction />
<!-- <section class="h-screen w-full bg-slate-700" /> -->
<div class="h-44" />
<Skills />
<section class="h-screen w-full bg-slate-700" />
<section id="professional_experience" class="h-96 w-96 bg-red-700" />
<section class="h-screen w-full bg-slate-700" />
<section id="certificates" class="h-96 w-96 bg-blue" />
<section class="h-screen w-full bg-slate-700" />
<section id="past_projects" class="h-96 w-96 bg-green-700" />
