import React from 'react'
import './NewAboutSectioncss.css'

const NewAboutSection = () => {
  return (
    <div id="thisabout" className="container-fluid" style={{ backgroundColor: "#000000d6" }}>
      <div className='about_container'>
        <div className='about_contents'>
          <section className='imageSection' >
            <img src="person.jpg " alt="" />
          </section>
          <section className="infoSection">
            <h1>About Me</h1>
            <h2>
              Web Designer & Developer
            </h2>
            <p>
            Currently a student of the PDPM - Indian Institute of Information Technology, Design and Manufacturing, Jabalpur of branch ECE with skills of full stack web development and basic Data Structures and Algorithms in C++.
            </p>
            <p>
              
            </p>
            <div className="personalInfo">
              <div><span>Name:</span> <span>Arya Upadhyay</span></div>
              <div><span>Age:</span> <span>20 Years</span></div>
              <div><span>Email:</span> <span>uayush38@gmail.com</span></div>
              <div><span>Address:</span> <span>IIITDM Jabalpur</span></div>
            </div>
            <div className="button">
              <button> 
               <a href="Resume_AryaUpadhyay.pdf" style={{color:"#02aab0"}} download="Resume_AryaUpadhyay">Resume</a> </button>
               
            </div>
          </section>

          {/* <section className="skillSection">
            <div className="skill">
              <div className="subject">Hard Work</div>
              <div className="progress_bar">
                <div className="progress_line" value="90%" style={{ maxWidth: "90%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="subject">Web Designing</div>
              <div className="progress_bar">
                <div className="progress_line" value="75%" style={{ maxWidth: "75%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="subject">Creativity</div>
              <div className="progress_bar">
                <div className="progress_line" value="73%" style={{ maxWidth: "73%" }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="subject">Web Development</div>
              <div className="progress_bar">
                <div className="progress_line" value="85%" style={{ maxWidth: "85%" }}></div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  )
}

export default NewAboutSection
