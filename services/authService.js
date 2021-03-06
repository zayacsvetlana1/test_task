import axios from "axios";

const login = (email, password) => {
	return axios
		.post (`${process.env.API_URL}/login`, {
			email: email,
			password: password,
		})
		.then ((response) => {
			if (response.data.token) {
				localStorage.setItem ("token", JSON.stringify (response.data.token));
			}
			console.log (response.data)
			return response.data.token;
		});
};

const logout = () => {
	localStorage.removeItem ("token");
};
export default {
	login,
	logout,
};

