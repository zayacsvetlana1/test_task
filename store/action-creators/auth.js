import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "../type";
import AuthService from "../../services/authService"


export const Auth = (email, password) => (dispatch) => {
	return AuthService.login (email, password).then (
		(data) => {
			dispatch ({
				type: LOGIN_SUCCESS,
				payload: {data}
			});
		},
		(error) => {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString ();
			dispatch ({
				type: LOGIN_FAIL,
				payload: message
			});
		}
	)
};

export const Log_Out = () => (dispatch) => {
	AuthService.logout ();
	dispatch ({
		type: LOGOUT,
	});
};

