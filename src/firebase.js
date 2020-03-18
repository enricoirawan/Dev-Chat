import firebase from '@firebase/app';
import '@firebase/auth'; //for auth login
import '@firebase/database'; //make a realtime database
import '@firebase/storage'; //store a media file

var config = {
	apiKey: 'AIzaSyAOig_ps0pySYOSXJ-Tu3wFz10twxOh5Sk',
	authDomain: 'react-slack-clone-e14ad.firebaseapp.com',
	databaseURL: 'https://react-slack-clone-e14ad.firebaseio.com',
	projectId: 'react-slack-clone-e14ad',
	storageBucket: 'react-slack-clone-e14ad.appspot.com',
	messagingSenderId: '317469604260',
	appId: '1:317469604260:web:bc73a65c0783acf713e931',
	measurementId: 'G-M704C421L8'
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
