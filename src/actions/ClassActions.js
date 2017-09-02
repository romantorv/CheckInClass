import firebase from '../firebase';
import {
	CLASS_ISWAITING,
	CLASS_ATTACH_PHOTO_FAIL,
	CLASS_ATTACH_PHOTO_SUCCESS,
	CLASS_INPUT_CHANGED,
	CLASS_RESET,
	CLASS_NEW, 
	CLASS_EDIT,
	CLASS_REMOVE_FAIL,
	CLASS_REMOVE_SUCCESS,
	CLASS_CREATE_FAIL,
	CLASS_CREATE_SUCCESS,
	CLASS_INSERT_TEACHER,
	CLASS_FETCH_LIST_SUCCESS,
	CLASS_FETCH_LIST_FAIL
} from '../constants';

export const ClassOnInputChanged = ({name, value}) => {
	return {
		type: CLASS_INPUT_CHANGED,
		payload: {name, value}
	}
}

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

export const ClassRemove = (classItem) => {
	return (dispatch) => {
		dispatch({type: CLASS_ISWAITING});
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Classes`;
		const { classid, imageRef } = classItem;
		firebase.database().ref(classRef)
			.child(classid)
			.remove()
			.then( () => { 
				if (imageRef !== undefined && imageRef !== "" && imageRef !== null) {
				firebase.storage().ref(imageRef)
					.delete()
					.then( () => dispatch({type: CLASS_REMOVE_SUCCESS}))
					.catch( error => dispatch({ type: CLASS_REMOVE_FAIL, payload: error.message }))
				} else { 
					dispatch({type: CLASS_REMOVE_SUCCESS});
				}
			})
			.catch(error => dispatch({ type: CLASS_REMOVE_FAIL, payload: error.message }))
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
			.orderByChild("classname")
			.on('value',
				(snapshot) => {
					var classListObj = {};
					var classListArr = [];

					snapshot.forEach( classItem => {
						classListObj[classItem.key] = classItem.val();
						classListArr.push(classItem.key)
					})

					dispatch({
						type: CLASS_FETCH_LIST_SUCCESS,
						payload: { classes: classListObj, allclasses: classListArr.join(',') }
					})
				},
				(error) => dispatch({ type: CLASS_FETCH_LIST_FAIL, payload: error.message })
			)
	}
}