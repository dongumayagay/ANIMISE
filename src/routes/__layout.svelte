<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>ANIMISE</title>
	<meta name="description" content="Anime Merchanise Online Store" />
</svelte:head>

<main class="h-full bg-white snap-y overflow-y-scroll">
	<Navbar />
	<slot />
	<Footer />
</main>

<!-- <div class="bg-orange-300 h-full flex flex-col justify-between">
	<h1>tae</h1>
	<h1>pupu</h1>
</div> -->
