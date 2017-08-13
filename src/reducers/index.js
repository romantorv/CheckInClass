import { combineReducers } from 'redux';
import { SIGN_OUT } from '../constants';
import AuthReducer from './authentication';
import SchoolInforReducer from './school';
import ClassFormReducer from './classForm';

const AppReducers = combineReducers({
	authentication: AuthReducer,
	school: SchoolInforReducer,
	classes: null,
	classForm: ClassFormReducer,
	teachers: null,
	teacherForm: null,
	students: null,
	studentForm: null
});

const RootReducers = (state, action) => {
	if (action.type === SIGN_OUT) {
		state = undefined
	}

	return AppReducers(state, action)
}

export default RootReducers;