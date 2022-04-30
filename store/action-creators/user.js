import {
	FETCH_ONE_USER_SUCCESS,
	FETCH_USERS,
	FETCH_USERS_ERROR,
	FETCH_USERS_SUCCESS,
	USER_CREATED,
	USER_DELETED
} from "../type";
import axios from "axios";


export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			dispatch ({type: FETCH_USERS})
			const response = await axios.get ('https://reqres.in/api/users')
			dispatch ({type: FETCH_USERS_SUCCESS, payload: response.data.data})
		} catch (e) {
			dispatch ({
				type: FETCH_USERS_ERROR,
				payload: 'Ошибка загрузки'
			})
		}
	}
}

export const fetchOneUser = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.get (`https://reqres.in/api/users/${id}`)
			const user = await response.data.data
			dispatch ({type: FETCH_ONE_USER_SUCCESS, payload: {
					first_name: user.first_name,
					last_name: user.last_name,
					email: user.email,
					avatar: user.avatar
				}})
		} catch (e) {
			console.log (e)
		}
	}
}

export const userCreated = (user) => {
	return async (dispatch) => {
		try {
			const response = await axios.post ('https://reqres.in/api/users', {
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				avatar: ""
			})
			console.log (response, 'Отправка успешна')
			dispatch ({
				type: USER_CREATED,
				payload: response.data
			})
		} catch (e) {
			console.log (e)
		}
	}
}

export const userDeleted = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete (`https://reqres.in/api/users/${id}`)
			console.log (response)
			dispatch ({type: USER_DELETED, payload: id})
		} catch (e) {
			console.log (e)
		}
	}
}

