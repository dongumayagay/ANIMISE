<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { userSession } from '$lib/stores';
	import { auth } from '$lib/firebaseClient.js';
	import { onAuthStateChanged } from 'firebase/auth';
	import CustomerSupport from '../lib/components/CustomerSupport.svelte';
	onAuthStateChanged(auth, (user) => {
		// if (user) {
		// 	// User is signed in, see docs for a list of available properties
		// 	// https://firebase.google.com/docs/reference/js/firebase.User
		// 	// const uid = user.uid;
		// 	// ...
		// } else {
		// 	// User is signed out
		// 	// ...
		// }
		// if (user !== null) {
		// 	console.log(user);
		// }
		$userSession = user;
	});
</script>

<svelte:head>
	<title>ANIMISE</title>
	<meta name="description" content="Anime Merchanise Online Store" />
</svelte:head>

<main class="h-full  bg-white snap-y overflow-x-hidden">
	<Navbar />
	<slot />
	<Footer />
	<CustomerSupport />
</main>

<!-- <div class="bg-orange-300 h-full flex flex-col justify-between">
	<h1>tae</h1>
	<h1>pupu</h1>
</div> -->
