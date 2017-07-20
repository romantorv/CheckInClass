import { StyleSheet } from 'react-native';

const fontPrimary = "Work Sans";
const Theme = StyleSheet.create({
	pageContainer: {
		backgroundColor: "#F5F6F7",
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

export default Theme;