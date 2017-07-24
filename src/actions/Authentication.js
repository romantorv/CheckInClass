import firebase from 'firebase'
import { INPUT_CHANGED, IS_WAITING, LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from '../constants';

export const UserLogin = ({email, password}) => {
	return (dispath) => {
		dispath({ type: IS_WAITING });
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then( user => {
				dispath({
					type: LOGIN_SUCCESS,
					payload: user
				})
			})
			.catch( error => {
				dispath({
					type: LOGIN_FAIL,
					payload: error
				})
			})
	}
}

export const UserSignUp = ({fullname, email, contact, password, repassword}) => {
	return (dispath) => {
		console.log(password, repassword);
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
			firebase.auth().createUserWithEmailAndPassword({
				email,
				password
			})
				.then( user => {
					dispath({
						type: SIGNUP_SUCCESS,
						payload: user
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