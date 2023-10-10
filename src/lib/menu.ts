import { writable, type Writable } from 'svelte/store';
import { observeElement } from './observer';

const basePageLoadingTime: number = 1000;
const currentMenuSection: Writable<string> = writable('introduction');

function initializeMenu(sections: string[]) {
	let sectionMenus: string[] = [];
	const setMenu = () => currentMenuSection.set(sectionMenus[0]);

	function add(section: string) {
		sectionMenus.unshift(section);
		setMenu();
	}

	function remove(section: string) {
		sectionMenus = sectionMenus.filter((item) => item !== section);
		setMenu();
	}

	for (const section of sections) {
		const parent = document.getElementById(section);
		const element = document.createElement('div');
		parent?.classList.add('relative');
		element.classList.add(
			'absolute',
			'top-1/2',
			'left-1/2',
			'transform',
			'-translate-y-1/2',
			'w-[1px]',
			'pointer-events-none'
		);
		element.style.height = '50vh';
		parent?.appendChild(element);

		if (element) {
			observeElement({
				element: element,
				onIntersecting: () => add(section),
				onNotIntersecting: () => remove(section),
				delay: 0,
				repeat: true
			});
		}
	}
}

export { basePageLoadingTime, initializeMenu, currentMenuSection };
