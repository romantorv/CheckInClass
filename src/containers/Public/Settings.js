import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { UserSignOut } from '../../actions';
import { Heading, Subheading, Button, Avatar } from '../../components/common';
import { Styles } from '../../theme';

class SettingsComponent extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { user } = this.props;
		return(
			<ScrollView style={Styles.pageContainer}>
				<View style={Styles.centerLayout}>
					<View style={{width: 320, alignItems: 'center', paddingTop: 20}}>
						<Avatar
						 style={{marginBottom: 20}}
						 avatarSource={ user.photoURL }
						/>
						<Heading style={{marginBottom:0, textAlign: 'center'}}>{user.displayName || user.email}</Heading>
						<Subheading style={{fontWeight: '200', textAlign: 'center'}}>User Role</Subheading>
						<Button
						 onPress={ ()=>this.props.UserSignOut() } 
						>SIGN OUT</Button>
					</View>
				</View>
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => {
	return { user: state.authentication.user }
}

export default connect(mapStateToProps, { UserSignOut })(SettingsComponent);