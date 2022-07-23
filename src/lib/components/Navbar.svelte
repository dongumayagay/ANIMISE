<script>
	import { navbarHeight } from '$lib/store/constants';
	import logo_title from '$lib/assets/logo-title.svg';
	let scrollY;
</script>

<svelte:window bind:scrollY />

<nav
	class={` bg-white h-[${navbarHeight.mobile}rem] sm:h-[${navbarHeight.sm}rem] py-3 px-4 sticky top-0 inset-x-0 flex items-center shadow`}
>
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
	<img src={logo_title} class=" h-7 sm:h-10" alt="" />
	<div class="flex-1 ml-auto justify-end flex space-x-4">
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
