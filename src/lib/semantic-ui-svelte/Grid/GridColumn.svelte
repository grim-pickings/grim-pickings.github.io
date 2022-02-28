<script>
	import { numToString } from '$lib/js/general';
	export let textAlign = '';
	export let verticalAlign = '';
	export let style = '';
	export let className = '';
	export let width = '';

	$: textAlignProp = textAlign ? `${textAlign} aligned` : '';
	$: verticalAlignProp = verticalAlign ? `${verticalAlign} aligned` : '';
	$: widthProp = width ? `${numToString(width)} wide` : '';
</script>

<div class="{widthProp} {verticalAlignProp} {textAlignProp} column {className}" {style}>
	<slot />
</div>
