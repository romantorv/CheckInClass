import React from 'react';
import { Image, View, Text } from 'react-native';
import { Styles } from '../../theme';

const ImageThumb = (props) => {
	return(
		<View style={Styles.imageThumbContainer}>
			<Image
			 source={require('../../theme/images/img_schoolreal.jpg')}
			 resizeMode={ props.resizeMode || "cover" }
			 style={[Styles.imageThumb, {width: Number(props.width) || 160, height:Number(props.height) || 90}, props.style]} />
			<View style={Styles.imageThumbAction}>
				<Text style={Styles.imageThumbButton}>DELETE</Text>
			</View>
		</View>
	)
}

export { ImageThumb }