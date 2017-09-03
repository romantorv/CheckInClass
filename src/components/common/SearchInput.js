import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { Styles } from '../../theme';

const SearchInput = (props) => {
	return(
		<View style={Styles.searchInputContainer}>
			<View style={Styles.searchInputIconWrapper} >
				<Image 
					source={require('../../theme/images/icon_search.png')} 
					style={{width: 18, height: 18}}
				/>
			</View>
			<TextInput 
				style={[ Styles.input, props.style ]}
				placeholder = { props.placeholder }
				autoCorrect = { props.autoCorrect || false }
				autoCapitalize = { props.autoCapitalize || 'sentences' }
				keyboardType = { props.keyboardType || 'default'}
				onChangeText = { props.onChangeText }
				value = { props.value }
			/>
		</View>
	)
}

export { SearchInput };