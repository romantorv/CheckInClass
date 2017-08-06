import { combineReducers } from 'redux';
import { SIGN_OUT } from '../constants';
import AuthReducer from './authentication';
import SchoolInforReducer from './school';

const AppReducers = combineReducers({
	authentication: AuthReducer,
	school: SchoolInforReducer
});

const RootReducers = (state, action) => {
	if (action.type === SIGN_OUT) {
		state = undefined
	}

	return AppReducers(state, action)
}

export default RootReducers;