import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "../type";

const initialState = {
	token: typeof window !== 'undefined' ?
		localStorage.getItem ('token') : '',
	// isLoggedIn: false,
	errorMessage: null
}


export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				token: action.payload,
				// isLoggedIn: true,
				errorMessage: null
			}
		case LOGIN_FAIL:
			return {
				token: '',
				// isLoggedIn: false,
				errorMessage: action.payload
			}
		case LOGOUT:
			return {
				...state,
				// isLoggedIn: false,
				token: ''
			}
		default:
			return state
	}
}




