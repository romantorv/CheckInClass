import _ from 'lodash';
import {
	SCHOOL_ISWAITING,
	SCHOOL_INPUT_CHANGED,
	SCHOOL_FETCH_DETAIL,
	SCHOOL_UPDATE_DETAIL,
	SCHOOL_ATTACH_PHOTO_FAIL,
	SCHOOL_ATTACH_PHOTO_SUCCESS,
	SCHOOL_REMOVE_FILE_FAIL,
	SCHOOL_REMOVE_FILE_SUCCESS
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
	allImages : "",
	isWaiting: false,
	errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SCHOOL_ISWAITING:
			return { ...state, isWaiting: true };
		case SCHOOL_INPUT_CHANGED:
			return { ...state, [action.payload.name]: action.payload.value };
		case SCHOOL_FETCH_DETAIL:
			return { ...INITIAL_STATE, ...action.payload };
		case SCHOOL_UPDATE_DETAIL:
			return { ...state, isWaiting: false };
		case SCHOOL_ATTACH_PHOTO_SUCCESS: 
			var newImages = state.images;
			newImages[action.payload.key] = action.payload.value;
			var newStrImages = state.allImages + action.payload.key + ";";
			return { ...state, isWaiting: false, errorMessage: "", images: newImages, allImages: newStrImages }; 
		case SCHOOL_ATTACH_PHOTO_FAIL:
			return { ...state, isWaiting: false ,errorMessage: action.payload.message};
		case SCHOOL_REMOVE_FILE_SUCCESS:
			var removedId = action.payload;
			var newImages = {};
			var newStrImages = "";
			_.map(state.images, (value, key) => {
				if (key !== removedId){
					newImages[key]=value;
					newStrImages += key+";"
				}
			});
			return { ...state, isWaiting: false, errorMessage:"", images: newImages, allImages: newStrImages };
		case SCHOOL_REMOVE_FILE_FAIL:
			return { ...state, isWaiting: false, errorMessage: action.payload }
		default:
			return state;
	}
}