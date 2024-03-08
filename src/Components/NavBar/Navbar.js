import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div id='Navbar' className='Navbar-hidden'>Navbar === 
      <div>  <Link to="/Contact">Contact</Link> </div>
      <div> <Link to="/Qualification">Qualification</Link> </div>
      <div>  <Link to="/Profile">Profile</Link> </div>
    </div>
  )
}

export default Navbar