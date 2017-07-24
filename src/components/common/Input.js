import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Styles } from '../../theme';

const InputGroup = (props) => {
	_hasLabel = (labelValue)=>{
		if (labelValue !== "" && labelValue !== undefined){
			return <Text style={Styles.inputLabel}>{labelValue}</Text>;
		}
	}
	return(
		<View style={Styles.inputGroupContainer}>
			{this._hasLabel(props.label)}
			<View style={Styles.inputWrapper}>
				<TextInput 
					style={[ Styles.input, props.style ]}
					placeholder = { props.placeholder }
					autoCorrect = { props.autoCorrect || false }
					multiline = { props.multiline || false }
					secureTextEntry = { props.secureTextEntry }
					onChangeText = { props.onChangeText }
					value = { props.value }
				/>
			</View>
		</View>
	);
}

export { InputGroup };