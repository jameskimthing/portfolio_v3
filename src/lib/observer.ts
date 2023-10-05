const elements: {
	[id: string]: {
		delay: number;
		translate: string;
		// element: HTMLElement;
		callback?: Function;
	};
} = {};

let observer: IntersectionObserver;
let idGenerator: number = 0;

/**
 * Add an HTMLElement to observe
 * ONLY use this function alongside the "onMount()" function in svelte, to be run on the browser
 * @example onMount(() => observeObject(element, "left", "fast", 500))
 * @param callback if there is a callback, wait for delay, then call function. Other parameters are ignored
 */
function observeObject(options: {
	element: HTMLElement;
	delay?: number;
	direction?: 'left' | 'right' | 'up' | 'down' | 'fade';
	speed?: 'slow' | 'medium' | 'fast';
	callback?: Function;
}) {
	// The intersection observer is initialized here, to ensure
	// it is initialized within the browser and not the server.
	// This is becasue the "observeObject" function requires an
	// "element", which can only be accesed after the "onMount()" function
	if (!observer) observer = makeIntersectionObserver();

	let { element, direction, speed, delay, callback } = options;
	if (!delay) delay = 0;

	idGenerator++;
	element.id = `${idGenerator}`;

	if (callback) {
		elements[idGenerator] = {
			translate: '',
			delay: delay,
			callback: callback
		};
		observer.observe(element);
		return;
	}

	let translate: string = '';
	switch (direction) {
		case 'left':
			translate = 'translate-x-full';
			break;
		case 'right':
			translate = '-translate-x-full';
			break;
		case 'up':
			translate = 'translate-y-full';
			break;
		case 'down':
			translate = '-translate-y-full';
			break;
	}

	switch (speed) {
		case 'slow':
			element.classList.add('duration-1000');
			break;
		case 'medium':
			element.classList.add('duration-500');
			break;
		case 'fast':
			element.classList.add('duration-200');
			break;
	}

	elements[idGenerator] = {
		delay: delay,
		translate: translate
		// element: element
	};

	observer.observe(element);
}

function makeIntersectionObserver(): IntersectionObserver {
	return new IntersectionObserver((entries) => {
		entries.forEach(async (entry) => {
			const { translate, delay, callback } = elements[entry.target.id];

			if (entry.isIntersecting) {
				if (callback) {
					await new Promise((r) => setTimeout(r, delay));
					await callback();
					observer.unobserve(entry.target);
					return;
				}

				// The reason it is "added" here, and "removed" later
				// --> the "observe" would trigger in the proper place,
				// --> where the final "after animation" would be
				entry.target.classList.add(translate);

				await new Promise((r) => setTimeout(r, delay));
				entry.target.classList.remove('opacity-0');

				// Re-place the element after transition
				entry.target.classList.remove('transition-opacity');
				entry.target.classList.add('transition-all');
				entry.target.classList.remove(translate);

				observer.unobserve(entry.target);
			}
		});
	});
}

let menuObserver: IntersectionObserver;
const menuElements: { [id: string]: Function } = {};
function initializeObserver() {
	if (!observer) observer = makeIntersectionObserver();
	if (!menuObserver) menuObserver = makeMenuIntersectionObserver();
}

function makeMenuIntersectionObserver() {
	return new IntersectionObserver((entries) =>
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const callback = menuElements[entry.target.id];
				callback(entry.target.id);
			}
		})
	);
}

function observeMenuObject(element: HTMLElement, callback: Function) {
	if (!menuObserver) menuObserver = makeMenuIntersectionObserver();
	menuElements[element.id] = callback;
	menuObserver.observe(element);
}

export { observeObject, initializeObserver, observeMenuObject };
