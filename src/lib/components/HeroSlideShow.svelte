<script>
	import { fade, fly } from 'svelte/transition';
	import banner1 from '$lib/assets/banners/banner (1).webp';
	import banner2 from '$lib/assets/banners/banner (2).webp';
	import banner3 from '$lib/assets/banners/banner (3).webp';
	import banner4 from '$lib/assets/banners/banner (4).webp';
	import banner5 from '$lib/assets/banners/banner (5).webp';
	import { onDestroy, onMount } from 'svelte';

	const banners = [
		{ name: 'Polo-shirts', image: banner1 },
		{ name: 'The Great Pretenders', image: banner2 },
		{ name: 'Ghost Fighter', image: banner3 },
		{ name: 'Hunter x Hunter', image: banner4 },
		{ name: 'Slippes', image: banner5 }
	];

	const slideInterval = 5000;
	let currentBannerIndex = 0;
	let scrollY;
	let autoSlide;
	function next() {
		if (currentBannerIndex < banners.length - 1) currentBannerIndex += 1;
		else currentBannerIndex = 0;
	}
	function previous() {
		if (currentBannerIndex > 0) currentBannerIndex -= 1;
		else currentBannerIndex = banners.length - 1;
	}
	function setCurrentImage(index) {
		currentBannerIndex = index;
	}
	onMount(() => {
		autoSlide = setInterval(next, slideInterval);
	});
	onDestroy(() => {
		clearInterval(autoSlide);
	});

	// $: if (scrollY === 0) {
	// 	autoSlide = setInterval(next, slideInterval);
	// }
	$: if (scrollY > 0) {
		clearInterval(autoSlide);
	}

	$: console.log(scrollY);
</script>

<svelte:window bind:scrollY />

<section class="section">
	<div class="h-full relative bg-black overflow-hidden">
		{#key currentBannerIndex}
			<img
				out:fade|local
				in:fade|local={{ delay: 400 }}
				src={banners[currentBannerIndex].image}
				draggable="false"
				width="800px"
				height="450px"
				class="min-h-full min-w-full object-cover select-none"
				alt=""
			/>

			<div
				out:fly|local={{ y: 100 }}
				in:fly={{ delay: 400, y: 100 }}
				class="absolute inset-0 grid place-items-center bg-gradient-to-t from-black"
			>
				<div class="flex flex-col items-center gap-y-4 text-center text-white">
					<h2>POPULAR</h2>
					<h1 class="text-3xl lg:text-4xl">{banners[currentBannerIndex].name}</h1>
					<a
						class="border-2 py-2 px-4 bg-white text-black  hover:text-white hover:bg-transparent transition"
						href="/shop">SHOP NOW</a
					>
				</div>
			</div>
		{/key}
		<button
			on:click={previous}
			class="absolute inset-y-1/2 rounded-full left-4 text-white"
			title="previous banner"
			aria-label="previous banner"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 aspect-square"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
				/>
			</svg>
		</button>
		<button
			on:click={next}
			class="absolute h-fit inset-y-1/2 rounded-full right-4 text-white"
			title="next banner"
			aria-label="next banner"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 aspect-square"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</button>
		<div class=" absolute inset-x-0 top-[85%] flex justify-center space-x-2">
			{#each banners as banner, index}
				<button
					on:click={() => setCurrentImage(index)}
					title={`banner ${index}`}
					aria-label={`banner ${index}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="aspect-square h-4 text-white "
						class:fill-white={index == currentBannerIndex}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8 01M12 01M16 01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>
			{/each}
		</div>
	</div>
</section>
