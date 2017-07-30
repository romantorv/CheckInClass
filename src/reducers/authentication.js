import { 
	AUTH_RESET,
	INPUT_CHANGED,
	IS_WAITING,
	LOGIN_FAIL, 
	LOGIN_SUCCESS,
	SIGNUP_FAIL,
	SIGNUP_SUCCESS,
	SIGN_OUT,
	TOKEN_ID,
	VERIFY_ISSIGNED
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
	isWaiting: false,
	isTokenExisted: false
}

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case AUTH_RESET:
			return INIT_STATE;
		case INPUT_CHANGED:
			return { ...state, [action.payload.name]: action.payload.value };
		case IS_WAITING:
			return { ...state, isWaiting: true, errorMessage:"", errorCode: "" };
		case LOGIN_SUCCESS:
			return { ...INIT_STATE, user: action.payload, isTokenExisted:true };
		case LOGIN_FAIL:
			return { ...state, isWaiting: false, errorCode: action.payload.code, errorMessage: action.payload.message };
		case SIGNUP_SUCCESS:
			return { ...INIT_STATE, user: action.payload, isTokenExisted:true };
		case SIGNUP_FAIL:
			return { ...state, isWaiting: false, errorCode: action.payload.code, errorMessage: action.payload.message}
		case SIGN_OUT:
			return INIT_STATE;
		case VERIFY_ISSIGNED:
			return { ...state, isTokenExisted: action.payload };
		default:
			return state;
	}
}