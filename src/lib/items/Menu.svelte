<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import { basePageLoadingTime, currentMenuSection, sections } from '$lib/menu';
	import MenuItem from './MenuItem.svelte';

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
		<div class="flex flex-col items-center gap-2 ml-5 text-bright-yellow">
			<MenuItem
				link="mailto:jameskimjaewon.abc@gmail.com?subject=Contact&body=Hello%20there!"
				icon="/icons/email.svg"
			/>
			<MenuItem link="https://github.com/jameskimthing" icon="/icons/github.svg" />
			<MenuItem
				link="https://www.linkedin.com/in/james-kim-282750252/"
				icon="/icons/linkedin.svg"
			/>
			<div class="w-0.5 h-80 mt-2 bg-amber-100" />
		</div>

		<div class="flex flex-col gap-2 mt-auto mb-5 ml-5">
			{#each sections as sec, i}
				<ShowElementTransition direction="up" delay={basePageLoadingTime + 1500 + 150 * i}>
					<!-- Use this over anchor tag, less hassle -->
					<div
						class="cursor-pointer text-lg hover:text-bright-yellow hover:text-xl whitespace-nowrap w-fit transition-all {$currentMenuSection ===
							sec && 'text-bright-yellow font-bold text-xl'}"
						on:pointerup={() =>
							document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
					>
						{i}. {capitalize(sec)}
					</div>
				</ShowElementTransition>
			{/each}
		</div>
	</ShowElementTransition>
</section>
