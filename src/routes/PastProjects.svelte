<script lang="ts">
	import PastProject from '$lib/sections/pastProjects/PastProject.svelte';
	import ProjectPopup from '$lib/sections/pastProjects/ProjectPopup.svelte';
	import { projectPopupIndex } from '$lib/sections/pastProjects/projectPopup';
	import { projects } from '$lib/sections/pastProjects/projects';

	const initialCommits = projects.map((p) => new Date(p.initialCommit));

	// Step 2: Find earliest and latest commit dates
	let firstDate: Date = initialCommits[0];
	let lastDate: Date = initialCommits[0];
	for (const date of initialCommits) {
		if (date < firstDate) firstDate = date;
		else if (date > lastDate) lastDate = date;
	}

	const duration = (lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24);
	function getRatio(initialCommit: string) {
		const elapsedDuration =
			(new Date(initialCommit).getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24);
		const ratio = (elapsedDuration / duration) * 100 + 1;
		return ratio;
	}
</script>

<section id="past_projects" class="w-full min-h-screen py-5" style="background-color: #203a5a;">
	<div class="flex flex-col items-center justify-center w-full min-h-screen gap-5 px-5 py-5">
		<div class="flex flex-col gap-2 text-center">
			<h2 class="text-xl md:text-4xl text-amber-100">Most of what I Developed Until Now</h2>
			<div class="md:text-xl text-grau-500">Click item to for more information</div>
		</div>
		<div class="p-10 bg-black rounded-3xl bg-opacity-20">
			<div
				class="w-[200px] h-[200px] xs:w-[300px] xs:h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] relative"
			>
				<div class="text-white text-opacity-80">
					<div class="absolute bg-white left-0 top-0 bottom-0 w-[2px] bg-opacity-50" />
					<div class="absolute h-[2px] bg-white bottom-0 left-0 right-0 bg-opacity-50" />
					<div class="absolute right-0 -bottom-7">Time Since 2022</div>
					<div class="absolute -rotate-90 top-10 -left-16">Complexity</div>
				</div>

				{#each projects as project, i}
					<div on:pointerup={() => ($projectPopupIndex = i)}>
						<PastProject
							delay={600 + i * 150}
							{project}
							ratioToNow={getRatio(project.initialCommit)}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<ProjectPopup />
