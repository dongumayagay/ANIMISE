<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { userSession } from '$lib/stores';
	import { auth } from '$lib/firebaseClient.js';
	import { onAuthStateChanged } from 'firebase/auth';
	import CustomerSupport from '../lib/components/CustomerSupport.svelte';
	onAuthStateChanged(auth, (user) => {
		$userSession = user;
	});
</script>

<svelte:head>
	<title>ANIMISE</title>
	<meta name="description" content="Online Anime-themed Merchanise Store" />
	<meta name="author" content="Don Gumayagay" />
	<meta name="keywords" content="anime store" />
	<meta name="keywords" content="online anime store" />
	<meta name="keywords" content="best anime store" />
	<meta name="keywords" content="anime store near me" />
	<meta name="keywords" content="anime store in my area" />
	<meta name="keywords" content="buy anime merch" />
	<meta name="keywords" content="buy anime merch online" />
	<meta name="keywords" content="buy anime merch clothing" />
	<meta name="keywords" content="buy anime merch apparels" />
	<meta name="keywords" content="buy anime merch accessories" />
	<meta name="google-site-verification" content="JBPiZR00Hy-RYRDtXXcEBFQALyNtGGFZjcMbEnJXmyg" />
	<div id="my-store-77734508" />
	<div>
		<script
			defer
			data-cfasync="false"
			type="text/javascript"
			src="https://app.ecwid.com/script.js?77734508&data_platform=code&data_date=2022-08-03"
			charset="utf-8"></script><script type="text/javascript">
			xProductBrowser(
				'categoriesPerRow=3',
				'views=grid(20,3) list(60) table(60)',
				'categoryView=grid',
				'searchView=list',
				'id=my-store-77734508'
			);
		</script>
	</div>
</svelte:head>

<main class="h-full  bg-white snap-y overflow-x-hidden">
	<Navbar />
	<slot />
	<Footer />
	<CustomerSupport />
</main>
