import {LOGIN_FAIL, LOGIN_SUCCESS} from "../type";


export const login = (email, password) => () => {
	return (dispatch)  => {
		try {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: { user: {email, password} }
			});
		} catch (e) {
			dispatch ({
				type: LOGIN_FAIL,
				payload: 'Имя пользователя или пароль введены не верно'
			})
		}
	}
};
