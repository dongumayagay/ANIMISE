<script>
	export let product;
</script>

<div class="text-center ">
	<img src={product.image} class=" w-18 aspect-square" alt="" />
	<div class="py-4">
		<h1 class=" text-xl font-light tracking-widest">{product.name}</h1>
		<h2 class="font-light">₱{product.price}</h2>
	</div>
</div>
