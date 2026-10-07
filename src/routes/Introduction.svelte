<script lang="ts">
	import { profile } from '$lib/profile';
</script>

<section id="home" aria-labelledby="home-title" class="section-shell border-ink border-b-4">
	<div class="mx-auto max-w-7xl px-4">
		<div class="eyebrow border-ink flex flex-wrap justify-between gap-x-6 gap-y-1 border-b py-3">
			<span>Portfolio / Issue No. 01</span><span>Software engineering &amp; the web</span><span
				>Est. 2026</span
			>
		</div>
		<div class="grid lg:grid-cols-12">
			<div class="border-ink py-12 lg:col-span-8 lg:border-r lg:py-16 lg:pr-10">
				<p class="eyebrow text-accent mb-6">The lead story / 01</p>
				<h1
					id="home-title"
					class="editorial-heading max-w-4xl text-[clamp(3rem,17vw,4.3rem)] leading-[0.93] lg:text-[clamp(4.3rem,9.2vw,9rem)]"
				>
					Engineering<br />with <em class="font-normal">intent.</em>
				</h1>
				<div class="border-ink mt-10 grid gap-6 border-t-4 pt-6 sm:grid-cols-[1fr_2fr]">
					<p class="eyebrow leading-relaxed">James Kim<br />Software engineer<br />South Korea</p>
					<div>
						<p class="font-display text-xl leading-snug font-bold md:text-2xl">
							{profile.headline}
						</p>
						<p
							class="text-muted first-letter:font-display mt-4 max-w-xl text-base leading-relaxed first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:leading-[0.85]"
						>
							{profile.summary}
						</p>
						<div class="mt-7 flex flex-wrap gap-3">
							<a class="action-link action-link-primary" href="#projects"
								>View selected work <span aria-hidden="true">↗</span></a
							>
							<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- Mailto is not an app route. -->
							<a class="action-link" href={profile.emailHref}
								>Get in touch <span aria-hidden="true">↗</span></a
							>
						</div>
					</div>
				</div>
			</div>
			<aside
				aria-label="At a glance"
				class="border-ink flex flex-col border-t lg:col-span-4 lg:border-t-0 lg:pl-8"
			>
				<div class="border-ink py-8 lg:border-b lg:pt-16">
					<p class="eyebrow text-accent">Editor's note</p>
					<p class="font-display mt-5 text-3xl leading-tight font-bold md:text-4xl">
						Building things that hold up in the real world.
					</p>
				</div>
				<dl class="border-ink grid grid-cols-2 border-t lg:grid-cols-1 lg:border-t-0">
					<div class="border-ink border-r border-b py-5 pr-3 lg:border-r-0">
						<dt class="eyebrow text-muted">Academic base</dt>
						<dd class="mt-2 font-sans text-sm font-semibold">
							UIUC / Statistics &amp; Computer Science
						</dd>
					</div>
					<div class="border-ink border-b py-5 pl-3 lg:pl-0">
						<dt class="eyebrow text-muted">Current status</dt>
						<dd class="mt-2 font-sans text-sm font-semibold">Returning Fall 2027</dd>
					</div>
					<div class="border-ink col-span-2 border-b py-5">
						<dt class="eyebrow text-muted">Next available</dt>
						<dd class="mt-2 font-sans text-sm font-semibold">{profile.availability}</dd>
					</div>
				</dl>
				<p class="eyebrow text-muted mt-auto py-5">
					Filed from {profile.location} &nbsp; ✦ &nbsp; Open to connection
				</p>
			</aside>
		</div>
	</div>
	<div
		class="bg-ink text-paper overflow-hidden"
		aria-label="Areas of focus: Web products, browser tools, developer infrastructure"
	>
		<div
			class="ticker-track flex w-max items-center gap-10 py-3 font-mono text-xs font-medium tracking-[0.14em] uppercase"
			aria-hidden="true"
		>
			{#each [0, 1, 2, 3] as index (index)}<span>Web products</span><span>✦</span><span
					>Browser tools</span
				><span>✦</span><span>Developer infrastructure</span><span>✦</span>{/each}
		</div>
	</div>
</section>
