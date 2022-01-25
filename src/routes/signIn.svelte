<script lang="ts">
	import { goto } from '$app/navigation';
  import Button, { Icon } from '@smui/button';
	import Textfield from '@smui/textfield';
	import Snackbar, { Actions, Label, SnackbarComponentDev } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';

	import { onMount } from 'svelte';
	import { NATION_ID } from '$lib/stores';
	let value = '';
	let isError = false;
	let warningBar: SnackbarComponentDev;

	// function onSubmit(e) {
	// 	e.preventDefault();
	// 	if (!value) return (isError = true);
	// 	const nationName = Number(
	// 		value.includes('https')
	// 			? value.substring('https://politicsandwar.com/nation/id='.length)
	// 			: value
	// 	);
	// 	if (!nationName) return (isError = true);
	// 	localStorage.setItem('nationData', JSON.stringify([nationName, null]));
	// 	goto('/');
	// 	return false;
	// }
	function storenationID() {
    if (!value) return (isError = false && warningBar.open());
    NATION_ID.update(() => value);
    localStorage.setItem('nationID', value);
    goto('/')
	}

	onMount(() => {
		const key = localStorage.getItem('nationID');
		if (key) {
			NATION_ID.update(() => key);
		} else {
			NATION_ID.update(() => '');
			document.addEventListener('keydown', (e) => e.key == 'Enter' && storenationID);
		}
	});
</script>

<div class="keyEntry">
	<h1>Enter Your Nation ID</h1>
	<Textfield class="shapedFilled" variant="outlined" bind:value />
	<Button on:click={storenationID} variant="unelevated">
		<Icon class="material-icons">arrow_forward</Icon>
	</Button>
</div>
<Snackbar
	bind:this={warningBar}
	on:mount={() => {
		console.log('mounted');
		isError && warningBar.open();
	}}
>
	<Label>{isError ? 'Your Nation ID was invalid' : 'Enter a valid nation ID!'}</Label>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>

<style lang="scss">
	// form {
	// 	background-color: var(--primary-focus);
	// 	padding: 2vh 15vw;
	// 	display: flex;
	// 	flex-direction: column;
	// 	align-items: center;

	// 	& > label {
	// 		font-size: xx-large;
	// 	}
	// 	border: var(--border-width) solid var(--form-element-border-color);
	// 	border-radius: var(--border-radius);
	// }
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
</style>
