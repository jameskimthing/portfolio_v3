<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import { fade } from 'svelte/transition';

	export let src: string;
	export let label: string;
	export let delay: number = 0;

	const things = src.split('/');
	const alt = things[things.length - 1];

	let showClosup: boolean = false;
</script>

<ShowElementTransition direction="up" speed="slow" {delay}>
	<div class="origin-top-left scale-50 md:scale-75 xl:scale-100">
		<div
			class="relative w-40 overflow-hidden transition-transform duration-300 rounded shadow-md cursor-pointer group shadow-black hover:-translate-y-2"
		>
			<!-- <div
			class="w-40 truncate transition-transform duration-300 text-amber-100 whitespace-nowrap group-hover:-translate-y-2"
			>
			{label}
		</div> -->
			<img on:pointerup={() => (showClosup = true)} {src} {alt} />
			<div class="absolute bottom-0 bg-black rounded-b-none -left-1 w-44 bg-opacity-80">
				<div class="px-3 ml-auto py-[1px] text-sm text-white truncate whitespace-nowrap">
					{label}
				</div>
			</div>
		</div>
	</div>
</ShowElementTransition>

{#if showClosup}
	<div
		class="fixed inset-x-0 inset-y-0 z-10 flex flex-col items-center justify-center p-5 sm:p-20 backdrop-blur"
		on:pointerup={() => (showClosup = false)}
		transition:fade={{ duration: 250 }}
	>
		<div class="flex flex-col items-center justify-center w-fit">
			<div class="p-1 px-2 text-sm bg-black rounded-t sm:text-xl text-amber-100 bg-opacity-80">
				{label}
			</div>
			<img class="w-[800px] shadow-black shadow" {src} {alt} />
			<div
				class="p-1 px-2 ml-auto text-sm bg-black rounded-b sm:text-base text-amber-100 bg-opacity-80"
			>
				click anywhere to close
			</div>
		</div>
	</div>
{/if}
