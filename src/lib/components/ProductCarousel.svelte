<script>
	import ProductCard from './ProductCard.svelte';
	import products from '$lib/products.json';
	export let title = 'Title';
</script>

<section class="snap-center py-8 h-4/5 flex flex-col border justify-evenly items-center">
	<h1 class="text-center uppercase text-2xl font-light tracking-widest">{title}</h1>
	<div class=" w-screen flex">
		<div
			class="relative flex gap-6 snap-x snap-mandatory overflow-x-auto example w-full items-center lg:justify-center"
		>
			<div class=" snap-center shrink-0">
				<div class="shrink-0 w-4 sm:w-48" />
			</div>

			{#each [...products.slice(0, 4)] as product}
				<div class="snap-center w-[275px] shrink-0 first:pl-8 last:pr-8">
					<ProductCard {product} />
				</div>
			{/each}
			<div class="snap-center shrink-0">
				<div class="shrink-0 w-4 sm:w-48" />
			</div>
		</div>
	</div>
	<a href="/shop" class="bg-black text-white text-sm py-2 px-4 uppercase"> View all products </a>
</section>

<style>
	.example::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.example {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
