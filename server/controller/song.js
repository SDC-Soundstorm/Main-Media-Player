const pool = require('../../db/index')
const newrelic = require('newrelic');

const getSong = (req, res) => {
    const songId = req.params.id
    const query = {
        text: `SELECT * FROM songs 
               INNER JOIN comments ON songs.song_id = comments.song_id 
               INNER JOIN albums ON songs.album_Id = albums.album_id 
               INNER JOIN artists ON albums.artist_ID = artists.artist_id 
               INNER JOIN users ON comments.user_Id = users.user_id 
               INNER JOIN genre ON genre.genre_id = songs.genre_id 
               WHERE songs.song_id = $1`,
        values: [songId],
      }
    pool.query(query, (err, data) => {
        if (err) {
            newrelic.noticeError('failed to send')
            console.log(err)
            res.sendStatus(400)
            res.end()
        } else {
            // console.log(data.rows[0])
            res.send(data.rows[0])
        }
    })
}

const postSong = (req, res) => {
    const query = {
        text: `INSERT INTO songs(song_name, song_posted_percent, song_url, album_id, genre_id) 
               VALUES ('POSTED song name', 1.337, 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 1337, 1337) RETURNING song_id`,
        // values: [req.params.id],
      }
      pool.query(query, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(404)
            res.end()
        } else {
            res.send(data.rows[0])
        }
    })

}

const updateSong = (req, res) => {
    const songId = req.params.id
    const query = {
        text: `UPDATE songs SET song_name = 'david' WHERE song_id = $1 RETURNING song_id`,
        values: [songId]
      }
      pool.query(query, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(404)
            res.end()
        } else {
            res.sendStatus(200)
        }
    })

}

const deleteSong = (req, res) => {
    const songId = req.params.id
    const query = {
        text: `DELETE FROM songs WHERE song_id = $1 RETURNING song_id`,
        values: [songId]
      }
      pool.query(query, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(404)
            res.end()
        } else {
            res.sendStatus(200)
        }
    })

}

module.exports.getSong = getSong 
module.exports.postSong = postSong
module.exports.updateSong = updateSong
module.exports.deleteSong = deleteSong