import { writable, type Writable } from 'svelte/store';
import { observeElement } from './observer';

const basePageLoadingTime: number = 1000;

const currentMenuSection: Writable<string> = writable('introduction');
function initializeMenu(sections: string[]) {
	for (const section of sections) {
		const element = document.getElementById(section);
		if (element) {
			observeElement({
				element: element,
				onIntersecting: () => currentMenuSection.set(element.id),
				onNotIntersecting: () => {},
				delay: 0,
				repeat: true
			});
		}
	}
}

export { basePageLoadingTime, initializeMenu, currentMenuSection };
