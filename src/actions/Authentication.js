import firebase from 'firebase'
import { INPUT_CHANGED, IS_WAITING, LOGIN_FAIL, LOGIN_SUCCESS } from '../constants';

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