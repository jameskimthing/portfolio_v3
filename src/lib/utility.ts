function generateRandomString(length: number): String {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}

function clickOutside(node: any, func: Function) {
	const handleClick = (event: any) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			func();
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('pointerup', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('pointerup', handleClick, true);
		}
	};
}

export { generateRandomString, clickOutside };
