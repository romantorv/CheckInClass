import React, {Component} from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import _ from 'lodash';
//
import { 
	onInputChanged, 
	schoolFetchInfo, schoolSaveInfo, 
	schoolAttachPhoto, schoolRemovePhoto
	} from '../../actions';
import { Grid, Row, Cell, Button, ButtonSave, ButtonBack, Caption, InputGroup, Subheading, ImageThumbWithDelete } from '../../components/common';
import { Styles, RouterStyles } from '../../theme';
import { TabIcon,  } from '../../components';

const cameraRollSettings = {
	title: 'Upload school photos',
	mediaType: 'photo',
	quality: 0.75,
	maxWidth: 1600,
	maxHeight: 1600,
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
}

class SchoolFormComponent extends Component {
	static navigationOptions = ({navigation}) => {
		const { params = {} } = navigation.state;
		return {
			title: "School Information",
			headerRight: <ButtonSave onPress={ ()=> params.doSave() }>SAVE</ButtonSave>
		}
	}

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.props.navigation.setParams({
		 	doSave: this._onSave.bind(this)
		 })
		this.props.schoolFetchInfo();
	}

	_onSave(){
		const { schoolname, address1, address2, website, email, tel, fax, summary } = this.props;
		this.props.schoolSaveInfo({
			schoolname, address1, address2, website, email, tel, fax, summary
		});
	}

	_getPhotos = () => {
		ImagePicker.showImagePicker(cameraRollSettings, (response) => {
			console.log('Response = ', response);

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
				this.props.schoolAttachPhoto({imgName: response.fileName, imageURI: response.uri});
				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };
			}
		});
	}

	_renderGallery(){
		if ( !_.isEmpty(this.props.gallery )) {
			var imageGallery = this.props.gallery;
			return _.map(imageGallery, (image, key) => {
				return <ImageThumbWithDelete
						onDelete={ () => this.props.schoolRemovePhoto({imageID: key, imageRef: image.ref}) } 
						key={key} 
						photoURI={image.downloadUrl} 
						width="160" height="90" />
			});
		}
	}

	render(){
		return(
			<ScrollView style={Styles.pageContainer}>
				<View style={Styles.defaultLayout}>
					<Grid>
						<Row isNoCell={true}>
							<View style={Styles.formWrapper}>
								<Subheading>Photos gallery</Subheading>
								<View style={Styles.schoolForm_PhotosContainer}>
									{this._renderGallery( )}									
								</View>
								<Button onPress={ this._getPhotos.bind(this) }>UPLOAD PHOTO</Button>
								<Caption style={{marginBottom:10}}>Hint: should use landscape photo for best view of school introduction screen</Caption>
							</View>
						</Row>
						<Row isNoCell={true}>
							<View style={Styles.formWrapper}>
								<Subheading>School Information</Subheading>
								<InputGroup
								 label="SCHOOL NAME"
								 placeholder="e.g: Bloosom Childcare @ AMK" 
								 onChangeText={ (value) => this.props.onInputChanged( {name: 'schoolname', value} )}
								 value={ this.props.schoolname }/>
								<Row>
									<Cell>
										<InputGroup
										 label="ADDRESS #1"
										 placeholder="e.g: 14 Sunshine Avenue"
										 onChangeText={ (value) => this.props.onInputChanged( {name: 'address1', value} )}
										 value={ this.props.address1 } />
									</Cell>
									<Cell>
										<InputGroup
										 label="ADDRESS #2"
										 placeholder="e.g: Los Angeles, CA, United States 1234"
										 onChangeText={ (value) => this.props.onInputChanged( {name: 'address2', value} )}
										 value={ this.props.address2 } />
									</Cell>
								</Row>
								<Row>
									<Cell>
										<InputGroup
										 label="WEBSITE"
										 placeholder="e.g: www.bloosom-childcare.com"
										 onChangeText={ (value) => this.props.onInputChanged( {name: 'website', value} )}
										 value={ this.props.website } />
									</Cell>
									<Cell>
										<InputGroup
										 label="EMAIL"
										 placeholder="e.g: admin@email.com"
										 onChangeText={ (value) => this.props.onInputChanged( {name: 'email', value} )}
										 value={ this.props.email } />
									</Cell>
								</Row>
								<Row>
									<Cell>
										<InputGroup 
										 label="TELEPHONE"
										 placeholder="e.g: +65 1111 1111"
										 onChangeText={ (value) => this.props.onInputChanged( {name: 'tel', value} )}
										 value={ this.props.tel } />
									</Cell>
									<Cell>
										<InputGroup
										 label="FAX"
										 placeholder="e.g: +65 2222 2222"
										 onChangeText={ (value) => this.props.onInputChanged( {name: 'fax', value} )}
										 value={ this.props.fax } />
									</Cell>
								</Row>
							</View>
						</Row>
						<Row isNoCell={true}>
							<View style={Styles.formWrapper}>
								<Subheading>About School</Subheading>
								<InputGroup
								 placeholder="Write some information about your school"
								 inputRows="5"
								 onChangeText={ (value) => this.props.onInputChanged( {name: 'summary', value} )}
								 value={ this.props.summary }
								/>
							</View>
						</Row>
					</Grid>
					
					
				</View>
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => {
	const { schoolname, address1, address2, website, email, tel, fax, summary, images, allImages } = state.school;
	console.log("mapStateToProps: ", images);
	return { schoolname, address1, address2, website, email, tel, fax, summary, gallery: images, allImages };
};

export default connect(mapStateToProps, { 
	onInputChanged, 
	schoolFetchInfo, schoolSaveInfo, 
	schoolAttachPhoto, schoolRemovePhoto })(SchoolFormComponent);