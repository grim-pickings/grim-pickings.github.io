<script>
	import { Menu, Menuitem, Button } from 'svelte-mui';
</script>

<nav>
	<div>
		<Button color="white">
			<a href="/">Grim Pickings</a>
		</Button>
	</div>

	<ul>
		<li>
			<Button color="white">
				<a href="/">Home</a>
			</Button>
		</li>
		<li>
			<Button color="white">
				<a href="/rules">How To Play</a>
			</Button>
		</li>
		<li>
			<Menu --bg-popover="#6B5580" dy={40}>
				<Button slot="activator" color="white" ripple={false}>
					<span>About</span>
				</Button>

				<Menuitem href="/gameplay">
					<Button fullWidth color="white">Gamplay</Button>
				</Menuitem>

				<Menuitem href="/art">
					<Button fullWidth color="white">Art</Button>
				</Menuitem>

				<Menuitem href="/tech">
					<Button fullWidth color="white">Technology</Button>
				</Menuitem>

				<Menuitem href="/credits">
					<Button fullWidth color="white">Credits</Button>
				</Menuitem>
			</Menu>
		</li>
	</ul>
</nav>

<div class="content">
	<slot />
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

	.content {
		background-color: #23203e;
		height: calc(100vh - 50px);
	}

	.content {
		color: white;
		padding: 20px;
	}
</style>
