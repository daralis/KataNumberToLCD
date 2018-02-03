var NumberToLCDConverter = (function() {
    const TOP_ROW =    ['   ', '   ', ' _ ', ' _ ', '   ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '];
    const MIDDLE_ROW = ['   ', '  |', ' _|', ' _|', '|_|', '|_ ', '|_ ', '  |', '|_|', '|_|'];
    const BOTTOM_ROW = ['   ', '  |', '|_ ', ' _|', '  |', ' _|', '|_|', '  |', '|_|', ' _|'];
    const LINEBREAK = '\n';
	const DEFAULT_SIZE = 3;
    
    /**
     Converts the given param into a string representing the given input as LCD digits 1-9.
	 Unrecognized characters are replaced with an empty digit.
     
     @param param {(number|string)} param The input to convert into LCD digits. 
	 @param width {number} The width of the LCD digit matrix. Must be >= 3. 3 is the default.
	 @param height {number} The height of the LCD digit matrix. Must be >= 3. 3 is the default.
     @return {string} The given param as a string fit for an LCD display of arbitrary length.    
    */
    var convertToLCD = function(param, width, height) {    
        var inputArray = convertToCharArray(param); 
        var digitWidth = checkSizeParam(width);	
        var digitHeight = checkSizeParam(height);
		var middleRowIndex = parseInt(digitHeight / 2, 10);
		var result;
		
		for (var i = 0; i < digitHeight; i++) {
			if (i === 0) {
				// Top row
				result = convertRow(inputArray, TOP_ROW, digitWidth, false);
			
			} else if (i === digitHeight - 1) {
				// Bottom row
				result = result + convertRow(inputArray, BOTTOM_ROW, digitWidth, false);
				
			} else if (i === middleRowIndex) {
				// Middle row
			    result = result + convertRow(inputArray, MIDDLE_ROW, digitWidth, false);
				
			} else if (i < middleRowIndex) {
			    // Filler row, top part	
				result = result + convertRow(inputArray, MIDDLE_ROW, digitWidth, true);
			
			} else {
				// Filler row, bottom part	
				result = result + convertRow(inputArray, BOTTOM_ROW, digitWidth, true);
			}
		}
        
        return result;
    }
    
    /**
     Converts a row of the input for the LCD display.
	 
     @param inputArray {string[]} The input as an array of characters.
     @param rowTable {string[]} The table that contains the digit printing information for the row.
	 @param digitWidth {number} The width of the LCD digit matrix. 
	 @param isFillerRow {boolean} True if the row is a filler.
     @return {string} Returns one row of the given input converted to LCD digits.
    */
    var convertRow = function(inputArray, rowTable, digitWidth, isFillerRow) {
        var result = inputArray.reduce(function(resultSoFar, currentChar) {
            var index = getIndexOfDigit(currentChar);           
            return resultSoFar + getRow(rowTable[index], digitWidth, isFillerRow);           
        }, '');
        return addLineBreak(result);
    }
	
	/**
	 Returns a row, as wide as the given parameter and correct for the height.
	 First and last characters of the digit are printed as is and the middle character is 
	 copied to make the digit wider. For filler rows (needed to make the digit wider or higher)
	 the middle character is a space.
	 
	 @param rowTemplate {string} The row as it would be in the smallest 3 chars wide digit
	 @param width {number} The desired width
	 @param isFillerRow {boolean} True if the row is a filler.
	 @return The row with the correct width
	*/
	var getRow = function (rowTemplate, width, isFillerRow) {
		var result = '';
		var firstChar = rowTemplate[0];
		var middleChar = rowTemplate[1];
		if (isFillerRow) {
			middleChar = ' ';
		}
		var lastChar = rowTemplate[2];
		var middleCharCount = width - 2;
		
		result = result + firstChar;
		for (var i = 0; i < middleCharCount; i++) {
			result = result + middleChar;
		}
		result = result + lastChar;
		
		return result;
	}
    
    /**
     Adds a line break to the end of the row if the row has content in it.
	 
     @param row {string} A row which may be empty
     @return {string} The given row with a linebreak in the end of it
    */
    var addLineBreak = function(row) {
        if (row.length > 0) {
            row = row + LINEBREAK;
        }
        return row;
    }
	
	/**
	 Checks the given LCD digit size parameter and returns it if valid, or the default value.
	 
	 @param param {number} A size parameter
     @return {number} A valid size
    */	 
	var checkSizeParam = function(param) {
		var size = DEFAULT_SIZE;
		var paramAsNumber = parseInt(param, 10);
        if (!Number.isNaN(paramAsNumber) && paramAsNumber >= DEFAULT_SIZE) {
            size = paramAsNumber;
        } 
        return size;
	}
    
    /**
     Returns the correct index for the digit in the row tables.
	 
     @param digit {string} A string with the length of 1, can be a character or number.
     @return {number} Returns the correct index in the row tables for numbers 1-9 and index 0 for other numbers or NaN values.
    */
    var getIndexOfDigit = function(digit) {
        var index = 0;
        var digitAsNumber = parseInt(digit, 10);
        if (!Number.isNaN(digit) && digit >= 1 && digit <= 9) {
            index = digit;
        } 
        return index;
    }
            
    /**
     Converts the param to a char array.
	 
     @param param {(number|string)} param A number or a string.
     @return {char[]} The given param as a char array which may be empty.    
    */
    var convertToCharArray = function(param) {
        var result = [];
        if (typeof param === 'number' && !Number.isNaN(param)) {
            result = Array.from(param.toString());
        } else if (typeof param === 'string') {
            result = Array.from(param);
        }
        return result;
    }
    
    // Public interface of the NumberToLCDConverter object
    return {
        convertToLCD: convertToLCD
    };
    
}());