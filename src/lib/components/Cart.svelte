<script>
	import { fade, fly } from 'svelte/transition';
	import ItemCart from './ItemCart.svelte';
	export let showCart;
	let itemExample = {
		name: 'Kanino ka lang?',
		price: 420,
		quantity: 69,
		image: 'https://via.placeholder.com/150'
	};
	let cartItems = [itemExample];

	const toggleCart = () => (showCart = !showCart);
</script>

<div
	in:fade|local={{ duration: 100 }}
	out:fade|local={{ duration: 100, delay: 100 }}
	class="fixed inset-0 h-full w-screen z-20 bg-black/40 overflow-hidden"
	on:click|self={toggleCart}
>
	<nav
		in:fly|local={{ x: 512, delay: 100 }}
		out:fly={{ x: 512 }}
		class=" bg-white max-w-[80%] ml-auto sm:max-w-lg h-full flex flex-col"
	>
		<header class=" p-4 flex items-center border-b ">
			<h1 class="text-xl">Cart</h1>
			<button on:click={toggleCart} class="ml-auto">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</header>
		<ul class="px-4 flex flex-col gap-y-2">
			{#each cartItems as cartItem, index}
				<ItemCart item={cartItem} />
			{:else}
				{'No Item :('}
			{/each}
		</ul>
		{#if cartItems.length != 0}
			<footer class="mt-auto border-t px-4 py-6">
				<button class="text-lg uppercase bg-indigo-700 text-white w-full py-3">Checkout</button>
			</footer>
		{/if}
	</nav>
</div>
