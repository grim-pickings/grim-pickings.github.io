<script>
	export let columns = null;
	export let textAlign = '';
	export let verticalAlign = '';
	export let style = '';
	export let className = '';

	$: columnsProp = numToString(columns);
	$: textAlignProp = textAlign ? `${textAlign} aligned` : '';
	$: verticalAlignProp = verticalAlign ? `${verticalAlign} aligned` : '';

	function numToString(num) {
		const numVal = isNaN(num) ? num : Number(num);
		switch (numVal) {
			case 1:
			case 'one':
				return 'one column';
			case 2:
			case 'two':
				return 'two column';
			case 3:
			case 'three':
				return 'three column';
			case 4:
			case 'four':
				return 'four column';
			case 5:
			case 'five':
				return 'five column';
			case 6:
			case 'six':
				return 'six column';
			case 7:
			case 'seven':
				return 'seven column';
			case 8:
			case 'eight':
				return 'eight column';
			case 9:
			case 'nine':
				return 'nine column';
			case 10:
			case 'ten':
				return 'ten column';
			case 11:
			case 'eleven':
				return 'eleven column';
			case 12:
			case 'twelve':
				return 'twelve column';
			case 13:
			case 'thirteen':
				return 'thirteen column';
			case 14:
			case 'fourteen':
				return 'fourteen column';
			case 15:
			case 'fifteen':
				return 'fifteen column';
			case 16:
			case 'sixteen':
				return 'sixteen column';
			default:
				return '';
		}
	}
</script>

<div class="{columnsProp} {textAlignProp} {verticalAlignProp} row {className}" {style}>
	<slot />
</div>
