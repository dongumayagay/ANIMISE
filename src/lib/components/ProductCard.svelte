<script>
	import placeholder from '$lib/assets/placeholder.svg';
	export let product = { id: 0, name: 'Product name', price: 420, image: placeholder };
</script>

<a sveltekit:prefetch href={`/product/${product.id}`} class="text-center flex flex-col ">
	<img src={product.image} class=" aspect-square w-full" alt="" />
	<div class=" text-center py-2">
		<h1
			class="text-lg sm:text-xl font-light sm:font-normal uppercase tracking-wider whitespace-nowrap text-ellipsis overflow-hidden"
		>
			{product.name}
		</h1>
		<h2 class="sm:text-lg font-light sm:font-normal text-neutral-500">₱{product.price}</h2>
	</div>
</a>
