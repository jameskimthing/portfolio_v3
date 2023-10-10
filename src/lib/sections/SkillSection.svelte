<script lang="ts">
	import { observeElement } from '$lib/observer';
	import { onMount } from 'svelte';

	export let confidence: number; // from 1 to 100
	export let label: string;
	export let delay: number = 0;

	let outerElement: HTMLElement;
	let innerElement: HTMLElement;
	let textElement: HTMLElement;
	onMount(() => {
		function prepareElementTransition() {
			outerElement.classList.add('scale-x-0');
			innerElement.classList.add('scale-x-0');
			innerElement.classList.add('opacity-0');
			textElement.classList.add('opacity-0');
			textElement.classList.add('translate-y-full');
		}
		prepareElementTransition();

		observeElement({
			element: outerElement,
			delay: delay,
			repeat: true,
			onIntersecting: async () => {
				outerElement.classList.remove('scale-x-0');
				await new Promise((r) => setTimeout(r, 250));
				innerElement.classList.remove('scale-x-0');
				innerElement.classList.remove('opacity-0');
				await new Promise((r) => setTimeout(r, 250));
				textElement.classList.remove('opacity-0');
				textElement.classList.remove('translate-y-full');
			},
			onNotIntersecting: prepareElementTransition
		});
	});
</script>

<div
	bind:this={outerElement}
	class="w-full transition-transform duration-500 origin-left rounded bg-blue"
>
	<div
		class="w-10 text-lg rounded bg-amber-100 pl-3 py-0.5 text-dark-blue font-sans whitespace-nowrap transition-transform duration-500 origin-left"
		bind:this={innerElement}
		style="width: {confidence}%;"
	>
		<div class="transition-all duration-500" bind:this={textElement}>
			{label
				.split('_')
				.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
				.join(' ')}
		</div>
	</div>
</div>
