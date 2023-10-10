<script lang="ts">
	import ShowElementTransition from '$lib/components/ShowElementTransition.svelte';
	import Score from './components/Score.svelte';
	import SubScore from './components/SubScore.svelte';

	interface Score {
		label: string;
		score: number;
		maxScore: number;
	}

	const ApScores: Score[] = [
		{ label: 'Physics 1', score: 5, maxScore: 5 },
		{ label: 'Comp. Science A', score: 5, maxScore: 5 },
		{ label: 'Calculus BC', score: 5, maxScore: 5 }
	];

	const GedScores: Score[] = [
		{ label: 'Language Arts', score: 174, maxScore: 200 },
		{ label: 'Social Studies', score: 180, maxScore: 200 },
		{ label: 'Science', score: 181, maxScore: 200 },
		{ label: 'Math', score: 198, maxScore: 200 }
	];
</script>

<section
	id="formal_test_scores"
	class="flex flex-row items-center justify-center w-full h-screen gap-10 bg-dark-blue"
>
	<div class="w-[600px] flex flex-col items-start">
		<ShowElementTransition direction="up" delay={300}>
			<div class="text-5xl font-bold text-bright-yellow">Formal Test Scores</div>
		</ShowElementTransition>
		<ShowElementTransition direction="up" delay={450}>
			<div class="mt-5 text-xl text-slate-200">
				My test scores are a culmination of my studies in academics, learned solely through online
				resources such as khan academy, youtube, edx, and many more.
			</div>
		</ShowElementTransition>
	</div>

	<section class="flex flex-col items-center">
		<div class="flex flex-row gap-5">
			<ShowElementTransition direction="up" speed="slow" delay={600}>
				<Score label="SAT" extraLabel="total" score={1500} maxScore={1600}>
					<div class="flex flex-col gap-2 p-4">
						<SubScore label="Reading and Writing" score={740} maxScore={800} />
						<SubScore label="Math" score={760} maxScore={800} />
					</div>
				</Score>
			</ShowElementTransition>
			<ShowElementTransition direction="up" speed="slow" delay={750}>
				<Score label="TOEFL" extraLabel="total" score={111} maxScore={120}>
					<div class="flex flex-col gap-2 p-4">
						<SubScore label="Reading" score={29} maxScore={30} />
						<SubScore label="Listening" score={30} maxScore={30} />
						<SubScore label="Speaking" score={28} maxScore={30} />
						<SubScore label="Writing" score={24} maxScore={30} />
					</div>
				</Score>
			</ShowElementTransition>
			<ShowElementTransition direction="up" speed="slow" delay={900}>
				<Score label="GED" extraLabel="average" score={183} maxScore={200}>
					<div class="flex flex-col gap-2 p-4">
						<SubScore label="Language Arts" score={174} maxScore={200} />
						<SubScore label="Social Studies" score={180} maxScore={200} />
						<SubScore label="Science" score={181} maxScore={200} />
						<SubScore label="Math" score={198} maxScore={200} />
					</div>
				</Score>
			</ShowElementTransition>
		</div>

		<div class="h-10" />

		<ShowElementTransition direction="up" speed="slow" delay={1150}>
			<div class="text-4xl text-amber-200">AP Scores</div>
		</ShowElementTransition>
		<div class="flex flex-row gap-5">
			{#each ApScores as { label, score, maxScore }, i}
				<div class="flex flex-col items-center gap-2">
					<ShowElementTransition direction="up" speed="slow" delay={1150 + 150 * i}>
						<Score smallerLabel largerScore {label} {score} {maxScore} scoreNextLine={false} />
					</ShowElementTransition>
				</div>
			{/each}
		</div>
		<!-- <div class="flex flex-row gap-5">
			<Score {...SatScore} />
			<Score {...ToeflScore} />
		</div>

		<div class="text-5xl text-amber-200">GED Scores</div>
		<div class="flex flex-row items-center gap-5 w-fit">
			{#each GedScores as { label, score, maxScore }, i}
				<Score label="average:" {score} {maxScore} delay={450 + 100 * i} />
			{/each}
		</div>

		<div class="text-5xl text-amber-200">AP Scores</div>
		<div class="flex flex-row items-center gap-5 w-fit">
			{#each ApScores as { label, score, maxScore }, i}
				<Score {score} {maxScore} delay={450 + 100 * i} />
			{/each}
		</div> -->
	</section>
</section>
