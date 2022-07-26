<script>
	import { userSession, userOrders } from '$lib/stores';
	import { onMount } from 'svelte';
	import OrderItem from './OrderItem.svelte';

	let orders = [];
	onMount(() => {
		const index = $userOrders.findIndex((order) => order.owner === $userSession.email);
		if (index !== -1) {
			const userOrder = $userOrders[index].orders;
			orders = [...userOrder];
		}
	});
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
