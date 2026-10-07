<script lang="ts">
	import { profile } from '$lib/profile';
</script>

<section
	id="contact"
	aria-labelledby="contact-title"
	class="section-shell border-line bg-ink text-paper flex min-h-[70svh] items-center border-t px-4 py-16 md:py-24"
>
	<div
		class="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:gap-16"
	>
		<div>
			<p class="eyebrow text-paper flex items-center gap-3">
				<span aria-hidden="true" class="bg-accent h-2 w-2"></span> 05 / Open channel
			</p>
			<h2 id="contact-title" class="editorial-heading mt-6 max-w-4xl text-[clamp(3.3rem,8vw,8rem)]">
				Let's build<br /><span class="bg-accent text-paper mt-2 inline-block px-2 leading-[1.08]"
					>what's next.</span
				>
			</h2>
			<p class="text-paper/80 mt-8 max-w-lg text-lg leading-relaxed">
				Have a challenging product or engineering problem? I'd like to hear about it.
			</p>
			<p class="text-paper mt-8 font-mono text-sm">{profile.availability} · {profile.location}</p>
		</div>

		<div class="border-paper flex flex-col justify-center gap-3 border p-6 md:p-10">
			<p class="eyebrow text-paper/70 mb-5">Direct connections / no form required</p>
			<!-- eslint-disable svelte/no-navigation-without-resolve -- These URLs are mailto/external, not app routes. -->
			<a
				class="action-link group !border-accent !bg-accent !text-paper hover:!bg-paper hover:!text-ink justify-start gap-4"
				href={profile.emailHref}
				><img src="/icons/email.svg" alt="" aria-hidden="true" class="h-5 w-5 group-hover:invert" />
				<span class="min-w-0 break-all">{profile.email}</span><span
					aria-hidden="true"
					class="ml-auto">↗</span
				></a
			>
			<a
				class="action-link group !border-paper !bg-ink !text-paper hover:!bg-paper hover:!text-ink justify-start gap-4"
				href={profile.github}
				target="_blank"
				rel="noopener noreferrer"
				><img
					src="/icons/github.svg"
					alt=""
					aria-hidden="true"
					class="h-5 w-5 group-hover:invert"
				/>
				GitHub
				<span aria-hidden="true" class="ml-auto">↗</span></a
			>
			<a
				class="action-link group !border-paper !bg-ink !text-paper hover:!bg-paper hover:!text-ink justify-start gap-4"
				href={profile.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				><img
					src="/icons/linkedin.svg"
					alt=""
					aria-hidden="true"
					class="h-5 w-5 group-hover:invert"
				/>
				LinkedIn
				<span aria-hidden="true" class="ml-auto">↗</span></a
			>
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
			<p class="eyebrow border-paper text-paper/70 mt-8 border-t pt-6">
				Based in {profile.location}<br />{profile.availability}
			</p>
		</div>
	</div>
</section>
