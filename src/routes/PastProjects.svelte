<script lang="ts">
	import { featuredProjects, archiveProjects } from '$lib/sections/pastProjects/projects';
</script>

<section
	id="projects"
	aria-labelledby="projects-title"
	class="section-shell border-line bg-paper border-t px-4 py-16 md:py-24"
>
	<div class="mx-auto max-w-7xl">
		<header
			class="border-line mb-12 grid gap-8 border-b pb-10 md:mb-16 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.5fr)] md:items-end"
		>
			<div>
				<p class="eyebrow text-accent">03 / Selected builds</p>
				<h2
					id="projects-title"
					class="editorial-heading mt-4 max-w-4xl text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92]"
				>
					Projects<span class="text-accent">.</span>
				</h2>
			</div>
			<p class="text-muted max-w-xl text-lg leading-relaxed">
				Browser tools, infrastructure, and product experiences built end to end.
			</p>
		</header>

		<div class="space-y-12 md:space-y-20">
			{#each featuredProjects as project, index (project.slug)}
				<article
					id={project.slug}
					aria-labelledby={`${project.slug}-title`}
					class="reveal border-line grid overflow-hidden border lg:grid-cols-2"
				>
					<div class="flex flex-col p-6 md:p-10 lg:p-14 {index % 2 ? 'lg:order-2' : ''}">
						<p class="eyebrow text-accent">Featured / 0{index + 1} — {project.period}</p>
						<h3
							id={`${project.slug}-title`}
							class="editorial-heading mt-6 text-[clamp(2rem,4.5vw,4.8rem)] leading-[0.96]"
						>
							{project.title}
						</h3>
						<p class="mt-5 max-w-prose text-lg leading-relaxed">{project.summary}</p>
						<ul
							class="border-line text-muted mt-7 space-y-4 border-l-2 pl-5 text-sm leading-relaxed"
						>
							{#each project.highlights as highlight (highlight)}
								<li>{highlight}</li>
							{/each}
						</ul>
						<ul
							aria-label="Technologies"
							class="border-line mt-8 flex flex-wrap gap-2 border-t pt-5"
						>
							{#each project.technologies as technology (technology)}
								<li class="chip">{technology}</li>
							{/each}
						</ul>
						{#if project.links.length}
							<div class="mt-8 flex flex-wrap gap-2 lg:mt-auto lg:pt-10">
								{#each project.links as link (link.href)}
									<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- These are external project URLs. -->
									<a class="action-link" href={link.href} target="_blank" rel="noopener noreferrer"
										>{link.label}<span aria-hidden="true">↗</span></a
									>
								{/each}
							</div>
						{/if}
					</div>

					<figure
						class="border-line bg-soft relative flex min-h-72 flex-col items-center justify-center overflow-hidden border-t p-6 lg:min-h-[500px] lg:border-t-0 {index %
						2
							? 'lg:order-1 lg:border-r'
							: 'lg:border-l'}"
					>
						{#if 'image' in project && project.image}
							<div class="relative z-10 flex w-full max-w-2xl flex-col items-center gap-4">
								<img
									src={project.image}
									alt={project.imageAlt}
									loading="lazy"
									class="max-h-[500px] w-full object-contain grayscale"
								/>
							</div>
							<figcaption
								class="text-muted border-line relative z-10 mt-4 w-full max-w-2xl border-t pt-3 font-mono text-[0.68rem] tracking-[0.12em] uppercase"
							>
								Figure 0{index + 1} / {project.imageAlt}
							</figcaption>
						{:else if 'visual' in project && project.visual === 'infrastructure'}
							<div
								aria-hidden="true"
								class="text-muted relative z-10 w-full max-w-lg space-y-7 font-mono text-xs tracking-wide uppercase"
							>
								<div class="flex justify-center">
									<span class="border-accent text-accent border px-5 py-4">Internet</span>
								</div>
								<div class="bg-accent mx-auto h-6 w-px"></div>
								<div class="flex flex-wrap items-center justify-center gap-2">
									<span class="border-line bg-paper border px-4 py-4">Cloudflare</span><span
										class="text-accent">→</span
									><span class="border-accent bg-paper text-accent border px-4 py-4">Caddy</span
									><span class="text-accent">→</span><span
										class="border-line bg-paper border px-4 py-4">Services</span
									>
								</div>
								<div class="border-line border-t border-dashed"></div>
								<div class="flex flex-wrap items-center justify-center gap-2">
									<span class="border-line bg-paper border px-4 py-4">Admin</span><span
										class="text-accent">→</span
									><span class="border-accent bg-paper text-accent border px-4 py-4">Tailscale</span
									><span class="text-accent">→</span><span
										class="border-line bg-paper border px-4 py-4">Host</span
									>
								</div>
							</div>
							<figcaption
								class="text-muted border-line absolute right-6 bottom-5 left-6 border-t pt-3 font-mono text-[0.68rem] tracking-[0.12em] uppercase"
							>
								Figure 0{index + 1} / Deployment topology
							</figcaption>
						{:else if 'visual' in project && project.visual === 'reporting'}
							<div
								aria-hidden="true"
								class="text-muted relative z-10 w-full max-w-lg space-y-7 font-mono text-xs tracking-wide uppercase"
							>
								<div class="flex flex-wrap items-center justify-center gap-2">
									<span class="border-line bg-paper border px-4 py-4">Teachers</span>
									<span class="text-accent">→</span>
									<span class="border-accent bg-paper text-accent border px-4 py-4"
										>Weekly reports</span
									>
									<span class="text-accent">→</span>
									<span class="border-line bg-paper border px-4 py-4">Students</span>
								</div>
								<div class="bg-accent mx-auto h-6 w-px"></div>
								<div class="flex flex-wrap items-center justify-center gap-2">
									<span class="border-line bg-paper border px-4 py-4">Firestore</span>
									<span class="text-accent">+</span>
									<span class="border-line bg-paper border px-4 py-4">Google Drive</span>
									<span class="text-accent">+</span>
									<span class="border-line bg-paper border px-4 py-4">PDF exports</span>
								</div>
							</div>
							<figcaption
								class="text-muted border-line absolute right-6 bottom-5 left-6 border-t pt-3 font-mono text-[0.68rem] tracking-[0.12em] uppercase"
							>
								Figure 0{index + 1} / Reporting workflow
							</figcaption>
						{/if}
						<span
							aria-hidden="true"
							class="text-muted/25 pointer-events-none absolute right-4 bottom-0 font-mono text-[13rem] leading-none font-bold"
							>0{index + 1}</span
						>
					</figure>
				</article>
			{/each}
		</div>

		<div class="border-line mt-24 border-t pt-10 md:mt-28 md:pt-12">
			<div class="mb-8 flex flex-wrap items-end justify-between gap-3">
				<h3 class="editorial-heading text-3xl md:text-5xl">
					Selected archive<span class="text-accent"> / 05</span>
				</h3>
				<p class="eyebrow text-muted">More experiments, same curiosity</p>
			</div>
			<div class="border-line grid border-t border-l md:grid-cols-2 xl:grid-cols-3">
				{#each archiveProjects as project (project.slug)}
					<article
						id={project.slug}
						aria-labelledby={`${project.slug}-title`}
						class="bg-paper reveal border-line flex flex-col overflow-hidden border-r border-b"
					>
						<figure class="border-line bg-soft border-b">
							<img
								src={project.image}
								alt={project.imageAlt}
								loading="lazy"
								class="aspect-[16/8] w-full object-cover object-top grayscale"
							/>
							<figcaption
								class="text-muted border-line border-t px-5 py-3 font-mono text-[0.65rem] tracking-[0.12em] uppercase"
							>
								{project.imageAlt}
							</figcaption>
						</figure>
						<div class="flex flex-1 flex-col p-6">
							<p class="eyebrow text-accent">Archive / {project.period}</p>
							<h4
								id={`${project.slug}-title`}
								class="editorial-heading mt-3 text-[clamp(1.55rem,2.5vw,2.2rem)] leading-tight"
							>
								{project.title}
							</h4>
							<p class="text-muted mt-3 text-sm leading-relaxed">{project.summary}</p>
							<ul aria-label="Technologies" class="mt-5 flex flex-wrap gap-2">
								{#each project.technologies as technology (technology)}
									<li class="chip">{technology}</li>
								{/each}
							</ul>
							<div class="mt-auto flex flex-wrap gap-2 pt-7">
								{#each project.links as link (link.href)}
									<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- These are external project URLs. -->
									<a class="action-link" href={link.href} target="_blank" rel="noopener noreferrer"
										>{link.label}<span aria-hidden="true">↗</span></a
									>
								{/each}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
