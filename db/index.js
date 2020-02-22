const { Pool, Client } = require('pg')
const postgresInfo = require('./postgresInfo')

const pool = new Pool({
  user: 'postgres',
  password: postgresInfo.password,
  host: '18.144.80.194',
  database: 'music',
  port: 5432,
})

// pool.query('SELECT * FROM songs WHERE id = 234', (err, res) => {
//   console.log(err, res)
//   console.log(res.rows[0])
//   pool.end()
// })

module.exports = pool