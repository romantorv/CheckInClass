import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { InputGroup } from '../../components/common';
import  { Styles } from '../../theme';

class LoginForm extends Component {
	render(){
		return(
			<View style={Styles.centerLayout}>
				<View style={Styles.loginForm}>
					<Image source={ require('../../theme/images/AppIcon.png')} style={{marginBottom:20}} />
					<Text style={[Styles.loginTitle, {marginBottom:15}]}>CheckInClass</Text>
					<Text style={Styles.heading4}>Sign In</Text>
					<InputGroup label="EMAIL" placeholder="e.g: john@email.com" />
					<InputGroup label="PASSWORD" placeholder="Enter your secure password" secureTextEntry={true} />
				</View>
			</View>
		)
	}
}

export default LoginForm;