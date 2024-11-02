import React from 'react'
import Template from '../Template'
import loginImg from '../../assests/frame.png';

const Login = ({setIsLoggedIn}) => {
  return (
   <Template
     title="Welcome Back"
     desc1 ="Build skills for today ,tommorw and beyond"
     desc2 ="Build skills for today ,tommorw and beyond"
     image = {loginImg}
     formtype="login"
     setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default Login
