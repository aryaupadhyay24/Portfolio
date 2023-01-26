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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam ut placeat, eligendi mollitia praesentium labore animi voluptas temporibus aspernatur esse nisi odit repellat est, et eum rerum rem pariatur vitae accusamus enim laboriosam
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi provident assumenda recusandae quasi repellendus sequi magnam dolore ipsum mollitia!
            </p>
            <div className="personalInfo">
              <div><span>Name:</span> <span>Arya Upadhyay</span></div>
              <div><span>Age:</span> <span>20 Years</span></div>
              <div><span>Email:</span> <span>uayush38@gmail.com</span></div>
              <div><span>Address:</span> <span>IIITDM Jabalpur</span></div>
            </div>
            <div className="button">
              <button>Download CV</button>
            </div>
          </section>

          <section className="skillSection">
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
          </section>
        </div>
      </div>
    </div>
  )
}

export default NewAboutSection
