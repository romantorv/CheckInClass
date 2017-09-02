import {
	TEACHER_ISWAITING,
	TEACHER_REMOVE_FAIL,
	TEACHER_REMOVE_SUCCESS,
	TEACHER_FETCH_LIST_FAIL,
	TEACHER_FETCH_LIST_SUCCESS
} from '../constants';

const INITIAL_STATE = {
	teachers: {},
	allteachers: "",
	isWaiting: false,
	errorMessage: ""
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TEACHER_ISWAITING:
			return { ...state, isWaiting: true };
		case TEACHER_REMOVE_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload };
		case TEACHER_REMOVE_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "" };
		case TEACHER_FETCH_LIST_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload };
		case TEACHER_FETCH_LIST_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "", teachers: action.payload.teachers, allteachers: action.payload.allteachers };
		default:
			return state;
	}
}