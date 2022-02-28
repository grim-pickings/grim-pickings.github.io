<script>
	export let style = '';
	export let className = '';
</script>

<div class="content {className}" {style}>
	<slot />
</div>
