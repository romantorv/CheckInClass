import React, { Component } from 'react';
import { View } from 'react-native';
import { TabIcon } from '../../components';

class ClassStudentListComponent extends Component {
	static navigationOptions = {
		title: "Browsing students",
		tabBarLabel: "Students",
		tabBarIcon: (tabItem) => <TabIcon iconName="i_Students" focused={tabItem.focused} />
	}
	
	render(){
		return <View />
	}
}

export default ClassStudentListComponent;