<script context="module">
	export const prerender = true;
</script>

<script>
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebaseClient.js';
	import { signInWithEmailAndPassword } from 'firebase/auth';

	async function submitHandler(event) {
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		try {
			const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
			goto('/account');
		} catch (error) {
			console.log(error);
			alert(error.code);
		}
	}
</script>

<section class="h-[80vh]">
	<main class="container  mx-auto h-full">
		<div class="h-full grid place-items-center text-center">
			<form
				on:submit|preventDefault={submitHandler}
				class=" px-4 w-full flex flex-col gap-y-4 text-lg max-w-lg"
			>
				<h1 class="text-2xl tracking-widest">LOGIN</h1>
				<p>Please enter your e-mail and password</p>
				<input
					class="border border-neutral-400 py-2 px-4"
					type="email"
					name="email"
					id="email"
					placeholder="Email Address"
				/>
				<input
					class="border border-neutral-400 py-2 px-4"
					type="password"
					name="password"
					id="password"
					placeholder="Password"
				/>
				<button class="bg-black text-white py-2 px-4 tracking-wider" type="submit">LOGIN</button>
				<p>
					Don't have have and account?
					<a sveltekit:prefetch href="/account/register" class="font-bold"> Create one </a>
				</p>
			</form>
		</div>
	</main>
</section>
