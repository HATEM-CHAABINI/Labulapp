import {
	POSTING_REQUEST,
	REQUEST_SUCCESS,
	REQUEST_FAILED,
	ERROR,
	RESPONSE_RECEIVED,
	SET_TEXT,
	USER_SET_UID,
} from './actionsTypes';
export function setUid(uid) {
	return {
		type: USER_SET_UID,
		value: uid,
	};
}
export function setText(element, text) {
	return {
		type: SET_TEXT,
		element: element,
		value: text,
	};
}

export function postingRequest(prefix) {
	return {
		type: `${prefix}_${POSTING_REQUEST}`,
	};
}

export function responseReceived(json, message, prefix) {
	return {
		type: `${prefix}_${RESPONSE_RECEIVED}`,
		data: json,
		message: message,
	};
}

export function requestSuccess(json, message, prefix) {
	return {
		type: `${prefix}_${REQUEST_SUCCESS}`,
		data: json,
		message: message,
	};
}

export function requestFailed(json, message, prefix) {
	return {
		type: `${prefix}_${REQUEST_FAILED}`,
		data: json,
		message: message,
	};
}

export function requestUpdate(json, message, prefix) {
	return {
		type: `${prefix}_${REQUEST_UPDATE}`,
		data: json,
		message: message,
	};
}