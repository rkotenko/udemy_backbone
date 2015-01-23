describe('Calculator', function () {
    var calculator;
    
    beforeEach(function () {
        calculator = new Calculator();
    });
    describe('add', function () {
        it('should be able to add 2 numbers', function () {
            var result = calculator.add(2, 3);

            expect(result).toEqual(5);
        });

        it('should throw an error if both arguments are not provided', function () {
            expect(function () {
                calculator.add(1);
            }).toThrow();
        });
        
        it('should be called with the right arguments', function () {
            spyOn(calculator, 'add').and.returnValue(7);
            
            var result = calculator.add(2, 5);
            
            expect(calculator.add).toHaveBeenCalledWith(2, 5);
        });
    });
    
});