import { writable, type Writable } from 'svelte/store';

const projectPopupIndex: Writable<number> = writable(-1);
export { projectPopupIndex };
