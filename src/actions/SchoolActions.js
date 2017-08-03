import firebase from '../firebase';
import { SCHOOL_FETCH_DETAIL, SCHOOL_UPDATE_DETAIL, IS_WAITING } from '../constants';

export const schoolFetchInfo = () => {
	return (dispatch) => {
		dispatch({type: IS_WAITING});
		const uid = firebase.auth().currentUser.uid;
		firebase.database().ref(`Schools/${uid}/Information`)
			.once('value')
			.then( response => dispatch({type: SCHOOL_FETCH_DETAIL, payload: response.toJSON() }))
	}
}

export const schoolSaveInfo = (schoolDetail) => {
	return (dispatch) => {
		dispatch({type: IS_WAITING});
		const uid = firebase.auth().currentUser.uid;
		firebase.database().ref(`Schools/${uid}/Information`)
			.set(schoolDetail)
			.then( ()=> dispatch({type: SCHOOL_UPDATE_DETAIL}))
			.catch( error => console(error) );
	}
	return {type: SCHOOL_UPDATE_DETAIL};
}