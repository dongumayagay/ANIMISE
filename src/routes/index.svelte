<script context="module">
	export const prerender = false;
</script>

<script>
	import HeroSlideShow from '../lib/components/HeroSlideShow.svelte';
	import ProductCarousel from '../lib/components/ProductCarousel.svelte';
</script>

<HeroSlideShow />
<ProductCarousel title={'Trending'} />
<ProductCarousel title={'New Arrivals'} />
<ProductCarousel title={'Popular'} />
<ProductCarousel title={'Best Seller'} />

<!-- 
<main class="bg-black">
	<div class="container mx-auto pt-8  text-center">
		<h1 class=" font-bold text-3xl md:text-5xl">Welcome to ANIMISE</h1>
		<p>To be done, we are just in planning stages of the UI, please wait 😞</p>
		<img class="mx-auto w-full max-w-3xl" src="anime.gif" alt="" />
	</div>
</main> -->
<!-- <div class=" h-screen">tae</div> -->
