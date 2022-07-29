<script>
	import { userSession, listUsers } from '$lib/stores';
	import { goto } from '$app/navigation';
	function submitHandler(event) {
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		$userSession = {
			name: data.name,
			address: data.address,
			email: data.email,
			password: data.password
		};
		const index = $listUsers.findIndex((user) => user.email === data.email);
		if (index === -1) {
			$listUsers = [...$listUsers, $userSession];
			goto('/account');
		} else {
			alert('email already registered');
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
				<h1 class="text-2xl tracking-widest">REGISTER</h1>
				<p>Please fill in the information below</p>
				<input
					class="border border-neutral-400 py-2 px-4"
					type="text"
					name="name"
					id="name"
					placeholder="Full name"
				/>
				<input
					class="border border-neutral-400 py-2 px-4"
					type="text"
					name="address"
					id="address"
					placeholder="Address"
				/>

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
				<button class="bg-black text-white py-2 px-4 tracking-wider" type="submit"
					>CREATE MY ACCOUNT</button
				>
				<p>
					Already have an account?
					<a sveltekit:prefetch class="font-bold" href="/account/login"> Login </a>
				</p>
			</form>
		</div>
	</main>
</section>
