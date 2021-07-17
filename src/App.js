import "@fortawesome/fontawesome-free/css/all.min.css";
import firebase from "firebase";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Editor from "views/Editor";
import Login from "views/Login";
import Profile from "views/Profile.js";
import "./style.css";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyA8kfDkbh_Tefdk4HZlnH8gsJ9MbAVjQl8",
  authDomain: "code-war-878f1.firebaseapp.com",
  // ...
};

firebase.initializeApp(config);

function App(props) {
  const [isSignedIn, setIsSignedIn] = React.useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  React.useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        const token = await user.getIdToken();
        console.log(user.displayName);
        console.log(token);

        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/edit" component={Editor} />
        <Route path="/login" component={Login} />

        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
