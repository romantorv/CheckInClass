import { combineReducers } from 'redux';
import { SIGN_OUT } from '../constants';
import AuthReducer from './authentication';
import SchoolInforReducer from './school';
import ClassListReducer from './classList';
import ClassFormReducer from './classForm';
import TeacherFormReducer from './teacherForm';

const AppReducers = combineReducers({
	authentication: AuthReducer,
	school: SchoolInforReducer,
	classes: ClassListReducer,
	classForm: ClassFormReducer,
	teachers: null,
	teacherForm: TeacherFormReducer,
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