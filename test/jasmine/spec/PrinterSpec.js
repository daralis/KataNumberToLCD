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
	});

});