DROP DATABASE IF EXISTS music; 

CREATE DATABASE music; 

\c music

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name VARCHAR(500),
    posted VARCHAR(500), 
    songURL VARCHAR(500),
    genreId int,
    albumId int 
);

CREATE TABLE albums(
    id int PRIMARY KEY,   
    name VARCHAR(500),
    artURL VARCHAR(500),
    artistID int
);

CREATE TABLE artists(
    id int PRIMARY KEY,
    name VARCHAR(500)
);

CREATE TABLE comments(
    id serial PRIMARY KEY,
    comment VARCHAR(500),
    timeStamp VARCHAR(100),
    songId int,
    userId int
);

CREATE TABLE users(
    id serial PRIMARY KEY, 
    username VARCHAR(500),
    avatarPicURL VARCHAR(500)
)

CREATE TABLE genre(
    id serial PRIMARY KEY, 
    tag VARCHAR(500)
);

-- signifigantly speeds up search speed of inner joins for find songs
CREATE INDEX idx_comments_songId ON comments(songId); 
