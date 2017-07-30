import { combineReducers } from 'redux';
import AuthReducer from './authentication';
import SchoolInforReducer from './school';
const RootReducers = combineReducers({
	authentication: AuthReducer,
	school: SchoolInforReducer
});

export default RootReducers;