<script context="module">
	export const prerender = true;
</script>

<script>
	import HeroSlideShow from '../lib/components/HeroSlideShow.svelte';
	import ProductCarousel from '../lib/components/ProductCarousel.svelte';
</script>

<svelte:head>
	<title>ANIMISE | Your favorite Animerch store ♥</title>
</svelte:head>

<HeroSlideShow />
<ProductCarousel title={'Trending'} />
<ProductCarousel title={'New Arrivals'} />
<ProductCarousel title={'Popular'} />
<ProductCarousel title={'Best Seller'} />
