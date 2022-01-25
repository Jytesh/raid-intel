<script lang="ts">
	import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
	import IconButton from '@smui/icon-button';
	import { Label } from '@smui/common';

	export let nations = [];
	let rowsPerPage = 10;
	let currentPage = 0;
	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, nations.length);
	$: slice = nations.slice(start, end);
	$: lastPage = Math.max(Math.ceil(nations.length / rowsPerPage) - 1, 0);
	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}
</script>

<div class="container-fluid">
  <DataTable table$aria-label="Raid List">
    <Head>
      <Row>
        <Cell numeric>ID</Cell>
        <Cell>Last Active</Cell>
        <Cell numeric>Soldiers</Cell>
        <Cell numeric>Tanks</Cell>
        <Cell numeric>Aircraft</Cell>
        <Cell numeric>Ships</Cell>
        <Cell numeric>Infra</Cell>
        <Cell number>Score</Cell>
      </Row>
    </Head>
    <Body>
      {#each slice as nation (nation.id)}
        <Row
        class="nation"
          on:click={() => window.open('https://politicsandwar.com/nation/id=' + nation.id, '_blank')}
        >
          <Cell numeric>{nation.id}</Cell>
          <Cell>{nation.last_active}</Cell>
          <Cell numeric>{nation.military[0]}</Cell>
          <Cell numeric>{nation.military[1]}</Cell>
          <Cell numeric>{nation.military[2]}</Cell>
          <Cell numeric>{nation.military[3]}</Cell>
          <Cell numeric>{nation.total_infrastructure}</Cell>
          <Cell number>{nation.score}</Cell>
        </Row>
      {/each}
    </Body>
    <Pagination slot="paginate">
      <svelte:fragment slot="rowsPerPage">
        <Label>Rows Per Page</Label>
      </svelte:fragment>
      <svelte:fragment slot="total">
        {start + 1}-{end} of {nations.length}
      </svelte:fragment>
  
      <IconButton
        class="material-icons"
        action="first-page"
        title="First page"
        on:click={() => (currentPage = 0)}
        disabled={currentPage === 0}>first_page</IconButton
      >
      <IconButton
        class="material-icons"
        action="prev-page"
        title="Prev page"
        on:click={() => currentPage--}
        disabled={currentPage === 0}>chevron_left</IconButton
      >
      <IconButton
        class="material-icons"
        action="next-page"
        title="Next page"
        on:click={() => currentPage++}
        disabled={currentPage === lastPage}>chevron_right</IconButton
      >
      <IconButton
        class="material-icons"
        action="last-page"
        title="Last page"
        on:click={() => (currentPage = lastPage)}
        disabled={currentPage === lastPage}>last_page</IconButton
      >
    </Pagination>
  </DataTable>
</div>

<style lang="scss">
  :global(.nation) {
    cursor: pointer;
  }
  :global(th){
    border-bottom-color: #63baff !important;
  }
</style>
