import React from 'react'
import { Link } from 'react-router'
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">SE NPRU Blog</a>
  </div>
    <div className="flex space-x-2">
            <Link to="/login" className="btn btn-outline btn-accent hover:bg-accent hover:text-white transition"> {/* เพิ่ม hover effect */}
              Login
            </Link>
            <LoginButton />
            <Link to="/register" className="btn btn-outline btn-primary hover:bg-primary hover:text-white transition">
              Register
            </Link>
            <RegisterButton />
          </div>
</div>
    </div>
  )
}

export default Navbar
