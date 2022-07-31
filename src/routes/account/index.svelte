<script>
	import { userSession } from '$lib/stores';
	import { goto } from '$app/navigation';
	import Account from '../../lib/components/Account.svelte';
</script>

{#if $userSession}
	<section class="navbar-offset h-screen">
		<main class="container mx-auto">
			<Account />
		</main>
	</section>
{:else}
	<section class=" h-[80vh] grid place-items-center">
		<div class="flex flex-col items-center gap-y-2">
			<h1 class="text-2xl">You're not logged-in</h1>
			<div class="flex flex-col items-center sm:flex-row sm:gap-x-2">
				<a sveltekit:prefetch class="bg-black text-white px-4 py-1 uppercase" href="/account/login">
					signin
				</a>
				or
				<a
					sveltekit:prefetch
					class="bg-black text-white px-4 py-1 uppercase"
					href="/account/register">signup</a
				>
			</div>
			to continue
		</div>
	</section>
{/if}
