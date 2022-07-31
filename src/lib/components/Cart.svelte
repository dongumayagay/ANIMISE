<script>
	import { fade, fly } from 'svelte/transition';
	import ItemCart from './ItemCart.svelte';
	import { goto } from '$app/navigation';
	import { cart, showCart, totalAmountCart, userSession, userOrders } from '$lib/stores.js';
	import aqua from '$lib/assets/anime-cute.gif';
	import { db } from '$lib/firebaseClient';
	import { writeBatch, serverTimestamp, collection, doc } from 'firebase/firestore';
	// let itemExample = {
	// 	name: 'Kanino ka lang?',
	// 	price: 420,
	// 	quantity: 69,
	// 	image: 'https://via.placeholder.com/150'
	// };
	// $cart = [itemExample];

	async function submitHandler() {
		try {
			const batch = writeBatch(db);
			const userOrdersRef = collection(db, 'userOrders');
			const orders = $cart.map((cartItem) => {
				return {
					owner: $userSession.uid,
					product_id: cartItem.id,
					product_image: cartItem.image,
					product_name: cartItem.name,
					product_price: cartItem.price,
					order_quantity: cartItem.quantity,
					order_total: cartItem.quantity * cartItem.price,
					order_date: serverTimestamp()
				};
			});

			orders.forEach((orderItem) => {
				const orderRef = doc(userOrdersRef);
				batch.set(orderRef, orderItem);
			});
			await batch.commit();
			$showCart = !$showCart;
			goto('/account');
			$cart = [];
		} catch (error) {
			console.log(error);
			alert(error.code);
		}
	}
	// function submitHandler() {
	// 	const orders = $cart.map((cartItem) => {
	// 		return {
	// 			...cartItem,
	// 			order_date: new Date().toLocaleString()
	// 		};
	// 	});
	// 	const index = $userOrders.findIndex((order) => order.owner === $userSession.email);
	// 	if (index === -1) {
	// 		$userOrders = [
	// 			...$userOrders,
	// 			{
	// 				owner: $userSession.email,
	// 				orders
	// 			}
	// 		];
	// 	} else {
	// 		$userOrders[index].orders = [...$userOrders[index].orders, ...orders];
	// 	}

	// 	$showCart = !$showCart;
	// 	goto('/account');
	// 	$cart = [];
	// }
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
		<ul class="px-4 py-2 flex-1 flex flex-col gap-y-2 overflow-y-auto bg-green-400">
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
			<footer class="mt-auto border-t flex p-2">
				{#if $userSession}
					<a
						on:click={submitHandler}
						href="/"
						class="py-2 uppercase tracking-wider w-full text-center  text-white border border-black bg-black hover:bg-white hover:text-black transition-colors"
						>Checkout ● ₱{$totalAmountCart}</a
					>
				{:else}
					<a
						on:click={() => ($showCart = !$showCart)}
						href="/account/login"
						class="py-2 uppercase tracking-wider w-full text-center  text-white border border-black bg-black hover:bg-white hover:text-black transition-colors"
						>Login to Checkout ● ₱{$totalAmountCart}</a
					>
				{/if}
			</footer>
		{/if}
	</nav>
</div>
