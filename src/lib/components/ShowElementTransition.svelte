<script lang="ts">
	import { observeElement } from '$lib/observer';
	import { onMount } from 'svelte';

	export let speed: 'slow' | 'medium' = 'medium';
	export let direction: 'left' | 'right' | 'up' | 'down' | 'fade' = 'right';
	export let delay: number = 0;
	export let repeat: boolean = true;
	export let callback: Function = () => {};
	export let extraClasses: string = '';

	let element: HTMLDivElement;

	onMount(() => {
		if (speed === 'medium') element.classList.add('duration-500');
		if (speed === 'slow') element.classList.add('duration-1000');

		let classAdded: string = '';
		const dirTo = (str: string) => str === direction;
		function add(str: string) {
			element.classList.add(str);
			classAdded = str;
		}

		function prepareElementTransition() {
			if (dirTo('left')) add('translate-x-1/2');
			else if (dirTo('right')) add('-translate-x-1/2');
			else if (dirTo('up')) add('translate-y-1/2');
			else if (dirTo('down')) add('-translate-y-1/2');

			element.classList.add('opacity-0');
		}
		prepareElementTransition();

		observeElement({
			element: element,
			delay: delay,
			onIntersecting: () => {
				callback();
				if (element) {
					element.classList.remove('opacity-0');
					element.classList.remove(classAdded);
				}
			},
			onNotIntersecting: prepareElementTransition,
			repeat: repeat
		});
	});
</script>

<div bind:this={element} class="transition-all {extraClasses}">
	<slot />
</div>
