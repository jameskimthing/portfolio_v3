<script lang="ts">
	import { onMount } from 'svelte';

	export let link: string;
	export let icon: string;

	let container: HTMLElement;
	onMount(async () => {
		const svgText: string = await (await fetch(icon)).text();
		const svg = new DOMParser().parseFromString(svgText, 'image/svg+xml').documentElement;
		svg.classList.add('hover:fill-bright-yellow', 'transition-all', 'duration-0');
		container.appendChild(svg);
	});
</script>

<!-- svelte-ignore a11y-missing-content -->
<a
	bind:this={container}
	on:pointerup={(e) => e.stopImmediatePropagation()}
	class="transition-transform duration-300 bg-black rounded hover:-translate-y-[1px]"
	target="_blank"
	rel="noopener noreferrer"
	href={link}
/>
