import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "../type";

const initialState = {
	token: typeof window !== 'undefined' ? localStorage.getItem ('token') : '',
	errorMessage: null
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				token: action.payload,
				errorMessage: null
			}
		case LOGIN_FAIL:
			return {
				token: '',
				errorMessage: action.payload
			}
		case LOGOUT:
			return {
				...state,
				token: ''
			}
		default:
			return state
	}
}




