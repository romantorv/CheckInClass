import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { AlertError ,InputGroup, Button, Subheading, Paragraph, Caption, Divider } from '../../components/common';
import { onAuthReset, onInputChanged, UserLogin } from '../../actions';

import  { Styles } from '../../theme';

class LoginForm extends Component {
	static navigationOptions = {
		header: null
	}

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.onAuthReset();
	}

	_gotoSignUp() {
		const { navigate } = this.props.navigation;
		navigate('SignUp');
	}
	_doSignin(){
		this.props.UserLogin({email: this.props.email, password: this.props.password});
	}
	_showError(){
		if (this.props.errorMessage !== "")
			return(
				<AlertError>{this.props.errorMessage}</AlertError>
			)
	}

	render(){
		return(
			<View style={Styles.pageContainer}>
				<View style={Styles.centerLayout}>
				<KeyboardAvoidingView
				scrollEnabled={false}
				behavior="position"
				resetScrollToCoords={{ x: 0, y: 0 }}>
					<View style={Styles.loginForm}>
						<Image source={ require('../../theme/images/AppIcon.png')} style={{marginBottom:20}} />
						<Text style={[Styles.loginTitle, {marginBottom:15}]}>CheckInClass</Text>
						{this._showError()}
						<InputGroup
						 onChangeText={ value => this.props.onInputChanged({ name:"email", value }) }
						 value={this.props.email}
						 placeholder="e.g: john@email.com" />
						<InputGroup
						 onChangeText={ value => this.props.onInputChanged({ name:"password", value }) }
						 value={this.props.password}
						 placeholder="Enter your secure password" secureTextEntry={true} />
						<Button styleName="buttonXL" onPress={this._doSignin.bind(this)}>SIGN IN</Button>
						<Paragraph style={Styles.link}>Forgot password?</Paragraph>
						<Divider />
						<Paragraph>
							Have no account yet? <Text style={Styles.link} onPress={this._gotoSignUp.bind(this)}>Sign Up</Text>
						</Paragraph>
					</View>
				</KeyboardAvoidingView>
				</View>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	const { email, password, errorMessage, isWaiting } = state.authentication;
	return {
		email,
		password,
		errorMessage,
		isWaiting
	};
}

export default connect(mapStateToProps, {onAuthReset, onInputChanged, UserLogin})(LoginForm);