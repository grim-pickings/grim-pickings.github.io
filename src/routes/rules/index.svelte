<script>
	import { base } from '$app/paths';
	import Web from '$lib/website';
	import { Grid, Card } from '$lib/semantic-ui-svelte';

	const sections = [
		{ name: 'Background Info', index: 1, route: '/story' },
		{ name: 'Setup', index: 2, route: '/setup' },
		{ name: 'Materials', index: 3, route: '/materials' },
		{ name: 'Start Play', index: 4, route: '/start' },
		{ name: 'Phases', index: 5, route: '/phases' },
		{ name: 'How To Win', index: 6, route: '/win' }
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
								<a href="{base}/rules{section.route}">
									<Card style="background-color: var(--main-bg); box-shadow: none;">
										<Card.Content>
											<Card.Header style="color:white">{section.name}</Card.Header>
											<Card.Description style="color:white">
												Lorem ipsum, dolor sit amet consectetur adipisicing.
											</Card.Description>
										</Card.Content>
									</Card>
								</a>
							</Grid.Column>
						</Grid>
					</Grid.Column>
				{/each}
			</Grid.Row>
		{/each}
	</Grid>
</Web>

<style>
</style>
