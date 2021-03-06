import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Styles } from '../../theme';
import { AlertError, Paragraph, Heading, InputGroup, Button } from '../../components/common';
import { onAuthReset, onInputChanged, UserSignUp } from '../../actions';

class SignUpForm extends Component {
	static navigationOptions = {
		header: null
	}
	constructor(props){
		super(props);
		
	}

	componentWillMount(){
		this.props.onAuthReset();
	}
	
	_goBackSignIn(){
		const { goBack } = this.props.navigation; 
		this.props.onAuthReset();
		goBack();
	}

	_doSignUp(){
		const { fullname, email, contact, password, repassword } = this.props;
		this.props.UserSignUp({
			fullname, email, contact, password, repassword
		});
	}
	_showError(){
		if (this.props.errorMessage !== "")
			return <AlertError>{this.props.errorMessage}</AlertError>
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
						<Paragraph style={Styles.link} onPress={ this._goBackSignIn.bind(this) }>BACK</Paragraph>
						<Heading>REGISTER FORM</Heading>
						{this._showError()}
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

export default connect(mapStateToProps, {onAuthReset, onInputChanged, UserSignUp})(SignUpForm);