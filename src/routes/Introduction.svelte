<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import { basePageLoadingTime } from '$lib/menu';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let scrollY: number = 0;
	let width: number = 0;
	let canShowBounce = false;

	onMount(async () => {
		await new Promise((r) => setTimeout(r, basePageLoadingTime + 7000));
		canShowBounce = true;
	});
</script>

<svelte:window bind:scrollY bind:innerWidth={width} />

<section
	id="introduction"
	class="flex flex-col justify-center w-full min-h-screen px-8 py-5 pl-16 bg-black sm:pl-20 lg:pl-32"
>
	<ShowElementTransition direction="down" delay={basePageLoadingTime + 150}>
		<div class="text-base text-white sm:pb-3 sm:text-xl lg:text-2xl">Hello! I am</div>
	</ShowElementTransition>
	<ShowElementTransition direction="down" delay={basePageLoadingTime + 300}>
		<div
			class="text-2xl font-bold sm:text-5xl sm:-ml-4 lg:text-8xl text-bright-yellow sm:whitespace-nowrap"
		>
			James Kim,
		</div>
	</ShowElementTransition>

	<ShowElementTransition direction="down" delay={basePageLoadingTime + 450}>
		<div class="text-base sm:font-bold sm:text-4xl lg:text-5xl text-amber-100 sm:whitespace-nowrap">
			a software developer.
		</div>
	</ShowElementTransition>

	<ShowElementTransition direction="down" delay={basePageLoadingTime + 525}>
		<div class="text-base sm:text-lg text-amber-100 sm:whitespace-nowrap">
			UIUC - Information Science and Data Science
		</div>
	</ShowElementTransition>

	<ShowElementTransition direction="down" delay={basePageLoadingTime + 600}>
		<div class=" sm:text-xl text-slate-400 md:mt-5 max-w-[800px]">
			I specialize in building web and mobile applications with Svelte and Flutter, alongside
			Tailwind CSS and Firebase to create dynamic and responsive applications.
		</div>
	</ShowElementTransition>

	{#if scrollY === 0 && canShowBounce && width > 640}
		<div
			transition:fade
			class="absolute inset-x-0 w-5 h-5 ml-auto mr-auto rounded-full bottom-5 bg-amber-100 animate-bounce"
		/>
	{/if}
</section>
