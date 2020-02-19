const writePostgresCSV = require('../generateCSV')
var faker = require('faker');
const userNumber = 5000000
const loopNumber = userNumber/10000
const headers = 'username,avatarPicURL \n'
const filename = './csv/users.csv'

const dataGenerator = function(index) {
    return `${faker.internet.userName()},${faker.internet.avatar()}\n`
}

// writePostgresCSV(headers, filename, userNumber, loopNumber, dataGenerator)

module.exports.userNumber = userNumber
module.exports.writeUsers = () => {writePostgresCSV(headers, filename, userNumber, loopNumber, dataGenerator)}



