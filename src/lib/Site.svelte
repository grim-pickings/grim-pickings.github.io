<script>
	import GamePlay from '$lib/GamePlay.svelte';
	import Art from '$lib/Art.svelte';
	import Tech from '$lib/Tech.svelte';
	import Credits from '$lib/Credits.svelte';
	import Home from '$lib/Home.svelte';

	const screens = ['home', 'gameplay', 'art', 'tech', 'credits'];

	export let initialScreen = 'home';

	let currentScreen = initialScreen;

	function changeScreen(e) {
		currentScreen = e.target.id || '';
		history.pushState({}, '', `/${e.target.id}`);
	}
</script>

<svelte:head>
	<title>Grim Pickings</title>
</svelte:head>

<div class="site {currentScreen}">
	{#if currentScreen === 'gameplay'}
		<GamePlay />
	{:else if currentScreen === 'art'}
		<Art />
	{:else if currentScreen === 'tech'}
		<Tech />
	{:else if currentScreen === 'credits'}
		<Credits />
	{:else}
		<Home />
	{/if}

	<footer>
		<ul>
			{#each screens as screen}
				<li>
					<a
						href="#"
						class={currentScreen === screen ? 'active' : ''}
						id={screen}
						on:click|preventDefault={changeScreen}>{currentScreen === screen ? 'X' : ''}</a
					>
				</li>
			{/each}
		</ul>
	</footer>
</div>

<style>
	@font-face {
		font-family: Egypt;
		src: url($lib/fonts/Egyptaxt.ttf);
	}

	.site.home {
		background-image: url($lib/images/home-bg.png), url($lib/images/bg-1.png);
	}

	.site.art {
		background-image: url($lib/images/art-bg.png), url($lib/images/bg-1.png);
	}

	.site.credits {
		background-image: url($lib/images/credits-bg.png), url($lib/images/bg-1.png);
	}

	.site.tech {
		background-image: url($lib/images/technology-bg.png), url($lib/images/bg-1.png);
	}

	.site.gameplay {
		background-image: url($lib/images/gameplay-bg.png), url($lib/images/bg-1.png);
	}

	.site {
		height: 100%;
		display: flex;
		flex-direction: column;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	footer {
		margin-top: auto;
	}

	footer ul {
		display: flex;
		justify-content: space-around;
		padding-bottom: 20px;
	}

	footer ul li {
		list-style: none;
	}

	footer ul li a {
		display: block;
		height: 64px;
		width: 64px;
		border-radius: 50%;
		text-decoration: none;
		background-color: #281e55;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 50px;
		font-family: Egypt, 'Times New Roman', Times, serif;
		color: black;
	}

	footer ul li a.active {
		background-color: #703fff;
	}
</style>
