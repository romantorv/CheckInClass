import React, { Component } from 'react';
import { View } from 'react-native';
import { TabIcon } from '../../components';

class ClassListComponent extends Component {
	static navigationOptions = {
		title: "List of Classes",
		tabBarLabel: "Classes",
		tabBarIcon: (tabItem) => <TabIcon iconName="i_Classes" focused={tabItem.focused} />
	}
	render(){
		return <View />
	}
}

export default ClassListComponent;