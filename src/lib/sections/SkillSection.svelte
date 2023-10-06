<script lang="ts">
	export let confidence: number; // from 1 to 100
	export let label: string;

	const labelText = label.split('_').join(' ').toUpperCase();
</script>

<div class="flex flex-col w-full">
	<div class="w-full rounded">
		<div class="rounded bg-amber-100 -ml-[1px]" style="width: {confidence}%;">
			<div class="pl-3 py-0.5 text-lg text-dark-blue">{labelText}</div>
		</div>
	</div>
</div>
