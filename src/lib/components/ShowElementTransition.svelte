<script lang="ts">
	import { observeObject } from '$lib/observer';
	import { onMount } from 'svelte';

	export let speed: 'slow' | 'medium' | 'fast' = 'medium';
	export let direction: 'left' | 'right' | 'up' | 'down' | 'fade' = 'right';
	export let delay: number = 0;
	export let callback: Function | undefined = undefined;

	let element: HTMLDivElement;
	onMount(() =>
		observeObject({
			element: element,
			delay: delay,
			direction: direction,
			speed: speed,
			callback: callback
		})
	);
	// onMount(() => observeObject(element, direction, speed, delay));
</script>

<div bind:this={element} class="opacity-0 transition-all">
	<slot />
</div>
