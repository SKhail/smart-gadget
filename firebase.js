// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL9xz44YkYgK53LC5cIKb6AHsQyJy9d3s",
  authDomain: "smartgadjet-e0ed3.firebaseapp.com",
  projectId: "smartgadjet-e0ed3",
  storageBucket: "smartgadjet-e0ed3.appspot.com",
  messagingSenderId: "243610321397",
  appId: "1:243610321397:web:aab8e94ff6a8a126bde0bc",
  measurementId: "G-RWYM8C1SKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);