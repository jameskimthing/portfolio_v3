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

	let width: number;
	let breakpoint: string = '';
	$: breakpoint = getWindow(width);
	function getWindow(width: number) {
		const greaterThan = (num: number) => width > num;

		if (greaterThan(1536)) return '2xl';
		if (greaterThan(1280)) return 'xl';
		if (greaterThan(1024)) return 'lg';
		if (greaterThan(768)) return 'md';
		if (greaterThan(640)) return 'sm';

		return '';
	}
</script>

<svelte:window bind:innerWidth={width} />

<div class="fixed z-50 px-2 py-1 text-black bg-white rounded shadow top-2 left-2 shadow-black">
	{width}: {breakpoint}
</div>

<svelte:head>
	<title>James Kim: Portfolio</title>
</svelte:head>

<PageLoading {showLoading} />
<div class="w-full h-full font-mono text-white bg-red-800">
	<slot />
</div>
