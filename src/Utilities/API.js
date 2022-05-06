import axios from "axios";

const URL_BASE = "http://localhost:5000";

export { postLogin, postSignUp, getTransactions, postNewEntry, postNewExit };

function postLogin(body) {
	const promise = axios.post(`${URL_BASE}/signin`, body);
	return promise;
}

function postSignUp(body) {
	const promise = axios.post(`${URL_BASE}/signup`, body);
	return promise;
}

function getTransactions(config) {
	const promise = axios.get(`${URL_BASE}/transactions`, config);
	return promise;
}

function postNewEntry(config, body) {
	const promise = axios.post(`${URL_BASE}/transaction/entry`, body, config);
	return promise;
}

function postNewExit(config, body) {
	const promise = axios.post(`${URL_BASE}/transaction/exit`, body, config);
	return promise;
}
