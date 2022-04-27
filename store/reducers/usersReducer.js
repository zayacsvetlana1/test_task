import {FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS} from "../../consts";

const initialState = {
	users: [],
	error: null,
	loading: false
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {loading: true, error: null, users: [] }
		case FETCH_USERS_SUCCESS:
			return {loading: false, error: null, users: action.payload}
		case FETCH_USERS_ERROR:
			return {loading: false, error: action.payload, users: [] }
		default:
			return state
	}
}