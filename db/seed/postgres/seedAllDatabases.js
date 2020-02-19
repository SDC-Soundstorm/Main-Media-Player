const albums = require('./albumSeed')
const artists = require('./artistSeed')
const songs = require('./songSeed')
const comments = require('./commentsSeed')

albums.writeAlbums()
artists.writeArtists()
songs.writeSongs()
comments.writeComments()