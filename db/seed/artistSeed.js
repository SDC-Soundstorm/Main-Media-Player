const writePostgresCSV = require('./generateCSV')
var faker = require('faker');
const artistNumber = 1000000
const loopNumber = artistNumber/10000
const headers = 'id,name\n'
const filename = './csv/artists.csv'

const dataGenerator = function(index) {
    return `${index},${faker.name.findName()}\n`
}

writePostgresCSV(headers, filename, artistNumber, loopNumber, dataGenerator)

module.exports.artistNumber = artistNumber
module.exports.writeArtists = () => {writePostgresCSV(headers, filename, artistNumber, loopNumber, dataGenerator)}



