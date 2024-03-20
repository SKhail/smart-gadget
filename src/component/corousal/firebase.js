// firebaseConfig.js
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBwG0-qvQn3Qph93_uJaFY9ufyZv4P_kJI",
  authDomain: "smartgadget-e76bd.firebaseapp.com",
  databaseURL: "https://smartgadget-e76bd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smartgadget-e76bd",
  storageBucket: "smartgadget-e76bd.appspot.com",
  messagingSenderId: "224274265516",
  appId: "1:224274265516:web:ee57ce525be09694bcb609",
  measurementId: "G-QX51V1KCPJ"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBwG0-qvQn3Qph93_uJaFY9ufyZv4P_kJI",
//   authDomain: "smartgadget-e76bd.firebaseapp.com",
//   databaseURL: "https://smartgadget-e76bd-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "smartgadget-e76bd",
//   storageBucket: "smartgadget-e76bd.appspot.com",
//   messagingSenderId: "224274265516",
//   appId: "1:224274265516:web:ee57ce525be09694bcb609",
//   measurementId: "G-QX51V1KCPJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);