const firebase = require('firebase/app');
const db = require('firebase/database')
const messaging = require('firebase/messaging');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAexVgK35_byhNj4NZbs3ATlal8HpnlKoo",
  authDomain: "defiaz-3aad0.firebaseapp.com",
  databaseURL: "https://defiaz-3aad0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "defiaz-3aad0",
  storageBucket: "defiaz-3aad0.appspot.com",
  messagingSenderId: "419758267791",
  appId: "1:419758267791:web:3480a94cb2c34a71b4fffa",
  measurementId: "G-X1L3800J0B"
};
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

module.exports = { app,db,messaging};