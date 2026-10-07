<script lang="ts">
	import { onMount } from 'svelte';

	let { sections }: { sections: readonly { id: string; label: string }[] } = $props();
	let active = $state('home');
	let menuOpen = $state(false);

	onMount(() => {
		const available = sections.filter(({ id }) => document.getElementById(id));
		const ids = new Set(available.map(({ id }) => id));
		const syncHash = () => {
			const id = decodeURIComponent(location.hash.slice(1));
			if (ids.has(id)) active = id;
		};
		syncHash();
		window.addEventListener('hashchange', syncHash);

		if (typeof IntersectionObserver === 'undefined') {
			return () => window.removeEventListener('hashchange', syncHash);
		}

		// Observer bookkeeping is not rendered directly; only `active` is reactive.
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const intersecting = new Set<Element>();
		const observer = new IntersectionObserver(
			(entries) => {
				let entered = false;
				for (const entry of entries) {
					if (entry.isIntersecting) {
						intersecting.add(entry.target);
						entered = true;
					} else {
						intersecting.delete(entry.target);
					}
				}
				if (!entered || intersecting.size === 0) return;
				let closest: Element | undefined;
				for (const element of intersecting) {
					if (
						!closest ||
						Math.abs(element.getBoundingClientRect().top - innerHeight * 0.4) <
							Math.abs(closest.getBoundingClientRect().top - innerHeight * 0.4)
					)
						closest = element;
				}
				if (closest) active = closest.id;
			},
			{ rootMargin: '-35% 0px -55% 0px', threshold: 0 }
		);
		for (const { id } of available) observer.observe(document.getElementById(id)!);
		return () => {
			window.removeEventListener('hashchange', syncHash);
			observer.disconnect();
		};
	});
</script>

<header class="bg-paper border-ink sticky top-0 z-40 border-b-4">
	<div class="border-ink hidden border-b px-4 py-1.5 md:block">
		<div class="eyebrow mx-auto flex max-w-7xl justify-between">
			<span>Independent engineering journal</span>
			<span>Vol. 01 / 2026</span>
			<span>South Korea edition</span>
		</div>
	</div>
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4">
		<a
			href="#home"
			class="font-display inline-flex min-h-16 items-center text-2xl font-black tracking-tight md:text-3xl"
			aria-label="James Kim, back to home">JAMES KIM<span class="text-accent">.</span></a
		>
		<button
			type="button"
			class="border-ink flex min-h-11 min-w-11 items-center justify-center border font-sans text-lg md:hidden"
			aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
			aria-expanded={menuOpen}
			aria-controls="primary-nav"
			onclick={() => (menuOpen = !menuOpen)}>{menuOpen ? '×' : '☰'}</button
		>
		<nav
			id="primary-nav"
			aria-label="Primary"
			class:hidden={!menuOpen}
			class="border-ink bg-paper absolute top-full right-0 left-0 border-b-4 md:static md:block md:border-0"
		>
			<ol class="flex flex-col px-4 pb-3 md:flex-row md:items-center md:p-0">
				{#each sections as section, index (section.id)}
					<li>
						<a
							href="#{section.id}"
							onclick={() => (menuOpen = false)}
							aria-current={active === section.id ? 'location' : undefined}
							class="flex min-h-11 items-center gap-2 border-b px-3 font-sans text-xs font-bold tracking-[0.12em] uppercase transition-colors md:border-b-0 md:border-l {active ===
							section.id
								? 'border-ink text-accent'
								: 'border-ink hover:bg-ink hover:text-paper'}"
							><span class="font-mono text-[10px] font-normal">0{index + 1}</span>{section.label}</a
						>
					</li>
				{/each}
			</ol>
		</nav>
	</div>
</header>
