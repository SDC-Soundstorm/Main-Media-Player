const writePostgresCSV = require('./generateCSV')
const artistSeed = require('./artistSeed')
var faker = require('faker');
const albumNumber = 2000000
const loopNumber = albumNumber/10000
const headers = 'id,name,url,artistID\n'
const filename = './csv/albums.csv'

const dataGenerator = function(index) {
    if (index < artistSeed.artistNumber) {
        return `${index},${faker.name.findName()},${faker.image.imageUrl()},${index}\n`
    }
    return `${index},${faker.name.findName()},${faker.image.imageUrl()},${Math.floor(Math.random()*artistSeed.artistNumber)}\n`

}

// writePostgresCSV(headers, filename, albumNumber, loopNumber, dataGenerator)

module.exports.albumNumber = albumNumber
module.exports.writeAlbums = () => {writePostgresCSV(headers, filename, albumNumber, loopNumber, dataGenerator)}