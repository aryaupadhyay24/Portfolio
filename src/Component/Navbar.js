import React from 'react'
import '../Component/Body/myfun.css';
const Navbar = () => {
  const x="_blank"
  return (
    <div id="thisnavbar">
      <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"85vw"}}>

        </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "30px",}}>
        <a href="https://www.linkedin.com/in/arya-upadhyay-18783a232/" ><i class="fa-brands fa-linkedin social" style={{ fontSize: "29px", marginRight: "48px" ,color:"#02aab0"}}></i></a>
        <a href="https://github.com/aryaupadhyay24"><i class="fa-brands fa-github social" style={{ fontSize: "29px", marginRight: "48px" ,color:"#02aab0"}}></i></a>
        {/* <a href="/"><i class="fa-brands fa-youtube social" style={{ fontSize: "29px", marginRight: "48px",color:"#02aab0" }}></i></a> */}
        <a href="Resume_AryaUpadhyay.pdf"  download="Resume_AryaUpadhyay"><i class="fa-solid fa-file social" style={{ fontSize: "29px", marginRight: "8px" ,color:"#02aab0"}}></i></a>
      </div>
      </div>

      

    </div>
  )
}

export default Navbar
