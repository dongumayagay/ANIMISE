<script>
	export let item;
</script>

<div class="flex mt-4 gap-x-4">
	<div class="h-[100px] md:h-[150px] aspect-square">
		<img src={item.image} class=" object-cover w-full" alt="" />
	</div>
	<div class=" flex flex-grow flex-col sm:flex-row sm:items-center overflow-hidden px-2">
		<h1 class=" flex-1 text-xl text-ellipsis whitespace-nowrap overflow-hidden">
			{item.name}
		</h1>
		<h1 class=" flex-1">₱{item.price}</h1>
		<h1 class=" flex-1">Qty {item.quantity}</h1>
		<h1 class=" flex-1">{item.order_date}</h1>
	</div>
</div>
