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
	heading4:{
		fontSize: 18,
		fontFamily: fontPrimary,
		color: colorPrimary,
		lineHeight: 27,
		marginBottom: (GUTTER * 1.2)
	},
	buttonWrapper: {
		flexDirection: 'row',
		alignContent: 'stretch'
	},
	button:{
		borderRadius: 2,
		height: 40,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colorPrimary
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
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
		fontFamily: fontPrimary,
		fontWeight: "500"
	},
});

export { Styles };