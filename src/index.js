import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase/app';
import 'firebase/firestore';

  // Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAiOKaaEdI45Qjx0BQakzGKT5qnFf4XoSA",
  authDomain: "cart-9f378.firebaseapp.com",
  projectId: "cart-9f378",
  storageBucket: "cart-9f378.appspot.com",
  messagingSenderId: "767570258182",
  appId: "1:767570258182:web:964c6ed8da3b4e19e01687"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
    <App />,
  document.getElementById('root')
);



