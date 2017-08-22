import firebase from '../firebase';
import {
	IS_WAITING,
	ATTACH_FAIL,
	ATTACH_SUCCESS,
	INPUT_CHANGED,
	CLASS_NEW,
	CLASS_CREATE_FAIL,
	CLASS_CREATE_SUCCESS,
	CLASS_INSERT_TEACHER
} from '../constants';

export const ClassCreatNew = () => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Classes`;
		const newClass = firebase.database().ref(classRef).push();
		dispatch({type: CLASS_NEW, payload: newClass.key});
	}
}

export const ClassFormSave = (formDetail) => {
	return (dispatch) => {
		dispatch({type: IS_WAITING});
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Classes`;
		const { classid, classname, summary } = formDetail;
		firebase.database().ref(classRef).child(classid)
			.update({ classname, summary })
			.then( response => dispatch({type: CLASS_CREATE_SUCCESS, payload: response.key }))
			.catch( error => dispatch({type: CLASS_CREATE_FAIL, payload: error.message}))

	}
}

export const ClassAttachPhoto = ({ classId, imgName, imageURI }) => {
	return (dispatch) => {
		dispatch({type: IS_WAITING});
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Classes`;
		var timeStamp = new Date().getTime();
		firebase.storage().ref(`${classRef}/${timeStamp.toString()}${imgName}`)
			.putFile(imageURI)
			.then( result => {
				console.log("result:", result);
				firebase.database().ref(classRef).child(`${classId}/image`)
					.set(result)
					.then( res => dispatch({type: ATTACH_SUCCESS, payload: result.downloadUrl }))
					.catch( err => dispatch({type: ATTACH_FAIL, payload: err.message}))
					
			})
			.catch( err => dispatch({type: ATTACH_FAIL, payload: err.message}))
	}
}