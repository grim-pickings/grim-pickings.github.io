<script>
	// import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { Menu, Menuitem, Button } from 'svelte-mui';
	import Zombie from '$lib/images/Zombie/PNG/Poses/character_zombie_think.png';

	let posX = 0;
</script>

<nav>
	<div>
		<Button color="white">
			<a href="{base}/">Grim Pickings</a>
		</Button>
	</div>

	<ul>
		<li>
			<Button color="white">
				<a href="{base}/">Home</a>
			</Button>
		</li>
		<li>
			<Button color="white">
				<a href="{base}/rules">How To Play</a>
			</Button>
		</li>
		<li>
			<Button color="white">
				<a href="{base}/pwa/login">The App</a>
			</Button>
		</li>
		<li>
			<Menu --bg-popover="#6B5580" dy={40}>
				<Button slot="activator" color="white" ripple={false}>
					<span>About</span>
				</Button>

				<Menuitem href="{base}/gameplay">
					<Button fullWidth color="white"><span>Gamplay</span></Button>
				</Menuitem>

				<Menuitem href="{base}/art">
					<Button fullWidth color="white"><span>Art</span></Button>
				</Menuitem>

				<Menuitem href="{base}/tech">
					<Button fullWidth color="white"><span>Technology</span></Button>
				</Menuitem>

				<Menuitem href="{base}/credits">
					<Button fullWidth color="white"><span>Credits</span></Button>
				</Menuitem>
			</Menu>
		</li>
	</ul>
</nav>

<div class="content">
	<slot />
	<div class="character" style="left: calc({50 + posX}% - 48px);">
		<img src={Zombie} alt="zombie" />
	</div>
</div>

<style>
	:global(@font-face) {
		family: 'Egypt';
		src: url('$lib/fonts/Egyptaxt.ttf');
	}

	:global(.egypt) {
		font-family: Egypt, 'Times New Roman', Times, serif;
		font-weight: 400;
	}

	:global(:root) {
		--main-bg: #23203e;
		--content-height: calc(100vh - 50px);
	}

	nav {
		background-color: #23203e;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav ul {
		width: 715px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	nav ul li {
		list-style: none;
	}

	nav a {
		color: white;
		text-decoration: none;
	}

	@media all and (min-width: 768px) {
		nav a,
		nav span {
			font-size: 21px;
		}
	}

	.content {
		background-color: #23203e;
		min-height: var(--content-height);
		color: white;
		padding: 20px;
	}

	.character {
		position: fixed;
		bottom: 0;
	}

	@media all and (min-width: 768px) {
		:global(h1) {
			font-size: 66px;
		}

		:global(h2) {
			font-size: 25px;
		}
	}
</style>
