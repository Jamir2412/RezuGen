import React, { useState } from 'react'
import { Lock, Mail} from 'lucide-react';
import { useNavigate } from 'react-router';
const Login = () => {
    const navigate= useNavigate();
    const [formData, setFormData]= useState({
            "email": "",
            "password": "",
    })
    const handleChange=(e)=>{
        const { name, value } = e.target;
            setFormData(prev=>({...prev, [name]:value}));
        }
        const handleSubmit= async (e)=>{
            e.preventDefault();
            console.log(formData);
        }
  return (
    <div className="flex h-screen w-full">
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
          alt="leftSideImage"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <form
          className="md:w-96 w-80 flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl text-gray-900 font-medium">Login</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome back! Please Login to continue
          </p>
          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full flex items-center justify-center text-white bg-green-500 hover:opacity-90 transition-opacity"
          >
            <span className="text-[15px] font-medium">Login with Google</span>
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or Login with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <Mail size={16} color="grey" />
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <Lock size={16} color="grey" />
            <input
              type="password"
              placeholder="Enter Password"
              name= "password"
              onChange={handleChange}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <a className="text-sm underline" href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
          >
            Login
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Don’t have an account?{" "}
            <a
              className="text-green-400 hover:underline"
              onClick={() => navigate("/auth/signUp")}
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login