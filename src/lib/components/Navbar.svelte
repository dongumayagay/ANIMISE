<script>
	import logo_title from '$lib/assets/logo-title.svg';
	import Cart from './Cart.svelte';
	import NavSidebar from './NavSidebar.svelte';

	let showNavSidebar = false;
	let showCart = false;
	const navlinks = [
		{ name: 'NEW', path: '/under-construction' },
		{ name: 'SHOP ALL', path: '/shop' },
		{ name: 'BRANDS', path: '/under-construction' },
		{ name: 'CLOTHING', path: '/under-construction' },
		{ name: 'ACCESSORIES', path: '/under-construction' },
		{ name: 'HOME GOODS', path: '/under-construction' }
	];
	const toggleNavSidebar = () => (showNavSidebar = !showNavSidebar);
	const toggleCart = () => (showCart = !showCart);
</script>

{#if showNavSidebar}
	<NavSidebar {navlinks} bind:showNavSidebar />
{/if}
{#if showCart}
	<Cart bind:showCart />
{/if}
<header class="bg-white h-16 sm:h-20 py-3 px-4 sticky top-0 inset-x-0 z-10 shadow-md flex">
	<nav class="flex items-center container mx-auto">
		<div class="flex-1 mr-auto block lg:hidden">
			<button on:click={toggleNavSidebar}>
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
		<a svelte href="/">
			<img src={logo_title} class=" h-7 sm:h-10" alt="" />
		</a>
		<div class="flex-1 hidden lg:flex space-x-8 justify-center font-medium">
			{#each navlinks as navlink}
				<a class="link link-underline link-underline-black text-black" href={navlink.path}
					>{navlink.name}</a
				>
			{/each}
		</div>
		<div class="x flex-1 lg:flex-initial ml-auto justify-end flex space-x-4">
			<a href="/account" title="Account">
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
			<button title="Search">
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
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
			<button on:click={toggleCart} title="Cart">
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
