var NumberToLCDConverter = (function() {
	const FIRST_ROW = ['   ', ' _ '];
	const SECOND_ROW = ['  |', ' _|'];
	const THIRD_ROW = ['  |', '|_ '];
	const LINEBREAK = '\n';
	
	var convertToLCD = function(aNumber) {
		if (aNumber === '1') {
			return FIRST_ROW[0] + LINEBREAK + SECOND_ROW[0] + LINEBREAK + THIRD_ROW[0] + LINEBREAK;
		} else if (aNumber === '2') {
			return FIRST_ROW[1] + LINEBREAK + SECOND_ROW[1] + LINEBREAK + THIRD_ROW[1] + LINEBREAK;
		}
	}
	
	return {
		convertToLCD: convertToLCD
	};
}());