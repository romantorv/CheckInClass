import React from 'react';
import { View, Text, Image } from 'react-native';
import _ from 'lodash';
import { Link, LinkEdit, LinkDelete, AvatarThumb } from './common';
import { Styles } from '../theme';

export const TeacherItem = (props) => {
	const { firstname, lastname, title, biology, image } = props.teacherInfo;
	_imageSource = () => {
		if (image !== undefined && image !== '' && typeof(image) === "object"){
			return image.downloadUrl;
		}	
		return "";
	}

	return (
		<View style={Styles.teacherItemContainer}>
			<View style={Styles.teacherItemWrapper}>
				<AvatarThumb 
					imageURI={ this._imageSource() }
					size={70}
				/>
				<View style={Styles.teacherInfoWrapper}>
					<Text style={Styles.teacherName}>{`${firstname} ${lastname}`}</Text>
					<Text style={Styles.teacherTitle}>{_.truncate(title, { 'length': 70, 'separator': ' '})}</Text>
				</View>
			</View>
			<View style={Styles.teacherActionWrapper}>
				<LinkEdit
					style={{ marginRight: 15 }}
					onPress={props.onEditPress}
				>EDIT</LinkEdit>
				<LinkDelete onPress={props.onDeletePress}>DELETE</LinkDelete>
			</View>
		</View>
	)
}


export const TeacherItemSmall = (props) => {
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