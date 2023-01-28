import React from 'react'
import './skillsectioncss.css';
const Skillsection = () => {
  return (
    <div id="thisskill" style={{backgroundColor:"#000000d6"}} className="marginsetting">
        <div style={{marginBottom:"8vh"}}>
        <h2 style={{color:"white",textAlign:"center",fontWeight:"600",fontSize:"40px",marginBottom:"8vh"}}>
            SKILLS
        </h2>
        </div>
        <div style={{display :"flex",justifyContent:"center",flexWrap:"wrap"}}>
            <div className="wrapper"  style={{height:"30vh",width:"310px",marginRight:"12px",borderRadius:"12px",marginBottom:"8vh"}}>

                <div className="foricon">
                <iconify-icon icon="simple-icons:react" style={{fontSize:"55px"}}></iconify-icon  >
                </div>

                <div className="fortitle" style={{width:"100%",textAlign:"center",fontSize:"140%",color:"white",fontWeight:"600"}}>
                    
                    <p>Front-End Development</p>

                </div>
                <div className="fordescription" style={{height:"12vh",width:"100%",color:"white",textAlign:"center"}}>
                <p> I can create amazing designs using react.js or by simply using HTML, CSS, JavaScript.</p>
                </div>
            </div>

            <div  className="wrapper"  style={{height:"30vh",width:"310px",marginRight:"12px",borderRadius:"12px",marginBottom:"8vh"}}>

                <div className="foricon" style={{width:"100%"}}>
                <iconify-icon icon="uil:database" style={{fontSize:"55px"}}></iconify-icon>
                </div>

                <div className="fortitle" style={{width:"100%",textAlign:"center",fontSize:"140%",color:"white",fontWeight:"600"}}>
                    
                    <p>Back-End Development</p>

                </div>
                <div className="fordescription" style={{height:"12vh",width:"100%",color:"white",textAlign:"center"}}>
                <p>I can create APIs using Node.js and Express.js and conneect them to a database using MongoDb.</p>
                </div>
            </div>

            <div className="wrapper"  style={{height:"30vh",width:"310px",marginRight:"12px",borderRadius:"12px",marginBottom:"8vh"}}>

                <div className="foricon" style={{width:"100%"}}>
                <iconify-icon icon="mdi:microsoft-visual-studio" style={{fontSize:"55px"}}></iconify-icon>
                </div>

                <div className="fortitle" style={{width:"100%",textAlign:"center",fontSize:"140%",color:"white",fontWeight:"600"}}>
                    
                    <p>Competitive Coding</p>

                </div>
                <div className="fordescription" style={{height:"12vh",width:"100%",color:"white",textAlign:"center"}}>
                <p> I can proficiently code in C++ programming language and i also know Java and Python.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skillsection

// good color for hovering #26544c
