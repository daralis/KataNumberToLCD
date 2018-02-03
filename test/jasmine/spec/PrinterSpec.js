describe('NumberToLCDConverter', function() {	
	
	describe("When single digit given as a string", function() {
	    it("Converter should print one", function() {
            const result = NumberToLCDConverter.convertToLCD('1');
            expect(result).toBe(LCDConstants.ONE);
        });
		it("Converter should print two", function() {
            const result = NumberToLCDConverter.convertToLCD('2');
            expect(result).toBe(LCDConstants.TWO);
        });
		it("Converter should print three", function() {
            const result = NumberToLCDConverter.convertToLCD('3');
            expect(result).toBe(LCDConstants.THREE);
        });
		it("Converter should print four", function() {
            const result = NumberToLCDConverter.convertToLCD('4');
            expect(result).toBe(LCDConstants.FOUR);
        });
		it("Converter should print five", function() {
            const result = NumberToLCDConverter.convertToLCD('5');
            expect(result).toBe(LCDConstants.FIVE);
        });
		it("Converter should print six", function() {
            const result = NumberToLCDConverter.convertToLCD('6');
            expect(result).toBe(LCDConstants.SIX);
        });
		it("Converter should print seven", function() {
            const result = NumberToLCDConverter.convertToLCD('7');
            expect(result).toBe(LCDConstants.SEVEN);
        });
		it("Converter should print eight", function() {
            const result = NumberToLCDConverter.convertToLCD('8');
            expect(result).toBe(LCDConstants.EIGHT);
        });
		it("Converter should print nine", function() {
            const result = NumberToLCDConverter.convertToLCD('9');
            expect(result).toBe(LCDConstants.NINE);
        });
	});
	
	describe("When single digit given as a number", function() {
	    it("Converter should print three", function() {
            const result = NumberToLCDConverter.convertToLCD(3);
            expect(result).toBe(LCDConstants.THREE);
        });
	});
	
	describe("When input is an invalid number", function() {
	    it("Converter should print empty for number zero", function() {
            const result = NumberToLCDConverter.convertToLCD(0);
            expect(result).toBe(LCDConstants.EMPTY);
        });
		it("Converter should print empty for string zero", function() {
            const result = NumberToLCDConverter.convertToLCD('0');
            expect(result).toBe(LCDConstants.EMPTY);
        });
		it("Converter should print empty for a negative number", function() {
            const result = NumberToLCDConverter.convertToLCD(-44);
            expect(result).toBe(LCDConstants.EMPTY);
        });
		it("Converter should print empty for a negative number given as a string", function() {
            const result = NumberToLCDConverter.convertToLCD('-44');
            expect(result).toBe(LCDConstants.EMPTY);
        });
		it("Converter should print empty for a decimal number", function() {
            const result = NumberToLCDConverter.convertToLCD(3.14);
            expect(result).toBe(LCDConstants.EMPTY);
        });
		it("Converter should print empty for a decimal number given as a string", function() {
            const result = NumberToLCDConverter.convertToLCD('3.14');
            expect(result).toBe(LCDConstants.EMPTY);
        });
		it("Converter should print empty for NaN", function() {
            const result = NumberToLCDConverter.convertToLCD(NaN);
            expect(result).toBe(LCDConstants.EMPTY);
        });
	});
	
	describe("When input is not a number", function() {
	    it("Converter should print empty for letter 'b'", function() {
            const result = NumberToLCDConverter.convertToLCD('b');
            expect(result).toBe(LCDConstants.EMPTY);
        });
		it("Converter should print empty for empty string", function() {
            const result = NumberToLCDConverter.convertToLCD('');
            expect(result).toBe(LCDConstants.EMPTY);
        });
		it("Converter should print empty for null", function() {
            const result = NumberToLCDConverter.convertToLCD(null);
            expect(result).toBe(LCDConstants.EMPTY);
        });
		it("Converter should print empty for a unicode character", function() {
            const result = NumberToLCDConverter.convertToLCD('\uD83D\uDE00');
            expect(result).toBe(LCDConstants.EMPTY);
        });
	});

});