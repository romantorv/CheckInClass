import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
// required for REDUX
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
//
import firebase from './firebase';
import RootReducer from './reducers';
//
import RootLayout from './containers';
//
class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const rootStore = createStore(RootReducer, {}, applyMiddleware(ReduxThunk)); 
		return(
			<Provider store={rootStore}>
				<RootLayout />
			</Provider>
		)
	}
}

export default App;