<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
</script>

<section class="min-h-full navbar-offset">
	<div class="container mx-auto">
		<h1 class="text-center text-xl tracking-widest py-8 border-b-2">SHOP ALL</h1>
		<div class="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 pb-16 ">
			{#each [...Array(8).keys()] as index}
				<ProductCard />
			{/each}
		</div>
	</div>
</section>
