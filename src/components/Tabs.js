import React from 'react';
import { View, Image, Text } from 'react-native';

const TabIcon = (props) => {
	let TabIconURL = "../theme/images/"+ props.iconName + "_" + (props.focused ? "active":"inactive") + ".png";
	return (
		<Image
		  source={ require(TabIconURL) }
		  style={{width:26, height:26}}
        />
	)
}

const TabIcon_School = (props) => {
	return (
		<TabIcon iconName="icon_tab_school" focused={props.focused} /> 
	)
}

export { TabIcon, TabIcon_School };