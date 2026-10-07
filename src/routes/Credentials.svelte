<script lang="ts">
	import { education, certification, courseCertificates, skillGroups } from '$lib/profile';
</script>

<section
	id="credentials"
	aria-labelledby="credentials-title"
	class="section-shell border-line bg-paper border-t px-4 py-16 md:py-24"
>
	<div class="mx-auto max-w-7xl">
		<header class="border-line mb-12 border-b pb-8 md:mb-16">
			<p class="eyebrow text-accent">04 / Foundation</p>
			<h2 id="credentials-title" class="editorial-heading mt-4 text-[clamp(2.8rem,6vw,6rem)]">
				Credentials<span class="text-accent">.</span>
			</h2>
		</header>

		<div class="grid gap-4 lg:grid-cols-12">
			<article class="panel reveal !border-accent !border-t-4 p-6 md:p-10 lg:col-span-7">
				<p class="eyebrow text-muted">Education / UIUC</p>
				<h3 class="editorial-heading mt-8 max-w-2xl text-3xl md:text-5xl">
					{education.institution}
				</h3>
				<p class="text-accent mt-5 text-lg font-semibold">{education.degree}</p>
				<div
					class="border-line text-muted mt-8 grid gap-4 border-t pt-6 font-mono text-sm sm:grid-cols-2"
				>
					<p>{education.graduation}</p>
					<p>{education.gpa}</p>
					<p class="sm:col-span-2">{education.status}</p>
				</div>
				<h4 class="eyebrow mt-9">Relevant coursework</h4>
				<ul class="mt-4 flex flex-wrap gap-2">
					{#each education.coursework as course (course)}<li class="chip">{course}</li>{/each}
				</ul>
			</article>

			<article class="panel reveal flex flex-col justify-between p-6 md:p-10 lg:col-span-5">
				<div>
					<p class="eyebrow text-muted">Certification / AWS</p>
					<h3 class="editorial-heading mt-8 text-3xl md:text-4xl">
						{certification}
					</h3>
				</div>
				<p aria-hidden="true" class="text-accent mt-12 self-end font-mono text-7xl">✳</p>
			</article>
		</div>

		<div class="panel reveal mt-4 p-6 md:p-10">
			<div class="border-line flex flex-wrap items-baseline justify-between gap-3 border-b pb-5">
				<h3 class="editorial-heading text-3xl md:text-4xl">Courses & certificates</h3>
				<p class="eyebrow text-muted">Online learning / selected credentials</p>
			</div>
			<ul class="grid md:grid-cols-2 md:gap-x-10">
				{#each courseCertificates as course (course.name)}
					<li class="border-line flex items-start justify-between gap-4 border-b py-4">
						<div>
							<p class="leading-snug font-semibold">{course.name}</p>
							<p class="text-muted mt-1 font-mono text-xs">{course.issuer}</p>
						</div>
						{#if 'href' in course}
							<!-- eslint-disable svelte/no-navigation-without-resolve -- External certificate URL. -->
							<a
								href={course.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`View certificate: ${course.name}`}
								class="text-accent shrink-0 font-mono text-sm underline underline-offset-4"
								>View <span aria-hidden="true">↗</span></a
							>
							<!-- eslint-enable svelte/no-navigation-without-resolve -->
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<div class="mt-16" aria-label="Skills">
			<div class="border-line mb-5 flex items-baseline justify-between border-b pb-4">
				<h3 class="text-2xl font-semibold tracking-tight md:text-3xl">Skills</h3>
				<p class="eyebrow text-muted">Working toolkit</p>
			</div>
			<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
				{#each skillGroups as group, index (group.label)}<article class="panel reveal p-5 md:p-6">
						<p class="eyebrow text-muted">0{index + 1} / {group.label}</p>
						<h4 class="mt-5 text-lg font-semibold">{group.label}</h4>
						<ul
							class="border-line text-muted mt-5 space-y-2 border-t pt-5 font-mono text-xs leading-relaxed"
						>
							{#each group.skills as skill (skill)}<li>{skill}</li>{/each}
						</ul>
					</article>{/each}
			</div>
		</div>
	</div>
</section>
