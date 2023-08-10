import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>
                            Hello there! I'm Chetan Taru, a passionate and determined in the world of front-end development. With a deep curiosity and an inherent drive for learning, I've embarked on a journey to become a skilled React developer.
                            </p>
                            <p className='slide-in-bottom'>I take immense pride in being a self-learner, constantly seeking out new challenges and opportunities to expand my knowledge and hone my craft. The ever-evolving nature of web development excites me, and I'm always up for grasping new concepts and technologies at a rapid pace.


                            </p>
                            <p className='slide-in-bottom'>
                            As a quick learner, I'm committed to staying ahead in this dynamic field. Whether it's crafting captivating user interfaces or solving intricate coding puzzles, I approach each task with enthusiasm and an eye for detail. I believe that every project is a chance to refine my skills and contribute something meaningful to the digital landscape.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            
                            <p className='slide-in-bottom'>
                                Currently Learning Backend-NodeJs / ExpressJs
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About