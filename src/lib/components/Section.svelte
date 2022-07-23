<script>
	import { navbarHeight } from '$lib/store/constants';
	export let addClass = '';
</script>

<!-- pt-16 sm:pt-20  -->
<section
	class={`h-screen snap-end pt-[${navbarHeight.mobile}rem] sm:pt-[${
		navbarHeight.sm + 1
	}rem] ${addClass}`}
>
	<slot />
</section>
