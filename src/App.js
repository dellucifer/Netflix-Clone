import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import { useEffect } from "react";
import { auth } from "./components/firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        // Logged In
        console.log(userAuth);
        console.log("User abhi logged in h");
      }
      else{
        // Logged Out
      }
    })

    return unsubscribe;
  }, [])

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" component={HomeScreen} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
