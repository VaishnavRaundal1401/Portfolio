import React,  { useRef }  from 'react'
import './Skills.scss'
import {motion, useInView} from 'framer-motion'

const Skills = () => {

    const ref = useRef()
    const isInView = useInView(ref, {margin:"-100px"})
    const variants={
        initial:{
          x:-500,
          opacity:0,
        },
        animate:{
          opacity:1,
          x:0,
          transition:{
            duration:1,
            staggerChildren:0.3
          }
        }
      }
  return (
    <motion.div className='skills' variants={variants} initial="initial"
    // whileInView='animate'
    ref = {ref}
    animate={isInView && "animate"}
    >
      <motion.div className="languages" variants={variants}>
        <h1>Languages:</h1>
        <div className="langImg">
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/C.png" alt="" />
                <h3>C</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/C++.png" alt="" />
                <h3>C++</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/Java.png" alt="" />
                <h3>Java</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/JS.png" alt="" />
                <h3>JavaScript</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/HTML.png" alt="" />
                <h3>HTML</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/CSS.png" alt="" style={{width:'70px'}}/>
                <h3>CSS</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/PHP.png" alt="" />
                <h3>PHP</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/SQL.png" alt=""/>
                <h3>SQL</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/PLSQL.png" alt="" />
                <h3>PL/SQL</h3>
            </motion.div>
        </div>
      </motion.div>


      <div className="databaseAndFramework">
      <motion.div className="languages" variants={variants}>
        <h1>Databases:</h1>
        <div className="langImg">
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/MYSQL.png" alt="" />
                <h3>MySQL</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/Oracle.jpg" alt="" style={{width:'120px'}}/>
                <h3>Oracle DB</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/Mongo.png" alt="" />
                <h3>Mongo DB</h3>
            </motion.div>
        </div>
      </motion.div>


      <motion.div className="languages" variants={variants}>
        <h1>Frameworks:</h1>
        <div className="langImg">
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/Reactjs.png" alt="" style={{width:'140px'}}/>
                <h3>ReactJs</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/Nodejs.png" alt=""/>
                <h3>NodeJs</h3>
            </motion.div>
            <motion.div className="languageCard" variants={variants}>
                <img src="./images/Expressjs.png" alt=""  style={{width:'170px'}}/>
                <h3>ExpressJs</h3>
            </motion.div>
        </div>
      </motion.div>
      </div>


    </motion.div>
  )
}

export default Skills
