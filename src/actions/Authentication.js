import { AsyncStorage } from 'react-native';
import firebase from '../firebase';
import { 
	TOKEN_ID,
	VERIFY_ISSIGNED,	
	INPUT_CHANGED, 
	IS_WAITING, 
	LOGIN_FAIL, 
	LOGIN_SUCCESS, 
	SIGNUP_FAIL,
	SIGNUP_SUCCESS, 
	SIGN_OUT } from '../constants';

export const IsSigned = () => {
	return (dispath) => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				dispath({
					type: LOGIN_SUCCESS,
					payload: user
				});
			}
		});
	}
}

export const UserLogin = ({email, password}) => {
	return (dispath) => {
		dispath({ type: IS_WAITING });
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then( user => {
				dispath({
					type: LOGIN_SUCCESS,
					payload: user
				});
			})
			.catch( error => {
				dispath({
					type: LOGIN_FAIL,
					payload: error
				})
			})
	}
}

export const UserSignOut = () => {
	return (dispath) => {
		firebase.auth().signOut()
			.then( ()=> { dispath({ type: SIGN_OUT })})
			.catch( error => console.log(error) )
	}
}

export const UserSignUp = ({fullname, email, contact, password, repassword}) => {
	return (dispath) => {
		if ( password != repassword){
			dispath({
				type: SIGNUP_FAIL,
				payload: {
					code: "",
					message: "Password is not match"
				}
			});
		} else {
			dispath({ type: IS_WAITING });
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then( user => {
					dispath({
						type: SIGNUP_SUCCESS,
						payload: user
					});
					user.updateProfile({
						displayName: fullname,
						phoneNumber: contact
					});
				})
				.catch ( error => {
					dispath({
						type: SIGNUP_FAIL,
						payload: error
					})
				});
		}
	}
}