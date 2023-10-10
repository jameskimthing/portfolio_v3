<script lang="ts">
	import { observeElement } from '$lib/observer';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	export let score: number;
	export let maxScore: number;
	export let delay: number = 0;
	export let label: string = '';
	export let extraLabel: string = '';
	export let scoreNextLine: boolean = true;
	export let smallerLabel: boolean = false;
	export let largerScore: boolean = false;

	export let radius: number = 80;
	export let strokeWidth: number = 5;

	let labelElement: HTMLElement;
	let scoreElement: HTMLElement;
	let scoreBackgroundElement: HTMLElement;
	let showCircleElement: boolean = false;
	onMount(() => {
		function prepareElementTransition() {
			labelElement.classList.add('opacity-0');
			labelElement.classList.add('translate-y-full');
			scoreElement.classList.add('opacity-0');
			scoreElement.classList.add('translate-y-full');
			scoreBackgroundElement.classList.add('opacity-0');
			scoreBackgroundElement.classList.remove('opacity-10');
			showCircleElement = false;
		}
		prepareElementTransition();

		observeElement({
			element: scoreElement,
			delay: delay,
			repeat: true,
			onIntersecting: async () => {
				labelElement.classList.remove('opacity-0');
				labelElement.classList.remove('translate-y-full');
				scoreElement.classList.remove('opacity-0');
				scoreElement.classList.remove('translate-y-full');
				scoreBackgroundElement.classList.remove('opacity-0');
				scoreBackgroundElement.classList.add('opacity-10');
				showCircleElement = true;
			},
			onNotIntersecting: prepareElementTransition
		});
	});

	let showTooltip: boolean = false;
	let hoverTimeout: number;
	function pointerEnter() {
		hoverTimeout = setTimeout(() => (showTooltip = true), 500);
	}

	function pointerLeave() {
		clearTimeout(hoverTimeout);
		showTooltip = false;
	}
</script>

<!-- <div class="w-40 h-40 bg-white"> -->
<div class="relative flex flex-row">
	{#if showTooltip}
		<div class="absolute left-0 z-50 p-4 -translate-x-full -translate-y-1/2 top-1/2">
			<div
				class="overflow-hidden rounded-lg shadow bg-blue shadow-black"
				transition:slide={{ axis: 'x' }}
			>
				<slot />
			</div>
		</div>
	{/if}
	<div class="flex flex-col items-center gap-2">
		{#if label}
			<div
				bind:this={labelElement}
				class="{smallerLabel ? 'text' : 'text-4xl text-amber-200'} transition-all duration-300"
			>
				{label}
			</div>
		{/if}
		<div
			class="relative transition-transform duration-300 cursor-pointer group hover:-translate-y-2"
			style="height: {radius * 2 + strokeWidth}px; width: {radius * 2 + strokeWidth}px"
			on:pointerenter={pointerEnter}
			on:pointerleave={pointerLeave}
		>
			<!-- on:pointerenter={() => (hovering = true)}
		on:pointerover={() => (hovering = true)}
		on:pointerleave={() => (hovering = false)} -->
			{#if showCircleElement}
				<svg class="w-full h-full">
					<circle
						class="transition-transform duration-300 origin-center -rotate-90 circle stroke-amber-100 group-hover:-rotate-[95deg]"
						cx={radius + strokeWidth / 2}
						cy={radius + strokeWidth / 2}
						r={radius}
						stroke-width={strokeWidth}
						fill-opacity="0"
						stroke-linecap="round"
						stroke-dasharray={radius * Math.PI * 2 * (score / maxScore)}
						stroke-dashoffset={radius * Math.PI * 2}
					/>
				</svg>
			{/if}

			<div
				class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full rounded-full"
			>
				<div
					bind:this={scoreBackgroundElement}
					class="absolute top-0 left-0 w-full h-full transition-opacity duration-500 rounded-full bg-amber-50"
				/>
				<div
					bind:this={scoreElement}
					class="flex flex-col items-center transition-all duration-1000"
					style="max-width: {(radius * 2 + strokeWidth) * 0.9}px;"
				>
					{#if extraLabel}
						<div class="mr-auto text-sm">{extraLabel}</div>
					{/if}
					<div class="flex {scoreNextLine ? 'flex-col' : 'flex-row items-end'}">
						<div class="{largerScore ? 'text-6xl' : 'text-5xl'} text-bright-yellow">{score}</div>
						<div class="ml-auto {scoreNextLine ? '-mt-2' : 'mb-2'} text-sm">{'/' + maxScore}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes stroke {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	.circle {
		animation: stroke 3s ease-out forwards;
	}
</style>
