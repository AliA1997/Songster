const bcrypt = require('bcrypt');
let saltRounds = 12;
module.exports = {
    joinUserData(req, res) {
        const dbInstance = req.app.get('db');
        dbInstance.join_user_data().then(users => {
            req.session.user = users[0];
            res.status(200).json({user: req.session.user});
        }).catch(err => console.log('Database JOin Error-------------', err));
    },
    register(req, res) {
        const dbInstance = req.app.get('db');
        const { username, email, password } = req.body;
        console.log('Req.body--------------', req.body);
        bcrypt.hash(password, saltRounds).then(hashedPassword => {
            let newUser = {
                username, 
                email, 
                password: hashedPassword
            }
            console.log('New User--------------', newUser);
            dbInstance.register(newUser)
            .then(users => {
                res.status(200).json({message: 'User Registerd!!'});
            }).catch(err => console.log('Register Error---------', err));
        }).catch(err => console.log('Bcrypt Hashing Error-----------', err));
    },
    login(req, res)  {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        console.log("reg.body login-------------", req.body);
        dbInstance.find_user(username).then(users => {
            console.log('users------------------', users);
            if(users.length) {
                let userData = users[0];
                bcrypt.compare(userData.password, password).then(doPasswordsMatch => {
                    if(doPasswordsMatch) {
                        delete userData.passsword;
                        req.session.user = userData;
                        req.session.save();
                        res.status(200).json({user: req.session.user});
                    }
                }).catch(err => console.log('bcrypt compare error-------------', err));
            }
        }).catch(err => console.log('Database Find User---------', err));
    },
    logout(req, res) {
        req.session.destroy();
    }
}