import axios from "axios";
import authHeader from "./authHeader"

export const getPublicContent = () => {
	return axios.get('https://reqres.in/api/' + "all");
};
export const getProfile = () => {
	return axios.get ('https://reqres.in/api/' + "profile", {headers: authHeader ()});
};