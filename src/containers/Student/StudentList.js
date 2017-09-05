import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { StudentFetchList, StudentRemove } from '../../actions';
import { ButtonAdd, Grid, Row, SearchInput } from '../../components/common';
import { TeacherItem, SimpleAvatarStack  } from '../../components';
import { Styles } from '../../theme';

class StudentList extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
			title: "Students",
			headerRight: <ButtonAdd onPress={() => navigation.navigate('StudentForm', { actionType: 'create' })}>ADD STUDENT</ButtonAdd>
		}
	}

	componentDidMount(){
		this.props.StudentFetchList();
	}

	_renderlistOfStudents() {
		var listOfStudents = [];
		_.map(this.props.students, (value, key) => {
			listOfStudents.push({ ...value, id: key });
		})
		return <FlatList
			data={listOfStudents}
			keyExtractor={item => item.id}
			stickySectionHeadersEnabled = { true }
			ListHeaderComponent = { <SearchInput placeholder="Looking for student..." autoCapitalize="none" /> }
			renderItem={ ({ item }) => {
				var imageRef = "";
				if ( typeof(item.image) === "object" ) imageRef = item.image.ref;
				return <SimpleAvatarStack>{`${item.firstname} ${item.lastname}`}</SimpleAvatarStack>;
			} }
		/>
	}

	render() {
		return (
			<ScrollView style={Styles.pageContainer}>
				<View style={Styles.defaultLayout}>
					<Grid>
						<Row isNoCell={true}>
							{ this._renderlistOfStudents() }
						</Row>
					</Grid>
				</View>
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => {
	const { students, allteacher } = state.students;
	return { students, allteacher };
}
export default connect(mapStateToProps, {StudentFetchList, StudentRemove})(StudentList);