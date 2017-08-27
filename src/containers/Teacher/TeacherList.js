import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ButtonAdd } from '../../components/common';

class TeacherList extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
			title: "Teachers",
			headerRight: <ButtonAdd onPress={() => navigation.navigate('TeacherForm', { actionType: 'create' })}>ADD TEACHER</ButtonAdd>
		}
	}

	render() {
		return (
			<View />
		)
	}
}

const mapStateToProps = (state) => {
	return {};
}
export default connect(mapStateToProps, {})(TeacherList);