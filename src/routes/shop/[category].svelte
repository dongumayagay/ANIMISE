<script>
	import { page } from '$app/stores';
	const category = $page.params.category;
	import stop from '$lib/assets/stop.png';
</script>

<div class="section pt-16 sm:pt-20">
	<div class="container mx-auto text-center p-8">
		<img src={stop} alt="" class="mx-auto max-w-full" />
		<h1 class="text-4xl uppercase font-bold">{category} page under construciton</h1>
	</div>
</div>
