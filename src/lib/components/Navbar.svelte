<script>
	import logo_title from '$lib/assets/logo-title.svg';
	import Cart from './Cart.svelte';
	import NavSidebar from './NavSidebar.svelte';
	import { showCart } from '$lib/stores';
	import Search from './Search.svelte';
	let showNavSidebar = false;

	const navlinks = [
		{ name: 'NEW', path: '/shop/new arrivals' },
		{ name: 'SHOP ALL', path: '/shop' },
		{ name: 'BRANDS', path: '/shop/brands' },
		{ name: 'APPARELS', path: '/shop/apparels' },
		{ name: 'ACCESSORIES', path: '/shop/accessories' },
		{ name: 'COLLECTIBLES', path: '/shop/collectibles' }
	];
	const toggleNavSidebar = () => (showNavSidebar = !showNavSidebar);
</script>

{#if showNavSidebar}
	<NavSidebar {navlinks} bind:showNavSidebar />
{/if}
{#if $showCart}
	<Cart />
{/if}
<header class="bg-white h-16 sm:h-20 py-3 px-4 fixed top-0 inset-x-0 z-10 shadow-md flex">
	<nav class="flex items-center container mx-auto">
		<div class="flex-1 mr-auto block lg:hidden">
			<button
				on:click={toggleNavSidebar}
				title="toggle sidebar navigation"
				aria-label="toggle sidebar navigation"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 hover:text-logo_red transition-colors duration-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
		<a sveltekit:prefetch href="/">
			<img src={logo_title} class="" height="28px" width="150px" alt="animise logo" />
		</a>
		<div class="flex-1 hidden lg:flex space-x-8 justify-center font-medium">
			{#each navlinks as navlink}
				<a
					sveltekit:prefetch
					class="link link-underline link-underline-black text-black"
					href={navlink.path}>{navlink.name}</a
				>
			{/each}
		</div>
		<div class="x flex-1 lg:flex-initial ml-auto justify-end flex gap-x-4">
			<a sveltekit:prefetch href="/account" title="Account">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="hidden lg:block h-6 w-6 hover:text-logo_red transition-colors duration-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</a>
			<Search />
			<button on:click={() => ($showCart = !$showCart)} title="Cart">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 hover:text-logo_red transition-colors duration-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
					/>
				</svg>
			</button>
		</div>
	</nav>
</header>

<style>
	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.2s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#d0021b, #d0021b);
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%;
	}
</style>
