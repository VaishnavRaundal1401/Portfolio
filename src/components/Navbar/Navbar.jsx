import React from 'react'
import './Navbar.scss'
import {motion} from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
            >Vaishnav Raundal</motion.span>
            <motion.div className="social" 
              initial={{opacity:0, scale:0}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.5}}>
                <a href="https://github.com/VaishnavRaundal1401" style={{fontSize:'25px'}}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/vaishnav-raundal-975a56259/" style={{fontSize:'25px'}}><FaLinkedin /></a>
                <a href="https://www.geeksforgeeks.org/user/vaishnavrajqpr/" style={{fontSize:'25px'}}><SiGeeksforgeeks /></a>
                <a href="https://leetcode.com/u/vaishnavraundal2016/" style={{fontSize:'25px'}}><SiLeetcode /></a>
            </motion.div>  
        </div>
    </div>
  )
}

export default Navbar
