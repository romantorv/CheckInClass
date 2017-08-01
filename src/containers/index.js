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

const defaultStackStyle = {
	headerStyle: RouterStyles.navContainer,
	headerTitleStyle: RouterStyles.navTitle
}

const defaultTabStyle = {
	labelStyle: TabStyles.tabTitle,
	activeTintColor: '#1FBAD6',
	style: { paddingBottom: 3 }
}

const SchoolInfoScreens = StackNavigator({
	SchoolInfo: { screen: SchoolFormComponent }
}, {
	navigationOptions: defaultStackStyle
});
const ClassesScreens = StackNavigator({
	ClassList:{ screen: ClassListComponent }
}, {
	navigationOptions: defaultStackStyle
});
const TeachersScreens = StackNavigator({
	TeacherList: { screen: ClassEditFormComponent }
}, {
	navigationOptions: defaultStackStyle
});
const StudentsScreens = StackNavigator({
	StudentList:  { screen: ClassStudentListComponent }
}, {
	navigationOptions: defaultStackStyle
});
const SettingScreen = StackNavigator({
	Settings: { screen: SettingsComponent }
}, {
	navigationOptions: defaultStackStyle
})

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
);

const PrivateScreens = TabNavigator(
	{
		School: {
			screen: SchoolInfoScreens,
			navigationOptions: {
				tabBarLabel: "School Info",
				tabBarIcon: (tabItem) => <TabIcon iconName="i_School" focused={tabItem.focused} />
			}
		},
		Classes: {
			screen: ClassesScreens,
			navigationOptions: {
				tabBarLabel: "Classes",
				tabBarIcon: (tabItem) => <TabIcon iconName="i_Classes" focused={tabItem.focused} />
			}
		},
		Teachers: {
			screen: TeachersScreens,
			navigationOptions: {
				tabBarLabel: "Teachers",
				tabBarIcon: (tabItem) => <TabIcon iconName="i_Teachers" focused={tabItem.focused} />
			}
		},
		Students: {
			screen: StudentsScreens,
			navigationOptions: {
				tabBarLabel: "Students",
				tabBarIcon: (tabItem) => <TabIcon iconName="i_Students" focused={tabItem.focused} />
			}
		},
		Settings: {
			screen: SettingScreen,
			navigationOptions: {
				tabBarLabel: "Settings",
				tabBarIcon: (tabItem) => <TabIcon iconName="i_Settings" focused={tabItem.focused} />
			}
		}
	}, {
		lazy: true,
		tabBarOptions: defaultTabStyle
	}
)

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