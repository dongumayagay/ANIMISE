<script>
	let showCustomerSupport = true;
</script>

<button
	on:click={() => (showCustomerSupport = !showCustomerSupport)}
	class="fixed bottom-[7%] right-[7%] sm:right-[5%] bg-neutral-200 p-3 rounded-full shadow-lg"
>
	{#if showCustomerSupport === false}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 aspect-square"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
			/>
		</svg>
	{:else}
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
	{/if}
</button>

{#if showCustomerSupport}
	<div
		class="bg-white shadow-xl rounded-lg flex flex-col z-10 fixed inset-x-0 mx-auto bottom-[5%] w-[90vw] max-w-sm h-[85vh] sm:h-[512px] sm:bottom-[15%] sm:mx-0 sm:ml-auto sm:right-[5%] "
	>
		<header class="bg-neutral-800 text-white sm:rounded-t-lg p-3">
			<div class="flex justify-between">
				<h1>ANIMISE Customer Support</h1>
				<button on:click={() => (showCustomerSupport = !showCustomerSupport)}>
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
			</div>
			<p class="text-sm text-neutral-400">Live Support only available on working hours</p>
		</header>
		<main class="flex-1 p-2 flex flex-col gap-y-2 overflow-y-auto">
			<section class=" p-2 border shadow">
				<h1 class="font-bold">Quick Answers</h1>
				<ul>
					<li>
						<button class="text-left py-1 px-2 hover:bg-neutral-300">Where's My Order?</button>
					</li>
					<li><button class="text-left py-1 px-2 hover:bg-neutral-300">Return an Item</button></li>
					<li>
						<button class="text-left py-1 px-2 hover:bg-neutral-300">Change/Cancel my Order</button>
					</li>
				</ul>
			</section>
			<section class=" p-2 border shadow">
				<h1 class="font-bold">Manage your orders</h1>
				<ul>
					<li><button class="text-left py-1 px-2 hover:bg-neutral-300">Track an order</button></li>
					<li>
						<button class="text-left py-1 px-2 hover:bg-neutral-300"
							>Report and issue with an order</button
						>
					</li>
				</ul>
			</section>
		</main>
		<footer class=" sm:rounded-b-lg p-2 shadow">
			<form class="flex items-center gap-x-1">
				<input
					class="border w-full border-neutral-500 rounded h-8 px-1.5 text-base"
					type="text"
					placeholder="Type your message"
				/>
				<button
					class="rounded h-8 p-1.5 text-white border border-black bg-black hover:bg-white hover:text-black transition-colors"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-full"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
						/>
					</svg></button
				>
			</form>
		</footer>
	</div>
{/if}
