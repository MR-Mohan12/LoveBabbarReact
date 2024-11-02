import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
    const naviaget = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
  function submitHandler (e){
    e.preventDefault();
     setIsLoggedIn(true);
     
     toast.success('logged In');
     naviaget('/dashboard');
  }
  return (
    <div className="login-form">
      <form onSubmit={submitHandler}>
        <label>
          <p>
            Email Address <sup>*</sup>{" "}
          </p>
          <input
            type="email"
            required
            placeholder="enter your email"
            value={formData.email}
            onChange={changeHandler}
            name="email"
          />
        </label>

        <label>
          <p>
            Password <sup>*</sup>{" "}
          </p>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="enter your password"
            value={formData.password}
            onChange={changeHandler}
            name="password"
          />

          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        <Link to="#"><p>forgot password</p></Link>
        </label>

        <button className="sign-btn">
            Sign In
            </button>
      </form>
    </div>
  );
};

export default LoginForm;
