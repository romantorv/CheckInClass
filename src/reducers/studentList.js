import {
	STUDENT_ISWAITING,
	STUDENT_REMOVE_FAIL,
	STUDENT_REMOVE_SUCCESS,
	STUDENT_FETCH_LIST_FAIL,
	STUDENT_FETCH_LIST_SUCCESS
} from '../constants';

const INITIAL_STATE = {
	students: {},
	allstudents: "",
	isWaiting: false,
	errorMessage: ""
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STUDENT_ISWAITING:
			return { ...state, isWaiting: true };
		case STUDENT_REMOVE_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload };
		case STUDENT_REMOVE_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "" };
		case STUDENT_FETCH_LIST_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload };
		case STUDENT_FETCH_LIST_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "", students: action.payload.students, allstudents: action.payload.allstudents };
		default:
			return state;
	}
}