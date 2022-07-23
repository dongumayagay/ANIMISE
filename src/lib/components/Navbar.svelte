<script>
	import logo_title from '$lib/assets/logo-title.svg';
	let scrollY;
	let innerWidth;
</script>

<svelte:window bind:scrollY bind:innerWidth />

<header class={`bg-white h-16 sm:h-20 py-3 px-4 sticky top-0 inset-x-0 shadow-md flex`}>
	<nav class={`flex items-center container mx-auto`}>
		{#if innerWidth < 1024}
			<div class="flex-1 mr-auto">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</div>
		{/if}
		<img src={logo_title} class=" h-7 sm:h-10" alt="" />
		{#if innerWidth >= 1024}
			<div class="flex-1 flex space-x-8 justify-center font-medium">
				<a href="">NEW</a>
				<a href="">SHOP ALL</a>
				<a href="">BRANDS</a>
				<a href="">CLOTHING</a>
				<a href="">ACCESSORIES</a>
				<a href="">HOME GOODS</a>
			</div>
		{/if}
		<div class="flex-1 lg:flex-initial ml-auto justify-end flex space-x-4">
			{#if innerWidth >= 1024}
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
						d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{/if}
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
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
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
					d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
				/>
			</svg>
		</div>
	</nav>
</header>
