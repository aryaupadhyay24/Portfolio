import React from 'react'

const NewSkill = () => {
    return (
        <div style={{backgroundImage: "linear-gradient(135deg,/02aab0,/00cdac)",width:"100%"}}>
            <div style={{ transform: "skew(0, -4deg)", backgroundImage: "linear-gradient(135deg,/02aab0,/00cdac)", height: "80vh", marginTop: "120px" }} >
                <div style={{ transform: "skew(0, 4deg)", backgroundImage: "linear-gradient(135deg,/02aab0,/00cdac)" }}>
                    {/* <div className='row' >
                    <div className="col-md-4">
                        <div id="frontend" style={{border:"2px solid black"}}>
                            <div className="logo">
                                <i className="fa-brands fa-react" style={{ fontSize: "55px" }}></i>
                            </div>
                            <div className="title">
                                Front-End Development

                            </div>
                            <div className="description_title">
                                <p> I can create amazing designs using react.js or by simply using HTML, CSS, JavaScript.</p>
                            </div>
                        </div>



                        <div id="backend" style={{border:"2px solid black"}}>
                            <div className="logo">
                            <i className="fa-brands fa-node-js" style={{fontSize:"55px"}}></i>
                            </div>
                            <div className="title">
                                Back-End Development

                            </div>
                            <div className="description_title">
                                <p>I can create APIs using Node.js and Express.js and conneect them to a database using MySQL.</p>
                            </div>
                        </div>




                        <div id="frontend" style={{border:"2px solid black"}}>
                            <div className="logo">
                            <i className="uil uil-visual-studio"></i>
                            </div>
                            <div className="title">
                                Competititve Programing

                            </div>
                            <div className="description_title">
                                <p> I can proficiently code in C++ programming language and i also know Java and C.</p>
                            </div>
                        </div>
                    </div>


                </div> */}
                    <div className='column' style={{ backgroundImage: "linear-gradient(135deg,/02aab0,/00cdac)",}} >
                        <div className="col-md-4">
                            <div className="card" >
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" >
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
       
    )
}

export default NewSkill
