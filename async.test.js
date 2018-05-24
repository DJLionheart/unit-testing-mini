let getCars = require('./async');
let axios = require('axios');
let MockAdapter = require('axios-mock-adapter')
let mock = new MockAdapter(axios)

mock.onGet('/users').reply(200, {
    users: [
        {id: 2, name: 'Nancy'}
    ]
})


// Mocking the request, give it exactly what it needs. Giving it specific inputs, and expecting certain outputs.


test('mock adapter test', () => {
    axios.get('/users').then(res => {
        console.log(res)
    })
})

// test('async test', () => {
//     return getCars().then(res => {
//         console.log(res)
//         expect(true).toBe(true)
//     })
// })