import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const SignupForm = ({setIsLoggedIn}) => {
    const naviaget = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
  function submitHandler(e){
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
        toast.error('password dont match');
        return ;
    }
    setIsLoggedIn(true);
    toast.success('signup successfully');
     naviaget('/dashboard');
  }
  return (
    <div className="signup">
      <div>
        <button>Student</button>
        <button>Instratuctor </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="firstNamAndLastName">
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="enter firstName"
            ></input>
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="enter lastName"
            />
          </label>
        </div>

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="enter email"
          />
        </label>

        {/* Create password and confirm password */}
        <div>
          <label>
            <p>
              {" "}
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="enter password"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              {" "}
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="enter confirmPassword"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button className="signup-btn" >Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
