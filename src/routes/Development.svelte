<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import SkillSection from '$lib/sections/development/SkillSection.svelte';

	interface Skill {
		label: string;
		confidence: number;
	}

	const developmentSkills: Skill[] = [
		{ label: 'websites', confidence: 80 },
		{ label: 'mobile', confidence: 70 },
		{ label: 'backend', confidence: 70 },
		{ label: 'machine_learning', confidence: 50 },
		{ label: 'games', confidence: 40 }
	];
</script>

<!-- 
	        ^(50%)
	---------       --(expand)-> ----------
								|          |
								| content  |

-->
<section
	id="programming"
	class="flex flex-col items-center justify-center w-full min-h-screen py-5 bg-blue"
>
	<div class="max-w-[1000px] flex flex-col gap-2">
		<ShowElementTransition direction="up" delay={300}>
			<div class="font-bold text-7xl text-bright-yellow whitespace-nowrap">Programming</div>
		</ShowElementTransition>
		<ShowElementTransition direction="up" delay={450}>
			<div class="text-xl text-slate-200">
				The following are my skills in development , each rated according to my confidence level,
				where "100%" shows I am fully capable in the field, and I can develop / understand topics
				withing capably.
			</div>
		</ShowElementTransition>
		<div class="flex flex-col items-start w-full gap-2 mt-5">
			{#each developmentSkills as { confidence, label }, i}
				<SkillSection {confidence} {label} delay={600 + i * 150} />
			{/each}
		</div>
	</div>
</section>
