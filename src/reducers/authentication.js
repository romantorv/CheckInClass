import { 
	INPUT_CHANGED,
	LOGIN_FAIL, 
	LOGIN_SUCCESS 
} from '../constants';

const INIT_STATE = {
	email: "",
	password: "",
	errorCode: "",
	errorMessage: "",
	user: null,
	isWaiting: false
}

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case INPUT_CHANGED:
			return { ...state, [action.payload.name]: action.payload.value };
		case LOGIN_SUCCESS:
			return { ...INIT_STATE, user: action.payload };
		case LOGIN_FAIL:
			console.log("Error:", action.payload);
			return { ...state, isWaiting: false, errorCode: action.payload.code, errorMessage: action.payload.message };
		default:
			return state;
	}
}