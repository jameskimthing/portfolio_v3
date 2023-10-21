<script lang="ts">
	import { fade } from 'svelte/transition';
	import PopupLinkItem from './PopupLinkItem.svelte';
	import { projectPopupIndex } from './projectPopup';
	import { projects, type Project } from './projects';

	let project: Project;
	$: project = projects[$projectPopupIndex];
</script>

{#if $projectPopupIndex >= 0}
	<section
		class="fixed inset-0 z-40 flex flex-col items-center justify-center p-5 backdrop-blur"
		on:pointerup={() => ($projectPopupIndex = -1)}
		transition:fade={{ duration: 250 }}
	>
		<h3 class="text-base font-bold text-center xs:text-2xl text-amber-100">{project.title}</h3>
		<p class="text-center">{project.description}</p>
		<div class="relative">
			<img
				alt={project.title}
				class="rounded-xl w-[800px] lg:w-[800px]"
				src="pastProjects/{project.image}"
			/>
			<div class="absolute flex flex-row gap-2 bottom-2 w-min h-min right-2">
				{#if project['code']}<PopupLinkItem link={project['code']} icon="/icons/github.svg" />{/if}
				<PopupLinkItem link={project['demo']} icon="/icons/link.svg" />
			</div>
		</div>
		<!-- <div>HELLO</div> -->
	</section>
{/if}
