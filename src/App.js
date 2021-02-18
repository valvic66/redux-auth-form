import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import UserForm from './components/UserForm';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyDAXSJP8t43qxR8r9w2oleyaG3DKAUZmi0",
      authDomain: "redux-auth-form.firebaseapp.com",
      projectId: "redux-auth-form",
      storageBucket: "redux-auth-form.appspot.com",
      messagingSenderId: "29007313900",
      appId: "1:29007313900:web:f9b6d43018bfa575ff5ec9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  };

  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  };
}

export default App;
