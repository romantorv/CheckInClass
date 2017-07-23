import { combineReducers } from 'redux';
import AuthReducer from './authentication';
const RootReducers = combineReducers({
	authentication: AuthReducer
});

export default RootReducers;