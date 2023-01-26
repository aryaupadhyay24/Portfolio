import React from 'react'


const Notebook = () => {
  return (
    <div >
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"75px",marginLeft:"40vh"}}  >
            <div style={{width:"90%"}}>
                <h2 style={{fontWeight:"600"}}>iNotebook</h2>
                <div >
                    {/* technology used */}
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div  style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px"}}>React</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px"}}>API fetch</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px"}}>JSX</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px"}}>CSS</div>
                        
                        
                        
                        
                        
                        
                    </div>
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px",marginTop:"4px"}}>Nodejs</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px",marginTop:"4px"}}>Express js</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px",marginTop:"4px"}}>Vanilla js</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px",marginTop:"4px"}}>Bootstarp</div>
                    </div>

                    


                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px",marginTop:"4px"}}>Mongodb</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px",marginTop:"4px"}}>javascript</div>
                    </div>

                </div>

                <div style={{marginTop:"18px",fontStyle:"italic"}} >
                    {/* description */}
                    This is iNotebook Project here user create his notes for daily aur important work.

                    <br />
                    Khud ka api banaye hai 
                </div>


                <div style={{fontStyle:"italic"}}>  
                    Content portion bhar rha hu n 

                </div>

                <div style={{fontStyle:"italic"}}>
                    Baad me sahi karunga
                </div>
                <div>
            <button type="button" class="btn btn-outline-primary fun" style={{borderRadius:"0px",border:"2px solid #02aab0",fontSize:"25px",fontWeight:"600", display:"inline" }} >See Live</button>
            <button type="button" class="btn btn-outline-primary fun" style={{borderRadius:"0px",border:"2px solid #02aab0",fontSize:"25px",fontWeight:"600" }} >Source Code</button>
            </div>

            </div>
            <div >
                {/* <img style={{width:"70%"}} src="/project_image/Qcluster_image.png" alt="showing image" /> */}
            </div>


            
        </div>
      
    </div>
  )
}

export default Notebook
