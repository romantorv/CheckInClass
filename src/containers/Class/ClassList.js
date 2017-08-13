import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Grid, Row, ButtonAdd } from '../../components/common';
import { TabIcon, ClassItem } from '../../components';
import { Styles } from '../../theme';

class ClassListComponent extends Component {
	static navigationOptions = ({navigation}) => {
		const { params = {} } = navigation.state;
		return{
			title: "List of Classes",
			headerRight: <ButtonAdd onPress={ ()=> navigation.navigate('ClassForm', {actionType: 'create'}) }>NEW CLASS</ButtonAdd>
		}
	}

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.navigation.setParams({
			doCreateNewClass: this._onCreateNew.bind(this)
		})
	}

	_onCreateNew(){
		
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