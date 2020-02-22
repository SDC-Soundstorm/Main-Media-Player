DROP DATABASE IF EXISTS music; 

CREATE DATABASE music; 

\c music

CREATE TABLE songs(
    song_id SERIAL PRIMARY KEY,
    song_name VARCHAR(500),
    song_posted_percent numeric, 
    song_URL VARCHAR(500),
    genre_Id int,
    album_Id int 
);

CREATE TABLE albums(
    album_id int PRIMARY KEY,   
    album_name VARCHAR(500),
    album_art_url VARCHAR(500),
    artist_id int
);

CREATE TABLE artists(
    artist_id int PRIMARY KEY,
    artist_name VARCHAR(500)
);

-- impliment a dimensionless time parameter for timeStamp 
CREATE TABLE comments(
    comment_id serial PRIMARY KEY,
    comment VARCHAR(500),
    comment_timeStamp VARCHAR(100),
    song_Id int,
    user_id int
);

CREATE TABLE users(
    user_id serial PRIMARY KEY, 
    username VARCHAR(500),
    avatar_pic_url VARCHAR(500)
);

CREATE TABLE genre(
    genre_id serial PRIMARY KEY, 
    tag VARCHAR(500)
);

-- signifigantly speeds up search speed of inner joins for find songs
CREATE INDEX idx_comments_songId ON comments(song_id); 
