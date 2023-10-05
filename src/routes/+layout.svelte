<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import PageLoading from './PageLoading.svelte';

	let showLoading: boolean = true;
	onMount(async () => {
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
<div class="w-full h-full bg-black text-amber-100 font-mono">
	<slot />
</div>
