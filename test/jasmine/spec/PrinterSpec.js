describe('NumberToLCDConverter', function() {	
	
	describe("When single digit given", function() {
	    it("Converter should print one", function() {
            const result = NumberToLCDConverter.printOne('1');
            expect(result).toBe(LCDConstants.ONE);
        });
	});

});