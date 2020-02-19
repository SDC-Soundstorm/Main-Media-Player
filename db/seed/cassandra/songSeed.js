const writePostgresCSV = require('../generateCSV')
var faker = require('faker');
const songNumber = 10000000
const loopNumber = 1000
const headers = 'id,name,artist,posted,tag,albumName,albumURL,songURL\n'
const filename = './csv/songs.csv'

const generateComments = function() {
    let comments = []
    const commentNumber = Math.floor(Math.random()*5)
    for (let i = 0; i < commentNumber; i++) {
        const comment = {}
        comment.user = faker.name.findName()
        comment.comment = faker.name.findName()
        comment.timeStamp = faker.date.past().toDateString()
        comment.avatarPicURL = faker.image.imageUrl()
        comments.push(comment)
    }
    return "'" +JSON.stringify(comments) + "'"
}


const dataGenerator = function(index) {
    const comments = generateComments()
    return `${index},${faker.name.findName()},${faker.name.findName()},${faker.date.past().toDateString()},${faker.name.findName()},${faker.name.findName()},${faker.image.imageUrl()},https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3\n`
}



writePostgresCSV(headers, filename, songNumber, loopNumber, dataGenerator)

// module.exports.albumNumber = albumNumber
// module.exports.writeAlbums = () => {writePostgresCSV(headers, filename, songNumber, loopNumber, dataGenerator)}