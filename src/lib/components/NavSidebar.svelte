<script>
	import { fade, fly } from 'svelte/transition';
	export let showNavSidebar;
	export let navlinks;

	const toggleNavSidebar = () => (showNavSidebar = !showNavSidebar);
</script>

<div
	in:fade|local={{ duration: 100 }}
	out:fade|local={{ duration: 100, delay: 100 }}
	class="fixed inset-0 h-screen w-screen z-20 bg-black/40 overflow-hidden"
	on:click|self={toggleNavSidebar}
>
	<nav
		in:fly|local={{ x: -512, delay: 100 }}
		out:fly={{ x: -512 }}
		class=" bg-white max-w-[80%] sm:max-w-lg h-full flex flex-col"
	>
		<header class=" p-4 ">
			<button on:click={toggleNavSidebar} class="">
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
		</header>
		<ul class="px-4 flex flex-col gap-y-2">
			{#each navlinks as navlink}
				<li class="border-b-2 py-2">
					<a class="text-xl " href={navlink.path}>{navlink.name}</a>
				</li>
			{/each}
			<a class=" mt-4 text-lg" href="/account">Account</a>
		</ul>
	</nav>
</div>
