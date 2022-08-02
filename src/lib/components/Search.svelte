<script>
	let showSearchBar = false;
</script>

<button
	title="Search"
	on:click={() => {
		showSearchBar = !showSearchBar;
	}}
>
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

{#if showSearchBar}
	<div
		class="fixed top-16 sm:top-20 inset-x-0 bg-white border-t px-8 py-4 flex items-center gap-x-4"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8"
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
		<!-- svelte-ignore a11y-autofocus -->
		<input
			class="w-full py-4 px-4 text-lg appearance-none "
			placeholder="Search"
			type="search"
			name="search"
			id="search"
			autofocus
		/>
		<button
			title="close searchbar"
			on:click={() => {
				showSearchBar = !showSearchBar;
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
{/if}

<style>
	/* clears the 'X' from Chrome */
	input[type='search']::-webkit-search-decoration,
	input[type='search']::-webkit-search-cancel-button,
	input[type='search']::-webkit-search-results-button,
	input[type='search']::-webkit-search-results-decoration {
		display: none;
	}
</style>
