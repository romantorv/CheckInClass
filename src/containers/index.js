import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
//
import LoginForm from './Public/LoginForm';
import SignUpForm from './Public/SignUpForm';
import SchoolFormComponent from './School/SchoolForm';
import ClassListComponent from './Class/ClassList';
import ClassEditFormComponent from './Class/ClassEditForm';
import ClassStudentListComponent from './Class/ClassStudentList';
import SettingsComponent from './Public/Settings';
//
import { IsSigned } from '../actions';
import { TOKEN_ID } from '../constants';
import { TabIcon } from '../components';
import { RouterStyles, TabStyles } from '../theme';

const FunctionScreens = TabNavigator(
	{
		School: {
			screen: SchoolFormComponent,
		},
		Classes: {
			screen: ClassListComponent
		},
		Teachers: {
			screen: ClassEditFormComponent
		},
		Students: {
			screen: ClassStudentListComponent
		},
		Settings: {
			screen: SettingsComponent,
			navigationOptions: {
				title: "Settings",
				tabBarIcon: (tabItem) => <TabIcon iconName="i_Settings" focused={tabItem.focused} />
			}
		}
	}, {
		lazy: true,
		tabBarOptions: {
			labelStyle: TabStyles.tabTitle,
			activeTintColor: '#1FBAD6',
			style: { paddingBottom: 3 }
		}
	}
)

const PublicScreens = StackNavigator(
	{
		Login: {
			screen: LoginForm
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

const PrivateScreens = StackNavigator(
	{
		Home: { screen: FunctionScreens }
	},
	{
		navigationOptions: {
			headerStyle: RouterStyles.navContainer,
			headerTitleStyle: RouterStyles.navTitle
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
	constructor(props){
		super(props);
	}
	componentWillMount(){
		this.props.IsSigned();
	}

	render(){
		return this.props.isTokenExisted ? <PrivateScreens /> : <PublicScreens />;
	}
}

const mapStateToProps = (state) => {
	return { isTokenExisted: state.authentication.isTokenExisted }
}

export default connect(mapStateToProps, {IsSigned})(RootLayout);