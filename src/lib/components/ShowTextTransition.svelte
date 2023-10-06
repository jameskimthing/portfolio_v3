<!-- <script lang="ts">
	import { observeObject } from '$lib/observer';
	import { generateRandomString } from '$lib/utility';
	import { onMount } from 'svelte';

	export let delay: number = 0;
	export let delayBetween: number = 100;

	let element: HTMLSpanElement;
	const transitionClass = generateRandomString(10);

	let newHTML = '';
	let loaded = false;
	onMount(() =>
		observeObject({
			element: element,
			delay: delay,
			callback: async () => {
				const prevHTML = element.innerHTML;

				let isInTag = false;
				for (let i = 0; i < prevHTML.length; i++) {
					if (prevHTML[i] === '<') {
						isInTag = true;
						newHTML += '<';
					} else if (prevHTML[i] === '>') {
						isInTag = false;
						newHTML += '>';
					} else {
						isInTag || prevHTML[i] === ' '
							? (newHTML += prevHTML[i])
							: (newHTML += `<span class="${transitionClass} duration-300 transition-all inline-block opacity-0 translate-y-full">${prevHTML[i]}</span>`);
					}
				}
				loaded = true;
				element.classList.remove('opacity-0');
				element.innerHTML = newHTML;

				const spans = element.querySelectorAll(`.${transitionClass}`);
				for (let i = 0; i < spans.length; i++) {
					spans[i].classList.remove('opacity-0');
					spans[i].classList.remove('translate-y-full');

					await new Promise((r) => setTimeout(r, delayBetween));
				}

				// for ()
				// console.log(element.querySelectorAll(`.${transitionClass}`));
			}
		})
	);
</script>

<span bind:this={element} class="opacity-0 transition-opacity">
	<slot />
</span> -->
