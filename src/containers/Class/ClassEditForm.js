import React, { Component } from 'react';
import { View } from 'react-native';
import { TabIcon } from '../../components';

class ClassEditFormComponent extends Component {
	static navigationOptions = {
		title: "Editing class",
		tabBarLabel: "Teachers",
		tabBarIcon: (tabItem) => <TabIcon iconName="i_Teachers" focused={tabItem.focused} />
	}
	render(){
		return <View />
	}
}

export default ClassEditFormComponent;