import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-picker';

import { Styles } from '../../theme';
import {
	AvatarThumb, Button, ButtonBack, ButtonSave,
	Grid, Row, Cell,
	InputGroup
} from '../../components/common';
import {
	TeacherAttachPhoto,
	TeacherCreatNew,
	TeacherEdit,
	TeacherFormReset,
	TeacherFormSave,
	TeacherOnInputChanged
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

class TeacherEditForm extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;
		return {
			title: "Creating new teacher",
			headerLeft: <ButtonBack onPress={() => navigation.goBack()}>BACK</ButtonBack>,
			headerRight: <ButtonSave onPress={() => params.onSave()}>SAVE</ButtonSave>
		}
	}

	componentWillMount() {
		this.props.TeacherFormReset();
	}
	
	componentDidMount() {
		this.props.navigation.setParams({
			onSave: this._onSave.bind(this)
		});

		const navParams = this.props.navigation.state.params;
		try {
			if ( navParams.actionType === "create" ) this.props.TeacherCreatNew();
			if ( navParams.actionType === "edit" ) this.props.TeacherEdit(navParams.teacherid);
		} catch (error) {
			console.log(error);
		}
	}

	_onSave(){
		if ( _.isEmpty(this.props.firstname) ) return false;

		const {
			teacherid,
			image,
			firstname,
			lastname,
			title,
			biology,
			isactive
			} = this.props;
		this.props.TeacherFormSave({
			teacherid,
			image,
			firstname,
			lastname,
			title,
			biology,
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
				this.props.TeacherAttachPhoto({
					teacherid: this.props.teacherid,
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
								onChangeText={(value) => this.props.TeacherOnInputChanged({ name: 'firstname', value })}
								value={this.props.firstname} />
						</Cell>
						<Cell>
							<InputGroup
								label="LAST NAME"
								placeholder="e.g: Wright B."
								onChangeText={(value) => this.props.TeacherOnInputChanged({ name: 'lastname', value })}
								value={this.props.lastname} />
						</Cell>
					</Row>
					<Row isNoCell={true}>
						<InputGroup
							label="TITLE"
							placeholder="e.g: Psychologist - Masshachusetts Institude of Technology"
							onChangeText={(value) => this.props.TeacherOnInputChanged({ name: 'title', value })}
							value={this.props.title} />
					</Row>
					<Row isNoCell={true}>
						<InputGroup
							label="BIOLOGY"
							placeholder="Introduce about teacher / lecture..."
							inputRows={4}
							onChangeText={(value) => this.props.TeacherOnInputChanged({ name: 'biology', value })}
							value={this.props.biology}
						/>
					</Row>
				</Grid>
			</View>
		</KeyboardAwareScrollView>
	}
}

const mapStateToProps = (state) => {
	const { isWaiting,
		errorMessage,
		teacherid,
		image,
		firstname,
		lastname,
		title,
		biology
		} = state.teacherForm;
	return {
		isWaiting,
		errorMessage,
		teacherid,
		image,
		firstname,
		lastname,
		title,
		biology
	};
}

export default connect(mapStateToProps, {
	TeacherAttachPhoto,
	TeacherCreatNew,
	TeacherEdit,
	TeacherFormReset,
	TeacherFormSave,
	TeacherOnInputChanged
})(TeacherEditForm);