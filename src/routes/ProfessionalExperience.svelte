<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import Timeline from '$lib/sections/professionalExperience/Timeline.svelte';
</script>

<section id="professional_experience" style="background-color: #102a4a;">
	<div class="flex flex-col items-center justify-center w-full min-h-screen">
		<ShowElementTransition direction="up" delay={300}>
			<div class="flex flex-col gap-2 text-center">
				<div class="text-4xl text-amber-100">Professional Experience</div>
				<div class="text-xl text-grau-500">Hover over bar to for more information</div>
			</div>
		</ShowElementTransition>
		<div class="py-5">
			<Timeline />
		</div>
		<div />
		<!-- <div class="grid grid-cols-4 gap-4 pt-5">

		</div> -->
	</div>
</section>
