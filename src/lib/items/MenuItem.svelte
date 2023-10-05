<script lang="ts">
	import { onMount } from 'svelte';

	export let link: string;
	export let icon: string;

	let container: HTMLElement;
	onMount(async () => {
		const svgText: string = await (await fetch(icon)).text();
		const svg = new DOMParser().parseFromString(svgText, 'image/svg+xml').documentElement;
		svg.classList.add('hover:fill-yellow', 'hover:scale-110', 'transition-all', 'duration-0');
		container.appendChild(svg);
	});
</script>

<!-- svelte-ignore a11y-missing-content -->
<a bind:this={container} target="_blank" rel="noopener noreferrer" href={link} />
