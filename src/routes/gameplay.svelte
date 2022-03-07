<script>
	import Web from '$lib/website';
	import { Grid, Image } from '$lib/semantic-ui-svelte';
</script>

<Web>
	<Grid columns={2} stackable>
		<Grid.Row>
			<Grid.Column>
				<h1>Gameplay</h1>
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<p>BLANDIT</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan.
				</p>
			</Grid.Column>
			<Grid.Column>
				<Grid columns={2} stackable>
					<Grid.Column>
						<Image src="?" style="height: 300px; width: 300px; background-color: white;" />
						<p>Name 1</p>
					</Grid.Column>
					<Grid.Column>
						<h2>PURUS</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
					</Grid.Column>
				</Grid>
			</Grid.Column>
		</Grid.Row>
	</Grid>
</Web>
