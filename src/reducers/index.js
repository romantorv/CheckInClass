import { combineReducers } from 'redux';
import { SIGN_OUT } from '../constants';
import AuthReducer from './authentication';
import SchoolInforReducer from './school';
import ClassListReducer from './classList';
import ClassFormReducer from './classForm';
import TeacherListReducer from './teacherList';
import TeacherFormReducer from './teacherForm';
import StudentListReducer from './studentList';
import StudentFormReducer from './studentForm';

const AppReducers = combineReducers({
	authentication: AuthReducer,
	school: SchoolInforReducer,
	classes: ClassListReducer,
	classForm: ClassFormReducer,
	teachers: TeacherListReducer,
	teacherForm: TeacherFormReducer,
	students: StudentListReducer,
	studentForm: StudentFormReducer
});

const RootReducers = (state, action) => {
	if (action.type === SIGN_OUT) {
		state = undefined
	}

	return AppReducers(state, action)
}

export default RootReducers;