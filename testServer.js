const axios = require('axios') 

let error = 0

const getSong = () => {
    const randomSong = Math.floor(Math.random()*10000000)
    axios.get(`http://localhost:9000/song/${randomSong}`)
        .then(function (response) {
        })
        .catch(function (error) {
            error++
            console.log(error)
          })
}

getSong()
let rps = 299
const getSongAtInterval = () => {
    getSong()
    rps = rps
    if (rps < 300) {
        return setTimeout(getSongAtInterval, 1000/rps)
    }
}

getSongAtInterval()

// let requests = 100

// while ( > 1) {
//     setTimeout(getSong, delay)
//     delay = delay -.00
// }
// setInterval(getSong, 5)