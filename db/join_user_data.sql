SELECT songster_users.username, songster_users.email, songster_songs.*
FROM songster_users JOIN songster_songs ON songster_users.id = songster_songs.user_id;