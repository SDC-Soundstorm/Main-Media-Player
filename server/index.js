require('newrelic');

const express = require('express')
const app = express()
const port = 9000
const path = require('path');
const morgan = require('morgan');
var compression = require('compression');
const router = require('./router.js');
const song = require('./controller/song')
const comment = require('./controller/comment')

const Song = require('../db/index.js');

const redis = require("redis");
const client = redis.createClient({
    host: 'redis',
    port: 6379
})
 
client.on("error", function(error) {
  console.error(error);
});

client.on("connect", function() {
    client.set("foo", "bar", redis.print); // => "Reply: OK"
    client.get("foo", redis.print); // => "Reply: bar"
    client.quit();
  });

client.set("foo", "bar");

client.get("foo", function(err, reply) {
    // reply is null when the key is missing
    console.log(reply);
  });
 
client.set("key", "value", redis.print);
client.get("key", redis.print);

//serve files from dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// compress files coming in
app.use(compression());

//See all incoming requests
//app.use(morgan('dev'));

//JSON requests
app.use(express.json());

app.get('/song/:id', song.getSong)
app.post('/song', song.postSong)
app.patch('/song/:id', song.updateSong) 
app.delete('/song/:id', song.deleteSong)

app.post('/comment', comment.postComment)
app.patch('/comment/:id', comment.updateComment)
app.delete('/comment/:id', comment.deleteComment)

// //routes get requests
// app.get('/song', (req, res) => {
//     Song.find((err, data) => {
//         if (err) {
//           res.send()
//         } else {
//           res.send(data)
//         }
//       });
// })

//route all requests
// app.use('/', router);

//notification on open server
app.listen(port, () => console.log(`listening on port ${port}!`));