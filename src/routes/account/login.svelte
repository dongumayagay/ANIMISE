<script>
	import { userSession, listUsers } from '$lib/stores';
	import { goto } from '$app/navigation';
	function submitHandler(event) {
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		const index = $listUsers.findIndex((user) => user.email === data.email);
		if (index === -1) {
			alert('your email and/or password is incorrect');
		} else {
			const user = $listUsers[index];
			if (user.password === data.password) {
				$userSession = user;
				goto('/account');
			} else {
				alert('your email or password is incorrect');
			}
		}
	}
</script>

<section class="navbar-offset min-h-[80%] h-4/5">
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
