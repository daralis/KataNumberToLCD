var NumberToLCDConverter = (function() {
	const FIRST_ROW =  ['   ', ' _ ', ' _ ', '   ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '];
	const SECOND_ROW = ['  |', ' _|', ' _|', '|_|', '|_ ', '|_ ', '  |', '|_|', '|_|'];
	const THIRD_ROW =  ['  |', '|_ ', ' _|', '  |', ' _|', '|_|', '  |', '|_|', ' _|'];
	const LINEBREAK = '\n';
	
	/**
	 Converts the given param into a three-line string representing the given input as LCD digits.
	 
	 @param {(number|string)} param The input to convert into LCD digits. 
	 @return {string} The given param as a string fit for an LCD display with three lines and arbitrary length.
	 @throws Throws an exception if the given parameter is not a string or a number.
	*/
	var convertToLCD = function(param) {
		checkParamIsStringOrNumber(param);
		var paramAsNumber = convertToNumber(param);
		var index = paramAsNumber - 1;
		return FIRST_ROW[index] + LINEBREAK + SECOND_ROW[index] + LINEBREAK + THIRD_ROW[index] + LINEBREAK;
	}
	
	/**
 	 Checks if the given param is a string or a number and throws an exception if it is not.
     @param {(number|string)} param A number or a string.
	 @throws Throws an exception if the given parameter is not a string or a number.	 
	*/
	var checkParamIsStringOrNumber = function(param) {
		if (!(typeof param === 'string' || typeof param === 'number')) {
			throw "Invalid input: should be a number or a string, was " + typeof param;
		}
	}
	
	/**
 	 Converts the param to a number.
     @param {(number|string)} param A number or a string.
	 @return {number} The given param as a number.	 
	*/
	var convertToNumber = function(param) {
		var result = param;
		if (typeof param === 'string') {
			result = parseInt(param, 10);
		}
		return result;
	}
	
	// Public interface of the NumberToLCDConverter object
	return {
		convertToLCD: convertToLCD
	};
	
}());