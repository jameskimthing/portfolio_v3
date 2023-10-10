<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import SkillSection from '$lib/sections/SkillSection.svelte';
	import { academicSkills, developmentSkills } from '$lib/sections/skills';
</script>

<!-- 
	        ^(50%)
	---------       --(expand)-> ----------
								|          |
								| content  |

-->

<section id="skills" class="flex flex-col items-center justify-center w-full h-screen bg-dark-blue">
	<div class="max-w-[1000px] flex flex-col">
		<ShowElementTransition direction="up" delay={300}>
			<div class="font-bold text-7xl text-bright-yellow whitespace-nowrap">My Skills</div>
		</ShowElementTransition>
		<ShowElementTransition direction="up" delay={450}>
			<div class="mt-5 text-xl text-slate-200">
				The following are my skills in development and academic fields, each rated according to my
				confidence level, where "100%" shows I am fully capable in the field, and I can develop /
				understand topics withing capably.
			</div>
		</ShowElementTransition>
		<div class="flex flex-row gap-5 pt-5">
			<div class="flex flex-col items-start w-full gap-2 mt-5">
				<ShowElementTransition direction="up" delay={600}>
					<div class="text-3xl font-bold text-amber-200">Development</div>
				</ShowElementTransition>
				{#each developmentSkills as { confidence, label }, i}
					<SkillSection {confidence} {label} delay={600 + i * 150} />
				{/each}
			</div>
			<div class="flex flex-col items-start w-full gap-2 mt-5">
				<ShowElementTransition direction="up" delay={600}>
					<div class="text-3xl font-bold text-amber-200">Academic</div>
				</ShowElementTransition>
				{#each academicSkills as { confidence, label }, i}
					<SkillSection {confidence} {label} delay={600 + i * 150} />
				{/each}
			</div>
		</div>
	</div>
</section>
