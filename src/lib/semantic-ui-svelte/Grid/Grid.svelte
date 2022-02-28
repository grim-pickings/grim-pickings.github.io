<script>
	import { numToString } from '$lib/js/general.js';
	export let columns = null;
	export let textAlign = '';
	export let verticalAlign = '';
	export let stackable = false;
	export let style = '';
	export let className = '';

	$: columnsProp = columns ? `${numToString(columns)} column` : '';
	$: textAlignProp = textAlign ? `${textAlign} aligned` : '';
	$: verticalAlignProp = verticalAlign ? `${verticalAlign} aligned` : '';
	$: stackableProp = stackable ? 'stackable' : '';
</script>

<div
	class="ui {stackableProp} {columnsProp} {textAlignProp} {verticalAlignProp} grid {className}"
	{style}
>
	<slot />
</div>
