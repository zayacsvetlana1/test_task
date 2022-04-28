import {FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, USER_CREATED, USER_DELETED} from "../../consts";

const initialState = {
	users: [],
	error: null,
	loading: false,
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {loading: true, error: null, users: [] }
		case FETCH_USERS_SUCCESS:
			return {loading: false, error: null, users: action.payload}
		case FETCH_USERS_ERROR:
			return {loading: false, error: action.payload, users: [] }
		case USER_CREATED:
			return {
				...state,
				users: [...state.users, action.payload]
			}
		case USER_DELETED:
			return {
				...state,
				users: state.users.filter(item => item.id !== action.payload)
		}
		default:
			return state
	}
}