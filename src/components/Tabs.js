import React from 'react';
import { Image } from 'react-native';

const TabIcons = {
	i_School: require('../theme/images/icon_tab_school_inactive.png'),
	i_School_a: require('../theme/images/icon_tab_school_active.png'),
	i_Classes: require('../theme/images/icon_tab_class_inactive.png'),
	i_Classes_a: require('../theme/images/icon_tab_class_active.png'),
	i_Teachers: require('../theme/images/icon_tab_teacher_inactive.png'),
	i_Teachers_a: require('../theme/images/icon_tab_teacher_active.png'),
	i_Students: require('../theme/images/icon_tab_students_inactive.png'),
	i_Students_a: require('../theme/images/icon_tab_students_active.png'),
	i_Settings: require('../theme/images/icon_tab_settings_inactive.png'),
	i_Settings_a: require('../theme/images/icon_tab_settings_active.png'),
}

const TabIcon = (props) => {	
	let iconState = props.focused ? props.iconName+"_a" : props.iconName;
	return (
		<Image
		  source={ TabIcons[ iconState ] }
		  style={{width:26, height:26}}
        />
	)
}

export { TabIcon };