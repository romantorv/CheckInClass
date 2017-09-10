import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Styles, RouterStyles } from '../../theme';

const Button = (props) => {
	_renderButtonContent = (isWaiting = false) => {
		if (isWaiting)
			return <ActivityIndicator size='small' animating={true} color='#FFFFFF' />
		return <Text style={Styles.buttonText}>{props.children}</Text>
	}

	_isDisabled = () => {
		if (props.disabled || props.isWaiting)
			return true;
		return false;
	}

	return (
		<TouchableOpacity
			style={Styles.buttonWrapper}
			onPress={props.onPress}
			disabled={_isDisabled()}
		>
			<View style={Styles.button}>
				{_renderButtonContent(props.isWaiting)}
			</View>
		</TouchableOpacity>
	)
}

const Link = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress} >
			<Text style={[Styles.link, props.style]}>{props.children}</Text>
		</TouchableOpacity>
	)
}

const ButtonAdd = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onPress}
		>
			<View style={Styles.buttonHeaderRight}>
				<Icon name="plus" size={17} color="#FFF" style={{marginRight:5, lineHeight:20}} />
				<Text style={Styles.buttonHeaderText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	)
}

const ButtonSave = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onPress}
		>
			<View style={Styles.buttonHeaderRight}>
				<Icon name="check" size={17} color="#FFF" style={{marginRight:5, lineHeight:20}} />
				<Text style={Styles.buttonHeaderText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	)
}

const ButtonBack = (props) => {
	return (
		<TouchableOpacity
			onPress={props.onPress}
		>
			<View style={Styles.buttonHeaderLeft}>
				<Icon name="arrow-left" size={17} color="#FFF" style={{marginRight:5, lineHeight:20}} />
				<Text style={Styles.buttonHeaderText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	)
}

const LinkEdit = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress} >
			<Text style={[Styles.textSmall, Styles.link, props.style]}>{props.children}</Text>
		</TouchableOpacity>
	)
}
const LinkDelete = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress} >
			<Text style={[Styles.textSmall, props.style]}>{props.children}</Text>
		</TouchableOpacity>
	)
}
export { Button, ButtonAdd, ButtonBack, ButtonSave, Link, LinkEdit, LinkDelete }