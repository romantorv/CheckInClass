import React from 'react';
import { View, Text, Image } from 'react-native';
import _ from 'lodash';
import { LinkEdit, LinkDelete } from './common';
import { Styles } from '../theme';

export const ClassItem = (props) => {
	const { classname, image, createdat, totalstudents } = props.classInfo;
	_imageSource = () => {
		if (image !== undefined && image !== '' && typeof (image) === "object")
			return { uri: image.downloadUrl }
		return require('../theme/images/img_default_class.png');
	}

	_className = () => {
		if (classname !== undefined && classname !== "")
			return classname;
		return `Untitle class`;
	}
	return (
		<View style={Styles.classItemContainer}>
			<View style={Styles.classItemWrapper}>
				<Image
					source={this._imageSource()}
					style={Styles.classImageThumb}
				/>
				<View style={Styles.classInfoWrapper}>
					<Text style={Styles.classTitle}>{_.truncate(this._className(), { 'length': 50, 'separator': ' '})}</Text>
					<Text style={Styles.classLegend}>Teacher: Susan Boyle - Students: {totalstudents}</Text>
				</View>
			</View>
			<View style={Styles.classActionWrapper}>
				<LinkEdit
					style={{ marginRight: 15 }}
					onPress={props.onEditPress}
				>EDIT</LinkEdit>
				<LinkDelete onPress={props.onDeletePress}>DELETE</LinkDelete>
			</View>
		</View>
	)
}