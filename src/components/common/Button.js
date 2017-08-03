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

const ButtonAdd = (props) =>{
	return (
		<TouchableOpacity
			onPress = {props.onPress}
		>
			<View style={ Styles.buttonHeader }>
				<Text style={Styles.buttonHeaderText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	)
}

const ButtonSave = (props) =>{
	return (
		<TouchableOpacity
			onPress = {props.onPress}
		>
			<View style={ Styles.buttonHeader }>
				<Text style={Styles.buttonHeaderText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	)
}

const ButtonBack = (props) =>{
	return (
		<TouchableOpacity
			onPress = {props.onPress}
		>
			<View style={ Styles.buttonHeader }>
				<Text style={Styles.buttonHeaderText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	)
}

export { Button, ButtonAdd, ButtonBack, ButtonSave }