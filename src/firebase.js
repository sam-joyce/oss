import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDCpmt2WNER4XqqJTydYlsSaDC9bbJ35lM",
  authDomain: "offshore-stainless.firebaseapp.com",
  databaseURL: "https://offshore-stainless.firebaseio.com",
  projectId: "offshore-stainless",
  storageBucket: "offshore-stainless.appspot.com",
  messagingSenderId: "1098242007399",
  appId: "1:1098242007399:web:dee3c77721b9716d360fc2",
  measurementId: "G-KMJ53FCM7C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const firestore = firebase.firestore();

export default firebase;