<script lang="ts">
	import { onMount } from 'svelte';
	import { months, type Experience, untilCurrent } from './experiences';
	import { slide } from 'svelte/transition';
	import { observeElement } from '$lib/observer';

	export let start: number;
	export let end: number;
	export let options: Experience;
	export let timelineRect: DOMRect | null = null;
	export let delay: number;

	const { title, description, duration } = options;
	const [[startMonth, startYear], [endMonth, endYear]] = duration
		.split('-')
		.map((d) => d.split('/').map((d) => parseInt(d)));

	let tooltip: string;
	let dateTo: string = '';
	let experienceElement: HTMLElement;
	let titleElement: HTMLElement;
	onMount(() => {
		if (experienceElement.offsetWidth < 2) {
			experienceElement.classList.add(
				'absolute',
				'inset-y-0',
				'right-0',
				'w-2',
				'-translate-x-full'
			);
		}
		const experienceRect = experienceElement.getBoundingClientRect();
		let tooltipStyles: string = '';
		if (timelineRect) {
			tooltipStyles += `top: ${-(timelineRect.top - experienceRect.bottom)}px;`;
			tooltipStyles += `right: ${timelineRect.right - experienceRect.right}px;`;
		}
		tooltip = tooltipStyles;

		if (`${endMonth}/${endYear}` === untilCurrent) dateTo = 'to today (ongoing)';
		else dateTo = `to ${months[endMonth]} ${endYear}`;

		async function prepareElementTransition() {
			experienceElement.classList.add('scale-x-0');

			// titleElement.classList.remove('duration-300');
			// await new Promise((r) => setTimeout(r, 0));
			titleElement.classList.add('opacity-0');
			titleElement.classList.add('-translate-y-1/2');
		}
		prepareElementTransition();
		observeElement({
			element: experienceElement,
			delay: delay,
			repeat: true,
			onIntersecting: async () => {
				experienceElement.classList.remove('scale-x-0');
				// await new Promise((r) => setTimeout(r, 0));
				// titleElement.classList.add('duration-300');
				titleElement.classList.remove('opacity-0');
				titleElement.classList.remove('-translate-y-1/2');
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

<div class="relative w-full h-7">
	<div class="absolute h-7" style="left: {start}px; right: {end}px">
		<section
			class="relative w-full h-full transition-all duration-500 origin-right rounded shadow cursor-pointer shadow-black bg-amber-100 group hover:bg-amber-200 hover:-translate-y-1"
			bind:this={experienceElement}
			on:pointerenter={pointerEnter}
			on:pointerleave={pointerLeave}
		>
			<div
				class="absolute inset-y-0 px-2 text-white w-[140px] text-end text-sm flex flex-col justify-center items-end right-full group-hover:text-amber-200 transition-all duration-300"
				bind:this={titleElement}
			>
				{title}
			</div>
		</section>
	</div>
</div>
{#if showTooltip}
	<div
		transition:slide
		class="absolute z-40 rounded shadow shadow-black"
		style="{tooltip} background-color: #203a5a;"
	>
		<div class="flex flex-col items-end max-w-[500px] p-5 pb-3">
			<div class="">{description}</div>
			<div class="">{months[startMonth]} {startYear} {dateTo}</div>
		</div>
	</div>
	<!-- <div class="absolute top-0 right-0 z-10 bg-black w-96 h-96" /> -->
{/if}
