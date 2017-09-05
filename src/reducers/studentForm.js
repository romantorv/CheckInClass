import {
	STUDENT_ISWAITING,
	STUDENT_ATTACH_PHOTO_FAIL,
	STUDENT_ATTACH_PHOTO_SUCCESS,
	STUDENT_EDIT,
	STUDENT_INPUT_CHANGED,
	STUDENT_NEW,
	STUDENT_RESET,
	STUDENT_SAVE_FAIL,
	STUDENT_SAVE_SUCCESS
} from '../constants';

const INITIAL_STATE = {
	isWaiting: false,
	errorMessage: "",
	studentid: "",
	image: "",
	firstname: "",
	lastname: "",
	dob: "",
	gender: "",
	nationality: "",
	identitfyno: "",
	guardian: "",
	isactive: true
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STUDENT_ISWAITING:
			return { ...state, isWaiting: true, errorMessage: "" }
		case STUDENT_INPUT_CHANGED:
			return { ...state, [action.payload.name]: action.payload.value };
		case STUDENT_RESET:
			return INITIAL_STATE;
		case STUDENT_EDIT:
			return { ...INITIAL_STATE, studentid: action.payload.studentid, ...action.payload.student };
		case STUDENT_NEW:
			return { ...INITIAL_STATE, studentid: action.payload };
		case STUDENT_SAVE_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "" };
		case STUDENT_SAVE_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload };
		case STUDENT_ATTACH_PHOTO_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "", image: action.payload };
		case STUDENT_ATTACH_PHOTO_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.action.payload };
		default:
			return state;
	}
}