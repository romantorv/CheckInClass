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
		centerLayout: {
			justifyContent: 'center',
			alignItems: 'center',
			flex: 1
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
		},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
		fontFamily: fontPrimary,
		fontWeight: "500"
	},
});

export { Styles };