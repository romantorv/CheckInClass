import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Grid, Row } from '../../components/common';
import { TabIcon, ClassItem } from '../../components';
import { Styles } from '../../theme';

class ClassListComponent extends Component {
	static navigationOptions = {
		title: "List of Classes",
	}
	render(){
		return (
			<ScrollView style={Styles.pageContainer}>
				<View style={Styles.defaultLayout}>
					<Grid>
						<Row isNoCell={true}>
							<ClassItem />
						</Row>
					</Grid>
				</View>
			</ScrollView>
		)
	}
}

export default ClassListComponent;