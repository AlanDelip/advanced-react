import {SAVE_COMMENT, FETCH_COMMENT, CHANGE_AUTH} from "actions/types";
import axios from 'axios';

export function saveComment(comment) {
	return {
		type: SAVE_COMMENT,
		payload: comment
	}
}

export function fetchComments() {
	const res = axios.get('http://jsonplaceholder.typicode.com/comments');

	return {
		type: FETCH_COMMENT,
		payload: res
	}
}

export function changeAuth(isLoggedIn) {
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	}
}