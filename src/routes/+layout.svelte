<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import PageLoading from './PageLoading.svelte';
	import { initializeObserver } from '$lib/observer';

	let showLoading: boolean = true;
	onMount(async () => {
		initializeObserver();
		if (document.readyState === 'complete') {
			await new Promise((r) => setTimeout(r, 300));
			showLoading = false;
		} else {
			document.onreadystatechange = () => {
				if (document.readyState === 'complete') {
					showLoading = false;
					document.onreadystatechange = null;
				}
			};
		}
	});
</script>

<svelte:head>
	<title>James Kim: Portfolio</title>
</svelte:head>

<PageLoading {showLoading} />
<div class="w-full h-full bg-red-800 text-white font-mono">
	<slot />
</div>
