import { REGISTER_CONFIRMED, REGISTER_DENIED, USER_LOADED, AUTH_DENIED, LOGIN_CONFIRMED, LOGIN_DENIED, LOGOUT } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function( state = initialState, action ) {
    const { type , payload } = action
    switch(type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_CONFIRMED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_DENIED:
        case AUTH_DENIED:
        case LOGIN_DENIED:
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        case LOGIN_CONFIRMED:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        default:
            return state;
    }
}