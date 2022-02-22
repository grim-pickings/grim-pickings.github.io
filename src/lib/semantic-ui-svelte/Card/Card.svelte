<script>
	export let href = null;
	export let fluid = null;

	$: fluidProp = fluid ? 'fluid' : '';
</script>

{#if href}
	<a class="ui {fluidProp} card" {href}>
		<slot />
	</a>
{:else}
	<div class="ui {fluidProp} card">
		<slot />
	</div>
{/if}
