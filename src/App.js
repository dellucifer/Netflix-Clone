import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import { useEffect } from "react";
import { auth } from "./components/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      }
      else{
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])

  console.log(user)

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
