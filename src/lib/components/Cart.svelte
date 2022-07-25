<script>
	import { fade, fly } from 'svelte/transition';
	import ItemCart from './ItemCart.svelte';
	import { cart, showCart, totalAmountCart } from '$lib/stores.js';
	import aqua from '$lib/assets/anime-cute.gif';
	let itemExample = {
		name: 'Kanino ka lang?',
		price: 420,
		quantity: 69,
		image: 'https://via.placeholder.com/150'
	};
	// $cart = [itemExample];
</script>

<div
	in:fade|local={{ duration: 100 }}
	out:fade|local={{ duration: 100, delay: 100 }}
	class="fixed inset-0 h-full w-screen z-20 bg-black/40 overflow-hidden"
	on:click|self={() => ($showCart = !$showCart)}
>
	<nav
		in:fly|local={{ x: 512, delay: 100 }}
		out:fly={{ x: 512 }}
		class=" bg-white max-w-[80%] ml-auto sm:max-w-lg h-full flex flex-col"
	>
		<header class=" p-4 flex items-center border-b ">
			<h1 class="text-xl">Cart</h1>
			<button on:click={() => ($showCart = !$showCart)} class="ml-auto">
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
			{#each $cart as cartItem}
				<ItemCart item={cartItem} />
			{:else}
				<div class="text-center py-8">
					<h1 class=" uppercase py-4 sm:text-lg tracking-wider">Your cart is empty</h1>
					<img class="sm:w-2/3 mx-auto" src={aqua} alt="" />
				</div>
			{/each}
		</ul>
		{#if $cart.length != 0}
			<footer class="mt-auto border-t px-4 py-6">
				<button class=" uppercase bg-black text-white tracking-widest w-full py-3"
					>Checkout ● ₱{$totalAmountCart}</button
				>
			</footer>
		{/if}
	</nav>
</div>
