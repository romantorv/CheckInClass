import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// required for REDUX
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
//
import { StackNavigator, TabNavigator } from 'react-navigation';
import firebase from 'firebase';
import RootReducer from './reducers';
import { Styles, RouterStyles, TabStyles } from './theme';
//
import LoginForm from './containers/Public/LoginForm';
import SignUpForm from './containers/Public/SignUpForm';
import ClassFormComponent from './containers/Class/ClassForm';
import { TabIcon, TabIcon_School } from './components';
//
const FB_Configuration = {
	apiKey: "AIzaSyB8YXt3rBlo7N3F8XFhnAi0wUkrJzvs4Jk",
    authDomain: "checkinclass-e5392.firebaseapp.com",
    databaseURL: "https://checkinclass-e5392.firebaseio.com",
    projectId: "checkinclass-e5392",
    storageBucket: "checkinclass-e5392.appspot.com",
    messagingSenderId: "501250367396"
}
//
class App extends Component {
	constructor(props){
		super(props);
		firebase.initializeApp(FB_Configuration);
	}

	render(){
		const rootStore = createStore(RootReducer, {}, applyMiddleware(ReduxThunk));
		return(
			<Provider store={rootStore}>
				<AppRouter />
			</Provider>
		)
	}
}

const AppRouter = StackNavigator({
	School: {
		screen: ClassFormComponent
	}
});

export default App;