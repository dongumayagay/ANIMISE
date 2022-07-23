<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="h-screen bg-white snap-y overflow-y-scroll">
	<Navbar />
	<slot />
</main>
