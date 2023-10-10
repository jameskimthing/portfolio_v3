<script lang="ts">
	import { onMount } from 'svelte';
	import { initializeMenu } from '$lib/menu';
	import Menu from '$lib/items/Menu.svelte';
	import Introduction from './Introduction.svelte';
	import Skills from './Skills.svelte';

	onMount(() => initializeMenu());
</script>

<!-- 
	Gap between elements is 2
	For default padding between, have it as 5
 -->

<Menu />

<Introduction />
<Skills />
<section id="professional_experience" class="w-full h-screen bg-red-700" />
<section id="certificates" class="w-full h-screen bg-blue" />
<section id="past_projects" class="w-full h-screen bg-green-700" />
