import firebase from '../firebase';
import {
	TEACHER_ATTACH_PHOTO_FAIL,
	TEACHER_ATTACH_PHOTO_SUCCESS,
	TEACHER_EDIT,
	TEACHER_INPUT_CHANGED,
	TEACHER_NEW,
	TEACHER_RESET,
	TEACHER_SAVE_FAIL,
	TEACHER_SAVE_SUCCESS
} from '../constants';

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
export const TeacherEdit = (teacherid) => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Teachers/${teacherid}`;
		firebase.database().ref(classRef)
			.once('value')
			.then(response => dispatch({ type: TEACHER_EDIT, payload: {teacherid, class: response.toJSON()} }))
			.catch(error => dispatch({ type: TEACHER_SAVE_FAIL, payload: error.message }))
	}
}
export const TeacherFormSave = (formDetail) => {
	return (dispatch) => {
		dispatch({ type: IS_WAITING });
		const uid = firebase.auth().currentUser.uid;
		const classRef = `Schools/${uid}/Teachers/`;
		const { teacherid, firstname, lastname, title, biology, isactive } = formDetail;
		var timeStamp = new Date().getTime();
		firebase.database().ref(classRef).child(teacherid)
			.update({ firstname, lastname, title, biology, isactive })
			.then(response => dispatch({ type: TEACHER_SAVE_SUCCESS }))
			.catch(error => dispatch({ type: TEACHER_SAVE_FAIL, payload: error.message }))

	}
}
export const TeacherAttachPhoto = (formDetail) => {
	return (dispatch) => {
		dispatch({ type: IS_WAITING });
		const uid = firebase.auth().currentUser.uid;
		const { teacherid, imgName, imageURI } = formDetail;
		const classRef = `Schools/${uid}/Teachers/${teacherid}`;
		var timeStamp = new Date().getTime();
		firebase.storage().ref(classRef).child(`${timeStamp.toString()}_${imgName}`)
			.putFile(imageURI)
			.then(result => {
				console.log("result:", result);
				firebase.database().ref(classRef).child('image')
					.update(result)
					.then(res => dispatch({ type: TEACHER_ATTACH_PHOTO_SUCCESS, payload: result }))
					.catch(err => dispatch({ type: TEACHER_ATTACH_PHOTO_FAIL, payload: err.message }))

			})
			.catch(err => dispatch({ type: TEACHER_ATTACH_PHOTO_FAIL, payload: err.message }))
	}
}