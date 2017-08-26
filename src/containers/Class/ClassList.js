import React, { Component } from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ClassFetchList } from '../../actions';
import { Grid, Row, ButtonAdd } from '../../components/common';
import { TabIcon, ClassItem } from '../../components';
import { Styles } from '../../theme';

class ClassListComponent extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
			title: "List of Classes",
			headerRight: <ButtonAdd onPress={() => navigation.navigate('ClassForm', { actionType: 'create' })}>NEW CLASS</ButtonAdd>
		}
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.navigation.setParams({
			doCreateNewClass: this._onCreateNew.bind(this)
		});
		this.props.ClassFetchList();
	}

	_onCreateNew() {

	}
	_renderListOfClasses() {
		var listOfClasses = [];
		_.map(this.props.classes, (value, key) => {
			listOfClasses.push({ ...value, id: key });
		})

		return <FlatList
			data={listOfClasses}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<ClassItem
					classInfo={item}
					onEditPress={ ()=> this.props.navigation.navigate('ClassForm', { actionType: 'edit', classid: item.id, classname: item.classname })}
					onDeletePress={ ()=> console.log("Press Delete")}
				/>
			)}
		/>
	}

	render() {
		return (
			<ScrollView style={Styles.pageContainer}>
				<View style={Styles.defaultLayout}>
					<Grid>
						<Row isNoCell={true}>
							{this._renderListOfClasses()}
						</Row>
					</Grid>
				</View>
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => {
	const { classes, allclasses } = state.classes;
	return { classes, allclasses };
}

export default connect(mapStateToProps, { ClassFetchList })(ClassListComponent);