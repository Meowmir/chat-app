import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";

export default function WelcomeView() {
  const [isLoginView, setIsLoginView] = useState(true)
  const user = useSelector(({auth}) => auth.user)
  const isFetching = useSelector(({auth}) => auth.isFetching)

  const optInText = isLoginView ?
    ['Need an account?', 'Register'] :
    ['Already registered?', 'Login']

  if (isFetching){
    return <h1>Loading...</h1>
  }

  if (user) {
  return <Redirect to="/home"/>
  }

  return (
    <div className="centered-view">
      <div className="centered-container">
        { isLoginView
          ? <LoginForm/>
          : <RegisterForm/>}
        <small className="form-text text-muted mt-2">
          {optInText[0]}
          <span onClick={() => {
            setIsLoginView(!isLoginView)
          }} className="btn-link ml-2">
            {optInText[1]}
          </span>
        </small>
      </div>
    </div>
  );
}
