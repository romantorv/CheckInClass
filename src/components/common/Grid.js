import React from 'react';
import { View } from 'react-native';
import { Styles } from '../../theme';

const Grid = (props) => {
	return <View style={[Styles.gridLayout, props.style]}>{props.children}</View>
}

const Row = (props) => {
	_isNoCell = ()=>{
	 	if (props.isNoCell === true) {
			 return Styles.gridRowNoCell;
		 }
	}
	return <View style={[Styles.gridRow, this._isNoCell(), props.style]}>{props.children}</View>
}

const Cell = (props) => {
	return <View style={[Styles.gridCell, props.style, {flex: props.cols || 1}]}>{props.children}</View>
}

export { Grid, Row, Cell};