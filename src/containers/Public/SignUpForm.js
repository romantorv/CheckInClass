import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Styles } from '../../theme';
import { Paragraph, Heading, InputGroup, Button } from '../../components/common';

class SignUpForm extends Component {

	_gotoLogin(){
		Actions.loginScene();
	}

	render(){
		return (
			<View style={Styles.pageContainer}>
				<View style={Styles.centerLayout}>
				<KeyboardAvoidingView
				scrollEnabled={false}
				behavior="position"
				resetScrollToCoords={{ x: 0, y: 0 }}>
					<View style={Styles.loginForm}>
						<Paragraph style={Styles.link} onPress={this._gotoLogin.bind(this)}>BACK</Paragraph>
						<Heading>REGISTER FORM</Heading>
						<InputGroup label="FULLNAME" placeholder="e.g: John Nathan" />
						<InputGroup label="EMAIL ADDRESS" placeholder="e.g: john@email.com" />
						<InputGroup label="CONTACT NUMBER" placeholder="e.g: +65 3333 3333" />
						<InputGroup label="PASSWORD" placeholder="Enter your secure password" secureTextEntry={true} />
						<InputGroup label="CONFIRM PASSWORD" placeholder="Retype your password" secureTextEntry={true} />
						<Button styleName="buttonXL">SIGN UP</Button>
					</View>
					
				</KeyboardAvoidingView>
				</View>
			</View>
		)
	}
}

export default SignUpForm