import React, { Component } from 'react';
import { loginDashboard } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { map } from 'async';

class Dashboard extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        axios.get('/api/join-user-data')
        .then(res => {
            dispatch(loginDashboard(res.data.user));
        }).catch(err => console.log('Axios Get JOined User Data------------', err));
    }
    render() {
        const { currentUser } = this.props;
        return (
            <div>
                {JSON.stringify(currentUser)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Dashboard);