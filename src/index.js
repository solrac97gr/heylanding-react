import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase  from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyCdFSbzXDUds5aLRMQuWIP4TvvczuGi0KY",
    authDomain: "hey-solve.firebaseapp.com",
    databaseURL: "https://hey-solve.firebaseio.com",
    projectId: "hey-solve",
    storageBucket: "hey-solve.appspot.com",
    messagingSenderId: "847108346917",
    appId: "1:847108346917:web:30d83cdb74253861101bcc"
  };
  // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
