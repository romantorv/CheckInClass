import { 
	IS_WAITING,
	ATTACH_SUCCESS,
	ATTACH_FAIL,
	INPUT_CHANGED,
	CLASS_NEW,
	CLASS_CREATE_SUCCESS,
	CLASS_CREATE_FAIL,
	CLASS_INSERT_TEACHER
} from '../constants';

const INITIAL_STATE = {
	isWaiting: false,
	classid: "",
	classname: "",
	summary: "",
	classimage: "",
	teachers: {},
	allteachers: ""
}

export default (state = INITIAL_STATE, action) => {
	console.log("currentAction", action);
	switch (action.type) {
		case IS_WAITING:
			return { ...state, isWaiting: true };
		case INPUT_CHANGED: 
			return { ...state, [action.payload.name]: action.payload.value };
		case CLASS_NEW: 
			return { ...state, classid: action.payload, isWaiting: false, errorMessage:"" };
		case CLASS_CREATE_FAIL: 
			return { ...state, errorMessage: action.payload };
		case CLASS_CREATE_SUCCESS: 
			console.log( "action.payload",  action.payload);
			return { ...state, errorMessage: "", isWaiting: false, classid: action.payload };
		case ATTACH_SUCCESS: 
			return { ...state, isWaiting: false, errorMessage: "", classimage: action.payload}
		default:
			return state;
	}
}