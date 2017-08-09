import React from 'react';
import { ActivityIndicator } from 'react-native';

export const FullPageSpinner = (props) => {
	return <ActivityIndicator 
			size='large'
			animating = { false }
			 />
}