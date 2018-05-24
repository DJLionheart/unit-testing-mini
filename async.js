let axios = require('axios');

function getCars() {
    return axios.get('https://joes-autos.herokuapp.com/api/vehicles')
        .then( (res) => res.data)
}

module.exports = getCars;