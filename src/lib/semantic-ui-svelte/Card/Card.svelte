<script>
	export let href = null;
	export let fluid = null;
	export let className = '';
	export let style = '';

	$: fluidProp = fluid ? 'fluid' : '';
</script>

{#if href}
	<a class="ui {fluidProp} card {className}" {href} {style}>
		<slot />
	</a>
{:else}
	<div class="ui {fluidProp} card {className}" {style}>
		<slot />
	</div>
{/if}
