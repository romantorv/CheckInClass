import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';

import { Styles, DatePickerStyles } from '../../theme';
import {
	AvatarThumb, Button, ButtonBack, ButtonSave,
	Grid, Row, Cell,
	InputGroup
} from '../../components/common';
import {
	StudentAttachPhoto,
	StudentCreatNew,
	StudentEdit,
	StudentFormReset,
	StudentFormSave,
	StudentOnInputChanged
} from '../../actions';


const cameraRollSettings = {
	title: 'Upload teacher portrait',
	mediaType: 'photo',
	quality: 0.6,
	maxWidth: 1600,
	maxHeight: 1600,
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
}

class StudentEditForm extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;
		return {
			title: (params.actionType === "create") ? "Create a new Student" : `Editing "${_.truncate(params.firstname, {'length': 30})}"`,
			headerLeft: <ButtonBack onPress={() => navigation.goBack()}>BACK</ButtonBack>,
			headerRight: <ButtonSave onPress={() => params.onSave()}>SAVE</ButtonSave>
		}
	}

	constructor(props){
		super(props);
		this.state = {
			dob: ""
		};
	}

	componentWillMount() {
		this.props.StudentFormReset();
	}
	
	componentDidMount() {
		this.props.navigation.setParams({
			onSave: this._onSave.bind(this)
		});

		const navParams = this.props.navigation.state.params;
		try {
			if ( navParams.actionType === "create" ) this.props.StudentCreatNew();
			if ( navParams.actionType === "edit" ) this.props.StudentEdit(navParams.studentid);
		} catch (error) {
			console.log(error);
		}
	}

	_onSave(){
		if ( _.isEmpty(this.props.firstname) ) return false;

		const {
			studentid, 
			firstname, 
			lastname, 
			dob, 
			gender, 
			nationality, 
			identitfyno, 
			guardian, 
			isactive
			} = this.props;
		this.props.StudentFormSave({
			studentid, 
			firstname, 
			lastname, 
			dob, 
			gender, 
			nationality, 
			identitfyno, 
			guardian, 
			isactive
			});
	}

	_getPhotos = () => {
		ImagePicker.showImagePicker(cameraRollSettings, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				this.props.StudentAttachPhoto({
					studentid: this.props.studentid,
					imgName: response.fileName,
					imageURI: response.uri
				});
			}
		});
	}

	render() {
		return <KeyboardAwareScrollView style={Styles.pageContainer}>
			<View style={Styles.defaultLayout}>
				<Grid>
					<Row isNoCell={true}>
						<View style={Styles.inputGroupContainer}>
							<Text style={Styles.inputLabel}>TEACHER PORTRAIT</Text>
							<View>
								<AvatarThumb
									size={125}
									imageURI={this.props.image.downloadUrl}
								 />
								<Button
									onPress={ this._getPhotos.bind(this) }
								>ATTACH PHOTO</Button>
							</View>
						</View>
					</Row>
					<Row style={{ marginLeft: 0, marginRight: 0 }}>
						<Cell>
							<InputGroup
								label="FIRST NAME"
								placeholder="e.g: Johns"
								onChangeText={(value) => this.props.StudentOnInputChanged({ name: 'firstname', value })}
								value={this.props.firstname} />
						</Cell>
						<Cell>
							<InputGroup
								label="LAST NAME"
								placeholder="e.g: Wright B."
								onChangeText={(value) => this.props.StudentOnInputChanged({ name: 'lastname', value })}
								value={this.props.lastname} />
						</Cell>
					</Row>
					<Row style={{ marginLeft: 0, marginRight: 0 }}>
						<Cell>
							<View style={Styles.inputGroupContainer}>
								<Text style={Styles.inputLabel}>DATE OF BIRTH</Text>
								<View>
									<DatePicker 
										style={{width: '100%'}}
										date= { this.state.dob }
										mode="date"
										placeholder="Please select date"
										minDate="1970-01-01"
										format="DD MMM YYYY"
										maxDate= { new Date() }
										confirmBtnText="Confirm"
										cancelBtnText="Cancel"
										customStyles={ DatePickerStyles }
										onDateChange={ value => {
											console.log("select date", value);
											this.setState({dob: value});
											this.props.StudentOnInputChanged({ name: 'dob', value: moment(value, 'DD MMM YYYY').format() })
										} }
									/>
								</View>
							</View>
						</Cell>
						<Cell>
							<InputGroup
								label="GENDER"
								onChangeText={(value) => this.props.StudentOnInputChanged({ name: 'gender', value })}
								value={this.props.gender} />
						</Cell>
					</Row>
					<Row style={{ marginLeft: 0, marginRight: 0 }}>
						<Cell>
							<InputGroup
								label="NATIONALITY"
								onChangeText={(value) => this.props.StudentOnInputChanged({ name: 'nationality', value })}
								value={this.props.nationality} />
						</Cell>
						<Cell>
							<InputGroup
								label="IDENTIFICATION NO."
								placeholder="e.g: P12345678"
								onChangeText={(value) => this.props.StudentOnInputChanged({ name: 'identitfyno', value })}
								value={this.props.identitfyno} />
						</Cell>
					</Row>
					<Row isNoCell={true}>
						<InputGroup
							label="GUARDIAN"
							onChangeText={(value) => this.props.StudentOnInputChanged({ name: 'guardian', value })}
							value={this.props.guardian} />
					</Row>
				</Grid>
			</View>
		</KeyboardAwareScrollView>
	}
}

const mapStateToProps = (state) => {
	const { isWaiting,
		errorMessage,
		studentid, 
		firstname, 
		lastname, 
		dob, 
		gender, 
		nationality, 
		identitfyno, 
		guardian,
		image, 
		isactive
		} = state.studentForm;
	return {
		isWaiting,
		errorMessage,
		studentid, 
		firstname, 
		lastname, 
		dob, 
		gender, 
		nationality, 
		identitfyno, 
		guardian, 
		image,
		isactive
	};
}

export default connect(mapStateToProps, {
	StudentAttachPhoto,
	StudentCreatNew,
	StudentEdit,
	StudentFormReset,
	StudentFormSave,
	StudentOnInputChanged
})(StudentEditForm);