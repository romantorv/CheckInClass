import React, { Component } from 'react';
import { connect, AsyncStorage } from 'react-redux';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
//
import LoginForm from './Public/LoginForm';
import SignUpForm from './Public/SignUpForm';
import SchoolFormComponent from './School/SchoolForm';
import ClassListComponent from './Class/ClassList';
import ClassEditFormComponent from './Class/ClassEditForm';
import ClassStudentListComponent from './Class/ClassStudentList';
//
import { AuthWithToken } from '../actions';
import { TOKEN_ID } from '../constants';
import { TabIcon, TabIcon_School } from '../components';
import { Styles, RouterStyles, TabStyles } from '../theme';


class RootNavigator extends Component {

	componentWillMount(){
		this._loadInitialState();
		// AsyncStorage.getItem(TOKEN_ID)
		// 	.then( res => {
		// 		console.log("res: ", res);
		// 		this.props.AuthWithToken(res);
		// 	})
		// 	.catch ( error => {
		// 		console.log("res: ", res);
		// 	})
	}

	async _loadInitialState() {
		try {
			var value = await AsyncStorage.getItem(TOKEN_ID);
			if (value !== null){
				console.log("value", value)
			} else {
				console.log("value", value)
			}
		} catch (error) {
			console.log("error", error)
		}
	}

	_initFirstScene(props) {
		if (this.props.user) {
			AppRouter.navigate('Private')
		} else {
			<AppRouter />
		}
	}
	render(){
		return (
			this._initFirstScene()
		)
	}
}

const PublicScreens = StackNavigator({
	Login: {
		screen: LoginForm,
	},
	SignUp: {
		screen: SignUpForm
	}
}, {
	initialRouteName: 'Login',
	navigationOptions: {
		headerMode: 'none'
	}
})

const PrivateScreens = TabNavigator({
	School: {
		screen: SchoolFormComponent
	},
	Classes: {
		screen: ClassListComponent
	},
	Teachers: {
		screen: ClassEditFormComponent
	},
	Students: {
		screen: ClassStudentListComponent
	}
}, {
	tabBarOptions:{
		labelStyle: TabStyles.tabTitle,
		activeTintColor: '#1FBAD6',
		style: {paddingBottom: 3}
	}
})

const AppRouter = StackNavigator({
	Public: {
		screen: PublicScreens,
	},
	Private: {
		screen: PrivateScreens
	}
},{
	initialRouteName: 'Public',
	navigationOptions: {
		headerStyle: RouterStyles.navContainer,
		headerTitleStyle: RouterStyles.navTitle
	}
});

const mapStateToProps = (state) => {
	const {user} = state.authentication;
	return {user};
}

export default connect(mapStateToProps, {AuthWithToken})(RootNavigator);