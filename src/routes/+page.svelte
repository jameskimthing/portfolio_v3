<script lang="ts">
	import { onMount } from 'svelte';
	import { initializeMenu } from '$lib/menu';
	import Menu from '$lib/items/Menu.svelte';
	import Introduction from '../lib/sections/Introduction.svelte';
	import Development from '../lib/sections/Development.svelte';
	import FormalTestScores from '$lib/sections/FormalTestScores.svelte';

	onMount(() => initializeMenu(sections));

	const sections: string[] = [
		'introduction',
		'formal_test_scores',
		'development',
		'professional_experience',
		'certificates',
		'past_projects'
	];
</script>

<!-- 
	Gap between elements is 2
	For default padding between, have it as 5
 -->

<Menu {sections} />

<Introduction />
<FormalTestScores />
<Development />
<section id="professional_experience" class="w-full h-screen bg-red-700" />
<section id="certificates" class="w-full h-screen bg-blue" />
<section id="past_projects" class="w-full h-screen bg-green-700" />
