import React, { useRef } from 'react'
import './Projects.scss'
import { FaGithub } from "react-icons/fa";
import {motion, useInView} from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiPhp, SiFramer } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

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
                <motion.div className="Card" variants={variants} whileHover={{scale:'1.05'}}>
                    <h3>NoteNimbus</h3>
                    <div className="cardContent">
                        <img src="./images/notesApp.png" alt="" />
                        <span>This application offers a seamless experience for managing notes, combining the power of modern web technologies to deliver a fast, reliable, and aesthetically pleasing solution.</span>
                    </div>
                    <div className="github_techUsed">
                      <a href="https://github.com/VaishnavRaundal1401/note-nimbus" target="_blank" rel="noreferrer"><FaGithub /></a>
                      <div className="techused">
                        <a href="/"><FaReact /></a>
                        <a href="/"><FaNodeJs /></a>
                        <a href="/"><SiExpress /></a>
                        <a href="/"><DiMongodb /></a>
                        <a href="/"><FaHtml5 /></a>
                        <a href="/"><FaCss3Alt /></a>
                        <a href="/"><FaBootstrap /></a>
                      </div>
                    </div>
                </motion.div>
                <motion.div className="Card" variants={variants} whileHover={{scale:'1.05'}}>
                    <h3>NewsSphere</h3>
                    <div className="cardContent">
                        <img src="./images/newsApp.png" alt="" />
                        <span>Offering real-time news updates with React and an external API.</span>
                    </div>
                    <div className="github_techUsed">
                      <a href="https://github.com/VaishnavRaundal1401/note-nimbus" target="_blank" rel="noreferrer"><FaGithub /></a>
                      <div className="techused">
                        <a href="/"><FaReact /></a>
                        <a href="/"><FaHtml5 /></a>
                        <a href="/"><FaCss3Alt /></a>
                        <a href="/"><FaBootstrap /></a>
                      </div>
                    </div>
                </motion.div>
            </div>
            <div className="projectCards">
                <motion.div className="Card" variants={variants} whileHover={{scale:'1.05'}}>
                    <h3>TravelBliss</h3>
                    <div className="cardContent">
                        <img src="./images/travelBliss.png" alt="" />
                        <span>Welcome to TravelBliss, offering essential resources and tools for a smooth travel experience. Built with HTML, CSS, Bootstrap, PHP, and MySQL.</span>
                    </div>
                    <div className="github_techUsed">
                      <a href="https://github.com/VaishnavRaundal1401/note-nimbus" target="_blank" rel="noreferrer"><FaGithub /></a>
                      <div className="techused">
                        <a href="/"><FaHtml5 /></a>
                        <a href="/"><FaCss3Alt /></a>
                        <a href="/"><FaBootstrap /></a>
                        <a href="/"><SiPhp /></a>
                        <a href="/"><GrMysql /></a>
                      </div>
                    </div>
                </motion.div>
                <motion.div className="Card" variants={variants} whileHover={{scale:'1.05'}}>
                    <h3>Portfolio</h3>
                    <div className="cardContent">
                        <img src="./images/portfolio.png" alt="" />
                        <span>Explore my projects with a seamless, animated experience.</span>
                    </div>
                    <div className="github_techUsed">
                      <a href="https://github.com/VaishnavRaundal1401/note-nimbus" target="_blank" rel="noreferrer"><FaGithub /></a>
                      <div className="techused">
                        <a href="/"><FaReact /></a>
                        <a href="/"><FaHtml5 /></a>
                        <a href="/"><FaCss3Alt /></a>
                        <a href="/"><SiFramer /></a>
                      </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default Projects
