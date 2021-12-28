<script context="module">
	import NavBar from '$lib/components/layout/NavBar.svelte';
</script>

<NavBar />
<div class="body">
	<div class="leftPadding" />
	<div>
		<slot />
	</div>
	<div class="rightPadding" />
</div>

<style lang="scss">
	.body {
		display: grid;
		grid-template-columns: 10vw 1fr 10vw;
	}
</style>
