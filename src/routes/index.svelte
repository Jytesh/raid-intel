<script lang="ts">
	import { browser } from '$app/env';

	import Loader from '$lib/components/utils/Loader.svelte';
	import { NATION_ID } from '$lib/stores';
	import { onMount } from 'svelte';
	let value = '';
	let isLoading = true;
	$: {
		if ($NATION_ID && $NATION_ID != 'none') {
			fetchNation($NATION_ID);
		}
	}
	function fetchNation(id: string) {
		if (browser) {
			const params = new URLSearchParams({ id });
			fetch(`/api/data.json?${params}`)
				.then((res) => res.json())
				.then((res) => {
					console.log({ res });
					isLoading = false;
				});
		}
	}
	function storenationID(event) {
		if (event.key === 'Enter') {
			if (!value) return;
			NATION_ID.update(() => value);
			localStorage.setItem('nationID', value);
			document.removeEventListener('keydown', storenationID);
		}
	}
	onMount(() => {
		const key = localStorage.getItem('nationID');
		if (key) {
			NATION_ID.update(() => key);
		} else {
			NATION_ID.update(() => '');
			document.addEventListener('keydown', storenationID);
		}
	});
</script>

{#if $NATION_ID}
	{#if isLoading}
		<div class="center">
			<Loader />
			Gathering Intel...
		</div>
	{:else}
		<!-- else content here -->
	{/if}
{:else}
	<div class="keyEntry">
		<h1>Enter Your Nation ID</h1>
		<input bind:value />
		<button on:click={() => storenationID({ key: 'Enter' })}> Go </button>
	</div>
{/if}

<style lang="scss">
	.keyEntry {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		margin: 18vh 18vw;
		padding: 2vh 2vw;
		background-color: #2c2c2c2d;
		border-radius: 1em;
		box-shadow: 0 0.5em 1em 0 rgba(51, 135, 184, 0.13);

		button {
			margin: auto;
			padding: 1vh 0.2vw;
			width: 30%;
		}
	}

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
