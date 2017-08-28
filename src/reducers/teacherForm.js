import {
	TEACHER_ISWAITING,
	TEACHER_ATTACH_PHOTO_FAIL,
	TEACHER_ATTACH_PHOTO_SUCCESS,
	TEACHER_EDIT,
	TEACHER_INPUT_CHANGED,
	TEACHER_NEW,
	TEACHER_RESET,
	TEACHER_SAVE_FAIL,
	TEACHER_SAVE_SUCCESS
} from '../constants';

const INITIAL_STATE = {
	isWaiting: false,
	errorMessage: "",
	teacherid: "",
	image: "",
	firstname: "",
	lastname: "",
	title: "",
	biology: "",
	isactive: true
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TEACHER_ISWAITING:
			return { ...state, isWaiting: true, errorMessage: "" }
		case TEACHER_INPUT_CHANGED:
			return { ...state, [action.payload.name]: action.payload.value };
		case TEACHER_RESET:
			return INITIAL_STATE;
		case TEACHER_EDIT:
			return { ...INITIAL_STATE, teacherid: action.payload.teacherid, ...action.payload.teacher };
		case TEACHER_NEW:
			return { ...INITIAL_STATE, teacherid: action.payload };
		case TEACHER_SAVE_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "" };
		case TEACHER_SAVE_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload };
		case TEACHER_ATTACH_PHOTO_SUCCESS:
			return { ...state, isWaiting: false, errorMessage: "", image: action.payload };
		case TEACHER_ATTACH_PHOTO_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.action.payload };
		default:
			return state;
	}
}