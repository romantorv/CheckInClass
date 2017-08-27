import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Styles } from '../theme';

const defaultImage = require('../theme/images/img_default_avatar.png');

const avatarImage = ({imageURI, size = 35, resizeMode = "cover"}) => {
	if ( imageURI !== "" && imageURI !== null && imageURI !== undefined )
		return <Image
				style={[Styles.stackItemImage, { width: size, height: size, borderRadius: size/2 }]}
				resizeMode={ resizeMode }
				source={{uri: imageURI}}
			/>
	return <Image
			style={[Styles.stackItemImage, { width: size, height: size, borderRadius: size/2 }]}
			resizeMode={ resizeMode }
			source={ defaultImage }
		/>
}

export const SimpleAvatarStack = (props) => {
	return (
		<View style={Styles.stackItemContainer}>
			<View style={Styles.stackItemWrapper}>
				{ avatarImage({
					imageURI: props.imageURI,
					size: props.size,
					resizeMode: props.resizeMode})
				}
				<Text style={Styles.stackItemLabel}>Sarah Obama</Text>
			</View>
			<TouchableOpacity style={Styles.stackItemAction}>
				<Text style={Styles.stackItemActionText}>DELETE</Text>
			</TouchableOpacity>
		</View>
	)
}

export const TeacherItem = (props) => {
	return (
		<View style={Styles.stackItemContainer}>
			<View style={Styles.stackItemWrapper}>
			{ avatarImage({
					imageURI: props.imageURI,
					size: 70,
					resizeMode: props.resizeMode}) 
				}
				<Text style={Styles.stackItemLabel}>Sarah Obama</Text>
			</View>
			<TouchableOpacity style={Styles.stackItemAction}>
				<Text style={Styles.stackItemActionText}>DELETE</Text>
			</TouchableOpacity>
		</View>
	)
}