import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { LinkEdit, LinkDelete } from './common';
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

export const StudentItem = (props) => {
	return (
		<View style={Styles.stackItemContainer}>
			<View style={Styles.stackItemWrapper}>
				{ avatarImage({
					imageURI: props.imageURI,
					size: props.size,
					resizeMode: props.resizeMode})
				}
				<Text style={Styles.stackItemLabel}>{props.children}</Text>
			</View>
			<TouchableOpacity style={Styles.stackItemAction}>
				<LinkEdit
					style={{ marginRight: 15 }}
					onPress={props.onEditPress}
				>EDIT</LinkEdit>
				<LinkDelete onPress={props.onDeletePress}>DELETE</LinkDelete>
			</TouchableOpacity>
		</View>
	)
}