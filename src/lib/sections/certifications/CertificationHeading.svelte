<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import { slide } from 'svelte/transition';

	export let text: string;
	export let delay: number;

	let showTooltip: boolean = false;
	let hoverTimeout: number;
	function pointerEnter() {
		hoverTimeout = setTimeout(() => (showTooltip = true), 300);
	}

	function pointerLeave() {
		clearTimeout(hoverTimeout);
		showTooltip = false;
	}
</script>

<div
	class="relative cursor-pointer group"
	on:pointerenter={pointerEnter}
	on:pointerleave={pointerLeave}
>
	<ShowElementTransition direction="up" {delay}>
		<h1
			class="px-5 text-xl text-center transition-all sm:text-3xl md:text-4xl text-bright-yellow w-fit"
		>
			{text}
			<div
				class="w-full h-1 transition-transform duration-300 origin-left scale-0 bg-amber-100 group-hover:scale-100"
			/>
		</h1>
		{#if showTooltip}
			<div class="absolute z-50 p-4 -translate-x-1/2 translate-y-full -bottom-[3px] left-1/2">
				<div
					class="overflow-hidden rounded-lg shadow bg-blue shadow-black"
					transition:slide={{ axis: 'y' }}
				>
					<p
						class="p-5 sm:text-base text-sm md:text-xl amber-100 w-[250px] sm:w-[400px] md:w-[500px]"
					>
						<slot />
					</p>
				</div>
			</div>
		{/if}
	</ShowElementTransition>
</div>
