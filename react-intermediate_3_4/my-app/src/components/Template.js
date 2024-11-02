import React from "react";
import formFrame from '../assests/frame.png';
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="Template">
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        <div>
            <div></div>
            <p>Or</p>
            <div></div>
        </div>
        <button>
            <p>Sign up with Google</p>
        </button>
      </div>

 <div>
    <img src={formFrame} alt="img" width={558} height={504} loading="lazy"/>
    <img src={image} alt="img" width={558} height={490} loading="lazy"/>

 </div>
    </div>
  );
};

export default Template;
