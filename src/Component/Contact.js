import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1o7g58b', 'template_lv5ipsj', e.target, 'PopPytteNBCYXGpdS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (

    <>
    <div id="mycontact">
    <div>
        <h2 style={{textAlign:"center",marginTop:"80px" ,fontWeight:"600",fontSize:"38px"}}>CONTACT</h2>
    </div>
    <div className='container' style={{display:"flex",alignItems:"center"}}>
      <form action="" style={{width:"80%",margin:"auto"}} onSubmit={sendEmail}>
        <div >
        <input type="text" placeholder='Name' name="name" id ="name"  style={{width:"100%",margin:"auto",marginTop:"8px",border:"1px solid black"}}/>
        </div>
        <div >
        <input type="email" name="email" id="email" placeholder="Email"  style={{width:"100%",margin:"auto",marginTop:"8px",border:"1px solid black"}}/>
        </div>
        
        <div >
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' style={{width:"100%",margin:"auto",marginTop:"8px",border:"1px solid black"}}></textarea>
        </div>
        <div style={{marginLeft:"46%"}}>
        <input type="submit" class="btn btn-outline-primary fun" style={{borderRadius:"0px",border:"2px solid #02aab0",fontSize:"20px",fontWeight:"600" ,marginTop:"12px" } } value="SEND"
        />
        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default Contact
