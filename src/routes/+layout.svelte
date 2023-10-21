<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import PageLoading from './PageLoading.svelte';
	import { makeIntersectionObserver } from '$lib/observer';

	let showLoading: boolean = true;
	onMount(async () => {
		makeIntersectionObserver();
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
<div class="w-full h-full font-mono text-white bg-red-800">
	<slot />
</div>
