<script lang="ts">
	import { onMount } from 'svelte';
	import { initializeMenu } from '$lib/menu';
	import Menu from '$lib/items/Menu.svelte';
	import Certifications from './Certifications.svelte';
	import Introduction from './Introduction.svelte';
	import FormalTestScores from './FormalTestScores.svelte';
	import Development from './Development.svelte';
	import ProfessionalExperience from './ProfessionalExperience.svelte';
	import PastProjects from './PastProjects.svelte';

	onMount(() => initializeMenu(sections));

	const sections: string[] = [
		'introduction',
		'formal_test_scores',
		'certifications',
		'professional_experience',
		'past_projects'
		// 'programming',
	];
</script>

<!-- 
	Gap between elements is 2
	For default padding between, have it as 5
 -->

<Menu {sections} />

<Introduction />
<FormalTestScores />
<Certifications />
<ProfessionalExperience />
<PastProjects />
<!-- <Development /> -->
