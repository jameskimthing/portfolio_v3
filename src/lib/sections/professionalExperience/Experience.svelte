<script lang="ts">
	import { onMount } from 'svelte';
	import { months, type Experience, untilCurrent } from './experiences';
	import { slide } from 'svelte/transition';
	import { observeElement } from '$lib/observer';
	import { clickOutside } from '$lib/utility';

	export let start: number;
	export let end: number;
	export let options: Experience;
	export let timelineRect: DOMRect | null = null;
	export let delay: number;

	const { title, description, duration } = options;
	const [[startMonth, startYear], [endMonth, endYear]] = duration
		.split('-')
		.map((d) => d.split('/').map((d) => parseInt(d)));

	let dateTo: string = '';
	let experienceElement: HTMLElement;
	let titleElement: HTMLElement;

	onMount(() => {
		if (`${endMonth}/${endYear}` === untilCurrent) dateTo = 'to today (ongoing)';
		else dateTo = `to ${months[endMonth]} ${endYear}`;

		async function prepareElementTransition() {
			experienceElement.classList.add('scale-x-0');
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
				titleElement.classList.remove('opacity-0');
				titleElement.classList.remove('-translate-y-1/2');
			},
			onNotIntersecting: prepareElementTransition
		});
	});

	let showTooltip: boolean = false;
	let hoverTimeout: number;
	function pointerEnter() {
		hoverTimeout = setTimeout(() => (showTooltip = true), 300);
	}

	function pointerLeave() {
		clearTimeout(hoverTimeout);
		showTooltip = false;
	}

	function getTooltipStyles(): string {
		console.log('GEt the tooltip!');
		const experienceRect = experienceElement.getBoundingClientRect();
		let tooltipStyles: string = '';
		if (timelineRect) {
			console.log(`${experienceRect.bottom}, ${timelineRect.top}`);
			tooltipStyles += `top: ${experienceRect.bottom}px;`;
			tooltipStyles += `right: ${end}px;`;
		}
		console.log(tooltipStyles);
		return tooltipStyles;
	}

	let clickedItem: boolean = false;
</script>

<div class="relative w-full h-7">
	<div class="absolute h-7" style="left: {start}px; right: {end}px">
		<section
			class="w-full h-full transition-all duration-500 origin-right rounded shadow cursor-pointer shadow-black bg-amber-100 group hover:bg-amber-200 hover:-translate-y-1"
			bind:this={experienceElement}
			on:pointerenter={pointerEnter}
			on:pointerleave={pointerLeave}
			on:pointerup={() => (clickedItem = !clickedItem)}
			use:clickOutside={() => (clickedItem = false)}
		>
			<div
				class="absolute inset-y-0 px-2 text-white w-min lg:w-[140px] text-end text-xs md:text-sm flex flex-col justify-center items-end right-full group-hover:text-amber-200 transition-all duration-300"
				bind:this={titleElement}
			>
				{title}
			</div>
		</section>
		{#if showTooltip || clickedItem}
			<div
				transition:slide
				class="absolute right-0 z-50 translate-y-1 rounded shadow shadow-black top-full"
				style="background-color: #203a5a;"
			>
				<div class="flex flex-col items-end w-[200px] text-xs sm:text-base sm:w-[500px] p-5 pb-3">
					<div class="">{description}</div>
					<div class="text-gray-400">{months[startMonth]} {startYear} {dateTo}</div>
				</div>
			</div>
		{/if}
	</div>
</div>
