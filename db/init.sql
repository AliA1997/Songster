CREATE TABLE songster_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    username VARCHAR(100) UNIQUE,
    password TEXT
);

CREATE TABLE songster_songs (
    title TEXT,
    artist_name TEXT,
    user_id INTEGER REFERENCES songster_users.id
)