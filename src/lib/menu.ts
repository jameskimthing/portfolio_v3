import { writable, type Writable } from 'svelte/store';
import { observeMenuObject } from './observer';

const basePageLoadingTime: number = 1000;

const currentMenuSection: Writable<string> = writable('introduction');
function initializeMenu(sections: string[]) {
	for (const section of sections) {
		const element = document.getElementById(section);
		if (element) observeMenuObject(element, (id: string) => currentMenuSection.set(id));
	}
}

export { basePageLoadingTime, initializeMenu, currentMenuSection };
