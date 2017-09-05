import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { TeacherFetchList, TeacherRemove } from '../../actions';
import { ButtonAdd, Grid, Row, SearchInput } from '../../components/common';
import { TeacherItem  } from '../../components';
import { Styles } from '../../theme';

class TeacherList extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
			title: "Teachers",
			headerRight: <ButtonAdd onPress={() => navigation.navigate('TeacherForm', { actionType: 'create' })}>ADD TEACHER</ButtonAdd>
		}
	}

	componentDidMount(){
		this.props.TeacherFetchList();
	}

	_renderlistOfTeachers() {
		var listOfTeachers = [];
		_.map(this.props.teachers, (value, key) => {
			listOfTeachers.push({ ...value, id: key });
		})

		return <FlatList
			data={listOfTeachers}
			keyExtractor={item => item.id}
			stickySectionHeadersEnabled = { true }
			ListHeaderComponent = { <SearchInput placeholder="Looking for teacher..." autoCapitalize="none" /> }
			renderItem={ ({ item }) => {
				var imageRef = "";
				if ( typeof(item.image) === "object" ) imageRef = item.image.ref;

				return <TeacherItem 
					teacherInfo={item} 
					onEditPress={ ()=> this.props.navigation.navigate('TeacherForm', { actionType: 'edit', teacherid: item.id, firstname: item.firstname })}
					onDeletePress={ ()=> this.props.TeacherRemove({
						teacherid: item.id,
						imageRef
					})}
				/>
			} }
		/>
	}

	render() {
		return (
			<ScrollView style={Styles.pageContainer}>
				<View style={Styles.defaultLayout}>
					<Grid>
						<Row isNoCell={true}>
							{ this._renderlistOfTeachers() }
						</Row>
					</Grid>
				</View>
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => {
	const { teachers, allteachers } = state.teachers;
	return { teachers, allteachers };
}
export default connect(mapStateToProps, {TeacherFetchList, TeacherRemove})(TeacherList);