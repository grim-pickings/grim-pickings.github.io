<script>
	import Web from '$lib/website';
	import { Grid, Image } from '$lib/semantic-ui-svelte';
</script>

<Web>
	<Grid columns={2} stackable>
		<Grid.Row>
			<Grid.Column>
				<h1>Art</h1>
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum accusantium quae
					deleniti ipsum? Atque aliquid ea tempora cum laboriosam sunt tempore ut iusto facilis, eos
					vero nisi. Sunt, accusantium asperiores.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat voluptatum, hic
					dolore, sint at consectetur odio animi perspiciatis voluptas labore incidunt quo cum velit
					omnis beatae, ab error eveniet.
				</p>
				<p>
					In quod esse eius recusandae quae eligendi, ut tempore voluptatem est exercitationem?
					Quasi, omnis laudantium, et quam alias eius reiciendis voluptate enim aspernatur at atque
					tenetur unde repellat. Ut, officia.
				</p>
			</Grid.Column>
			<Grid.Column>
				<Image src="?" style="height: 300px; width: 300px; background-color: white;" />
			</Grid.Column>
		</Grid.Row>
	</Grid>
</Web>
