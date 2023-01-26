import React from 'react'

const About = () => {
  return (
    <div style={{transform: "skew(0, -4deg)",backgroundImage: "linear-gradient(135deg,#02aab0,#00cdac)",height:"60vh",marginTop:"120px" }} id="myabout">
    {/* <div style={{height:"60vh",marginTop:"60px",rotate:"4deg",rotationPoint:"0% 0%"}}> */}
        {/* <div style={{marginTop:"42px"}}> */}
        <div style={{transform: "skew(0, 4deg)",paddingTop:"42px"}}>
        <h2 style={{textAlign:"center",fontWeight:"550",fontSize:"38px",color:"white"}}>ABOUT</h2>
        {/* </div> */}
        Currently a student of the PDPM - Indian Institute of Information Technology, Design and Manufacturing, Jabalpur of branch CSE with skills of full stack web development and basic Data Structures and Algorithms in C++.
        </div>
      
    </div>
    
    
  )
}

export default About
