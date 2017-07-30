import { StyleSheet, Platform } from 'react-native';

const fontPrimary = "Work Sans";
const colorHighlight = "#1FBAD6";
const colorPrimary = "#09091A";
const colorInvert = "#FFF";
const GUTTER = 15;

const Styles = StyleSheet.create({
	pageContainer: {
		backgroundColor: "#F5F6F7",
		flex: 1
	},
	centerLayout: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	defaultLayout: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flex: 1,
		paddingBottom: 15,
		paddingTop: 25
	},
	gridLayout: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		paddingLeft: GUTTER/2,
		paddingRight: GUTTER/2
	},
		gridRow: {
			flex:1,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			marginLeft: -(GUTTER/2),
			marginRight: -(GUTTER/2)
		},
		gridRowNoCell: {
			paddingLeft: GUTTER,
			paddingRight: GUTTER
		},
		gridCell: {
			paddingLeft: GUTTER/2,
			paddingRight: GUTTER/2
		},
	textDefault: {
		color: colorPrimary,
		fontSize: 14,
		fontFamily: fontPrimary
	},
	heading: {
		fontSize: 24,
		fontFamily: fontPrimary,
		color: colorPrimary,
		lineHeight: 27,
		marginBottom: (GUTTER * 1.5)
	},
	subHeading:{
		fontSize: 18,
		fontFamily: fontPrimary,
		color: colorPrimary,
		lineHeight: 27,
		marginBottom: (GUTTER * 1.2)
	},
	paragraph: {
		marginTop: GUTTER/2,
		marginBottom: GUTTER
	},
	divider: {
		flex: 1,
		width: '100%',
		height:1,
		marginBottom: GUTTER/2,
		borderBottomWidth: 1,
		borderBottomColor: '#C0C0C8'
	},
	textCaption: {
		color: colorPrimary,
		fontSize: 12
	},
	textCenter: {
		textAlign: 'center'
	},
	link: {
		color: colorHighlight
	},
	buttonWrapper: {
		flexDirection: 'row',
		alignContent: 'stretch'
	},
	button:{
		borderRadius: 2,
		height: 40,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colorPrimary,
		marginBottom: GUTTER
	},
		buttonText: {
			fontSize: 14,
			fontWeight: '400',
			fontFamily: fontPrimary,
			color: colorInvert
		},
	buttonXL: {
		height: 60,
		fontSize: 18
	},
	avatarImage: {
		width: 250,
		height: 250,
		borderRadius: 125,
		borderWidth: 5,
		borderColor: colorInvert
	},
	loginForm:{
		width: 320,
		alignItems: 'center'
	},
		loginTitle:{
			fontFamily: fontPrimary,
			fontWeight: '300',
			fontSize: 36,
			letterSpacing: 1,
			color: colorHighlight
		},
	formWrapper:{
		backgroundColor: '#EEEEEE',
		borderRadius: 2,
		padding: 15,
		paddingBottom: 0,
		marginBottom: 15,
		width: '100%'
	},
	inputGroupContainer: {
		alignItems: 'flex-start',
		marginBottom: 15
	},
		inputLabel: {
			fontWeight: '500',
			fontFamily: fontPrimary,
			fontSize: 11,
			color: colorPrimary,
			marginBottom: 5
		},
		inputWrapper: {
			backgroundColor: colorInvert,
			borderRadius: 2,
			paddingLeft: 15,
			paddingRight: 15,
			height: 55,
			flexDirection: 'row',
			justifyContent: 'center',
		},
		input: {
			fontFamily: fontPrimary,
			fontSize: 14,
			lineHeight: 30,
			color: colorPrimary,
			textAlign: 'left',
			flex: 1
		},
	alertWrapper: {
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: '#D0021B',
		borderRadius: 3,
		padding:15,
		width: '100%',
		marginBottom: GUTTER
	},
		alertMessage: {
			color: '#D0021B',
			fontFamily: fontPrimary,
			fontSize: 14,
			fontWeight: '500',
			textAlign: 'left'
		}
	
});

const RouterStyles = {
	navContainer: {
		backgroundColor: colorPrimary
	},
		navTitle: {
			color: colorInvert,
			fontFamily: fontPrimary,
			fontSize: 20,
			fontWeight: '200'
		},
		backButtonTextStyle: {
			color: colorInvert,
			fontFamily: fontPrimary,
			fontSize: 12,
			fontWeight: '300'
		},
		leftButtonTextStyle: {
			color: colorInvert,
			fontFamily: fontPrimary,
			fontSize: 12,
			fontWeight: '300'
		},
		rightButtonStyle: {
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'flex-end',
			flex: 1,
			height: 20,
			paddingRight: 13
		},
		rightButtonTextStyle: {
			color: colorInvert,
			fontFamily: fontPrimary,
			fontSize: 12,
			fontWeight: '400'
		},
		

}

const TabStyles = {
	tabContainer: {
		backgroundColor: '#F9F9F9',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: {width:0, height:0}
	},
	tabTitle: {
		fontFamily: fontPrimary,
		fontWeight: '500',
		letterSpacing: 0.12
	}
		
}

export { Styles, RouterStyles, TabStyles };