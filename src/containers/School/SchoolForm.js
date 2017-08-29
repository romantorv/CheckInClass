import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';
//
import { 
	schoolInputChanged, 
	schoolFetchInfo, schoolSaveInfo, 
	schoolAttachPhoto, schoolRemovePhoto
	} from '../../actions';
import { Grid, Row, Cell, Button, ButtonSave, ButtonBack, Caption, InputGroup, Subheading, ImageThumbWithDelete } from '../../components/common';
import { Styles, RouterStyles } from '../../theme';
import { TabIcon,  } from '../../components';

const cameraRollSettings = {
	title: 'Upload school photos',
	mediaType: 'photo',
	quality: 0.7,
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
			}
		});
	}

	_renderGallery(){
		if ( !_.isEmpty(this.props.images )) {
			return _.map(this.props.images, (value, key) => {
				return <ImageThumbWithDelete
						onDelete={ () => this.props.schoolRemovePhoto({imageID: key, imageRef: value.ref}) } 
						key={key} 
						photoURI={value.downloadUrl} 
						width="160" height="90" />
			});
		}
	}

	render(){
		return(
			<KeyboardAwareScrollView style={Styles.pageContainer}>
				<View style={Styles.defaultLayout}>
					<Grid>
						<Row isNoCell={true}>
							<View style={Styles.formWrapper}>
								<Subheading>Photos gallery</Subheading>
								<View style={Styles.schoolForm_PhotosContainer}>
									{this._renderGallery( )}									
								</View>
								<Button onPress={ this._getPhotos.bind(this) } isWaiting={this.props.isWaiting}>UPLOAD PHOTO</Button>
								<Caption style={{marginBottom:10}}>Hint: should use landscape photo for best view of school introduction screen</Caption>
							</View>
						</Row>
						<Row isNoCell={true}>
							<View style={Styles.formWrapper}>
								<Subheading>School Information</Subheading>
								<InputGroup
								 label="SCHOOL NAME"
								 placeholder="e.g: Bloosom Childcare @ AMK" 
								 onChangeText={ (value) => this.props.schoolInputChanged( {name: 'schoolname', value} )}
								 value={ this.props.schoolname }/>
								<Row>
									<Cell>
										<InputGroup
										 label="ADDRESS #1"
										 placeholder="e.g: 14 Sunshine Avenue"
										 onChangeText={ (value) => this.props.schoolInputChanged( {name: 'address1', value} )}
										 value={ this.props.address1 } />
									</Cell>
									<Cell>
										<InputGroup
										 label="ADDRESS #2"
										 placeholder="e.g: Los Angeles, CA, United States 1234"
										 onChangeText={ (value) => this.props.schoolInputChanged( {name: 'address2', value} )}
										 value={ this.props.address2 } />
									</Cell>
								</Row>
								<Row>
									<Cell>
										<InputGroup
										 label="WEBSITE"
										 placeholder="e.g: www.bloosom-childcare.com"
										 autoCapitalize="none"
										 keyboardType="web-search"
										 onChangeText={ (value) => this.props.schoolInputChanged( {name: 'website', value} )}
										 value={ this.props.website } />
									</Cell>
									<Cell>
										<InputGroup
										 label="EMAIL"
										 placeholder="e.g: admin@email.com"
										 autoCapitalize="none"
										 keyboardType="email-address"
										 onChangeText={ (value) => this.props.schoolInputChanged( {name: 'email', value} )}
										 value={ this.props.email } />
									</Cell>
								</Row>
								<Row>
									<Cell>
										<InputGroup 
										 label="TELEPHONE"
										 placeholder="e.g: +65 1111 1111"
										 keyboardType="phone-pad"
										 onChangeText={ (value) => this.props.schoolInputChanged( {name: 'tel', value} )}
										 value={ this.props.tel } />
									</Cell>
									<Cell>
										<InputGroup
										 label="FAX"
										 placeholder="e.g: +65 2222 2222"
										 keyboardType="phone-pad"
										 onChangeText={ (value) => this.props.schoolInputChanged( {name: 'fax', value} )}
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
								 autoCorrect={true}
								 onChangeText={ (value) => this.props.schoolInputChanged( {name: 'summary', value} )}
								 value={ this.props.summary }
								/>
							</View>
						</Row>
					</Grid>
					
					
				</View>
			</KeyboardAwareScrollView>
		)
	}
}

const mapStateToProps = (state) => {
	const { schoolname, address1, address2, website, email, tel, fax, summary, images, allImages, isWaiting } = state.school;
	return { schoolname, address1, address2, website, email, tel, fax, summary, images, allImages, isWaiting };
};

export default connect(mapStateToProps, { 
	schoolInputChanged, 
	schoolFetchInfo, schoolSaveInfo, 
	schoolAttachPhoto, schoolRemovePhoto })(SchoolFormComponent);