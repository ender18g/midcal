import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAu5I0uT0NBRG4KUeBwrLKwi77WJNxfVEE',
	authDomain: 'midcal-ee0b6.firebaseapp.com',
	projectId: 'midcal-ee0b6',
	storageBucket: 'midcal-ee0b6.appspot.com',
	messagingSenderId: '562019358023',
	appId: '1:562019358023:web:0ebfdf7ba20794d3d12862',
	measurementId: 'G-CNEZX1Q9G4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider>
		<App />
	</ChakraProvider>
);
