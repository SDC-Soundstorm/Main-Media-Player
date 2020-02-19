const writePostgresCSV = require('../generateCSV')
const songSeed = require('./songSeed')
const userSeed = require('./userSeed')
var faker = require('faker');
const commentNumber = 20000000
const loopNumber = 2000
const headers = 'id,comment,timeStamp,songId,userId\n'
const filename = './csv/comments.csv'

const dataGenerator = function(index) {
    let userId = Math.floor(Math.random()*userSeed.userNumber) + 1
    if (index < songSeed.songNumber) {
        return `${faker.name.findName()},${faker.date.past().toDateString()},${index + 1},${userId}\n`
    }
    return `${faker.name.findName()},${faker.date.past().toDateString()},${Math.floor(Math.random()*songSeed.songNumber) + 1},${userId}\n`

}

writePostgresCSV(headers, filename, commentNumber, loopNumber, dataGenerator)

module.exports.writeComments = () => {writePostgresCSV(headers, filename, commentNumber, loopNumber, dataGenerator)}