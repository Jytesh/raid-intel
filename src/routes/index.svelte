<script lang="ts">
	import { browser } from '$app/env';

	import Nations from '$lib/components/page/Nations.svelte';
	import Loader from '$lib/components/utils/Loader.svelte';

	import { NATION_ID } from '$lib/stores';
	import type { Nation } from '$lib/utils/api';
	import { goto } from '$app/navigation';

	let isLoading = true,
		isError = false;
	let nations = [];
	if (browser) {
    const nation = localStorage.getItem('nationID');
    nation && NATION_ID.set(nation)
  }
	console.log({ $NATION_ID });
	$: {
		if ($NATION_ID && $NATION_ID != 'none') {
			fetchNation($NATION_ID);
		} else {
			if (browser) goto('/signIn');
		}
	}
	function fetchNation(id: string) {
		if (browser) {
			const params = new URLSearchParams({ id });
			fetch(`/api/blitz.json?${params}`)
				.then((res) => res.json())
				.then((res) => {-
					console.log(res);
					if (!res.data.length) {
						localStorage.removeItem('nationID');
						isError = true;
						goto('/signIn');
						return;
					}
					console.log({ res }, res.data);
					nations = [...(res.data as Nation[])];
					isLoading = false;
				})
				.catch((err) => {
					isError = true;
					localStorage.removeItem('nationID');
					console.error({ err });
				});
		}
	}
</script>

{#if $NATION_ID && !isError}
	{#if isLoading}
		<div class="center">
			<Loader />
			Gathering Intel...
		</div>
	{:else}
		<Nations {nations} />
	{/if}
{/if}

<style lang="scss">
	.center {
		background-color: #2c2c2c2d;
		margin-top: 10vh;
		height: 30vh;
		width: 100%;
		display: grid;
		place-items: center;
		border-radius: 1em;
		box-shadow: 0 0.5em 1em 0 rgba(51, 135, 184, 0.13);
	}
</style>
