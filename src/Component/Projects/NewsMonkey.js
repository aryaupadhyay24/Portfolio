import React from 'react'


const NewsMonkey = () => {
  return (
    <div >
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"35px",marginLeft:"40vh"}}  >
            <div style={{width:"90%"}}>
                
                <div >
                    {/* technology used */}
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div  style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px"}}>React</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px"}}>API fetch</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px"}}>JSX</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px"}}>CSS</div>
                        
                        
                        
                    </div>
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px",marginTop:"4px"}}>Google font</div>
                        <div style={{border:"2px solid black",backgroundColor:"grey", marginRight:"6px",marginTop:"4px"}}>Router</div>
                    </div>

                </div>

                <div style={{marginTop:"18px",fontStyle:"italic"}} >
                    {/* description */}
                    This is News Monkey website it shows different category of news.
                    <br />
                    News Api is used to fetch data 
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
                {/* <img style={{width:"60%"}} src="/project_image/newsimage.png" alt="showing image" /> */}
            </div>


            
        </div>
      
    </div>
  )
}

export default NewsMonkey
