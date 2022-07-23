<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="h-screen bg-gray-300 snap-y overflow-scroll">
	<Navbar />
	<slot />
</main>
