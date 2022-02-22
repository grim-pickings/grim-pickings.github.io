<script>
	export let textAlign = '';
	export let verticalAlign = '';

	$: textAlignProp = textAlign || '';
	$: verticalAlignProp = verticalAlign || '';

	$: alignProp = toAlignString(textAlignProp, verticalAlignProp);

	function toAlignString(hor, ver) {
		let str = `${ver} ${hor}`.trim();
		return !str ? str : str + ' aligned';
	}
</script>

<div class="{alignProp} column">
	<slot />
</div>
