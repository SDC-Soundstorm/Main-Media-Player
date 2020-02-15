const writePostgresCSV = require('./generateCSV')
const songSeed = require('./songSeed')
var faker = require('faker');
const commentNumber = 20000000
const loopNumber = 2000
const headers = 'id,username,comment,timeStamp,avatarPicURL,songId\n'
const filename = './csv/comments.csv'

const dataGenerator = function(index) {
    if (index < songSeed.songNumber) {
        return `${index},${faker.name.findName()},${faker.name.findName()},${faker.date.past().toDateString()},${faker.image.imageUrl()},${index}\n`
    }
    return `${index},${faker.name.findName()},${faker.name.findName()},${faker.date.past().toDateString()},${faker.image.imageUrl()},${Math.floor(Math.random()*songSeed.songNumber)}\n`

}

writePostgresCSV(headers, filename, commentNumber, loopNumber, dataGenerator)

module.exports.writeComments = () => {writePostgresCSV(headers, filename, commentNumber, loopNumber, dataGenerator)}