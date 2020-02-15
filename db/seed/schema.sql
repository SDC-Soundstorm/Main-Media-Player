DROP DATABASE IF EXISTS music; 

CREATE DATABASE music; 

\c music

CREATE TABLE songs(
    id int PRIMARY KEY,
    name VARCHAR(500),
    posted VARCHAR(500),
    tag VARCHAR(500), 
    songURL VARCHAR(500),
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
    id int PRIMARY KEY,
    username VARCHAR(500),
    comment VARCHAR(500),
    timeStamp VARCHAR(100),
    avatarPicURL VARCHAR(500),
    songId int
);
