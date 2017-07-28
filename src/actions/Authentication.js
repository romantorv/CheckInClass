import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { 
	TOKEN_ID,
	TOKEN_LOOKUP,
	INPUT_CHANGED, 
	IS_WAITING, 
	LOGIN_FAIL, 
	LOGIN_SUCCESS, 
	SIGNUP_FAIL,
	SIGNUP_SUCCESS, 
	SIGN_OUT } from '../constants';

const _saveAuth = (currentUser) => {
	currentUser.getIdToken().then(value => {
		AsyncStorage.multiSet([
			[TOKEN_ID, value],
			['displayScreen', currentUser.userInfo().displayName ],
			['uid', currentUser.userInfo().uid ]
		]);
	});
}

const _removeAuth = () => {
	AsyncStorage.multiRemove([TOKEN_ID, 'displayScreen', 'uid']);
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
				_saveAuth(user);
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
	_removeAuth();
	return({
		type: SIGN_OUT
	});
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
					_saveAuth(user);
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