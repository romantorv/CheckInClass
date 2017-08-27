import React from 'react';
import { View, Text, Image } from 'react-native';
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

const Avatar = (props) => {

	_generateImg = (props) => {
		const { size = 35 } = props;
		if (props.avatarSource !== null && props.avatarSource !== undefined && props.avatarSource !== "")
			return <Image 
				source={{uri: props.avatarSource}}
				resizeMode={ props.resizeMode || "cover" }
				style={[Styles.avatarImage, { width: props.size, height: props.size, borderRadius: size/2 }, props.style]}
			/>
		else 
			return <Image 
				source={require('../../theme/images/img_default_avatar.png')}
				resizeMode={ props.resizeMode || "cover" }
				style={[Styles.avatarImage, props.style]}
			/>
	}

	return _generateImg(props);
}

export { Divider, VDivider, AlertError, Avatar }