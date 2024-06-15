import React from 'react'
import './HomePage.scss'
import {motion} from 'framer-motion'

const HomePage = () => {

  const textVariants ={
    initial:{
      x:-500,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.1
      }
    }
  }

  return (
    <div className='homepage'>
        <div className="wrapper">
            <motion.div variants={textVariants} initial="initial" animate="animate" className="textContainer">
                <motion.h2 variants={textVariants}>VAISHNAV RAUNDAL</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer and Software Engineer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>My Work</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
            </motion.div>
        </div>
      <div className="imageContainer">
        <img src="./images/homepage.jpeg" alt="" />
      </div>
    </div>
  )
}

export default HomePage
