import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
// required for REDUX
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
//
import firebase from 'firebase';
import RootReducer from './reducers';
//
import {RootRouter} from './containers';
//
import { TOKEN_ID } from './constants';
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
		this.state = {
			isTokenExisted: false
		}
	}

	componentWillMount(){
		AsyncStorage.getItem(TOKEN_ID)
			.then( value => this.setState( { isTokenExisted: (value !== null)? true : false} ) )
			.catch( error => console.error(error) )
	}

	render(){
		const rootStore = createStore(RootReducer, {}, applyMiddleware(ReduxThunk)); 
		const Layout = RootRouter( this.state.isTokenExisted );
		return(
			<Provider store={rootStore}>
				<Layout />
			</Provider>
		)
	}
}

export default App;