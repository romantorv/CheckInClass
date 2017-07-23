import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// required for REDUX
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
//
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import firebase from 'firebase';
import RootReducer from './reducers';
import { Styles } from './theme';
import LoginForm from './containers/Public/LoginForm';
import SignUpForm from './containers/Public/SignUpForm';

const FB_Configuration = {
	apiKey: "AIzaSyB8YXt3rBlo7N3F8XFhnAi0wUkrJzvs4Jk",
    authDomain: "checkinclass-e5392.firebaseapp.com",
    databaseURL: "https://checkinclass-e5392.firebaseio.com",
    projectId: "checkinclass-e5392",
    storageBucket: "checkinclass-e5392.appspot.com",
    messagingSenderId: "501250367396"
}

class App extends Component {
	constructor(props){
		super(props);
		firebase.initializeApp(FB_Configuration);
	}

	render(){
		const rootStore = createStore(RootReducer, {}, applyMiddleware(ReduxThunk));
		return(
			<Provider store={rootStore}>
				<Router>
					<Scene key="publicScenes" hideNavBar={true}>
						<Scene key="loginScene" component={LoginForm} initial={true} type={ActionConst.BACK} />
						<Scene key="signupScene" component={SignUpForm} />
					</Scene>
				</Router>
			</Provider>
		)
	}
}

export default App;