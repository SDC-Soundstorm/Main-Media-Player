const writePostgresCSV = require('../generateCSV')
const albumSeed = require('./albumSeed')
const genreSeed = require('./genreSeed')
var faker = require('faker');
const songNumber = 10000000
const loopNumber = 1000
const headers = 'id,name,posted,songURL,albumId,tagId\n'
const filename = './csv/songs.csv'

const dataGenerator = function(index) {
    if (index < albumSeed.albumNumber) {
        return `${faker.name.findName()},${faker.date.past().toDateString()},https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3,${index+1},${Math.floor(Math.random()*genreSeed.genreNumber+1)}\n`
    }
    return `${faker.name.findName()},${faker.date.past().toDateString()},https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3,${Math.floor(Math.random()*albumSeed.albumNumber)+1},${Math.floor(Math.random()*genreSeed.genreNumber+1)}\n`

}

// writePostgresCSV(headers, filename, songNumber, loopNumber, dataGenerator)

module.exports.songNumber = songNumber
module.exports.writeSongs = () => {writePostgresCSV(headers, filename, songNumber, loopNumber, dataGenerator)}