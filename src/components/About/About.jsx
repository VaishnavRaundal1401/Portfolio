import React, { useRef } from 'react'
import './About.scss'
import {motion, useInView} from 'framer-motion';
const About = () => {

  const ref = useRef()

  const isInView = useInView(ref, {margin:"-100px"})
  const variants={
    initial:{
      y:100,
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
    <motion.div className='about' variants={variants} initial="initial"
     //whileInView='animate' 
     ref = {ref}
     animate={isInView && "animate"}
     >
      {/* <div className="aboutImg">
        <img src="./images/about.jpeg" alt="" />
      </div> */}
      <motion.div className="myInfoContainer" variants={variants}>
          <motion.h1 variants={variants}>Hii Their, My name is Vaishnav Raundal!!</motion.h1>
          <motion.span variants={variants}>
          Welcome to my portfolio! I'm Vaishnav Raundal, a passionate and dedicated Web Developer and Software Engineer currently pursuing my Bachelor of Technology in Computer Science at PCCOE, Pune. With a strong academic record and hands-on experience in both professional and personal projects, I strive to create impactful and innovative web applications.
          </motion.span>
          <motion.h1 variants={variants}>Education</motion.h1>
          <motion.span variants={variants}>
          My educational journey has been both challenging and rewarding. I completed my Diploma in Information Technology from Sou. Venutai Chavan Polytechnic, Pune, with a stellar percentage of 88.88%. Currently, I am pursuing my B.Tech in Computer Science, where I have maintained a CGPA of 8.4/10.
          </motion.span>
          <motion.div className="resumeButton" variants={variants}>
            <motion.a href="/resume.pdf" download><motion.button variants={variants}>My Resume</motion.button></motion.a>
          </motion.div>
      </motion.div>
      <div className="aimageContainer">
       
      </div>
    </motion.div>
  )
}

export default About
