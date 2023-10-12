<script lang="ts">
	export let label: string;
	export let score: number;
	export let maxScore: number;
</script>

<div class="min-w-[100px]">
	<div class="text-gray-300 whitespace-nowrap">{label}</div>
	<div class="flex flex-row items-end">
		<div class="text-4xl font-bold text-amber-100">{score}</div>
		<div class="mb-1 text-sm text-gray-300">{'/' + maxScore}</div>
	</div>
</div>
