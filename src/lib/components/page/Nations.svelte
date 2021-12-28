<script>
	export let nations;
</script>

<div class="top">
	<div class="searchArea">
		<button />
	</div>
	<div class="nationsTable">
		<div class="nation header">
			<span />
			<span> Nation Name </span>
			<span> Score </span>
			<span> Badges </span>
			<div class="army">
        <span>Soldiers</span>
        <span>Tanks</span>
        <span>Air</span>
        <span>Ship</span>
      </div>
			<span> Missile </span>
			<span> Nuke </span>
			<span> Lootable Money </span>
		</div>
		<div class="scroll">
			{#each nations as nation, index}
				<div class="nation" class:darken={Boolean(index % 2)}>
					<span>{index + 1}</span>
					<span>{nation.nation_name}</span>
					<span>{nation.score}</span>
					<span />
					<div class="army">
						<span>{nation.soldiers}</span>
						<span>{nation.tanks}</span>
						<span>{nation.aircraft}</span>
						<span>{nation.ships}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		padding: 1vh 1vw;
		background-color: #2c2c2c2d;
		border-radius: 1em;
		width: 90vw;
		box-shadow: 0 0.5em 1em 0 rgba(51, 135, 184, 0.13);
	}
	.nationsTable {
		background-color: #2424242d;
		margin: auto;
    width: 80vw;
	}
	.scroll {
		max-height: 70vh;
		
		overflow-y: scroll;
		scrollbar-width: thin;
	}
	::-webkit-scrollbar {
		border-radius: 10px !important;
		width: 16px;
	}
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 14px 14px transparent;
		border: solid 4px transparent;
	}
	::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 14px 14px #bbbbbe;
		border: solid 4px transparent;
		border-radius: 16px;
		height: 30px;
	}

	::-webkit-scrollbar-button {
		display: none;
	}
	.nation {
		padding: 1vh 1vw;
		display: grid;
		grid-auto-rows: 1fr;
		grid-template-columns: 2vw 18vw 4vw 4vw 20vw 4vw 4vw 4vw;
		gap: 0px 2vw;
		justify-content: initial;
		align-content: stretch;
		align-items: center;
		border-radius: 0.2em;
	}
	.header {
		background-color: #0000005e;
	}
	.darken {
		background-color: #1313135e;
	}
	.army {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 2px 4px;
    & > {
      overflow-x: scroll;
    }
	}
</style>
