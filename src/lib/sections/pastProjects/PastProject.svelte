<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { Project } from './projects';
	import { onMount } from 'svelte';
	import { observeElement } from '$lib/observer';

	export let project: Project;
	export let ratioToNow: number;
	export let delay: number;

	let tooltipStyles: string = '';
	let projectElement: HTMLDivElement;
	onMount(() => {
		const boundingRect = projectElement.getBoundingClientRect();
		const parentRect = projectElement.parentElement?.getBoundingClientRect()!;
		tooltipStyles += `top: ${boundingRect.bottom - parentRect.top}px;`;
		tooltipStyles += `left: ${boundingRect.left - parentRect.left}px;`;

		async function prepareElementTransition() {
			projectElement.classList.add('translate-y-full');
			projectElement.classList.add('opacity-0');
		}
		prepareElementTransition();
		observeElement({
			element: projectElement,
			delay: delay,
			repeat: true,
			onIntersecting: async () => {
				projectElement.classList.remove('translate-y-full');
				projectElement.classList.remove('opacity-0');
			},
			onNotIntersecting: prepareElementTransition
		});
	});

	let hoverTimeout: number;
</script>

<div
	class="absolute transition-all duration-500 cursor-pointer w-fit group hover:-translate-y-1"
	style="bottom: {project.complexity}%; left: {ratioToNow}%;"
	bind:this={projectElement}
>
	<div class="w-4 h-4 transition-colors duration-300 rounded-full bg-amber-100" />
	<div
		class="absolute text-xs text-center -translate-x-1 -translate-y-1/2 lg:translate-x-1 top-1/2 right-full lg:left-full lg:w-fit w-min lg:whitespace-nowrap lg:text-sm group-hover:text-amber-100"
	>
		{project.title}
	</div>
</div>

<!-- {#if showTooltip}
	<img
		class="absolute z-10 object-cover h-32 rounded shadow shadow-black top-full w-44"
		style={tooltipStyles}
		transition:slide
		src="pastProjects/{project.image}"
		alt={project.title}
	/>
{/if} -->
