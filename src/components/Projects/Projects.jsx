import React, { useRef } from 'react'
import './Projects.scss'
import { FaGithub } from "react-icons/fa";
import {motion, useInView} from 'framer-motion';

const Projects = () => {

  const ref = useRef();

  const isInView = useInView(ref, {margin:"-100px"})
  const variants={
    initial:{
      y:80,
      opacity:0,
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        duration:1,
        staggerChildren:0.3
      }
    }
  }
  return (
    <div className='projectsCotainer'>
        <motion.div className="projects" 
         variants={variants} initial="initial"
         ref = {ref}
         animate={isInView && "animate"}
         >
            <h1>Projects</h1>
            <div className="projectCards">
                <motion.div className="Card" variants={variants} whileHover={{scale:'1.15'}}>
                    <h3>NoteNimbus</h3>
                    <div className="cardContent">
                        <img src="./images/notesApp.png" alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus molestiae error, ut, reiciendis culpa beatae cupiditate non voluptate provident molestias dicta totam iure? Alias vero dolore cumque, delectus nisi tempora.</span>
                    </div>
                    <a href="https://github.com/VaishnavRaundal1401/note-nimbus" target="_blank" rel="noreferrer"><FaGithub /></a>
                </motion.div>
                <motion.div className="Card" variants={variants} whileHover={{scale:'1.15'}}>
                    <h3>NewsSphere</h3>
                    <div className="cardContent">
                        <img src="./images/newsApp.png" alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus molestiae error, ut, reiciendis culpa beatae cupiditate non voluptate provident molestias dicta totam iure? Alias vero dolore cumque, delectus nisi tempora.</span>
                    </div>
                    <a href="https://github.com/VaishnavRaundal1401/News-Sphere" target="_blank" rel="noreferrer"><FaGithub /></a>
                </motion.div>
            </div>
            <div className="projectCards">
                <motion.div className="Card" variants={variants} whileHover={{scale:'1.15'}}>
                    <h3>TravelBliss</h3>
                    <div className="cardContent">
                        <img src="./images/travelBliss.png" alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus molestiae error, ut, reiciendis culpa beatae cupiditate non voluptate provident molestias dicta totam iure? Alias vero dolore cumque, delectus nisi tempora.</span>
                    </div>
                    <a href="https://github.com/VaishnavRaundal1401/TravelBliss" target="_blank" rel="noreferrer"><FaGithub /></a>
                </motion.div>
                <motion.div className="Card" variants={variants} whileHover={{scale:'1.15'}}>
                    <h3>Portfolio</h3>
                    <div className="cardContent">
                        <img src="./images/portfolio.png" alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus molestiae error, ut, reiciendis culpa beatae cupiditate non voluptate provident molestias dicta totam iure? Alias vero dolore cumque, delectus nisi tempora.</span>
                    </div>
                    <a href="https://github.com/VaishnavRaundal1401/Portfolio" target="_blank" rel="noreferrer"><FaGithub /></a>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default Projects
