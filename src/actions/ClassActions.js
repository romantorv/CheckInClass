import firebase from '../firebase';
import _ from 'lodash';
import {
	CLASS_ISWAITING,
	CLASS_ATTACH_PHOTO_FAIL,
	CLASS_ATTACH_PHOTO_SUCCESS,
	CLASS_INPUT_CHANGED,
	CLASS_RESET,
	CLASS_NEW, 
	CLASS_EDIT,
	CLASS_CREATE_FAIL,
	CLASS_CREATE_SUCCESS,
	CLASS_INSERT_TEACHER,
	CLASS_FETCH_LIST_SUCCESS,
	CLASS_FETCH_LIST_FAIL
} from '../constants';

export const ClassFormReset = () =>{
	return { type: CLASS_RESET };
}

export const ClassCreatNew = () => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Classes`;
		const newClass = firebase.database().ref(classRef).push();
		dispatch({ type: CLASS_NEW, payload: newClass.key });
	}
}

export const ClassEdit = (classid) => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Classes/${classid}`;
		firebase.database().ref(classRef)
			.once('value')
			.then(response => dispatch({ type: CLASS_EDIT, payload: {classid, class: response.toJSON()} }))
			.catch(error => dispatch({ type: CLASS_CREATE_FAIL, payload: error.message }))
	}
}

export const ClassFormSave = (formDetail) => {
	return (dispatch) => {
		dispatch({ type: CLASS_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Classes`;
		const { classid, classname, summary, isactive, createdat } = formDetail;
		var timeStamp = new Date().getTime();
		firebase.database().ref(classRef).child(classid)
			.update({ classname, summary, isactive, createdat, lastupdated: timeStamp.toString() })
			.then(response => dispatch({ type: CLASS_CREATE_SUCCESS }))
			.catch(error => dispatch({ type: CLASS_CREATE_FAIL, payload: error.message }))

	}
}

export const ClassAttachPhoto = (formDetail) => {
	return (dispatch) => {
		dispatch({ type: CLASS_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const { classid, imgName, imageURI } = formDetail;
		const classRef = `Schools/${uid}/Classes/${classid}`;
		var timeStamp = new Date().getTime();
		firebase.storage().ref(classRef).child(`${timeStamp.toString()}_${imgName}`)
			.putFile(imageURI)
			.then(result => {
				console.log("result:", result);
				firebase.database().ref(classRef).child('image')
					.update(result)
					.then(res => dispatch({ type: CLASS_ATTACH_PHOTO_SUCCESS, payload: result.downloadUrl }))
					.catch(err => dispatch({ type: CLASS_ATTACH_PHOTO_FAIL, payload: err.message }))

			})
			.catch(err => dispatch({ type: CLASS_ATTACH_PHOTO_FAIL, payload: err.message }))
	}
}

export const ClassFetchList = () => {
	return (dispatch) => {
		dispatch({ type: CLASS_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Classes`;
		firebase.database().ref(classRef)
			.on(
			'value',
			(result) => {
				var classListObj = result.toJSON();
				var classListStr = "";
				_.map(classListObj, (value, key) => { classListStr += `,${key}` })
				dispatch({
					type: CLASS_FETCH_LIST_SUCCESS,
					payload: { classes: classListObj, allclasses: classListStr }
				})
			},
			(error) => dispatch({ type: CLASS_FETCH_LIST_FAIL, payload: error.message })
			)
	}
}