import RNFirebase from 'react-native-firebase'

const FB_Configuration = {
	apiKey: "AIzaSyB8YXt3rBlo7N3F8XFhnAi0wUkrJzvs4Jk",
    authDomain: "checkinclass-e5392.firebaseapp.com",
    databaseURL: "https://checkinclass-e5392.firebaseio.com",
    projectId: "checkinclass-e5392",
    storageBucket: "checkinclass-e5392.appspot.com",
	messagingSenderId: "501250367396",
	debug: true,
	persistence: true
}

export default firebase = RNFirebase.initializeApp(FB_Configuration);