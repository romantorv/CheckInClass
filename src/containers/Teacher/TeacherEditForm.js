import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AvatarThumb, Button, ButtonBack, ButtonSave, 
	Grid, Row, Cell,
	InputGroup } from '../../components/common';
import { Styles } from '../../theme';

class TeacherEditForm extends Component {
	static navigationOptions = ({navigation}) =>{
		const { params } = navigation.state;
		return {
			title: "Creating new teacher",
			headerLeft: <ButtonBack onPress={() => navigation.goBack()}>BACK</ButtonBack>,
			headerRight: <ButtonSave onPress={() => params.onSave()}>SAVE</ButtonSave>
		}
	}

	componentDidMount(){
		this.props.navigation.setParams({
			onSave: this._onSave.bind(this)
		})
	}

	_onSave(){
		console.log("Do save teacher");
	}
	render() {
		return <KeyboardAwareScrollView style={Styles.pageContainer}>
			<View style={Styles.defaultLayout}>
				<Grid>
					<Row isNoCell={true}>
						<View style={Styles.inputGroupContainer}>
							<Text style={Styles.inputLabel}>TEACHER PORTRAIT</Text>
							<View>
								<AvatarThumb size={125} />
								<Button>ATTACH PHOTO</Button>
							</View>
						</View>
					</Row>
					<Row style={{marginLeft: 0, marginRight: 0}}>
						<Cell>
							<InputGroup
								label="FIRST NAME"
								placeholder="e.g: Johns"
								onChangeText={ (value) => this.props.onInputChanged( {name: 'firstname', value} )}
								value={ this.props.firstname } />
						</Cell>
						<Cell>
							<InputGroup
								label="LAST NAME"
								placeholder="e.g: Wright B."
								onChangeText={ (value) => this.props.onInputChanged( {name: 'lastname', value} )}
								value={ this.props.lastname } />
						</Cell>
					</Row>
					<Row isNoCell={true}>
						<InputGroup
							label="TITLE"
							placeholder="e.g: Psychologist - Masshachusetts Institude of Technology"
							onChangeText={ (value) => this.props.onInputChanged( {name: 'title', value} )}
							value={ this.props.title } />
					</Row>
					<Row isNoCell={true}>
						<InputGroup 
							label="BIOLOGY" 
							placeholder="Introduce about teacher / lecture..."
							inputRows = {4}
							onChangeText={ (value)=>this.props.onInputChanged({name: 'biology', value}) }
							value={this.props.biology}
						/>
					</Row>
				</Grid>
			</View>
		</KeyboardAwareScrollView>
	}
}

const mapStateToProps = (state) => {
	return {};
}

export default connect(mapStateToProps, {})(TeacherEditForm);