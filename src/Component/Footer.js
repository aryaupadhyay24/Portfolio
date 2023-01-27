import React from 'react'


const Footer = () => {

  const handleClick=(id)=>{
    document.getElementById(id).scrollIntoView();

  }


  return (
    <div className='container-fluid' style={{height:"30vh",backgroundColor:"#333",marginTop:"110px"}}>
        <div style={{marginTop:"32px",textAlign:"center"}}>
        <i class="fa fa-angle-up fa-2x social" aria-hidden="true" style={{marginTop:"58px"}} onClick={()=>handleClick("thisnavbar")}></i>
        </div>
        <div style={{marginTop:"42px"}}>
      <div style={{ display: "flex", flexDirection: "row",justifyContent:"center", marginTop: "30px" }}>
        <a href="/"><i class="fa-brands fa-linkedin social" style={{ fontSize: "29px", marginRight: "48px"}}></i></a>
        <a href="/"><i class="fa-brands fa-github social" style={{ fontSize: "29px", marginRight: "48px"}}></i></a>
        {/* <a href="/"><i class="fa-brands fa-youtube social" style={{ fontSize: "29px", marginRight: "48px" }}></i></a> */}
        <a href="Resume_AryaUpadhyay.pdf"  download="Resume_AryaUpadhyay"><i class="fa-solid fa-file social" style={{ fontSize: "29px"}}></i></a>
      </div>
      </div>
    </div>
  )
}

export default Footer
