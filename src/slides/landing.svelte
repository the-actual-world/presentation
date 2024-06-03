<script>
	import { Slide } from '@components'
	import Step from '@lib/components/step.svelte'
</script>

<Slide animate>
	<img
		src="/icons/theactualworld.png"
		alt="The Actual World"
		class="w-96 mx-auto"
	/>
</Slide>

<Slide animate>
	<div class="flex items-center justify-center gap-4">
		<img src="/icons/theactualworld.png" alt="The Actual World" class="w-52" />
		<h1 class="text-6xl font-bold ml-4">The Actual World</h1>
	</div>
</Slide>

<Slide animate>
	<div class="flex items-center justify-center gap-4">
		<img src="/icons/theactualworld.png" alt="The Actual World" class="w-52" />
		<div class="flex flex-col items-start">
			<h1 class="text-6xl font-bold">The Actual World</h1>
			<p class="text-4xl mt-4 ml-2">Rede Social Realmente Social</p>
		</div>
	</div>
</Slide>
