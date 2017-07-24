import { 
	INPUT_CHANGED,
	IS_WAITING,
	LOGIN_FAIL, 
	LOGIN_SUCCESS,
	SIGNUP_FAIL,
	SIGNUP_SUCCESS
} from '../constants';

const INIT_STATE = {
	email: "",
	password: "",
	fullname: "",
	contact: "",
	repassword: "",
	errorCode: "",
	errorMessage: "",
	user: null,
	isWaiting: false
}

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case INPUT_CHANGED:
			return { ...state, [action.payload.name]: action.payload.value };
		case IS_WAITING:
			return { ...state, isWaiting: true, errorMessage:"", errorCode: "" };
		case LOGIN_SUCCESS:
			return { ...INIT_STATE, user: action.payload };
		case LOGIN_FAIL:
			return { ...state, isWaiting: false, errorCode: action.payload.code, errorMessage: action.payload.message };
		case SIGNUP_SUCCESS:
			return { ...INIT_STATE, user: action.payload };
		case SIGNUP_FAIL:
			return { ...state, isWaiting: false, errorCode: action.payload.code, errorMessage: action.payload.message}
		default:
			return state;
	}
}