export function numToString(num) {
	const numVal = isNaN(num) ? num : Number(num);
	switch (numVal) {
		case 1:
		case 'one':
			return 'one';
		case 2:
		case 'two':
			return 'two';
		case 3:
		case 'three':
			return 'three';
		case 4:
		case 'four':
			return 'four';
		case 5:
		case 'five':
			return 'five';
		case 6:
		case 'six':
			return 'six';
		case 7:
		case 'seven':
			return 'seven';
		case 8:
		case 'eight':
			return 'eight';
		case 9:
		case 'nine':
			return 'nine';
		case 10:
		case 'ten':
			return 'ten';
		case 11:
		case 'eleven':
			return 'eleven';
		case 12:
		case 'twelve':
			return 'twelve';
		case 13:
		case 'thirteen':
			return 'thirteen';
		case 14:
		case 'fourteen':
			return 'fourteen';
		case 15:
		case 'fifteen':
			return 'fifteen';
		case 16:
		case 'sixteen':
			return 'sixteen';
		default:
			return '';
	}
}
