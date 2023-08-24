// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHivfl7XeTa6y9nzS5Nt_I32KxQ1_sKY8",
  authDomain: "webtoon-app-e3d1d.firebaseapp.com",
  projectId: "webtoon-app-e3d1d",
  storageBucket: "webtoon-app-e3d1d.appspot.com",
  messagingSenderId: "1062932439657",
  appId: "1:1062932439657:web:7bf400fc07d0a4f8c0b8f8",
  measurementId: "G-R05ZGGZEX0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);