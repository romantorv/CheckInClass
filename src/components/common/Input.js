import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Styles } from '../../theme';

const InputGroup = (props) => {
	return(
		<View style={Styles.inputGroupContainer}>
			<Text style={Styles.inputLabel}>{props.label}</Text>
			<View style={Styles.inputWrapper}>
				<TextInput 
					style={Styles.input}
					placeholder = { props.placeholder }
					secureTextEntry = { props.secureTextEntry }
					onChangeText = { props.onChangeText }
					value = { props.value }
				/>
			</View>
		</View>
	);
}

export { InputGroup };