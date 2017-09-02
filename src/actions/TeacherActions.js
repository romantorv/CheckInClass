import firebase from '../firebase';
import {
	TEACHER_ISWAITING,
	TEACHER_ATTACH_PHOTO_FAIL,
	TEACHER_ATTACH_PHOTO_SUCCESS,
	TEACHER_EDIT,
	TEACHER_REMOVE_FAIL,
	TEACHER_REMOVE_SUCCESS,
	TEACHER_INPUT_CHANGED,
	TEACHER_NEW,
	TEACHER_RESET,
	TEACHER_SAVE_FAIL,
	TEACHER_SAVE_SUCCESS,
	TEACHER_FETCH_LIST_FAIL,
	TEACHER_FETCH_LIST_SUCCESS
} from '../constants';

export const TeacherOnInputChanged = ({name, value}) => {
	return {
		type: TEACHER_INPUT_CHANGED,
		payload: {name, value}
	}
}

export const TeacherFormReset = () => {
	return { type: TEACHER_RESET };
}
export const TeacherCreatNew = () => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		const teacherRef = `Schools/${uid}/Teachers`;
		const newTeacher = firebase.database().ref(teacherRef).push();
		dispatch({ type: TEACHER_NEW, payload: newTeacher.key });
	}
}

export const TeacherRemove = (teacherItem) => {
	return (dispatch) => {
		dispatch({type: TEACHER_ISWAITING});
		const uid = firebase.auth().currentUser.uid;
		const teacherRef = `Schools/${uid}/Teachers`;
		const { teacherid, imageRef } = teacherItem;
		firebase.database().ref(teacherRef)
			.child(teacherid)
			.remove()
			.then( () => { 
				if (imageRef !== undefined && imageRef !== "" && imageRef !== null) {
					firebase.storage().ref(imageRef)
						.delete()
						.then( () => dispatch({type: TEACHER_REMOVE_SUCCESS}))
						.catch( error => dispatch({ type: TEACHER_REMOVE_FAIL, payload: `storage error: ${error.message}` }))
				} else {
					dispatch({type: TEACHER_REMOVE_SUCCESS});
				}
			})
			.catch(error => dispatch({ type: TEACHER_REMOVE_FAIL, payload: `db error: ${error.message}` }))
	}
}

export const TeacherEdit = (teacherid) => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		const teacherRef = `Schools/${uid}/Teachers/${teacherid}`;
		firebase.database().ref(teacherRef)
			.once('value')
			.then(response => dispatch({ type: TEACHER_EDIT, payload: {teacherid, teacher: response.toJSON()} }))
			.catch(error => dispatch({ type: TEACHER_SAVE_FAIL, payload: error.message }))
	}
}
export const TeacherFormSave = (formDetail) => {
	return (dispatch) => {
		dispatch({ type: TEACHER_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const teacherRef = `Schools/${uid}/Teachers/`;
		const { teacherid, firstname, lastname, title, biology, isactive } = formDetail;
		var timeStamp = new Date().getTime();
		firebase.database().ref(teacherRef).child(teacherid)
			.update({ firstname, lastname, title, biology, isactive })
			.then(response => dispatch({ type: TEACHER_SAVE_SUCCESS }))
			.catch(error => dispatch({ type: TEACHER_SAVE_FAIL, payload: error.message }))

	}
}
export const TeacherAttachPhoto = (formDetail) => {
	return (dispatch) => {
		dispatch({ type: TEACHER_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const { teacherid, imgName, imageURI } = formDetail;
		const teacherRef = `Schools/${uid}/Teachers/${teacherid}`;
		var timeStamp = new Date().getTime();
		firebase.storage().ref(teacherRef).child(`${timeStamp.toString()}_${imgName}`)
			.putFile(imageURI)
			.then(result => {
				console.log("result:", result);
				firebase.database().ref(teacherRef).child('image')
					.update(result)
					.then(res => dispatch({ type: TEACHER_ATTACH_PHOTO_SUCCESS, payload: result }))
					.catch(err => dispatch({ type: TEACHER_ATTACH_PHOTO_FAIL, payload: err.message }))

			})
			.catch(err => dispatch({ type: TEACHER_ATTACH_PHOTO_FAIL, payload: err.message }))
	}
}

export const TeacherFetchList = () => {
	return (dispatch) => {
		dispatch({ type: TEACHER_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const teacherRef = `Schools/${uid}`;
		firebase.database().ref(teacherRef)
			.child('Teachers')
			.orderByChild("firstname")
			.on( 'value',
				(snapshot) => {
					var teacherListObj = {};
					var teacherListArr = [];

					snapshot.forEach( childSnapshot => {
						teacherListObj[childSnapshot.key] = childSnapshot.val();
						teacherListArr.push(childSnapshot.key);
					});

					dispatch({
						type: TEACHER_FETCH_LIST_SUCCESS,
						payload: { teachers: teacherListObj, allteachers: teacherListArr.join(',') }
					})
				},
				(error) => dispatch({ type: TEACHER_FETCH_LIST_FAIL, payload: error.message })
			)
	}
}