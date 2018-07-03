import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            username: '',
            email: ''
        }
    }
    handleRegPassword(val) {
        this.setState({password: val});
    }
    handleRegUsername(val) {
        this.setState({username: val});
    }
    handleRegEmail(val) {
        this.setState({email: val});
    }
    register() {
        const { username, password, email } = this.state;
        axios.post('/api/auth/register', {username, password, email})
        .then(res => {
            alert(res.data.message);
        }).catch(err => console.log('Axios Register Error-------------', err));
    }
    render() {
        const { username, password, email } = this.state;
        return (
            <div>
                <form>
                    <input type='text' onChange={e => this.handleRegUsername(e.target.value)} placeholder='username' value={username}/>
                    <input type='text' onChange={e => this.handleRegEmail(e.target.value)} placeholder='email' value={email}/>
                    <input type='text' onChange={e => this.handleRegPassword(e.target.value)} placeholder='password' value={password}/>
                    <button onClick={() => this.register()}>Register</button>
                </form>
            </div>
        );
    }
}