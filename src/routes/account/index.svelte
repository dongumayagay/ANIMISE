<script>
	import { userSession } from '$lib/stores';
	import MyAddress from '../../lib/components/MyAddress.svelte';
	import MyOrders from '../../lib/components/MyOrders.svelte';
	import { goto } from '$app/navigation';
	function submitHandler() {
		$userSession = null;
		goto('/account');
	}
</script>

<section class="navbar-offset min-h-[80%] h-4/5">
	<main class="container mx-auto h-full">
		{#if $userSession}
			<div class=" px-4 py-8">
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
				<div class=" py-4">
					<h1 class="text-2xl tracking-widest">MY ACCOUNT</h1>
					<p>Welcome back, {$userSession.email}!</p>
				</div>
				<MyOrders />
				<MyAddress />
			</div>
		{:else}
			<div class="h-full grid place-items-center">
				<!--  -->
				<div class="flex flex-col items-center gap-y-2">
					<h1 class="text-2xl">You're not logged-in</h1>
					<div class="flex flex-col items-center sm:flex-row sm:gap-x-2">
						<a class="bg-black text-white px-4 py-1 uppercase" href="/account/login"> signin </a>
						or
						<a class="bg-black text-white px-4 py-1 uppercase" href="/account/register">signup</a>
					</div>
					to continue
				</div>
			</div>
		{/if}
	</main>
</section>
