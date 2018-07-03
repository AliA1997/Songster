require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const uuid = require('uuid');
///Controller FIles 
const userCtrl = require('./controllers/user_controller');
const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: uuid.v4(),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(err => console.log("Database Error-----------", err));

app.get('/api/join-user-data', userCtrl.joinUserData);

app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.post('/api/auth/logout', userCtrl.logout);



app.listen(PORT, () => console.log('Listening on Port:', PORT));