<script>
	import { userSession, userOrders } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import OrderItem from './OrderItem.svelte';
	import { db } from '$lib/firebaseClient';
	import { collection, query, where, onSnapshot } from 'firebase/firestore';

	let orders = [];
	const q = query(collection(db, 'userOrders'), where('owner', '==', $userSession.uid));
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		// querySnapshot.forEach((doc) => {
		// 	orders.push(doc.data());
		// });
		orders = [...querySnapshot.docs.map((doc) => doc.data())];
	});

	onDestroy(() => unsubscribe());
	// onMount(() => {
	// 	const index = $userOrders.findIndex((order) => order.owner === $userSession.email);
	// 	if (index !== -1) {
	// 		const userOrder = $userOrders[index].orders;
	// 		orders = [...userOrder];
	// 	}
	// });
	$: console.log(orders);
</script>

<div class="">
	<h1 class="border-b-2 border-neutral-400 py-2 text-xl">My Orders</h1>
	<ul>
		{#each orders as order}
			<!-- <li>{JSON.stringify(order)}</li> -->
			<!-- <li><OrderItem  /></li> -->
			<OrderItem item={order} />
		{:else}
			<h1 class="text-center text-lg py-4">No Orders</h1>
		{/each}
	</ul>
</div>
