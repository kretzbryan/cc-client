import { CLEAR_PROFILE, GET_PROFILE, GET_PROFILES, PROFILE_ERROR } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

export default function( state= initialState, action ) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case GET_PROFILES:
            console.log(payload)
            return {
                ...state,
                profiles: [...payload.profiles.filter( profile => profile._id !==  payload.user)],
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false
            }
        default:
            return state;
    }
}