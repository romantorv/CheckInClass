import firebase from '../firebase';
import {
	STUDENT_ISWAITING,
	STUDENT_ATTACH_PHOTO_FAIL,
	STUDENT_ATTACH_PHOTO_SUCCESS,
	STUDENT_EDIT,
	STUDENT_REMOVE_FAIL,
	STUDENT_REMOVE_SUCCESS,
	STUDENT_INPUT_CHANGED,
	STUDENT_NEW,
	STUDENT_RESET,
	STUDENT_SAVE_FAIL,
	STUDENT_SAVE_SUCCESS,
	STUDENT_FETCH_LIST_FAIL,
	STUDENT_FETCH_LIST_SUCCESS
} from '../constants';
import moment from 'moment';

export const StudentOnInputChanged = ({name, value}) => {
	return {
		type: STUDENT_INPUT_CHANGED,
		payload: {name, value}
	}
}

export const StudentFormReset = () => {
	return { type: STUDENT_RESET };
}
export const StudentCreatNew = () => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		const studentRef = `Schools/${uid}/Students`;
		const newStudent = firebase.database().ref(studentRef).push();
		dispatch({ type: STUDENT_NEW, payload: newStudent.key });
	}
}

export const StudentRemove = (studentItem) => {
	return (dispatch) => {
		dispatch({type: STUDENT_ISWAITING});
		const uid = firebase.auth().currentUser.uid;
		const studentRef = `Schools/${uid}/Students`;
		const { studentid, imageRef } = studentItem;
		firebase.database().ref(studentRef)
			.child(studentid)
			.remove()
			.then( () => { 
				if (imageRef !== undefined && imageRef !== "" && imageRef !== null) {
					firebase.storage().ref(imageRef)
						.delete()
						.then( () => dispatch({type: STUDENT_REMOVE_SUCCESS}))
						.catch( error => dispatch({ type: STUDENT_REMOVE_FAIL, payload: `storage error: ${error.message}` }))
				} else {
					dispatch({type: STUDENT_REMOVE_SUCCESS});
				}
			})
			.catch(error => dispatch({ type: STUDENT_REMOVE_FAIL, payload: `db error: ${error.message}` }))
	}
}

export const StudentEdit = (studentid) => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		const studentRef = `Schools/${uid}/Students`;
		firebase.database().ref(studentRef)
			.child(studentid)
			.once('value')
			.then(response => {
				var responseJSON = response.toJSON();
				responseJSON.dob = moment(responseJSON.dob).format('DD MMM YYYY');
				dispatch({ type: STUDENT_EDIT, payload: {studentid, student: responseJSON} })
			})
			.catch(error => dispatch({ type: STUDENT_SAVE_FAIL, payload: error.message }))
	}
}
export const StudentFormSave = (formDetail) => {
	return (dispatch) => {
		dispatch({ type: STUDENT_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const studentRef = `Schools/${uid}/Students`;
		const { studentid, firstname, lastname, dob, gender, nationality, identitfyno, guardian, isactive } = formDetail;
		var timeStamp = new Date().getTime();
		var formatedDOB = moment(dob, 'DD MMM YYYY').format();
		firebase.database().ref(studentRef)
			.child(studentid)
			.update({ firstname, lastname, dob: formatedDOB, gender, nationality, identitfyno, guardian, isactive })
			.then(response => dispatch({ type: STUDENT_SAVE_SUCCESS }))
			.catch(error => dispatch({ type: STUDENT_SAVE_FAIL, payload: error.message }))

	}
}
export const StudentAttachPhoto = (formDetail) => {
	return (dispatch) => {
		dispatch({ type: STUDENT_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const { studentid, imgName, imageURI } = formDetail;
		const studentRef = `Schools/${uid}/Students/${studentid}`;
		var timeStamp = new Date().getTime();
		firebase.storage().ref(studentRef)
			.child('profile')
			.child(`${timeStamp.toString()}_${imgName}`)
			.putFile(imageURI)
			.then(result => {
				console.log("result:", result);
				firebase.database().ref(studentRef).child('image')
					.update(result)
					.then(res => dispatch({ type: STUDENT_ATTACH_PHOTO_SUCCESS, payload: result }))
					.catch(err => dispatch({ type: STUDENT_ATTACH_PHOTO_FAIL, payload: err.message }))

			})
			.catch(err => dispatch({ type: STUDENT_ATTACH_PHOTO_FAIL, payload: err.message }))
	}
}

export const StudentFetchList = () => {
	return (dispatch) => {
		dispatch({ type: STUDENT_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const studentRef = `Schools/${uid}`;
		firebase.database().ref(studentRef)
			.child('Students')
			.orderByChild("firstname")
			.on( 'value',
				(snapshot) => {
					var studentListObj = {};
					var studentListArr = [];

					snapshot.forEach( childSnapshot => {
						studentListObj[childSnapshot.key] = childSnapshot.val();
						studentListArr.push(childSnapshot.key);
					});

					dispatch({
						type: STUDENT_FETCH_LIST_SUCCESS,
						payload: { students: studentListObj, allstudents: studentListArr.join(',') }
					})
				},
				(error) => dispatch({ type: STUDENT_FETCH_LIST_FAIL, payload: error.message })
			)
	}
}