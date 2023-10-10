<script lang="ts">
	import CertificationHeading from '$lib/sectionsComponents/CertificationHeading.svelte';
	import Certificate from '../lib/sectionsComponents/Certificate.svelte';
</script>

<section
	id="certifications"
	class="flex flex-col items-center justify-center w-full h-screen"
	style="background-color: #001a3a;"
>
	<!-- style="background-color: #000d2d;" -->
	<CertificationHeading text="Professional Certifications" delay={300}>
		These are my certifications after completing an official exam, namely from Google and Amazon Web
		Services in the case here.
	</CertificationHeading>
	<div class="flex flex-wrap gap-5 pt-5">
		<Certificate delay={450} src="certifications/professional/aws.png" />
		<Certificate delay={550} src="certifications/professional/google_for_education.png" />
		<Certificate delay={660} src="certifications/professional/tensorflow.png" />
	</div>
	<div class="h-10" />
	<CertificationHeading text="Other Certifications" delay={450}>
		These are from completing online courses from sites such as Udemy, Edx, and Coursera. Despite
		the ones here, most of the courses I have taken did not offer any sort of free certificate,
		therefore was not included in this list.
	</CertificationHeading>
	<div class="grid grid-cols-4 gap-5 pt-5">
		<Certificate delay={600} src="certifications/courses/aws_flutter.jpg" />
		<Certificate delay={700} src="certifications/courses/aws_udemy.jpg" />
		<Certificate delay={800} src="certifications/courses/calculus_bc.png" />
		<Certificate delay={900} src="certifications/courses/cs50ai.png" />
		<Certificate delay={1000} src="certifications/courses/cs50g.png" />
		<Certificate delay={1100} src="certifications/courses/cs50x.png" />
		<Certificate delay={1200} src="certifications/courses/deeplearning_ai_tensorflow.png" />
		<Certificate delay={1300} src="certifications/courses/single_variable_calculus.png" />
		<Certificate delay={1400} src="certifications/courses/tensorflow_1.png" />
		<Certificate delay={1500} src="certifications/courses/tensorflow_2.png" />
		<Certificate delay={1600} src="certifications/courses/tensorflow_3.png" />
		<Certificate delay={1700} src="certifications/courses/tensorflow_4.png" />
	</div>
</section>
