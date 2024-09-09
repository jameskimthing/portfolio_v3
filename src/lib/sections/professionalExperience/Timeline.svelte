<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import { observeElement } from '$lib/observer';
	import Experience from './Experience.svelte';
	import { experiences, firstYear, lastYear, months, untilCurrent, years } from './experiences';
	import { onMount } from 'svelte';

	// const durations = ['05/2016-09/2019', '04/2016-09/2020', '09/2016-09/2017', '01/2016-09/2016'];

	let timelineLength: number = 1200;
	let individualWidth: number;
	$: individualWidth = timelineLength / years.length;
	// const individualWidth = timelineLength / years.length;
	let height = 410;
	const textHeight = 35;

	function addTimeline(duration: string) {
		const [[startMonth, startYear], [endMonth, endYear]] = duration
			.split('-')
			.map((d) => d.split('/').map((d) => parseInt(d)));
		return [leftMove(startMonth, startYear), rightMove(endMonth, endYear)];
	}

	function leftMove(startMonth: number, startYear: number) {
		if (startYear < 2021) {
			startYear = 2021;
			startMonth = 7;
		}

		const leftYear: number = (startYear - firstYear) * individualWidth + individualWidth / 2;
		const left = leftYear + individualWidth * (startMonth / 11);
		return left;
	}

	function rightMove(endMonth: number, endYear: number) {
		const rightYear: number = (lastYear - endYear) * individualWidth + individualWidth / 2;
		const right = Math.max(-100, rightYear - individualWidth * (endMonth / 11));
		return right;
	}

	let timelineRect: DOMRect;
	let timelines: number[][] = [];
	let timeline: HTMLElement;
	let todayElement: HTMLElement;
	let mounted: boolean = false;
	onMount(() => {
		mounted = true;
		for (const experience of experiences) timelines.push(addTimeline(experience.duration));
		timelines = [...timelines];
		timelineRect = timeline.getBoundingClientRect();

		function prepareElementTransition() {
			todayElement.classList.add('opacity-0');
			todayElement.classList.add('-translate-x-1');
		}
		prepareElementTransition();

		observeElement({
			element: todayElement,
			delay: 1000,
			repeat: true,
			onIntersecting: async () => {
				todayElement.classList.remove('opacity-0');
				todayElement.classList.remove('-translate-x-1');
			},
			onNotIntersecting: prepareElementTransition
		});
	});

	let leftOfToday: number;
	function getLeftOfToday() {
		return leftMove(parseInt(untilCurrent.split('/')[0]), parseInt(untilCurrent.split('/')[1]));
	}
	$: if (mounted) (leftOfToday = getLeftOfToday()), timelineLength;
	$: if (mounted) adjustTimelineExperiences(), timelineLength;
	function adjustTimelineExperiences() {
		timelines = [];
		for (const experience of experiences) timelines.push(addTimeline(experience.duration));
		timelines = [...timelines];
		timelineRect = timeline.getBoundingClientRect();
	}

	let width: number = 0;
	$: if (mounted) timelineLength = getTimelineLength(width);
	function getTimelineLength(width: number): number {
		if (width >= 1536) return 1200;
		if (width >= 1024) return 900;
		if (width >= 800) return 740;
		if (width >= 640) return 600;
		if (width >= 500) return 450;
		return width - 80;
		// if (width >= 450) return 400;
		// if (width >= 400) return 350;
		// if (width >= 300) return 250;
		// return 250;
	}
</script>

<svelte:window bind:innerWidth={width} />

<section class="flex flex-row p-5 bg-black rounded-3xl bg-opacity-20">
	<div class="relative flex flex-row" style="width: {timelineLength}px;">
		{#each [...years] as year, i}
			<ShowElementTransition direction="up" speed="slow" delay={300 + 50 * i}>
				<div
					class="flex flex-col items-center h-96 bg-opacity-30"
					style="width: {individualWidth}px; height: {height}px"
				>
					<div class="text-sm sm:text-base" style="height: {textHeight}px">{year}</div>
					<div class="w-[1px] h-full bg-white bg-opacity-10" />
				</div>
			</ShowElementTransition>
		{/each}
		<div
			class="absolute inset-x-0 bottom-0 flex flex-col gap-5"
			style="top: {textHeight + 10}px"
			bind:this={timeline}
		>
			{#each timelines as [start, end], i}
				<Experience options={experiences[i]} {start} {end} {timelineRect} delay={1500 + 150 * i} />
			{/each}
		</div>

		<!-- <div
			class="absolute w-1 transition-all duration-1000 rounded bg-bright-yellow top-11"
			style="left: {leftOfToday}px; height: {height + 70}px"
			bind:this={todayElement}
		>
			<div
				class="absolute bottom-0 px-2 py-1 mb-4 -ml-2 scale-75 rotate-90 -translate-x-4 bg-black bg-opacity-50 rounded sm:translate-x-0 sm:scale-100"
			>
				{months[parseInt(untilCurrent.split('/')[0])]}
				{untilCurrent.split('/')[1]}
			</div>
		</div> -->
	</div>
</section>
