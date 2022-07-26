<script>
	import { userSession } from '$lib/stores';
	import { goto } from '$app/navigation';
	import MyOrders from '$lib/components/MyOrders.svelte';

	function submitHandler() {
		$userSession = null;
		goto('/account');
	}
</script>

<div class="mx-auto  max-w-4xl px-4 py-8">
	<button
		on:click={submitHandler}
		class="flex items-center gap-x-1 text-neutral-500 font-medium text-lg"
	>
		<svg
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
				d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
			/>
		</svg>LOGOUT</button
	>
	<div class=" py-4 flex w-full justify-between">
		<div>
			<h1 class="text-2xl tracking-widest">MY ACCOUNT</h1>
			<p>Welcome back, {$userSession.name}!</p>
		</div>
		<button class=" flex gap-x-1 items-center"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 aspect-square"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.25"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
				/>
			</svg>
			<p class="hidden sm:inline text-xl">Edit Info</p>
		</button>
	</div>
	<MyOrders />
</div>
