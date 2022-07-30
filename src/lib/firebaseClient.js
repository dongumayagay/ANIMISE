// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAaihRb5xllly5vctzSi4e7ZFCVv-CtL0o',
	authDomain: 'animise-ph.firebaseapp.com',
	projectId: 'animise-ph',
	storageBucket: 'animise-ph.appspot.com',
	messagingSenderId: '1050025982009',
	appId: '1:1050025982009:web:f413dc1b5ac2b79a8ab5e8'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
