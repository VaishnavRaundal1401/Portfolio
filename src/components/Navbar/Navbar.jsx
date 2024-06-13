import React from 'react'
import './Navbar.css'
import {motion} from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar/>
        <div className="wrapper">
            <motion.span
              initial={{opacity:0, scale:0}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.5}} 
            >
            Vaishnav Raundal</motion.span>
            <motion.div className="social" 
              initial={{opacity:0, scale:0}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.5}}>
                <a href="https://github.com/VaishnavRaundal1401"  ><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/vaishnav-raundal-975a56259/"><i className="fa-brands fa-linkedin"></i></a>
            </motion.div>  
        </div>
    </div>
  )
}

export default Navbar
