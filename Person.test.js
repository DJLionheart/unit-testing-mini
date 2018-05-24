let Person = require('./Person');

describe('Person class tests', () => {
    test('1983 should be millenial', () => {
        

        // We have arranged, and set up for the test
        let personObj = new Person(1983);

        // Act - invoked the method
        let result = personObj.isMillenial();

        // Assert - assert that the Person object is a millenial.
        expect(result).toBeTruthy();
    })

    test('1975 should be neither millenial nor retiree', () => {
        let bob = new Person(1975);

        let flag = true;

        let millenial = bob.isMillenial();
        let retiree = bob.isRetiree();
        
        millenial || retiree
            ? flag = false
            : null

        expect(flag).toBeTruthy;
        
    })
})