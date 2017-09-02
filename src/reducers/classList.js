import {
	CLASS_ISWAITING,
	CLASS_FETCH_LIST_FAIL,
	CLASS_FETCH_LIST_SUCCESS,
	CLASS_REMOVE_FAIL,
	CLASS_REMOVE_SUCCESS
} from '../constants';

const INITIAL_STATE = {
	classes: {},
	allclasses: "",
	isWaiting: false,
	errorMessage: ""
}

export default (state = INITIAL_STATE, action) => {
	console.log("current action", action)
	switch (action.type) {
		case CLASS_ISWAITING:
			return { ...state, isWaiting: true };
		case CLASS_FETCH_LIST_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload };
		case CLASS_FETCH_LIST_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "", classes: action.payload.classes, allclasses: action.payload.allclasses };
		case CLASS_REMOVE_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "" };
		case CLASS_REMOVE_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload };
		default:
			return state;
	}
}