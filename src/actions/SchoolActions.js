import firebase from '../firebase';
import { SCHOOL_FETCH_DETAIL, SCHOOL_UPDATE_DETAIL, IS_WAITING, ATTACH_SUCCESS, ATTACH_FAIL } from '../constants';

const _fetchSchoolInfo = () => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		firebase.database().ref(`Schools/${uid}/Information`)
			.on('value', (snapshot) => {
				dispatch({ type: SCHOOL_FETCH_DETAIL, payload: snapshot.toJSON() });
			})
			//.then(response => dispatch({ type: SCHOOL_FETCH_DETAIL, payload: response.toJSON() }))
	}	
}

export const schoolFetchInfo = () => {
	return (dispatch) => {
		dispatch({ type: IS_WAITING });
		const uid = firebase.auth().currentUser.uid;
		firebase.database().ref(`Schools/${uid}/Information`)
			.once('value')
			.then(response => dispatch({ type: SCHOOL_FETCH_DETAIL, payload: response.toJSON() }))
	}
}

export const schoolSaveInfo = (schoolDetail) => {
	return (dispatch) => {
		const uid = firebase.auth().currentUser.uid;
		dispatch({ type: IS_WAITING });
		firebase.database().ref(`Schools/${uid}/Information`)
			.set(schoolDetail)
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
		var timeStamp = new Date().getTime();
		firebase.storage()
			.ref(`Users/${uid}/schoolInfo/${timeStamp.toString()}${imgName}`)
			.putFile(imageURI)
			.then(response => {
				firebase.database().ref(`Schools/${uid}/Information/images`)
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

/*export const schoolRemovePhoto = (photoId) => {

}*/