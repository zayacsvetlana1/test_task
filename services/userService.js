import axios from "axios";
import authHeader from "./authHeader"
import API_URL from "../consts"

export const getPublicContent = () => {
	return axios.get('https://reqres.in/api/' + "all");
};
export const getProfile = () => {
	return axios.get ('https://reqres.in/api/' + "profile", {headers: authHeader ()});
};