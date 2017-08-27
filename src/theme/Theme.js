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
	splitLayout: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignContent: 'stretch'
		
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
			alignContent: 'stretch',
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
	textSmall: {
		color: colorPrimary,
		fontFamily: fontPrimary,
		fontSize: 12
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
	buttonHeaderRight: {
		marginRight: 15
	},
	buttonHeaderLeft: {
		marginLeft: 15
	},
		buttonHeaderText: {
			fontSize: 13,
			fontWeight: '400',
			fontFamily: fontPrimary,
			color: colorInvert
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
		alignContent: 'stretch'
	},
		loginTitle:{
			fontFamily: fontPrimary,
			fontWeight: '300',
			fontSize: 36,
			letterSpacing: 1,
			textAlign: 'center',
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
		marginBottom: 15,
		alignContent: 'stretch',
		alignItems: 'stretch',
		width: '100%'
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
			justifyContent: 'center'
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
		},
	imageThumbContainer: {
		borderRadius: 2,
		paddingBottom: 2,
		marginRight: 15,
		marginBottom: 15,
		backgroundColor: colorInvert
	},
		imageThumb: {
			borderRadius: 2,
			borderBottomLeftRadius: 0,
			borderBottomRightRadius: 0
		},
		imageThumbAction: {
			justifyContent: 'center',
			alignItems: 'center',
			height:40
		},
		imageThumbButton: {
			fontFamily: fontPrimary,
			fontSize: 12,
			fontWeight: '400',
			color: colorPrimary
		},
	schoolForm_PhotosContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'wrap'
	},
	classItemContainer: {
		backgroundColor: '#FFFFFF',
		borderRadius: 2,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		marginBottom: GUTTER
	},
		classItemWrapper: {
			flexDirection: 'row'
		},
		classImageThumb: {
			width: 90,
			height: 60,
			borderRadius: 2
		},
		classInfoWrapper: {
			paddingLeft: GUTTER,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'flex-start'
		},
		classActionWrapper: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			paddingRight: GUTTER
		},
		classTitle: {
			color: colorHighlight,
			fontFamily: fontPrimary,
			fontSize: 18,
			lineHeight: 27
		},
		classLegend: {
			color: colorPrimary,
			fontFamily: fontPrimary,
			fontSize: 14
		},
	stackItemContainer: {
		borderRadius: 2,
		backgroundColor: '#FFFFFF',
		padding: 10,
		marginBottom: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignContent: 'stretch'
	},
		stackItemWrapper: {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center'
		},
		stackItemImage: {
			marginRight: 10
		},
		stackItemLabel: {
			color: colorPrimary,
			fontFamily: fontPrimary,
			fontSize: 14
		},
		stackItemAction: {
			justifyContent: 'flex-end'
		},
		stackItemActionText: {
			color: colorPrimary,
			fontFamily: fontPrimary,
			fontSize: 12
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
		leftButtonStyle: {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			flex: 1,
			height: 20,
			paddingLeft: 13
		},
		backButtonTextStyle: {
			color: colorInvert,
			fontFamily: fontPrimary,
			fontSize: 13,
			fontWeight: '300'
		},
		leftButtonTextStyle: {
			color: colorInvert,
			fontFamily: fontPrimary,
			fontSize: 13,
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