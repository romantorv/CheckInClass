import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Styles } from '../../theme';

const Button = (props) => {
	return (
		<TouchableOpacity
			style={Styles.buttonWrapper}
			onPress = {props.onPress}
		>
			<View style={ Styles.button }>
				<Text style={Styles.buttonText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	)
}

export { Button }