<script lang="ts">
	import CertificationHeading from '$lib/sections/certifications/CertificationHeading.svelte';
	import Certificate from '../lib/sections/certifications/Certificate.svelte';

	interface Certification {
		label: string;
		src: string;
	}

	const professionalCertificates: Certification[] = [
		{ label: 'AWS Foundations', src: 'aws.png' },
		{ label: 'Google for Education Level 1', src: 'google_for_education.png' },
		{ label: 'Google for Education Level 2', src: 'google_for_education2.png' },
		{ label: 'Tensorflow Developer Certificate', src: 'tensorflow.png' }
	];

	const otherCertificates: Certification[] = [
		{ label: 'Flutter Course', src: 'aws_flutter.jpg' },
		{ label: 'AWS Course', src: 'aws_udemy.jpg' },
		{ label: 'Introduction to Calculus', src: 'intro_to_calculus.png' },
		{ label: 'Calculus BC', src: 'calculus_bc.png' },
		{ label: 'CS50 AI', src: 'cs50ai.png' },
		{ label: 'CS50 Game Development', src: 'cs50g.png' },
		{ label: 'CS50x', src: 'cs50x.png' },
		{ label: 'Deeplearning AI Tensorflow', src: 'deeplearning_ai_tensorflow.png' },
		{ label: 'Single Variable Calculus', src: 'single_variable_calculus.png' },
		{ label: 'Tensorflow 1', src: 'tensorflow_1.png' },
		{ label: 'Tensorflow 2', src: 'tensorflow_2.png' },
		{ label: 'Tensorflow 3', src: 'tensorflow_3.png' },
		{ label: 'Tensorflow 4', src: 'tensorflow_4.png' }
	];
</script>

<section
	id="certifications"
	class="flex flex-col items-center justify-center w-full min-h-screen"
	style="background-color: #001a3a;"
>
	<!-- style="background-color: #000d2d;" -->
	<CertificationHeading text="Professional Certifications" delay={300}>
		These are my certifications after completing an official exam, namely from Google and Amazon Web
		Services in the case here.
	</CertificationHeading>
	<div class="flex flex-wrap items-center justify-center gap-2 px-10 py-2 lg:px-0 lg:gap-5">
		{#each professionalCertificates as { label, src }, i}
			<div class="w-[80px] h-[60px] md:w-[122px] md:h-[90px] xl:w-[162px] xl:h-[120px]">
				<Certificate {label} src={'certifications/professional/' + src} delay={350 + i * 100} />
			</div>
		{/each}
	</div>
	<div class="h-14" />
	<CertificationHeading text="Other Certifications" delay={450}>
		These are from completing online courses from sites such as Udemy, Edx, and Coursera. Despite
		the ones here, most of the courses I have taken did not offer any sort of free certificate,
		therefore was not included in this list.
	</CertificationHeading>
	<div
		class="flex flex-row flex-wrap items-center justify-center w-full gap-2 px-10 py-2 lg:gap-5 sm:px-20 xl:px-40 2xl:px-96"
	>
		{#each otherCertificates as { label, src }, i}
			<div class="w-[80px] h-[60px] md:w-[122px] md:h-[90px] xl:w-[162px] xl:h-[120px]">
				<Certificate {label} src={'certifications/courses/' + src} delay={500 + i * 100} />
			</div>
		{/each}
	</div>
</section>
