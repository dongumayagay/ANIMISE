<script>
	import { cart } from '$lib/stores';
	export let item;

	function removeItem(id) {
		$cart = $cart.filter((value) => value.id !== id);
	}

	function saveCart() {
		if (item.quantity > 99) item.quantity = 99;
		else if (item.quantity < 1) item.quantity = 1;
		$cart = [...$cart];
	}

	function addqty(toadd) {
		item.quantity += toadd;
		saveCart();
	}
</script>

<div class="flex py-4">
	<div class="h-[100px] md:h-[150px] aspect-square">
		<img src={item.image} class=" object-cover w-full" alt="" />
	</div>
	<div class=" flex flex-grow flex-col overflow-hidden px-2">
		<h1 class="flex-1 text-xl text-ellipsis whitespace-nowrap overflow-hidden">
			{item.name}
		</h1>
		<h1 class="flex-1">₱{item.price}</h1>
		<div class="flex gap-x-4 sm:gap-x-0 sm:gap-y-4 sm:flex-col">
			<div class="flex-1 flex border">
				<button on:click={() => addqty(-1)} class="flex-1 flex justify-center text-neutral-600 py-1"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
					</svg></button
				>
				<input
					on:blur={saveCart}
					class="sm:text-lg w-0 flex-grow-[2] text-center"
					type="number"
					min="1"
					max="99"
					bind:value={item.quantity}
				/>
				<button on:click={() => addqty(1)} class="flex-1 flex justify-center text-neutral-600 py-1"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
					</svg></button
				>
			</div>
			<button
				on:click={() => removeItem(item.id)}
				class="flex justify-center gap-2 sm:border sm:py-1 border-black sm:hover:bg-black sm:hover:text-white transition-colors"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
				<h1 class="hidden sm:block">REMOVE</h1>
			</button>
		</div>
		<!--  -->
	</div>
</div>
