<script lang="ts">
	import { experiences } from '$lib/sections/professionalExperience/experiences';
</script>

<section
	id="experience"
	aria-labelledby="experience-title"
	class="section-shell border-line bg-paper border-t px-4 py-16 md:py-24"
>
	<div class="mx-auto max-w-7xl">
		<header
			class="border-line mb-12 grid gap-8 border-b pb-10 md:mb-16 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] md:items-end"
		>
			<div>
				<p class="eyebrow text-accent">02 / Field record</p>
				<h2
					id="experience-title"
					class="editorial-heading mt-4 max-w-3xl text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92]"
				>
					Experience<span class="text-accent">.</span>
				</h2>
			</div>
			<p class="text-muted max-w-sm font-mono text-sm leading-relaxed">
				Selected work / production systems, developer tools, and teaching.
			</p>
		</header>

		<div>
			{#each experiences as experience, index (experience.company)}
				<article
					class="reveal border-line grid border-b py-9 md:grid-cols-[minmax(14rem,0.36fr)_minmax(0,1fr)] md:gap-10 lg:py-12"
				>
					<div class="content-start">
						<p class="eyebrow text-accent">Log 0{index + 1} / {experience.period}</p>
						<h3 class="editorial-heading mt-4 text-[clamp(1.8rem,3.5vw,3.2rem)] leading-[0.98]">
							{experience.company}
						</h3>
						<p class="text-accent mt-4 font-mono text-sm">{experience.role}</p>
						<p class="text-muted mt-2 font-mono text-xs">{experience.location}</p>
					</div>

					<div
						class="border-line mt-7 border-t pt-6 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-10"
					>
						<p class="max-w-3xl text-lg leading-relaxed">{experience.summary}</p>
						{#if experience.highlights.length}
							<ul class="border-line mt-7 space-y-4 border-l-2 pl-5">
								{#each experience.highlights as highlight (highlight)}
									<li class="text-muted flex gap-4 text-sm leading-relaxed">
										<span class="text-accent shrink-0 font-mono" aria-hidden="true">↳</span>
										<span>{highlight}</span>
									</li>
								{/each}
							</ul>
						{/if}
						<ul
							aria-label="Technologies"
							class="border-line mt-8 flex flex-wrap gap-2 border-t pt-5"
						>
							{#each experience.technologies as technology (technology)}
								<li class="chip">{technology}</li>
							{/each}
						</ul>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
