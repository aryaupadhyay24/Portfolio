import React, { useState } from 'react'
import './myfun.css'
import Fade from 'react-reveal/Fade';



const Button = (props) => {
  const {passi}=props;

  // this is also way to change the hoverinf property directly in react
  //   const [isHovering, setIsHovering] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };
  // const handleMouseEnter2=()=>{
  //   setIsHovering(true);
  // }
  // const handleMouseLeave2 = () => {
  //   setIsHovering(false);
  // };

  const handleClick=(id)=>{
    console.log(passi)
    document.getElementById(id).scrollIntoView();
  }





  return (
    <Fade left cascade>
    <div style={{marginLeft:"10vw"}} >
      <div className="patanahi">
      <button type="button" class="btn btn-outline-primary fun  todisplay" style={{borderRadius:"0px",border:"2px solid #02aab0",fontSize:"25px",fontWeight:"600" }} onClick={()=>handleClick("thisskill")} >
      Skills
        </button>


        <button type="button" class="btn btn-outline-primary fun todisplay" style={{borderRadius:"0px",border:"2px solid #02aab0",fontSize:"25px",fontWeight:"600" }} onClick={()=>handleClick("thisproject")} >
      Projects
        </button>


        <button type="button" class="btn btn-outline-primary fun todisplay" style={{borderRadius:"0px",border:"2px solid #02aab0",fontSize:"25px",fontWeight:"600" }} onClick={()=>handleClick("thisabout")} >
      About
        </button>


        <button type="button" class="btn btn-outline-primary fun todisplay" style={{borderRadius:"0px",border:"2px solid #02aab0",fontSize:"25px",fontWeight:"600" }} onClick={()=>handleClick("mycontact")} >
      Contact
        </button>
      
      </div>
    </div>
    </Fade>
  )
}

export default Button
