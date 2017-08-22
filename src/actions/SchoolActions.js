import firebase from '../firebase';
import _ from 'lodash';
import { 
	SCHOOL_FETCH_DETAIL, SCHOOL_UPDATE_DETAIL, 
	IS_WAITING, 
	ATTACH_SUCCESS, ATTACH_FAIL,
	FILE_REMOVE_FAIL, FILE_REMOVE_SUCCESS } from '../constants';

export const schoolFetchInfo = () => {
	return (dispatch) => {
		dispatch({ type: IS_WAITING });
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
		const uid = firebase.auth().currentUser.uid;
		const schoolInfoRef = `Schools/${uid}/Information`;
		dispatch({ type: IS_WAITING });
		firebase.database().ref(schoolInfoRef)
			.update(schoolDetail)
			.then(() => dispatch({ type: SCHOOL_UPDATE_DETAIL }))
			.catch(error => console(error));
	}
	return { type: SCHOOL_UPDATE_DETAIL };
}

export const schoolAttachPhoto = ({ imgName, imageURI }) => {
	return (dispatch) => {
		dispatch({ type: IS_WAITING });
		//
		const uid = firebase.auth().currentUser.uid;
		const schoolInfoRef = `Schools/${uid}/Information`;
		var timeStamp = new Date().getTime();
		firebase.storage()
			.ref(`${schoolInfoRef}/${timeStamp.toString()}${imgName}`)
			.putFile(imageURI)
			.then(response => {
				firebase.database().ref(schoolInfoRef).child('images')
					.push(response)
					.then(result => {
						dispatch({ 
							type: ATTACH_SUCCESS, 
							payload: {key: result.key, value: response} 
						})
					})
					.catch(err => {
						dispatch({ type: ATTACH_FAIL, payload: err })
					})
			})
			.catch(err => {
				dispatch({ type: ATTACH_FAIL, payload: err })
			});
	};
}

export const schoolRemovePhoto = ({imageID, imageRef}) => {
	return (dispatch)=>{
		dispatch({type: IS_WAITING});
		const uid = firebase.auth().currentUser.uid;
		const schoolInfoRef = `Schools/${uid}/Information`;
		firebase.storage()
			.ref(imageRef)
			.delete()
			.then( () => {
				firebase.database().ref(schoolInfoRef).child(`images/${imageID}`)
					.remove()
					.then( () => {
						dispatch({type: FILE_REMOVE_SUCCESS, payload: imageID })
					})
					.catch( err => console.log(error) )
			})
			.catch( err => dispatch({ type:FILE_REMOVE_FAIL, payload: err.message }))
	}
}