const writePostgresCSV = require('./generateCSV')
const albumSeed = require('./albumSeed')
var faker = require('faker');
const songNumber = 10000000
const loopNumber = 1000
const headers = 'id,name,posted,tag,songURL,albumId\n'
const filename = './csv/songs.csv'

const dataGenerator = function(index) {
    if (index < albumSeed.albumNumber) {
        return `${index},${faker.name.findName()},${faker.date.past().toDateString()},${faker.name.findName()},https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3,${index}\n`
    }
    return `${index},${faker.name.findName()},${faker.date.past().toDateString()},${faker.name.findName()},https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3,${Math.floor(Math.random()*albumSeed.albumNumber)}\n`

}

writePostgresCSV(headers, filename, songNumber, loopNumber, dataGenerator)

module.exports.songNumber = songNumber
module.exports.writeSongs = () => {writePostgresCSV(headers, filename, songNumber, loopNumber, dataGenerator)}