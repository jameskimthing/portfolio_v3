import { writable, type Writable } from 'svelte/store';
import { observeElement } from './observer';

const basePageLoadingTime: number = 1000;
const currentMenuSection: Writable<string> = writable('introduction');

function initializeMenu(sections: string[]) {
	for (const section of sections) {
		const parent = document.getElementById(section);
		const element = document.createElement('div');
		parent?.classList.add('relative');
		element.classList.add(
			'absolute',
			'top-1/2',
			'left-1/2',
			'transform',
			'-translate-x-1/2',
			'-translate-y-1/2',
			'w-[1px]',
			'h-[1px]',
			'pointer-events-none'
			// 'hidden',
		);
		parent?.appendChild(element);

		if (element) {
			observeElement({
				element: element,
				onIntersecting: () => currentMenuSection.set(section),
				onNotIntersecting: () => {},
				delay: 0,
				repeat: true
			});
		}
	}
}

export { basePageLoadingTime, initializeMenu, currentMenuSection };
