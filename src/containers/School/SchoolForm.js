import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import { Grid, Row, Cell, Button, Caption, InputGroup, Subheading } from '../../components/common';
import { Styles, RouterStyles } from '../../theme';
import { TabIcon } from '../../components';

class SchoolFormComponent extends Component {
	static navigationOptions = {
		title: "School Information",
		tabBarLabel: "School Info",
		tabBarIcon: (tabItem) => <TabIcon iconName="i_School" focused={tabItem.focused} />
		//headerStyle: RouterStyles.navContainer,
		//headerTitleStyle: RouterStyles.navTitle
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
								placeholder="e.g: Bloosom Childcare @ AMK" />
								<Row>
									<Cell>
										<InputGroup
										 label="ADDRESS #1"
										 placeholder="e.g: 14 Sunshine Avenue" />
									</Cell>
									<Cell>
										<InputGroup
										 label="ADDRESS #2"
										 placeholder="e.g: Los Angeles, CA, United States 1234" />
									</Cell>
								</Row>
								<Row>
									<Cell>
										<InputGroup
										label="WEBSITE"
										placeholder="e.g: www.bloosom-childcare.com" />
									</Cell>
									<Cell>
										<InputGroup
										label="EMAIL"
										placeholder="e.g: admin@email.com" />
									</Cell>
								</Row>
								<Row>
									<Cell>
										<InputGroup 
										label="TELEPHONE"
										placeholder="e.g: +65 1111 1111" />
									</Cell>
									<Cell>
										<InputGroup
										label="FAX"
										placeholder="e.g: +65 2222 2222" />
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
								/>
							</View>
						</Row>
					</Grid>
					
					
				</View>
			</ScrollView>
		)
	}
}

export default SchoolFormComponent;