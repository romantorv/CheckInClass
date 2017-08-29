import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../../theme';

const defaultAvatar = require('../../theme/images/img_default_avatar.png');

const AvatarThumb = ({imageURI, size = 35, resizeMode = "cover"}) => {
	_imageSource = () => {
		if ( imageURI !== "" && imageURI !== null && imageURI !== undefined )
			return {uri: imageURI};
		return defaultAvatar;
	}

	return <Image
				style={[Styles.stackItemImage, { width: size, height: size, borderRadius: size/2 }]}
				resizeMode={ resizeMode }
				source={ _imageSource() }
			/>
}	

const ImageThumb = (props) => {
	return(
		<View style={[Styles.imageThumbContainer, {width: Number(props.width) || 160 }]}>
			<Image
			 source={{uri: props.photoURI}}
			 resizeMode={ props.resizeMode || "cover" }
			 style={[Styles.imageThumb, {width: Number(props.width) || 160, height:Number(props.height) || 90}, props.style]} />
			<View style={Styles.imageThumbAction}>
				<Text style={Styles.imageThumbButton}>DELETE</Text>
			</View>
		</View>
	)
}

const ImageThumbWithDelete = (props) => {
	return(
		<View style={[Styles.imageThumbContainer, {width: Number(props.width) || 160 }]}>
			<Image
			 source={{uri: props.photoURI}}
			 resizeMode={ props.resizeMode || "cover" }
			 style={[Styles.imageThumb, {width: Number(props.width) || 160, height:Number(props.height) || 90}, props.style]} />
			<View style={Styles.imageThumbAction}>
				<TouchableOpacity onPress={props.onDelete}>
					<Text style={Styles.imageThumbButton}>DELETE</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const ImageThumbWithAttach = (props) => {
	_imageSource = () => {
		if ( props.photoURI !== "" && props.photoURI !== null && props.photoURI !== undefined )
			return {uri: props.photoURI};
		return require('../../theme/images/img_default_class.png');
	}
	return(
		<View style={[Styles.imageThumbContainer, {width: Number(props.width) || 160 }]}>
			<Image
			 source={ _imageSource() }
			 resizeMode={ props.resizeMode || "cover" }
			 style={[Styles.imageThumb, {width: Number(props.width) || 160, height:Number(props.height) || 90}, props.style]} />
			<View style={Styles.imageThumbAction}>
				<TouchableOpacity onPress={props.onAttach}>
					<Text style={Styles.imageThumbButton}>{props.buttonLabel || "ATTACH PHOTO"}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export { AvatarThumb, ImageThumb, ImageThumbWithDelete, ImageThumbWithAttach }