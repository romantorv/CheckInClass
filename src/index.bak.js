import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// required for REDUX
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
//
import firebase from 'firebase';
import RootReducer from './reducers';
import { Styles, RouterStyles, TabStyles } from './theme';
//
import LoginForm from './containers/Public/LoginForm';
import SignUpForm from './containers/Public/SignUpForm';
import ClassFormComponent from './containers/Class/ClassForm';
import { TabIcon, TabIcon_School } from './components';
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
					<Scene key="rootScene" hideNavBar={true}
					 navigationBarStyle={RouterStyles.navContainer}
					 titleStyle={RouterStyles.navTitle} >
						<Scene key="privateScene" backTitle="BACK" tabs={true} tabBarStyle={TabStyles.tabContainer}>
							<Scene 
							 key="schoolManageScene" 
							 title="School" 
							 tabBarLabel= ""
							 icon={ (props) => <TabIcon iconName="i_School" focused={props.focused} label="SCHOOL"/> }
							 component={ClassFormComponent} 
							 initial={true} 
							 rightTitle="SAVE"
							 rightButtonStyle={RouterStyles.rightButtonStyle}
							 rightButtonTextStyle={RouterStyles.rightButtonTextStyle}
							 onRight={ ()=>console.log("onRight clicked") } />
						</Scene>
						<Scene 
						 key="publicScenes" 
						 hideNavBar={true} >
							<Scene key="loginScene" component={LoginForm} type={ActionConst.BACK} />
							<Scene key="signupScene" component={SignUpForm} />
						</Scene>
					</Scene>
				</Router>
			</Provider>
		)
	}
}

export default App;