import { SET_FORM, FORM_ERROR, CLEAR_FORM, SET_EDIT } from '../actions/types'

const initialState = {
    name: '',
    className: '',
    buttonText: '',
    headerValue: '',
    inputs: [],
    textAreas: [],
    values: {},
    error: {},
    loading: true
}

export default function (state= initialState, action) {
    const { type, payload } = action;

    switch( type ) {
        case CLEAR_FORM:
            return {
                ...state,
                name: '',
                className: '',
                buttonText: '',
                inputs: [],
                textAreas: [],
                values: {},
                error: {},
                loading: true
            }
        case SET_FORM:
            return {
                ...state,
                name: payload.name,
                className: payload.className,
                buttonText: payload.buttonText,
                headerValue: payload.headerValue,
                inputs: payload.inputs,
                textAreas: payload.textAreas,
                values: payload.values,
                loading: false
            }
        case FORM_ERROR: 
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}