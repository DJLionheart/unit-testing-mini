let fns = require('./functions');


test('returnTwo should return 2', () => {
    let result = fns.returnTwo();
    expect(result).toBe(2);
});

test('greeting should return "Hello, _Name_.', () => {
    let result = fns.greeting('Paul');
    expect(result).toBe('Hello, Paul.')
});


describe('math tests', () => {
        test('add should return the sum of two numbers', () => {
            let flag = true;
            let result1 = fns.add(1, 2);
            let result2 = fns.add(5, 9);
            if( result1 !== 3 || result2 !== 14) {
                flag = false;
            }
            expect(flag).toBe(true);
        });
        
        test('multiply should return the product of two numbers', () => {
            let flag = true;
            let first = fns.multiply(2, 16);
            let second = fns.multiply(100, 10);
            let third = fns.multiply(42, 5);
        
            first !== 32 || second !== 1000 || third !== 210
                ? flag = false
                : null
        
            expect(flag).toBe(true);
        })
        
        test('subtract should yield the difference of two numbers', () => {
            let flag = true;
            let fst = fns.subtract(4, 6);
            let snd = fns.subtract(10, 6);
            let trd = fns.subtract(15, 5);
        
            fst !== -2 || snd !== 4 || trd !== 10
                ? flag = false
                : null
        
            expect(flag).toBe(true);
        })
})