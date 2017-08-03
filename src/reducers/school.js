import { SCHOOL_FETCH_DETAIL, SCHOOL_UPDATE_DETAIL, INPUT_CHANGED } from '../constants';

const INITIAL_STATE = {
	schoolname: "",
	address1: "",
	address2: "",
	website: "",
	email: "",
	tel: "",
	fax: "",
	summary: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INPUT_CHANGED:
			return {...state, [action.payload.name]: action.payload.value };
		case SCHOOL_FETCH_DETAIL:
			console.log("action payload: ", action.payload );
			return {...state, ...action.payload};
		case SCHOOL_UPDATE_DETAIL:
			console.log("action payload: ", action.payload );
			return state;
		default:
			return state;
	}
}