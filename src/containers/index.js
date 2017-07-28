import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
//
import LoginForm from './Public/LoginForm';
import SignUpForm from './Public/SignUpForm';
import SchoolFormComponent from './School/SchoolForm';
import ClassListComponent from './Class/ClassList';
import ClassEditFormComponent from './Class/ClassEditForm';
import ClassStudentListComponent from './Class/ClassStudentList';
//
import { TOKEN_ID } from '../constants';
import { RouterStyles, TabStyles } from '../theme';

const PublicScreens = StackNavigator(
	{
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
	}
)

const PrivateScreens = TabNavigator(
	{
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
		tabBarOptions: {
			labelStyle: TabStyles.tabTitle,
			activeTintColor: '#1FBAD6',
			style: { paddingBottom: 3 }
		}
	}
)

const AppNavigator = StackNavigator(
	{
		Public: {
			screen: PublicScreens,
		},
		Private: {
			screen: PrivateScreens
		}
	}, {
		initialRouteName: "Public",
		navigationOptions: {
			headerStyle: RouterStyles.navContainer,
			headerTitleStyle: RouterStyles.navTitle
		}
	}
)

const navigateAction = NavigationActions.navigate({
	routeName: "Private"
});

class RootLayout extends Component {
	componentWillMount(){
		AsyncStorage.getItem(TOKEN_ID)
		.then( value => {
			if (value !== null)
				console.log(this.props.navigation);
				this.props.navigation.navigate('Private');
				//this.props.navigation.navigate('Private');
		}).done();
	}

	render(){
		return <AppNavigator />
	}
}

export default RootLayout;