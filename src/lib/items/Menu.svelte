<script lang="ts">
	import MenuItem from './MenuItem.svelte';
</script>

<section id="menu" class="fixed bottom-0 left-10 z-40 hidden md:block">
	<div class="flex flex-col text-bright-yellow items-center gap-2">
		<MenuItem
			link="mailto:jameskimjaewon.abc@gmail.com?subject=Contact&body=Hello%20there!"
			icon="/icons/email.svg"
		/>
		<MenuItem link="https://github.com/jameskimthing" icon="/icons/github.svg" />
		<MenuItem link="https://www.linkedin.com/in/james-kim-282750252/" icon="/icons/linkedin.svg" />
		<div class="w-0.5 h-80 mt-4 bg-amber-100" />
	</div>

	<div class="transition-all duration-500 opacity-0 -translate-x-full">
		<div class="flex flex-col gap-5 fixed bottom-8 left-12">
			<!-- <Section name="about" />
			<Section name="projects" />
			<Section name="contact" /> -->
		</div>
	</div>
</section>
