const pool = require('../../db/index')


const postComment = (req, res) => {
    console.log(req)
    const query = {
        text: `INSERT INTO comments(comment, comment_timeStamp, user_id, song_id)
               VALUES ('This is a post comment', 23.234322, 1337, 1337) 
               RETURNING comment_id;`,
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

const updateComment = (req, res) => {
    const songId = req.params.id
    const query = {
        text: `UPDATE comments SET comment = 'this is an updated comment' WHERE comment_id = $1`,
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

const deleteComment = (req, res) => {
    const songId = req.params.id
    const query = {
        text: `DELETE FROM comments WHERE comment_id = $1`,
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

module.exports.postComment = postComment
module.exports.updateComment = updateComment
module.exports.deleteComment = deleteComment