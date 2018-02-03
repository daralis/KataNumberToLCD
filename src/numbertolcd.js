var NumberToLCDConverter = (function() {
	const FIRST_ROW =  ['   ', '   ', ' _ ', ' _ ', '   ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '];
	const SECOND_ROW = ['   ', '  |', ' _|', ' _|', '|_|', '|_ ', '|_ ', '  |', '|_|', '|_|'];
	const THIRD_ROW =  ['   ', '  |', '|_ ', ' _|', '  |', ' _|', '|_|', '  |', '|_|', ' _|'];
	const LINEBREAK = '\n';
	
	/**
	 Converts the given param into a three-line string representing the given input as LCD digits.
	 
	 @param {(number|string)} param The input to convert into LCD digits. 
	 @return {string} The given param as a string fit for an LCD display with three lines and arbitrary length.
	 @throws Throws an exception if the given parameter is not a string or a number.
	*/
	var convertToLCD = function(param) {		
		var paramAsNumber = convertToInteger(param);
		var index = getIndexOfDigit(paramAsNumber);
		return FIRST_ROW[index] + LINEBREAK + SECOND_ROW[index] + LINEBREAK + THIRD_ROW[index] + LINEBREAK;
	}
	
	/**
 	 Returns the correct index for the digit in the row tables.
     @param {number} A number.
	 @return Returns the correct index in the row tables for numbers 1-9 and index 0 for other numbers or NaN values.
	*/
	var getIndexOfDigit = function(digit) {
		var index = 0;
		if (Number.isInteger(digit) && digit >= 1 && digit <= 9) {
			index = digit;
		} 
		return index;
	}
		
	/**
 	 Converts the param to an integer.
     @param {(number|string)} param A number or a string.
	 @return {number} The given param as a number or NaN if it cannot be converted to an integer.
	*/
	var convertToInteger = function(param) {
		var result = NaN;
		if (typeof param === 'string' && param.indexOf('.') === -1) {
			result = parseInt(param, 10);
		} else if (Number.isInteger(param)) {
			result = parseInt(param, 10);
		}
		return result;
	}
	
	// Public interface of the NumberToLCDConverter object
	return {
		convertToLCD: convertToLCD
	};
	
}());