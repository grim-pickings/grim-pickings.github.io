<script>
	import Web from '$lib/website';
	import { Grid } from '$lib/semantic-ui-svelte';
</script>

<Web>
	<Grid columns="2" style="height: calc(var(--content-height) - 20px);" stackable>
		<Grid.Column verticalAlign="middle" textAlign="right">
			<h1>Grim Pickings</h1>

			<h2>By IUPUI Students</h2>
		</Grid.Column>
	</Grid>
</Web>

<style>
	h1,
	h2 {
		margin: 0;
	}
</style>
