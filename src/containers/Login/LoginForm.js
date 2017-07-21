import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { InputGroup, Button } from '../../components/common';
import  { Styles } from '../../theme';

class LoginForm extends Component {
	render(){
		return(
			<ScrollView contentContainerStyle={Styles.centerLayout}>
			<View>
				<View style={Styles.loginForm}>
					<Image source={ require('../../theme/images/AppIcon.png')} style={{marginBottom:20}} />
					<Text style={[Styles.loginTitle, {marginBottom:15}]}>CheckInClass</Text>
					<Text style={Styles.heading4}>Sign In</Text>
					<InputGroup placeholder="e.g: john@email.com" />
					<InputGroup placeholder="Enter your secure password" secureTextEntry={true} />
					<Button styleName="buttonXL">SIGN IN</Button>
				</View>
			</View>
			</ScrollView>
		)
	}
}

export default LoginForm;