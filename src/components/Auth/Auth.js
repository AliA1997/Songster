import React, { Component } from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleLoginName(val) {
        this.setState({username: val});
    }
    handlePassword(val) {
        this.setState({password: val});
    }
    login() {
        const { username, password } = this.state;
        axios.post('/api/auth/login', { username, password })
        .then(res => {
            alert(res.data.user);
        }).catch(err => console.log('Axios Login error----------', err));
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <div></div>
                        <div><b>Song</b>ster</div>
                        <form>
                            <input type='text' onChange={e => this.handleLoginName(e.target.value)} placeholder="login name"/>
                            <input type='text' onChange={e => this.handlePassword(e.target.value)} placeholder="password"/>
                            <button className='auth-login-btn' onClick={(e) => this.login()}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}