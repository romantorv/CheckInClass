import {
	IS_WAITING,
	SCHOOL_FETCH_DETAIL,
	SCHOOL_UPDATE_DETAIL,
	INPUT_CHANGED,
	ATTACH_SUCCESS,
	ATTACH_FAIL
} from '../constants';

const INITIAL_STATE = {
	schoolname: "",
	address1: "",
	address2: "",
	website: "",
	email: "",
	tel: "",
	fax: "",
	summary: "",
	images: {},
	isWaiting: false,
	errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
	console.log("action: ", action);
	switch (action.type) {
		case IS_WAITING:
			return { ...state, isWaiting: true };
		case INPUT_CHANGED:
			return { ...state, [action.payload.name]: action.payload.value };
		case SCHOOL_FETCH_DETAIL:
			return { ...state, ...action.payload, isWaiting: false };
		case SCHOOL_UPDATE_DETAIL:
			return state;
		case ATTACH_SUCCESS: 
			var newImages = state.images;
			newImages[action.payload.key] = action.payload.value;
			console.log("newImages: ", newImages);
			return { ...state, isWaiting: false, images: newImages }; 
		case ATTACH_FAIL:
			return { ...state, errorMessage: action.payload.message, isWaiting: false };
		default:
			return state;
	}
}