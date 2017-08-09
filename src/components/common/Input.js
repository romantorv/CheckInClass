import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Styles } from '../../theme';

const InputGroup = (props) => {
	_hasLabel = (labelValue)=>{
		if (labelValue !== "" && labelValue !== undefined){
			return <Text style={Styles.inputLabel}>{labelValue}</Text>;
		}
	}
	_isMultiRows = () => {
		if (props.inputRows > 1) return true;
		return false;
	}
	_multiRowHeight = () => {
		if (props.inputRows > 1) {
			let rows = props.inputRows;
			return { height: (55 + (rows-1)*18), paddingTop:10 };
		}
	}

	return(
		<View style={Styles.inputGroupContainer}>
			{this._hasLabel(props.label)}
			<View style={[Styles.inputWrapper, _multiRowHeight()]}>
				<TextInput 
					style={[ Styles.input, props.style ]}
					placeholder = { props.placeholder }
					autoCorrect = { props.autoCorrect || false }
					autoCapitalize = { props.autoCapitalize || 'sentences' }
					keyboardType = { props.keyboardType || 'default'}
					multiline = { _isMultiRows() }
					secureTextEntry = { props.secureTextEntry }
					onChangeText = { props.onChangeText }
					value = { props.value }
				/>
			</View>
		</View>
	);
}


export { InputGroup };