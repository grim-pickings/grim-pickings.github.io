<script>
	import Web from '$lib/website';
	import { Grid, Card } from '$lib/semantic-ui-svelte';

	const sections = [
		{ name: 'Background Info', index: 1 },
		{ name: 'Setup', index: 2 },
		{ name: 'Materials', index: 3 },
		{ name: 'Start Play', index: 4 },
		{ name: 'Phases', index: 5 },
		{ name: 'How To Win', index: 6 }
	];

	function regroupSections(acc, section) {
		const allGroups = [...acc];
		const lastGroup = allGroups.length - 1;
		if (allGroups[lastGroup].length < 3) {
			allGroups[lastGroup].push(section);
		} else {
			allGroups.push([section]);
		}
		return allGroups;
	}

	const sectionsGrouped = sections.reduce(regroupSections, [[]]);
</script>

<Web>
	<Grid stackable>
		<Grid.Row columns="1">
			<Grid.Column>
				<h1>HOW TO PLAY</h1>
			</Grid.Column>
			<Grid.Column>
				<h2>INDEX</h2>
			</Grid.Column>
		</Grid.Row>

		{#each sectionsGrouped as group}
			<Grid.Row columns="4">
				{#each group as section}
					<Grid.Column>
						<Grid columns="2">
							<Grid.Column width="2">
								<h1>{section.index}</h1>
							</Grid.Column>
							<Grid.Column width="14">
								<Card style="background-color: var(--main-bg); box-shadow: none;">
									<Card.Content>
										<Card.Header style="color:white">{section.name}</Card.Header>
										<Card.Description style="color:white">
											Lorem ipsum, dolor sit amet consectetur adipisicing.
										</Card.Description>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid>
					</Grid.Column>
				{/each}
			</Grid.Row>
		{/each}
	</Grid>
</Web>

<style>
	@media all and (min-width: 768px) {
		h1 {
			font-size: 66px;
		}

		h2 {
			font-size: 25px;
		}
	}
</style>
