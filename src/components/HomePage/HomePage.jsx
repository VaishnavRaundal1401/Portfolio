import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homepage'>
        <div className="wrapper">
            <div className="textContainer">
                <h2>VAISHNAV RAUNDAL</h2>
                <h1>Web Developer and Software Engineer</h1>
                <div className="buttons">
                    <button>My Work</button>
                    <button>Contact Me</button>
                </div>
            </div>
        </div>
      <div className="imageContainer">
        <img src="./images/homepage.jpeg" alt="" />
      </div>
    </div>
  )
}

export default HomePage
