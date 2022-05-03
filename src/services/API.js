import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL_BASE = "localhost:5000";

export { postLogin, postSignUp };

function postLogin(body) {
	const promise = axios.post(`${URL_BASE}/users`, body);
	return promise;
}

function postSignUp(body) {
	const promise = axios.post(`${URL_BASE}/users`, body);
	return promise;
}

function getTransactions(header) {
	const promise = axios.get(`${URL_BASE}/transactions`);
}
