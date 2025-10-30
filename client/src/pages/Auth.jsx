import React from 'react'
import { Router, Route, Routes } from 'react-router-dom';
import Login from "./../Components/auth/Login";
import SignUp from '../Components/auth/SignUp';

const Auth = () => {
  const [state, setState]= React.useState("login");
  return (
    <>
      <Routes>
          <Route path="login" element= {<Login/>}/>
          <Route path="signUp" element= {<SignUp/>}/>
      </Routes>
    </>
  )
}

export default Auth