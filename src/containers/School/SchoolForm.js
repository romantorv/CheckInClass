import React, {Component} from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
//
import { onInputChanged, schoolFetchInfo, schoolSaveInfo } from '../../actions';
import { Grid, Row, Cell, Button, Caption, InputGroup, Subheading } from '../../components/common';
import { Styles, RouterStyles } from '../../theme';
import { TabIcon,  } from '../../components';

class SchoolFormComponent extends Component {
	static navigationOptions = {
		title: "School Information",
		tabBarLabel: "School Info",
		tabBarIcon: (tabItem) => <TabIcon iconName="i_School" focused={tabItem.focused} />,
		headerRight: (action) => <TabIcon iconName="i_School" focused={true}/>,
	}

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.props.schoolFetchInfo();
	}

	render(){
		return(
			<ScrollView style={Styles.pageContainer}>
				<View style={Styles.defaultLayout}>
					<Grid>
						<Row isNoCell={true}>
							<View style={Styles.formWrapper}>
								<Subheading>Photos gallery</Subheading>
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
	const { schoolname, address1, address2, website, email, tel, fax, summary } = state.school;
	return { schoolname, address1, address2, website, email, tel, fax, summary };
};

export default connect(mapStateToProps, { onInputChanged, schoolFetchInfo, schoolSaveInfo})(SchoolFormComponent);