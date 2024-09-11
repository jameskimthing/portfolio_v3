<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import { basePageLoadingTime, currentMenuSection } from '$lib/menu';
	import MenuItem from './MenuItem.svelte';

	export let sections: string[];

	function capitalize(str: string) {
		const capFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
		let words: string[] = str.split('_');
		return words.length === 1 ? capFirst(str) : words.map((word) => capFirst(word)).join(' ');
	}

	// function moveTo(sec: string) {
	// 	document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	// 	moveToSection()
	// 	// currentMenuSection.set(sec);
	// }
</script>

<section id="menu" class="fixed bottom-0 left-0 z-40 text-amber-100">
	<ShowElementTransition
		direction="right"
		delay={basePageLoadingTime + 900}
		extraClasses="flex flex-row"
	>
		<div class="flex flex-col items-center gap-2 ml-2 sm:ml-5 text-bright-yellow">
			<MenuItem
				link="mailto:jameskimjaewon.abc@gmail.com?subject=Contact&body=Hello%20there!"
				icon="/icons/email.svg"
			/>
			<MenuItem link="https://github.com/jameskimthing" icon="/icons/github.svg" />
			<MenuItem link="https://www.linkedin.com/in/jameskimthing/" icon="/icons/linkedin.svg" />
			<MenuItem
				link="https://drive.google.com/file/d/1LABCF5OwbZ4QhoK2-7t_5ikFO6EwXpFG/view?usp=sharing"
				icon="/icons/resume.svg"
			/>
			<div class="w-0.5 h-80 mt-2 bg-amber-100" />
		</div>
	</ShowElementTransition>
</section>

<section class="fixed z-40 flex flex-col bottom-2 left-12 sm:left-14 text-amber-100">
	<ShowElementTransition direction="right" delay={0} extraClasses="flex flex-col">
		{#each sections as sec, i}
			<ShowElementTransition direction="up" delay={basePageLoadingTime + 1500 + 150 * i}>
				<div
					class="cursor-pointer text-sm sm:text-lg hover:text-bright-yellow sm:hover:text-xl whitespace-nowrap w-fit transition-all {$currentMenuSection ===
						sec && 'text-bright-yellow font-bold sm:text-xl'}"
					on:pointerup={() =>
						document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
				>
					{i}. {capitalize(sec)}
				</div>
			</ShowElementTransition>
		{/each}
	</ShowElementTransition>
</section>
