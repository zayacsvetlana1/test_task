import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "../type";

const initialState = {
	token: typeof window!== 'undefined' ?
			localStorage.getItem ('token') : null ,
	isLoggedIn: false,
	errorMessage: ''
}


export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {token: action.payload, isLoggedIn: true, errorMessage: ''}
		case LOGIN_FAIL:
			return {token: null, isLoggedIn: false, errorMessage: action.payload}
		case LOGOUT:
			return {...state, isLoggedIn: false}
		default:
			return state
	}
}




