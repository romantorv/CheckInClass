import firebase from '../firebase';
import _ from 'lodash';
import { 
	SCHOOL_ISWAITING, SCHOOL_INPUT_CHANGED,
	SCHOOL_FETCH_DETAIL, SCHOOL_UPDATE_DETAIL, 
	SCHOOL_ATTACH_PHOTO_FAIL, SCHOOL_ATTACH_PHOTO_SUCCESS,
	SCHOOL_REMOVE_FILE_FAIL, SCHOOL_REMOVE_FILE_SUCCESS} from '../constants';

export const schoolInputChanged = ({name, value}) => {
	return {
		type: SCHOOL_INPUT_CHANGED,
		payload: {name, value}
	}
}

export const schoolFetchInfo = () => {
	return (dispatch) => {
		dispatch({ type: SCHOOL_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const schoolInfoRef = `Schools/${uid}/Information`;
		firebase.database().ref(schoolInfoRef)
			.once('value')
			.then(response => { 
				var strImages = "";
				var responseJSON = response.toJSON();				
				_.map( response.images, (value, key)=>{ strImages += `${key};` });
				dispatch({ type: SCHOOL_FETCH_DETAIL, payload: {...responseJSON, allImages:strImages} })
			})
	}
}

export const schoolSaveInfo = (schoolDetail) => {
	return (dispatch) => {
		dispatch({ type: SCHOOL_ISWAITING });		
		const uid = firebase.auth().currentUser.uid;
		const schoolInfoRef = `Schools/${uid}/Information`;
		firebase.database().ref(schoolInfoRef)
			.update(schoolDetail)
			.then(() => dispatch({ type: SCHOOL_UPDATE_DETAIL }))
			.catch(error => console(error));
	}
}

export const schoolAttachPhoto = ({ imgName, imageURI }) => {
	return (dispatch) => {
		dispatch({ type: SCHOOL_ISWAITING });
		const uid = firebase.auth().currentUser.uid;
		const schoolInfoRef = `Schools/${uid}/Information`;
		var timeStamp = new Date().getTime();
		firebase.storage()
			.ref(schoolInfoRef).child(`${timeStamp.toString()}_${imgName}`)
			.putFile(imageURI)
			.then(response => {
				firebase.database().ref(schoolInfoRef).child('images')
					.push(response)
					.then(result => {
						dispatch({ 
							type: SCHOOL_ATTACH_PHOTO_SUCCESS, 
							payload: {key: result.key, value: response} 
						})
					})
					.catch(err => {
						dispatch({ type: SCHOOL_ATTACH_PHOTO_FAIL, payload: err })
					})
			})
			.catch(err => {
				dispatch({ type: SCHOOL_ATTACH_PHOTO_FAIL, payload: err })
			});
	};
}

export const schoolRemovePhoto = ({imageID, imageRef}) => {
	return (dispatch)=>{
		dispatch({type: SCHOOL_ISWAITING});
		const uid = firebase.auth().currentUser.uid;
		const schoolInfoRef = `Schools/${uid}/Information`;
		firebase.storage()
			.ref(imageRef)
			.delete()
			.then( () => {
				firebase.database().ref(schoolInfoRef).child(`images/${imageID}`)
					.remove()
					.then( () => {
						dispatch({type: SCHOOL_REMOVE_FILE_SUCCESS, payload: imageID })
					})
					.catch( err => console.log(error) )
			})
			.catch( err => dispatch({ type:SCHOOL_REMOVE_FILE_FAIL, payload: err.message }))
	}
}