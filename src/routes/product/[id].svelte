<script context="module">
	export const prerender = true;
</script>

<script>
	import { page } from '$app/stores';
	import products from '$lib/products.json';
	import { cart, showCart } from '$lib/stores';

	const id = $page.params.id;
	const product = products[id - 1];

	function addToCart() {
		const index = $cart.findIndex((cartitem) => cartitem.id === product.id);
		if (index === -1) {
			const cartItem = {
				id: product.id,
				name: product.name,
				price: product.price,
				image: product.image,
				quantity: 1
			};
			$cart = [...$cart, cartItem];
		} else {
			$cart[index].quantity += 1;
			$cart = $cart;
		}
		console.log($cart);
		$showCart = true;
	}
</script>

<svelte:head>
	<title>{product.name} | ANIMISE</title>
</svelte:head>
<section class="navbar-offset min-h-full ">
	<main class="container mx-auto flex flex-col md:flex-row sm:py-16 ">
		<div
			class="snap-x flex-1 snap-mandatory aspect-square flex overflow-x-auto px-3 gap-x-3 items-center"
		>
			<img src={product.image} alt={product.name} class=" snap-center aspect-square w-full 	" />
			<img src={product.image} alt={product.name} class=" snap-center aspect-square w-full 	" />
			<img src={product.image} alt={product.name} class=" snap-center aspect-square w-full 	" />
		</div>
		<div class="p-4 flex-1 flex flex-col gap-2">
			<h1 class="text-2xl font-light tracking-wider">{product.name}</h1>
			<h2 class="">₱{product.price}</h2>
			<button
				on:click={addToCart}
				class="w-full py-3 px-4 text-lg  text-white border border-black bg-black hover:bg-white hover:text-black transition-colors"
				>Add to cart</button
			>
			<article class="py-4">
				<h1 class="border-b text-xl font-light">Product Details</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quae sunt delectus
					neque alias repudiandae totam omnis molestiae illum harum! Doloribus vel sapiente
					molestiae! Perspiciatis possimus blanditiis, amet deserunt explicabo ad maiores quam ipsa,
					repellendus at libero consequatur inventore nemo officia voluptas earum, maxime distinctio
					nisi aliquam ut hic culpa. Repellendus impedit provident rerum reiciendis iste nisi
					quibusdam ipsa exercitationem repellat dolore quae veritatis, dolorem maiores odit earum
					inventore! Deleniti suscipit voluptatibus velit similique ad, fugit nulla officiis eos
					ratione. Obcaecati culpa consectetur similique enim accusamus aliquam nulla, error sint id
					molestias quisquam est debitis aspernatur fugiat blanditiis quae perspiciatis.
				</p>
			</article>
		</div>
	</main>
</section>
