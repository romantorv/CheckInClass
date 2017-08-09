import React from 'react';
import { View, Text, Image } from 'react-native';
import { Styles } from '../theme';

export const ClassItem = (props) => {
	return (
		<View style={Styles.classItemContainer}>
			<View style={Styles.classItemWrapper}>
				<Image
				source={require('../theme/images/img_default_class.png')}
				style={Styles.classImageThumb}
				/>
				<View style={Styles.classInfoWrapper}>
					<Text style={Styles.classTitle}>Butterfly</Text>
					<Text style={Styles.classLegend}>Teacher: Susan Boyle - Students: 12</Text>
				</View>
			</View>
			<View style={Styles.classActionWrapper}>
				<Text>EDIT</Text>
				<Text>DELETE</Text>
			</View>
		</View>
	)
}