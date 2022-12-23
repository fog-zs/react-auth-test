import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FirebaseInit from './firebase';
import SignIn from './components/SignIn';
import Main from './components/Main';
import Cookies from "js-cookie";
import {encrypt, decrypt} from "./components/Crypto";

function App() {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  FirebaseInit();
  useEffect(()=>{
    // set token
    const cookie_token = Cookies.get('token') || "";
    if(cookie_token === "") return;
    setToken(decrypt(cookie_token));
    setIsSignedIn(true);

    // set user
    const cookie_user = Cookies.get('user') || "";
    if(cookie_user === "") return;
    setUser(JSON.parse(decrypt(cookie_user)));
  }, [token]);
  return <>
    {isSignedIn ? <Main user={user}/> : <SignIn setToken={setToken} setUser={setUser}/>}    
  </>
}

export default App;
