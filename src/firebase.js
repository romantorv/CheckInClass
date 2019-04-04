import RNFirebase from 'react-native-firebase'

const FB_Configuration = {
	apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
	messagingSenderId: "",
	debug: true,
	persistence: true
}

export default firebase = RNFirebase.initializeApp(FB_Configuration);
