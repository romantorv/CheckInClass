import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Caption, InputGroup, Subheading } from '../../components/common';
import { Styles } from '../../theme';

class ClassFormComponent extends Component {
	render(){
		return(
			<ScrollView style={Styles.pageContainer}>
				<View style={Styles.defaultLayout}>
					<View style={Styles.formWrapper}>
						<Subheading>Photos gallery</Subheading>
					</View>
					<View style={Styles.formWrapper}>
						<Subheading>School Information</Subheading>
						<InputGroup
						 label="SCHOOL NAME"
						 placeholder="e.g: Bloosom Childcare @ AMK" />
						<InputGroup
						 label="ADDRESS #1"
						 placeholder="e.g: 14 Sunshine Avenue" />
						<InputGroup
						 label="ADDRESS #2"
						 placeholder="e.g: Los Angeles, CA, United States 1234" />
						<InputGroup
						 label="WEBSITE"
						 placeholder="e.g: www.bloosom-childcare.com" />
						<InputGroup
						 label="EMAIL"
						 placeholder="e.g: admin@email.com" />
						<InputGroup 
						 label="TELEPHONE"
						 placeholder="e.g: +65 1111 1111" />
						<InputGroup
						 label="FAX"
						 placeholder="e.g: +65 2222 2222" />
					</View>
					<View style={Styles.formWrapper}>
						<Subheading>About School</Subheading>
						<InputGroup
						 placeholder="Write some information about your school"
						 multiline={true}
						 style={{height:150}}
						/>
					</View>
				</View>
			</ScrollView>
		)
	}
}

export default ClassFormComponent;