<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import { basePageLoadingTime } from '$lib/menu';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let scrollY: number = 0;
	let canShowBounce = false;

	onMount(async () => {
		await new Promise((r) => setTimeout(r, basePageLoadingTime + 7000));
		canShowBounce = true;
	});
</script>

<svelte:window bind:scrollY />

<section
	id="introduction"
	class="flex flex-col justify-center w-full min-h-screen px-8 pl-32 bg-black"
>
	<ShowElementTransition direction="down" delay={basePageLoadingTime + 150}>
		<div class="pb-3 text-2xl text-white">Hello! I am</div>
	</ShowElementTransition>
	<ShowElementTransition direction="down" delay={basePageLoadingTime + 300}>
		<div class="-ml-4 font-bold text-8xl text-bright-yellow whitespace-nowrap">James Kim,</div>
	</ShowElementTransition>

	<ShowElementTransition direction="down" delay={basePageLoadingTime + 450}>
		<div class="text-5xl font-bold text-amber-100 whitespace-nowrap">a software developer.</div>
	</ShowElementTransition>

	<ShowElementTransition direction="down" delay={basePageLoadingTime + 600}>
		<div class="text-xl text-slate-400 mt-5 max-w-[800px]">
			I specialize in building web and mobile applications with Svelte and Flutter, alongside
			Tailwind CSS and Firebase to create dynamic and responsive applications.
		</div>
	</ShowElementTransition>

	{#if scrollY === 0 && canShowBounce}
		<div
			transition:fade
			class="absolute inset-x-0 w-5 h-5 ml-auto mr-auto rounded-full bottom-5 bg-amber-100 animate-bounce"
		/>
	{/if}
</section>
