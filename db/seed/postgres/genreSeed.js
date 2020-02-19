const writePostgresCSV = require('../generateCSV')
var faker = require('faker');
const genreNumber = 100
const loopNumber = 1
const headers = 'tag\n'
const filename = './csv/genre.csv'

const dataGenerator = function(index) {
    return `${faker.name.findName()}\n`
}

// writePostgresCSV(headers, filename, genreNumber, loopNumber, dataGenerator)

module.exports.genreNumber = genreNumber
module.exports.writeUsers = () => {writePostgresCSV(headers, filename, genreNumber, loopNumber, dataGenerator)}