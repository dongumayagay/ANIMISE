<script>
	import gcash from '../lib/assets/icons/gcash.png';
	import maya from '../lib/assets/icons/maya.png';
	import mastercard from '../lib/assets/icons/mastercard.svg';
	import visa from '../lib/assets/icons/visa.svg';
</script>

<div class="navbar-offset h-full flex flex-col justify-center">
	<main class="outline px-8 py text-center flex flex-col">
		<h1>Choose payment method</h1>
		<button> GCash </button>
		<button class="flex"
			><img class="h-4" src={mastercard} alt="" /><img class="h-4" src={visa} alt="" /> Credit & Debit
			Card
		</button>
	</main>
</div>
