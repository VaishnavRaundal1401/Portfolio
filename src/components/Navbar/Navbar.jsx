import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
        <div className="wrapper">
            <span>Vaishnav Raundal</span>
            <div className="social">
                <a href="https://github.com/VaishnavRaundal1401"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/vaishnav-raundal-975a56259/"><i class="fa-brands fa-linkedin"></i></a>
            </div>  
        </div>
    </div>
  )
}

export default Navbar
