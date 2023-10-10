<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import { fade } from 'svelte/transition';

	export let src: string;
	export let delay: number = 0;

	const things = src.split('/');
	const alt = things[things.length - 1];

	let showClosup: boolean = false;
</script>

<ShowElementTransition direction="up" speed="slow" {delay}>
	<img
		class="w-40 transition-transform duration-300 rounded shadow-md cursor-pointer shadow-black hover:-translate-y-2 hover:scale-105"
		on:pointerup={() => (showClosup = true)}
		{src}
		{alt}
	/>
</ShowElementTransition>

{#if showClosup}
	<div
		class="fixed inset-x-0 inset-y-0 z-10 flex flex-col items-center p-20 backdrop-blur"
		on:pointerup={() => (showClosup = false)}
		transition:fade={{ duration: 250 }}
	>
		<div class="flex flex-col items-center w-fit">
			<div class="text-xl text-amber-100">{alt}</div>
			<img class="max-w-[800px] shadow-black shadow" {src} {alt} />
			<div class="p-1 px-2 ml-auto bg-black rounded-b text-amber-100 bg-opacity-80">
				click anywhere to close
			</div>
		</div>
	</div>
{/if}
