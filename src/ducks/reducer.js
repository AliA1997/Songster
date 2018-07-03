import { join } from "path";

const initialState = {};

const LOGIN = 'LOGIN';
const DASHBOARD = 'DASHOB0ARD';

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, currentUser: action.payload};
        case DASHBOARD: 
            return {...state, currentUser: action.payload};
        default: return state;
    }
};

export function login(user) {
    return {
        type: LOGIN,
        payload: user 
    }
}

export function loginDashboard(joined_user) {
    return {
        type: DASHBOARD,
        payload: joined_user
    }
}