import { ADD_GIG, GET_GIGS, GET_GIG, GIG_ERROR, DELETE_GIG, EDIT_GIG } from '../actions/types';

const initialState = {
    gigs: [],
    gig: null,
    loading: true,
    error: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch( type ) {
        case ADD_GIG:
            return {
                ...state,
                gigs: [payload.gig, ...state.gigs],
                loading: false
            }
        case DELETE_GIG:
            return {
                ...state,
                gigs: state.gigs.filter( gig => gig._id !== payload),
                loading: false
            }
        case GET_GIGS:
            return {
                ...state,
                gigs: [...payload],
                loading: false
            }
        case GET_GIG:
            return {
                ...state,
                gig: payload,
                loading: false
            }
        case GIG_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}