<script>
	export let src = '';
	export let alt = '';
	export let size = '';
	export let circular = null;
	export let ui = true;
	export let rounded = null;

	export let circularProp = circular ? 'circular' : '';
	export let uiProp = ui ? 'ui' : '';
	export let roundedProp = rounded ? 'rounded' : '';
</script>

<div class="{uiProp} image {roundedProp} {size} {circularProp}">
	<img {src} {alt} />
</div>
