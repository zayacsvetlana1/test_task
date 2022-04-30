import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "../type";
import AuthService from "../../services/authService"


export const Auth = (email, password) => (dispatch) => {
	return AuthService.login(email, password).then(
		(data) => {
			dispatch ({
				type: LOGIN_SUCCESS,
				payload: {data}
			});
			// return Promise.resolve();
		},
		(error) => {
			dispatch ({
				type: LOGIN_FAIL,
				payload: {error}
			});
			// return Promise.reject();
		}
	)
};

export const Log_Out = () => (dispatch) => {
	AuthService.logout();
	dispatch({
		type: LOGOUT,
	});
};

