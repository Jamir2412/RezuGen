import React, { useState } from 'react'
import { Lock, Mail, User} from 'lucide-react';
import { useNavigate } from 'react-router';
const SignUp = () => {
    const [formData, setFormData]= useState({
        "name": "",
        "email": "",
        "password": "",
        "confirmPassword": ""
    })
    const navigate= useNavigate();
    const handleChange=(e)=>{
        const {name, value}= e.target;
        setFormData(prev=>({...prev, [name]:value}));
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div className="flex h-screen w-full">
            <div className="w-full hidden md:inline-block">
                <img className="h-full" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png" alt="leftSideImage" />
            </div>
        
            <div className="w-full flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        
                <form className="md:w-96 w-80 flex flex-col items-center justify-center">
                    <h2 className="text-4xl text-gray-900 font-medium">Sign Up</h2>
                    <p className="text-sm text-gray-500/90 mt-3">Hello there! Please Sign Up to continue</p>
                    <button type="submit" className="mt-8 w-full h-11 rounded-full flex items-center justify-center text-white bg-green-500 hover:opacity-90 transition-opacity">
                        <span className="text-[15px] font-medium">Sign Up with Google</span>
                    </button>
        
                    <div className="flex items-center gap-4 w-full my-5">
                        <div className="w-full h-px bg-gray-300/90"></div>
                        <p className="w-full text-nowrap text-sm text-gray-500/90">or Sign Up with email</p>
                        <div className="w-full h-px bg-gray-300/90"></div>
                    </div>
                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <User size={16} color= "grey"/>
                        <input type="text" placeholder="Enter Your Name" name= "name" onChange={handleChange}className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />                 
                    </div>
                    <div className="flex mt-6 items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <Mail size= {16} color= "grey"/>
                        <input type="email" placeholder="Email id" name="email" onChange={handleChange} className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />                 
                    </div>
        
                    <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <Lock size={16} color= "grey"/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
                    </div>
                    <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <Lock size={16} color= "grey"/>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
                    </div>
        
                    <button type="submit" className="mt-8 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity">
                        Sign Up
                    </button>
                    <p className="text-gray-500/90 text-sm mt-4">Already have an account? <a className="text-green-400 hover:underline" onClick={()=>navigate("/auth/login")}>Login</a></p>
                </form>
            </div>
        </div>
  )
}

export default SignUp