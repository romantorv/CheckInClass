import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Styles } from '../../theme';
import { Paragraph, Heading, InputGroup, Button } from '../../components/common';
import { onInputChanged, UserSignUp } from '../../actions';

class SignUpForm extends Component {
	_gotoLogin(){
		Actions.loginScene();
	}
	_doSignUp(){
		const { fullname, email, contact, password, repassword } = this.props;
		//console.log(fullname, email, repassword);
		this.props.UserSignUp({
			fullname, email, contact, password, repassword
		});
	}

	render(){
		return (
			<View style={Styles.pageContainer}>
				<View style={Styles.centerLayout}>
				<KeyboardAvoidingView
				scrollEnabled={true}
				behavior="position"
				resetScrollToCoords={{ x: 0, y: 0 }}>
					<View style={Styles.loginForm}>
						<Paragraph style={Styles.link} onPress={this._gotoLogin.bind(this)}>BACK</Paragraph>
						<Heading>REGISTER FORM</Heading>
						<InputGroup 
						 label="FULLNAME" 
						 placeholder="e.g: John Nathan"
						 onChangeText={ value => this.props.onInputChanged({ name:"fullname", value} )}
						 value={ this.props.fullname } />
						<InputGroup 
						 label="EMAIL ADDRESS" 
						 placeholder="e.g: john@email.com"
						 onChangeText={ value => this.props.onInputChanged({name:"email", value})}
						 value={ this.props.email } />
						<InputGroup 
						 label="CONTACT NUMBER" 
						 placeholder="e.g: +65 3333 3333"
						 onChangeText={ value => this.props.onInputChanged({name:"contact", value})}
						 value={ this.props.contact } />
						<InputGroup 
						 label="PASSWORD" 
						 placeholder="Enter your secure password"
						 secureTextEntry={true}
						 onChangeText={ value => this.props.onInputChanged({name:"password", value})} 
						 value={this.props.password} />
						<InputGroup 
						 label="CONFIRM PASSWORD" 
						 placeholder="Retype your password"
						 secureTextEntry={true} 
						 onChangeText={ value => this.props.onInputChanged({name:"repassword", value})}
						 value={ this.props.repassword } />
						<Button styleName="buttonXL" onPress={ this._doSignUp.bind(this) }>SIGN UP</Button>
					</View>
					
				</KeyboardAvoidingView>
				</View>
			</View>
		)
	}
}

const mapStateToProps = (state) =>{
	const { fullname, email, contact, password, repassword, errorMessage, isWaiting } = state.authentication;
	return {
		fullname, email, contact, password, repassword, errorMessage
	};
}

export default connect(mapStateToProps, {onInputChanged, UserSignUp})(SignUpForm);