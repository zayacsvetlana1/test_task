import {FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS} from "../../consts";
import axios from "axios";


export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			dispatch({type: FETCH_USERS})
			const response = await axios.get('https://reqres.in/api/users')
			dispatch({type: FETCH_USERS_SUCCESS, payload: response.data.data})
		} catch (e) {
			dispatch({
				type: FETCH_USERS_ERROR,
				payload: 'Ошибка загрузки'
			})
		}
	}
}