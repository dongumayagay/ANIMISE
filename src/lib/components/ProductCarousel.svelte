<script>
	import ProductCard from './ProductCard.svelte';
	export let title = 'Title';
	import products from '$lib/products.json';
	// const testProduct = { name: 'Test', price: 420, image: 'https://via.placeholder.com/300' };
	// export let products = [testProduct, testProduct, testProduct, testProduct];
</script>

<section class="snap-center py-8 h-4/5 flex flex-col border justify-evenly items-center">
	<h1 class="text-center uppercase text-2xl font-light tracking-widest">{title}</h1>
	<div class=" w-screen snap-x overflow-x-scroll flex">
		<div
			class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto items-center outline lg:justify-center"
		>
			<div class="snap-center shrink-0">
				<div class="shrink-0 w-4 sm:w-48" />
			</div>
			{#each products as product}
				<div class="snap-center shrink-0 first:pl-8 last:pr-8">
					<ProductCard {product} />
				</div>
			{/each}
			<div class="snap-center shrink-0">
				<div class="shrink-0 w-4 sm:w-48" />
			</div>
		</div>
	</div>
	<button class="bg-black text-white text-sm py-2 px-4 uppercase"> View all products </button>
</section>
