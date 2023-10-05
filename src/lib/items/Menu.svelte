<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import { basePageLoadingTime } from '$lib/menu';
	import MenuItem from './MenuItem.svelte';

	const sections: string[] = ['introduction', 'skills', 'certificates', 'courses'];
</script>

<section id="menu" class="fixed bottom-0 left-0 z-40">
	<ShowElementTransition
		direction="right"
		delay={basePageLoadingTime + 900}
		extraClasses="flex flex-row"
	>
		<div class="flex flex-col text-bright-yellow items-center gap-2 ml-5">
			<MenuItem
				link="mailto:jameskimjaewon.abc@gmail.com?subject=Contact&body=Hello%20there!"
				icon="/icons/email.svg"
			/>
			<MenuItem link="https://github.com/jameskimthing" icon="/icons/github.svg" />
			<MenuItem
				link="https://www.linkedin.com/in/james-kim-282750252/"
				icon="/icons/linkedin.svg"
			/>
			<div class="w-0.5 h-80 mt-4 bg-amber-100" />
		</div>

		<div class="flex flex-col gap-2 mb-5 ml-5 mt-auto">
			{#each sections as sec, i}
				<ShowElementTransition direction="up" delay={basePageLoadingTime + 1500 + 150 * i}>
					<div
						class="cursor-pointer text-lg hover:text-bright-yellow hover:text-xl whitespace-nowrap w-fit transition-all"
						on:pointerup={() =>
							document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
					>
						{i}. {sec.charAt(0).toUpperCase() + sec.slice(1)}
					</div>
				</ShowElementTransition>
			{/each}
		</div>
	</ShowElementTransition>
</section>
