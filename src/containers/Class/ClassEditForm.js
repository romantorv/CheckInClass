import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import _ from 'lodash';
import { onInputChanged, ClassFormSave, ClassAttachPhoto, ClassCreatNew, ClassEdit, ClassFormReset } from '../../actions';
import { Styles } from '../../theme';
import { ButtonBack, ButtonSave, Button, Grid, Row, Cell, Subheading, InputGroup, ImageThumbWithAttach } from '../../components/common';
import { TabIcon, SimpleAvatarStack } from '../../components';


const cameraRollSettings = {
	title: 'Upload school photos',
	mediaType: 'photo',
	quality: 0.6,
	maxWidth: 1600,
	maxHeight: 1600,
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
}

class ClassEditFormComponent extends Component {
	static navigationOptions = ({navigation}) => {
		const { params = {} } = navigation.state;
		return {
			title: (params.actionType === "create") ? "Create a new Class" : `Editing "${_.truncate(params.classname,{'length': 30})}"`,
			headerLeft: <ButtonBack onPress={ () => navigation.goBack() }>BACK</ButtonBack>,
			headerRight: <ButtonSave onPress={ ()=> params.doSave() }>SAVE</ButtonSave>
		}
	}

	constructor(props){
		super(props);
	}

	componentWillMount() {
		this.props.ClassFormReset();
	}

	componentDidMount() {
		this.props.navigation.setParams({
			doSave: this._onSave.bind(this)
		})
		const navParams = this.props.navigation.state.params;
		try {
			if ( navParams.actionType === "create" ) this.props.ClassCreatNew();
			if ( navParams.actionType === "edit" ) this.props.ClassEdit(navParams.classid);
		} catch (error) {
			console.log(error);
		}
		
	}

	_onSave(){
		if ( _.isEmpty(this.props.classname) ) return false;

		const { classid, classname, summary, createdat } = this.props;
		this.props.ClassFormSave({ classid, classname, summary, createdat });
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
				this.props.ClassAttachPhoto({
					classid: this.props.classid,
					imgName: response.fileName,
					imageURI: response.uri
				});
			}
		});
	}

	
	render(){
		return (
			<View style={Styles.pageContainer}>
				<View style={Styles.splitLayout}>
					<ScrollView style={{flex:1, borderRightWidth:1, borderRightColor:'#C0C0C8', backgroundColor:'#EEEEEE', paddingTop:25}}>
						<Grid>
							<Row isNoCell={true} style={{ flexDirection:'column' }}>
								<Subheading>CLASS INFORMATION</Subheading>
								<View style={[Styles.inputGroupContainer, {marginBottom:0}]}>
									<Text style={Styles.inputLabel}>CLASS PHOTO</Text>
									<ImageThumbWithAttach
										photoURI={ this.props.image.downloadUrl }
										onAttach={ this._getPhotos.bind(this) }
										width="160" height="90" />
								</View>
								<InputGroup 
								 label="CLASS NAME" 
								 placeholder="e.g: Little Angel Dance"
								 onChangeText={ (value)=>this.props.onInputChanged({name: 'classname', value}) }
								 value={ this.props.classname }
								/>
								<InputGroup 
								 label="CLASS INTRODUCTION" 
								 placeholder="e.g: Some words about the class"
								 inputRows = {4}
								 onChangeText={ (value)=>this.props.onInputChanged({name: 'summary', value}) }
								 value={this.props.summary}
								/>
								<View style={Styles.inputGroupContainer}>
									<Text style={Styles.inputLabel}>TEACHER</Text>
									<SimpleAvatarStack />
									<SimpleAvatarStack />
									<Button>SELECT TEACHER</Button>
								</View>
							</Row>
						</Grid>
					</ScrollView>
					<ScrollView style={{flex:1, paddingTop:25}}>
						<Grid>
							<Row isNoCell={true} style={{ flexDirection:'column' }}>
								<Subheading>STUDENT LIST</Subheading>
								<Button>SELECT STUDENTS</Button>
								<SimpleAvatarStack />
								<SimpleAvatarStack />
							</Row>
						</Grid>
					</ScrollView>
				</View>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	const { isWaiting, classid, classname, image, summary, teachers, allallteachers, createdat } = state.classForm;
	return { isWaiting, classid, classname, image, summary, teachers, allallteachers, createdat };
}

export default connect(mapStateToProps, { 
	onInputChanged,
	ClassFormReset,
	ClassCreatNew, 
	ClassEdit,
	ClassFormSave, 
	ClassAttachPhoto })(ClassEditFormComponent);