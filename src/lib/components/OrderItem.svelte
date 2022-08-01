<script>
	export let item;
</script>

<div
	class="flex mt-4 gap-x-4 border border-neutral-200 rounded-lg shadow-md hover:shadow-xl transition-shadow"
>
	<div class=" grid place-items-center">
		<img
			src={item.product_image}
			class="h-[100px] md:h-[150px] aspect-square object-cover w-full"
			alt=""
		/>
	</div>
	<div class=" flex flex-grow flex-col sm:flex-row sm:items-center overflow-hidden px-2 ">
		<h1 class=" flex-1 text-xl text-ellipsis whitespace-nowrap overflow-hidden">
			{item.product_name}
		</h1>
		<h1 class=" flex-1">₱{item.product_price}</h1>
		<h1 class=" flex-1">Qty: {item.order_quantity}</h1>
		<h1 class=" flex-1">Total: ₱{item.order_total}</h1>
		<h1 class=" flex-1 text">{item.order_date.toDate().toLocaleString()}</h1>
	</div>
</div>
