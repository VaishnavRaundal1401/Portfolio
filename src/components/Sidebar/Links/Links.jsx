import React from 'react'
import '../Sidebar.css'
const Links = () => {

    const items=["HomePage", "About", "Skills", "Projects", "Contact"];
  return (
    <div className='links'>
      {items.map(item=>(
        <a href={`#${item}`} key={item}>
            {item}</a>
      ))}
    </div>
  )
}

export default Links
