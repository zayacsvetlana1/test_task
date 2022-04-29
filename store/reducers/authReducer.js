import {LOGIN_FAIL, LOGIN_SUCCESS} from "../type";


const initialState = {
	user: null,
	errorMessage: '',
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {user: action.payload, errorMessage: ''}
		case LOGIN_FAIL:
			return {user: null, errorMessage: action.payload}
		default:
			return state
	}

}