var NumberToLCDConverter = (function() {
	const FIRST_ROW_OF_ONE = '  |';
    const SECOND_ROW_OF_ONE = '  |';
	const THIRD_ROW_OF_ONE = '  |';
	
	var printOne = function(aNumber) {
		if (aNumber === '1') {
			return FIRST_ROW_OF_ONE + '\n' + SECOND_ROW_OF_ONE + '\n' + THIRD_ROW_OF_ONE + '\n';
		}
	}
	
	return {
		printOne: printOne
	};
}());