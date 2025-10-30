import React from 'react'
import { Link, useNavigate } from 'react-router'
const Navbar = () => {
    const navigate= useNavigate();
    const user= {name: "Jhon Doe"};
    const logOutUser=()=>{
        navigate("/");
    }
  return (
    <div className="shadow bg-white">
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
            <Link to="/">
                <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
            </Link>
            <div className='flex items-center gap-4 text-sm'>
                <p className='max-sm:hidden'>
                    Hi, {user?.name}
                </p>
                <button onClick={logOutUser} className="bg-white
                hover:bg-scale-50 border border-grey-300 px-7 py-1.5 rounded-full
                activate:scale-95 transition-all">
                    Logout
                </button>

            </div>
        </nav>
    </div>
  )
}

export default Navbar