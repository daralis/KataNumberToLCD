var NumberToLCDConverter = (function() {
    const FIRST_ROW =  ['   ', '   ', ' _ ', ' _ ', '   ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '];
    const SECOND_ROW = ['   ', '  |', ' _|', ' _|', '|_|', '|_ ', '|_ ', '  |', '|_|', '|_|'];
    const THIRD_ROW =  ['   ', '  |', '|_ ', ' _|', '  |', ' _|', '|_|', '  |', '|_|', ' _|'];
    const LINEBREAK = '\n';
    
    /**
     Converts the given param into a three-line string representing the given input as LCD digits.
     
     @param param {(number|string)} param The input to convert into LCD digits. 
     @return {string} The given param as a string fit for an LCD display with three lines and arbitrary length.
     @throws Throws an exception if the given parameter is not a string or a number.
    */
    var convertToLCD = function(param) {    
        var inputArray = convertToCharArray(param);     
        var result = convertRow(inputArray, FIRST_ROW);
        result = result + convertRow(inputArray, SECOND_ROW);
        result = result + convertRow(inputArray, THIRD_ROW);
        return result;
    }
    
    /**
     Converts a row of the input for the LCD display.
     @param inputArray {string[]} The input as an array of characters.
     @param rowTable {string[]} The table that contains the digit printing information for the row.
     @return {string} Returns one row of the given input converted to LCD digits.
    */
    var convertRow = function(inputArray, rowTable) {
        var result = inputArray.reduce(function(resultSoFar, currentChar) {
            var index = getIndexOfDigit(currentChar);           
            return resultSoFar + rowTable[index];           
        }, '');
        return addLineBreak(result);
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