<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	import Button, { Icon } from '@smui/button';
	import Textfield from '@smui/textfield';
	import Snackbar, { Actions, Label, SnackbarComponentDev } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';

	import Nations from '$lib/components/page/Nations.svelte';
	import Loader from '$lib/components/utils/Loader.svelte';

	import { NATION_ID } from '$lib/stores';
	import { processNation } from '$lib/utils';
	import type { Nation } from '$lib/utils/api';

	let value = '';
	let isLoading = true, isError = false;
	let nations = [];
	let warningBar: SnackbarComponentDev;

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
					if (!res.data) {
						localStorage.removeItem('nationID')
						isError = true;
						setTimeout(() => {
							warningBar.open()
						}, 100)
						return
					}
					console.log({ res }, res.data)
					nations = [...(res.data as Nation[])].map(processNation);
					isLoading = false;
				})
				.catch((err) => {
					isError = true;
					localStorage.removeItem('nationID')
					console.error({ err });
				});
		}
	}
	function storenationID(event) {
		if (event.key === 'Enter') {
			if (!value) return (isError = false && warningBar.open());
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

{#if $NATION_ID && !isError}
	{#if isLoading}
		<div class="center">
			<Loader />
			Gathering Intel...
		</div>
	{:else}
		<Nations {nations} />
	{/if}
{:else}
	<div class="keyEntry">
		<h1>Enter Your Nation ID</h1>
		<Textfield class="shapedFilled" variant="outlined" bind:value />
		<Button on:click={() => storenationID({ key: 'Enter' })} variant="unelevated">
			<Icon class="material-icons">arrow_forward</Icon>
		</Button>
	</div>
	<Snackbar bind:this={warningBar} on:mount={() => {
		console.log('mounted')
		isError && warningBar.open()
}}>
		<Label>{isError ? 'Your Nation ID was invalid' : 'Enter a valid nation ID!'}</Label>
		<Actions>
			<IconButton class="material-icons" title="Dismiss">close</IconButton>
		</Actions>
	</Snackbar>
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

		h1 {
			margin-bottom: 1rem;
		}
		:global(button) {
			margin: auto;
			padding: 1vh 0.2vw;
			width: 30%;
		}
		:global(.mdc-text-field) {
			background-color: var(--form-element-background-color);
		}
		:global(input) {
			--box-shadow: none !important;
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
