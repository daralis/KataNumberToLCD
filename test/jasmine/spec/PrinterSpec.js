describe('NumberToLCDConverter', function() {	
	
	describe("When single digit given", function() {
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

});