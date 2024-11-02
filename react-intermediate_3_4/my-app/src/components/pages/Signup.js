import React from 'react'
import Template from '../Template'
import SignImg from '../../assests/frame.png';

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Join the millions learning to code StudyNotion for free"
    desc1 = "Build skills for today ,tommorw,and beyond"
    image = {SignImg}
    formtype='signup'
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
