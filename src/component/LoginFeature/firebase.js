// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase Auth



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig1 = {
 apiKey: "AIzaSyA-SHj4UOv6bKM3qvw6rcl2QPEWwSjnIDs",
 authDomain: "smartgadget-7af95.firebaseapp.com",
 databaseURL: "https://smartgadget-7af95-default-rtdb.firebaseio.com",
 projectId: "smartgadget-7af95",
 storageBucket: "smartgadget-7af95.appspot.com",
 messagingSenderId: "904972970461",
 appId: "1:904972970461:web:5b335f2658bd0d585d6e34",
 measurementId: "G-XTG570J7TN"
};

const firebaseApp = initializeApp(firebaseConfig1);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp); // Pass firebaseApp to getAuth

export { auth }; // Export auth 

export default firebaseApp;