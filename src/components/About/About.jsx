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
      <div className="aboutContainer">
          <motion.div className='about' variants={variants} initial="initial"
            //whileInView='animate' 
            ref = {ref}
            animate={isInView && "animate"}
            >
                <motion.div className="myInfoContainer" variants={variants}>
                  <motion.h1 variants={variants}>Hello, How are you 😊</motion.h1>
                  <motion.span variants={variants}>
                  Welcome to my portfolio! My name is Vaishnav Popat Raundal and I'm from Nashik. Professionally, a Full Stack Developer, learning and working in IT field since 2021. I'm a passionate and dedicated Web Developer who loves to develop applications in MERN stack and i'm currently pursuing my Bachelor of Technology in Computer Science at PCCOE, Pune. As a upcomming Software Developer and, I strive to create impactful and innovative Software Products.
                  </motion.span>
                  <motion.div className="resumeButton" variants={variants}>
                    <motion.a href="/resume.pdf" download><motion.button variants={variants}>My Resume</motion.button></motion.a>
                  </motion.div>
                </motion.div>
                
                <motion.div className="education">
                  <motion.h1 variants={variants}>Qualification</motion.h1>
                  <motion.span variants={variants}>
                  My educational journey has been both challenging and rewarding. I completed my Diploma in Information Technology from Sou. Venutai Chavan Polytechnic, Pune, with a stellar percentage of 88.88%. Currently, I am pursuing my B.Tech in Computer Science, where I have maintained a CGPA of 8.4/10.
                  </motion.span>
                </motion.div>

           </motion.div>
                <div className='aimageContainer'>
                  {/* <img src='/images/about.jpg' alt='About Background' /> */}
                </div>
      </div>
  )
}

export default About
