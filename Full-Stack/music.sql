-- Music Database for Codecademy

CREATE TABLE labels (
  id      SERIAL      PRIMARY KEY,
  name    VARCHAR(30) NOT NULL,
  website VARCHAR(30)
);

CREATE TABLE artists (
  id      SERIAL      PRIMARY KEY,
  name    VARCHAR(30) NOT NULL,
  website VARCHAR(30)
);

CREATE TABLE albums (
  id        SERIAL      PRIMARY KEY,
  name      VARCHAR(50) NOT NULL,
  artist_id INT         REFERENCES artists(id),
  label_id  INT         REFERENCES labels(id)
);

CREATE TABLE songs (
  track_index INT,
  album_id    INT,
  name        VARCHAR(50) NOT NULL,
  length      INT,
  bpm         INT,
  scale       VARCHAR(11),
  UNIQUE (track_index, album_id),
  PRIMARY KEY (track_index, album_id)
);

CREATE TABLE songs_artists (
  artist_id   INT REFERENCES artists(id),
  album_id    INT,
  track_index INT,
  FOREIGN KEY (album_id, track_index) REFERENCES songs(album_id, track_index),
  PRIMARY KEY (artist_id, album_id, track_index)
);

CREATE TABLE genres (
  id   SERIAL      PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE labels_genres (
  genre_id INT REFERENCES genres(id),
  label_id INT REFERENCES labels(id),
  PRIMARY KEY (genre_id, label_id)
);

CREATE TABLE artists_genres (
  genre_id  INT REFERENCES genres(id),
  artist_id INT REFERENCES artists(id),
  PRIMARY KEY (genre_id, artist_id)
);

CREATE TABLE albums_genres (
  genre_id INT REFERENCES genres(id),
  album_id INT REFERENCES albums(id),
  PRIMARY KEY (genre_id, album_id)
);

CREATE TABLE songs_genres (
  genre_id    INT REFERENCES genres(id),
  album_id    INT,
  track_index INT,
  FOREIGN KEY (album_id, track_index) REFERENCES songs(album_id, track_index),
  PRIMARY KEY (genre_id, album_id, track_index)
);



INSERT INTO genres
(name) VALUES
('Jazz'),
('Electronica'),
('Rock'),
('Funk'),
('R''n''B')
('Video Game Music');

INSERT INTO labels
( name,            website ) VALUES
( 'Velan Studios', 'https://www.velanstudios.com/' );

INSERT INTO labels_genres
(genre_id, label_id) VALUES
(6, 1);

INSERT INTO artists
( name,             website                          ) VALUES
( 'The Soundlings', 'https://www.thesoundlings.com/' ),
( 'Sonny Rey',      'https://www.thesoundlings.com/' ),
( 'Command Play',                               NULL ),
( 'Hologramatix',                               NULL ),
( 'Rick and the Humans',                        NULL ),
( 'The Scratched Brass Band',                   NULL ),
( 'Johnny and the Breakers',                    NULL ),
( 'Alley Katz',                                 NULL );

INSERT INTO artists_genres
(genre_id, artist_id) VALUES
(1, 1), (2, 1), (3, 1), (4, 1), (5, 1),
(1, 2), (2, 2), (3, 2), (4, 2), (5, 2),
(3, 3), (2, 3),
(1, 4), (2, 4), (3, 4),
(1, 5),
(4, 6), (5, 6),
(3, 7),
(3, 8);

INSERT INTO albums
( name,                                  artist_id, label_id ) VALUES
( 'Knockout City (Original Soundtrack)', 1,         1 );

INSERT INTO albums_genres
(genre_id, album_id) VALUES
(2, 1);

INSERT INTO songs
(track_index, album_id, name,                      length, bpm, scale        ) VALUES
(1,           1,        'Beat Feet ''n'' Bounce',  130,    155, 'G#/Ab Major'),
(2,           1,        'Boogie Street Brawl',     149,    122, 'D#/Eb Minor'),
(3,           1,        'Fire Fingers',            167,    170, 'A Major'    ),
(4,           1,        'Don''t Stop the Bop',     125,    120, 'C#/Db Major'),
(5,           1,        'Doo Wop the Bop',         128,    136, 'G Major'    ),
(6,           1,        'Drop the Bop',            131,    136, 'B Minor'    ),
(7,           1,        'Effective Dissonance',    113,    75,  'A#/Bb Minor'),
(8,           1,        'Planet Hop',              125,    120, 'A#/Bb Minor'),
(9,           1,        'We Bang Loud',            125,    138, 'C#/Db Major'),
(10,          1,        'Kitck It Fresh',          137,    110, 'B Minor'    ),
(11,          1,        'Beat the Street',         137,    120, 'A Minor'    ),
(12,          1,        'Get Outta Dodge',         126,    105, 'B Minor'    ),
(13,          1,        'Dueling Dolphins',        132,    146, 'G Major'    ),
(14,          1,        'Rip Curl Riot',           125,    130, 'C#/Db Major'),
(15,          1,        'Devils Cove',             132,    172, 'C Major'    ),
(16,          1,        'Start a Fire',            123,    155, 'E Minor'    ),
(17,          1,        'Kitty Litter Kaos',       164,    124, 'A Major'    ),
(18,          1,        'Meow at the Moon',        127,    100, 'B Minor'    ),
(19,          1,        'Get Outta Dodge (Bonus)', 126,    105, 'D Major'    );

INSERT INTO songs_artists
(artist_id, track_index, album_id) VALUES
(1, 1,  1),
(3, 1,  1),
(1, 2,  1),
(3, 2,  1),
(1, 3,  1),
(3, 3,  1),
(1, 4,  1),
(4, 4,  1),
(1, 5,  1),
(4, 5,  1),
(1, 6,  1),
(4, 6,  1),
(1, 7,  1),
(5, 7,  1),
(1, 8,  1),
(5, 8,  1),
(1, 9,  1),
(5, 9,  1),
(1, 10, 1),
(6, 10, 1),
(1, 11, 1),
(6, 11, 1),
(1, 12, 1),
(6, 12, 1),
(1, 13, 1),
(7, 13, 1),
(1, 14, 1),
(7, 14, 1),
(1, 15, 1),
(7, 15, 1),
(1, 16, 1),
(8, 16, 1),
(1, 17, 1),
(8, 17, 1),
(1, 18, 1),
(8, 18, 1),
(1, 19, 1),
(6, 19, 1),
(2, 19, 1);

INSERT INTO songs_genres
(genre_id, track_index, album_id) VALUES
(3, 1,  1),
(1, 2,  1), (2, 2,  1),
(3, 3,  1),
(1, 4,  1), (2, 4,  1),
(1, 5,  1), (2, 5,  1),
(1, 6,  1), (2, 6,  1),
(1, 7,  1),
(1, 8,  1),
(1, 9,  1),
(4, 10, 1), (5, 10, 1),
(4, 11, 1), (5, 11, 1),
(4, 12, 1), (5, 12, 1),
(3, 13, 1),
(3, 14, 1),
(3, 15, 1),
(3, 16, 1),
(3, 17, 1),
(3, 18, 1),
(4, 19, 1), (5, 19, 1);

WITH tracks AS (
SELECT
  songs.name,
  songs.track_index AS "index",
  albums.name AS "album",
  STRING_AGG(genres.name, ', ' ORDER BY genres.name) AS "genres",
  albums.id AS "album_id",
  labels.name AS "label"
FROM songs_genres
INNER JOIN songs
	ON songs_genres.track_index = songs.track_index
  AND songs_genres.album_id = songs.album_id
INNER JOIN albums
	ON songs_genres.album_id = albums.id
INNER JOIN labels
	ON albums.label_id = labels.id
INNER JOIN genres
	ON songs_genres.genre_id = genres.id
GROUP BY 1, 2, 3, 5, 6)

SELECT
  tracks.index,
	tracks.name,
  tracks.genres,
  STRING_AGG(artists.name, ', ') AS "artists",
  tracks.album,
  tracks.label
FROM tracks
LEFT JOIN songs_artists
	ON tracks.index = songs_artists.track_index
  AND tracks.album_id = songs_artists.album_id
LEFT JOIN artists
	ON songs_artists.artist_id = artists.id
GROUP BY 1, 2, 3, 5, 6
ORDER BY tracks.index, tracks.album;
