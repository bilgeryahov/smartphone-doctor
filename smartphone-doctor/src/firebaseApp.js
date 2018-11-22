import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyALZQeNgV4XO0DA5MWMUas7RZaTjXU1bg4",
	authDomain: "smartphone-doctor.firebaseapp.com",
	databaseURL: "https://smartphone-doctor.firebaseio.com",
	projectId: "smartphone-doctor",
	storageBucket: "smartphone-doctor.appspot.com",
	messagingSenderId: "315225363533"
};

export const firebaseApp = firebase.initializeApp(config);