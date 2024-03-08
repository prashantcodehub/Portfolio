import React, { useEffect } from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'
const Landing = () => {
  
  const ToggleClassAndPageSwitchingAnimation=()=>{
    // footer Navbar
    document.getElementById("Navbar").className ="Navbar";
    document.getElementById("footer").className ="footer";
    console.log("hello");
  }
  
  return (
    <div className='landingContaner'>
      <div className='forward-slash top'></div>
        <div className='landingText'>
          I AM PRASHANT MAURYA
        </div>
      <div className='forward-slash bottom'></div>
      <button onClick={ToggleClassAndPageSwitchingAnimation} className='LandingButtonToProfile'>
        <Link to="/profile" className='LinkInLanding'> 
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M14.59,7.41L18.17,11H6v2h12.17l-3.59,3.59L16,18l6-6l-6-6L14.59,7.41z M2,6v12h2V6H2z"/></svg>
        </Link>
      </button>
   </div>
  )
}

export default Landing