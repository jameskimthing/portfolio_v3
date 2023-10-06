<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import SkillSection from '$lib/sections/SkillSection.svelte';
</script>

<!-- 
	        ^(50%)
	---------       --(expand)-> ----------
								|          |
								| content  |

-->

<section id="skills" class="bg-dark-blue w-full h-screen items-center flex flex-col justify-center">
	<div class="max-w-[1000px] flex flex-col">
		<ShowElementTransition direction="up" delay={300}>
			<div class="text-7xl text-bright-yellow font-bold whitespace-nowrap">My Skills</div>
		</ShowElementTransition>
		<ShowElementTransition direction="up" delay={450}>
			<div class="text-xl text-slate-200 mt-5 w-5/6">
				I specialize in building web and mobile applications with Svelte and Flutter, alongside
				Tailwind CSS and Firebase to create dynamic and responsive applications.
			</div>
		</ShowElementTransition>
		<div class="mt-5 flex flex-col gap-2 items-start w-full">
			<SkillSection confidence={25} label="web_development" />
			<SkillSection confidence={75} label="mobile_development" />
			<SkillSection confidence={50} label="backend_development" />
		</div>
	</div>
</section>
