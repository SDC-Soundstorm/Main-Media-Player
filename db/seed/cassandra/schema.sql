DROP KEYSPACE IF EXISTS music;

CREATE KEYSPACE music  WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

USE music;

CREATE TABLE songs(
    id int PRIMARY KEY,
    name text,
    artist text,
    posted text,
    tag text,
    albumName text,
    albumURL text,
    songURL text,
);

-- actual table to use 
CREATE TABLE comments(
    id int,
    username text,
    comment text,
    timeStamp text,
    avatarPicURL text,
    songId int,
    PRIMARY KEY (songId, id)
);

