import React from 'react'
// there is a react reveal animation which provide various animation effect
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Button from './Button';
const Description = () => {
  return (
    <Fade left cascade>
    <div style={{marginLeft:"10vw",marginTop:"30vh"}} >
      <h1 style={{fontSize:"4rem",fontWeight:"750"}}>
        <p style={{marginBottom:"-3px"}}>
          Hi, I'm <span style={{color:"#02aab0",fontWeight:"750"}}> Arya.</span>
        </p>
        
        <p>
          I'm a Full Stack Developer
        </p>
      </h1>
      
    </div>
    </Fade>
  )
}

export default Description
