<script context="module">
	export const prerender = true;
</script>

<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import products from '$lib/products.json';
</script>

<svelte:head>
	<title>Shop All | ANIMISE</title>
</svelte:head>

<section class="min-h-full  snap-start pt-16 sm:pt-20 ">
	<div class="container mx-auto">
		<h1 class="text-center text-xl tracking-widest py-8 border-b-2">SHOP ALL</h1>
		<div class="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 pb-16 ">
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>
