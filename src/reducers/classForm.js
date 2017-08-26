import { 
	IS_WAITING,
	ATTACH_SUCCESS,
	ATTACH_FAIL,
	INPUT_CHANGED,
	CLASS_RESET,
	CLASS_NEW,
	CLASS_EDIT,
	CLASS_CREATE_SUCCESS,
	CLASS_CREATE_FAIL,
	CLASS_INSERT_TEACHER
} from '../constants';

const INITIAL_STATE = {
	isWaiting: false,
	errorMessage: "",
	classid: "",
	classname: "",
	summary: "",
	image: "",
	teachers: {},
	allteachers: "",
	isactive: true,
	createdat: (new Date().getTime()).toString()
}

export default (state = INITIAL_STATE, action) => {
	console.log("see my stat", state);
	switch (action.type) {
		case IS_WAITING:
			return { ...state, isWaiting: true, errorMessage: "" };
		case INPUT_CHANGED: 
			return { ...state, [action.payload.name]: action.payload.value };
		case CLASS_RESET:
			return INITIAL_STATE;
		case CLASS_NEW: 
			return { ...INITIAL_STATE, classid: action.payload };
		case CLASS_EDIT:
			const {classname, summary, image } = action.payload.class;
			return { ...INITIAL_STATE,
				classid: action.payload.classid,
				classname, summary, image: image.downloadUrl };
		case CLASS_CREATE_FAIL: 
			return { ...state, isWaiting: false, errorMessage: action.payload };
		case CLASS_CREATE_SUCCESS: 
			return { ...state, isWaiting: false, errorMessage: "" };
		case ATTACH_SUCCESS: 
			return { ...state, isWaiting: false, errorMessage: "", image: action.payload}
		default:
			return state;
	}
}