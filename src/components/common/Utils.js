import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../theme';

const Divider = () => {
	return(
		<View style={Styles.divider} />
	)
}

const VDivider = () => {
	return(
		<View style={Styles.divider} />
	)
}

const AlertError = (props) => {
	return (
		<View style={Styles.alertWrapper}>
			<Text style={Styles.alertMessage}>{props.children}</Text>
		</View>
	)
}

export { Divider, VDivider, AlertError }