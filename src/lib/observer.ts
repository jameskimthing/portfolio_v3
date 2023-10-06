// const elements: {
// 	[id: string]: {
// 		delay: number;
// 		translate: string;
// 		repeat: boolean;
// 		// element: HTMLElement;
// 		callback?: Function;
// 	};
// } = {};

// let observer: IntersectionObserver;
// let idGenerator: number = 0;

// /**
//  * Add an HTMLElement to observe
//  * ONLY use this function alongside the "onMount()" function in svelte, to be run on the browser
//  * @example onMount(() => observeObject(element, "left", "fast", 500))
//  * @param callback if there is a callback, wait for delay, then call function. Other parameters are ignored
//  */
// function observeObject(options: {
// 	element: HTMLElement;
// 	delay?: number;
// 	direction?: 'left' | 'right' | 'up' | 'down' | 'fade';
// 	speed?: 'slow' | 'medium' | 'fast';
// 	repeat: boolean;
// 	callback?: Function;
// }) {
// 	// The intersection observer is initialized here, to ensure
// 	// it is initialized within the browser and not the server.
// 	// This is becasue the "observeObject" function requires an
// 	// "element", which can only be accesed after the "onMount()" function
// 	if (!observer) observer = makeIntersectionObserver();

// 	let { element, direction, speed, delay, callback, repeat } = options;
// 	if (!delay) delay = 0;

// 	idGenerator++;
// 	element.id = `${idGenerator}`;

// 	if (callback) {
// 		elements[idGenerator] = {
// 			translate: '',
// 			delay: delay,
// 			callback: callback,
// 			repeat: repeat
// 		};
// 		observer.observe(element);
// 		return;
// 	}

// 	let translate: string = '';
// 	switch (direction) {
// 		case 'left':
// 			translate = 'translate-x-full';
// 			break;
// 		case 'right':
// 			translate = '-translate-x-full';
// 			break;
// 		case 'up':
// 			translate = 'translate-y-full';
// 			break;
// 		case 'down':
// 			translate = '-translate-y-full';
// 			break;
// 	}

// 	switch (speed) {
// 		case 'slow':
// 			element.classList.add('duration-1000');
// 			break;
// 		case 'medium':
// 			element.classList.add('duration-500');
// 			break;
// 		case 'fast':
// 			element.classList.add('duration-200');
// 			break;
// 	}

// 	elements[idGenerator] = {
// 		delay: delay,
// 		translate: translate,
// 		repeat: repeat
// 		// element: element
// 	};

// 	observer.observe(element);
// }

// function makeIntersectionObserver(): IntersectionObserver {
// 	return new IntersectionObserver((entries) => {
// 		entries.forEach(async (entry) => {
// 			const { translate, delay, repeat, callback } = elements[entry.target.id];

// 			if (entry.isIntersecting) {
// 				if (callback) {
// 					await new Promise((r) => setTimeout(r, delay));
// 					await callback();
// 					if (!repeat) observer.unobserve(entry.target);
// 					return;
// 				}

// 				// The reason it is "added" here, and "removed" later
// 				// --> the "observe" would trigger in the proper place,
// 				// --> where the final "after animation" would be
// 				entry.target.classList.add(translate);

// 				await new Promise((r) => setTimeout(r, delay));
// 				entry.target.classList.remove('opacity-0');

// 				// Re-place the element after transition
// 				entry.target.classList.remove('transition-opacity');
// 				entry.target.classList.add('transition-all');
// 				entry.target.classList.remove(translate);

// 				observer.unobserve(entry.target);
// 			}
// 		});
// 	});
// }

// let menuObserver: IntersectionObserver;
// const menuElements: {
// 	[id: string]: {
// 		onIntersecting: Function;
// 		onNotIntersecting: Function;
// 		callback: Function;
// 		repeat: boolean;
// 	};
// } = {};

// function initializeObserver() {
// 	if (!observer) observer = makeIntersectionObserver();
// 	if (!menuObserver) menuObserver = makeMenuIntersectionObserver();
// }

// function makeMenuIntersectionObserver() {
// 	return new IntersectionObserver((entries) =>
// 		entries.forEach((entry) => {
// 			const { callback, repeat } = menuElements[entry.target.id];
// 			if (entry.isIntersecting) {
// 				callback(entry.target.id);
// 			}

// 			if (!repeat) observer.unobserve(entry.target);
// 		})
// 	);
// }

// function observeMenuObject(element: HTMLElement, onIntersecting: Function, onNotIntersecting: Function, repeat: boolean) {
// 	if (!menuObserver) menuObserver = makeMenuIntersectionObserver();
// 	menuElements[element.id] = {
// 		callback: callback,
// 		repeat: repeat
// 	};
// 	menuObserver.observe(element);
// }

let observer: IntersectionObserver;
const intersectingElements: {
	[id: string]: {
		onIntersecting: Function;
		onNotIntersecting: Function;
		delay: number;
		repeat: boolean;
	};
} = {};

function makeIntersectionObserver() {
	if (!observer)
		observer = new IntersectionObserver((entries) =>
			entries.forEach(async (entry) => {
				const id = (entry.target as HTMLElement).dataset.observingIndex!;
				const { onIntersecting, onNotIntersecting, repeat, delay } = intersectingElements[id];
				if (entry.isIntersecting) {
					await new Promise((r) => setTimeout(r, delay));
					await onIntersecting();
					if (!repeat) {
						observer.unobserve(entry.target);
						delete intersectingElements[id];
					}
				} else if (repeat) await onNotIntersecting();
			})
		);
}

let elementId: number = 0;

function observeElement(options: {
	element: HTMLElement;
	onIntersecting: Function;
	onNotIntersecting: Function;
	delay: number;
	repeat: boolean;
}) {
	makeIntersectionObserver();
	const { element, onIntersecting, onNotIntersecting, repeat, delay } = options;

	element.dataset.observingIndex = `${elementId}`;
	intersectingElements[elementId] = {
		onIntersecting: onIntersecting,
		onNotIntersecting: onNotIntersecting,
		delay: delay,
		repeat: repeat
	};

	elementId++;
	observer.observe(element);
}

export { makeIntersectionObserver, observeElement };
