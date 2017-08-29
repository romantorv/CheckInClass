import { 
	CLASS_ISWAITING,
	CLASS_ATTACH_PHOTO_FAIL,
	CLASS_ATTACH_PHOTO_SUCCESS,
	CLASS_INPUT_CHANGED,
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
	switch (action.type) {
		case CLASS_ISWAITING:
			return { ...state, isWaiting: true, errorMessage: "" };
		case CLASS_INPUT_CHANGED: 
			return { ...state, [action.payload.name]: action.payload.value };
		case CLASS_RESET:
			return INITIAL_STATE;
		case CLASS_NEW: 
			return { ...INITIAL_STATE, classid: action.payload };
		case CLASS_EDIT:
			const {classname, summary, image } = action.payload.class;
			return { ...INITIAL_STATE,
				classid: action.payload.classid,
				...action.payload.class };
		case CLASS_CREATE_FAIL: 
			return { ...state, isWaiting: false, errorMessage: action.payload };
		case CLASS_CREATE_SUCCESS: 
			return { ...state, isWaiting: false, errorMessage: "" };
		case CLASS_ATTACH_PHOTO_SUCCESS: 
			return { ...state, isWaiting: false, errorMessage: "", image: action.payload }
		case CLASS_ATTACH_PHOTO_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload };
		default:
			return state;
	}
}