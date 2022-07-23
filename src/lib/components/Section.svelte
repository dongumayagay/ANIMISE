<script>
	export let addClass = '';
</script>

<section class={`h-screen snap-end pt-16 sm:pt-24 ${addClass}`}>
	<slot />
</section>
