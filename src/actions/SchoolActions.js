import firebase from '../firebase';
import { SCHOOL_FETCH_DETAIL, SCHOOL_UPDATE_DETAIL } from '../constants';

export const schoolFetchInfo = () => {
	return {type: SCHOOL_FETCH_DETAIL};
}

export const schoolSaveInfo = () => {
	return {type: SCHOOL_UPDATE_DETAIL};
}