import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../theme';

const Heading = (props) => {
	return (
		<View style={Styles.paragraph}>
			<Text 
			 style={[Styles.heading, props.style]}
			 onPress = { props.onPress }
			 numberOfLines = { props.numberOfLines }
			>
				{props.children}
			</Text>
		</View>
	)
}

const Subheading = (props) => {
	return (
		<Text 
			style={[Styles.subHeading, props.style]}
			onPress = { props.onPress }
			numberOfLines = { props.numberOfLines }
		>
			{props.children}
		</Text>
	)
}

const Paragraph = (props) => {
	return (
		<View style={Styles.paragraph}>
			<Text 
			 style={[Styles.textDefault, props.style]}
			 onPress = { props.onPress }
			 numberOfLines = { props.numberOfLines }
			>
				{props.children}
			</Text>
		</View>
	)
}

const Caption = (props) => {
	return (
		<Text 
		 style={[Styles.textCaption, props.style]}
		 onPress = { props.onPress }
		 numberOfLines = { props.numberOfLines }
		>{props.children}</Text>
	)
}

export { Heading, Subheading, Paragraph, Caption }