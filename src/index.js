import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Styles } from './theme';
import LoginForm from './containers/Login/LoginForm';

class App extends Component {
	render(){
		return(
			<View style={Styles.pageContainer}>
				<LoginForm />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;