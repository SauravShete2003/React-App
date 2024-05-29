import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar-conatiner'>
      <Link to="/" className='navbar-menu'>Home</Link>
      <Link to="/About" className='navbar-menu'>About</Link>
      <Link to="/Contact" className='navbar-menu'>Contact</Link>
    </div>
  )
}
export default Navbar
