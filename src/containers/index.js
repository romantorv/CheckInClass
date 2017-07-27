import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
//
import LoginForm from './Public/LoginForm';
import SignUpForm from './Public/SignUpForm';
import SchoolFormComponent from './School/SchoolForm';
import ClassListComponent from './Class/ClassList';
import ClassEditFormComponent from './Class/ClassEditForm';
import ClassStudentListComponent from './Class/ClassStudentList';
//
import { RouterStyles, TabStyles } from '../theme';

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

export const RootRouter = (isTokenExisted = false) => {
	return StackNavigator(
		{
			Public: {
				screen: PublicScreens,
			},
			Private: {
				screen: PrivateScreens
			}
		},{
			initialRouteName: isTokenExisted ? "Private" : "Public",
			navigationOptions: {
				headerStyle: RouterStyles.navContainer,
				headerTitleStyle: RouterStyles.navTitle
			}
		})
} 