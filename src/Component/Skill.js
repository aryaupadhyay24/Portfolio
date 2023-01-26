import React, { useRef } from 'react'




const Skill = () => {
  const testref=useRef(null);

  return (
    <div style={{backgroundImage: "linear-gradient(135deg,#02aab0,#00cdac)",height:"60vh",marginTop:"37vh"}} ref={testref} id="myskill">
      <div style={{textAlign:"center",fontWeight:"700"}}>
        <h1  style={{textAlign:"center",fontWeight:"550",fontSize:"38px",color:"white"}}>
          SKILLS
        </h1>
      </div>
      <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"40%"}}>
          
        </div>
     
      <div className='container'></div>
      <div className='row'> 
        <div className='col-md-4'>
          {/* <div>Front End</div> */}
        <div style={{textAlign:"center",marginTop:"42px"}}><i class="fa-brands fa-html5" style={{color:"red",fontSize:"55px"}}></i></div>
        <div style={{color:"white",textAlign:"center",fontSize:"20px"}}>
          Html
        </div>

        </div>

        <div className='col-md-4'>
        <div  style={{textAlign:"center",marginTop:"42px"}}><i class="fa-brands fa-git-alt" style={{fontSize:"55px",color:"#f05555"}}></i></div>
        <div style={{color:"white",textAlign:"center",fontSize:"20px"}}>
          Git
        </div>
        </div>


        <div className='col-md-4'>
        <div  style={{textAlign:"center",marginTop:"42px"}}><i class="fa-brands fa-css3" style={{color:"blue",fontSize:"55px"}}></i></div>
        <div style={{color:"white",textAlign:"center",fontSize:"20px"}}>
         Css
        </div>
        </div>
        <div className='col-md-4'>
        <div  style={{textAlign:"center",marginTop:"42px"}}><i class="fa-brands fa-js" style={{fontSize:"55px",color:"#f3e83f"}}></i></div>
        <div style={{color:"white",textAlign:"center",fontSize:"20px"}}>
        Javascript
        </div>
        </div>

        <div className='col-md-4'>
        <div  style={{textAlign:"center",marginTop:"42px"}}><i class="fa-brands fa-bootstrap" style={{fontSize:"55px",color:"#3939f8"}}></i></div>
        <div style={{color:"white",textAlign:"center",fontSize:"20px"}}>
          Bootstrap
        </div>
        </div>


        <div className='col-md-4'>
        <div style={{textAlign:"center",marginTop:"42px"}}><i class="fa-brands fa-react" style={{fontSize:"55px"}}></i></div> 
        <div style={{color:"white",textAlign:"center",fontSize:"20px"}}>
         React
        </div>
        </div>

        <div className='col-md-4'>
        <div style={{textAlign:"center",marginTop:"42px"}}><i class="fa-brands fa-node-js" style={{fontSize:"55px"}}></i></div>
        <div style={{color:"white",textAlign:"center",fontSize:"20px"}}>
         Nodejs
        </div>
        </div>

        {/* <div className='col-md-4'style={{textAlign:"center",marginTop:"42px"}}><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></div> */}

        {/* <div className='col-md-4'style={{textAlign:"center"}}><img src="https://www.danny-berger.dev/static/efef7da8b48ca5e24cfe4474fc49b611/55abd/javascript.png"></img></div>

        <div className='col-md-4'style={{textAlign:"center"}}><img src="https://www.danny-berger.dev/static/11b00261f273e3f9e44c6a70a057041f/66640/redux.png"/></div>

        <div className='col-md-4'style={{textAlign:"center"}}><img src="https://www.danny-berger.dev/static/707e1342a3c3d3aa0a246bde9595efe6/66640/css.png"/></div>

        <div className='col-md-4'style={{textAlign:"center"}}><img src="https://www.danny-berger.dev/static/64ba6d76997bc51a792f321deda40db4/66640/html5.png"/></div>

        <div className='col-md-4'style={{textAlign:"center"}}><img src="https://www.danny-berger.dev/static/728ff5a8e44d74cd0f2359ef0a9ec88a/55abd/git.png"/></div>
        <div className='col-md-4'style={{textAlign:"center"}}><img src="https://www.danny-berger.dev/static/f50a47cbc17ab8ca183bbe9010b47ec9/55abd/express.png"/></div>
        <div className='col-md-4'style={{textAlign:"center"}}><img src=""/></div>
        <div className='col-md-4'style={{textAlign:"center"}}><img src=""/></div>
        <div className='col-md-4'style={{textAlign:"center"}}><img src=""/></div>
        <div className='col-md-4'style={{textAlign:"center"}}><img src=""/></div> */}


      

      </div>
      
      </div>
      <div style={{color:"white",weigth:"400"}}>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, optio natus incidunt accusantium error voluptatum aut excepturi placeat ipsum magni fugit. Laborum, esse omnis nobis a expedita ut provident dignissimos? */}
      </div>
    </div>
    
  )
}

export default Skill
