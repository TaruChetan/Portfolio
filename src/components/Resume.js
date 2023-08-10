import React, { Fragment, useState } from 'react'
import { GrView } from 'react-icons/gr';
import { MdHideImage, MdHideSource, MdShowChart, MdSimCardDownload, MdViewAgenda, MdViewModule, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { SiCivicrm, SiCodechef, SiHackerrank, SiLabview } from 'react-icons/si';

function Resume() {
    const [show, setshow] = useState(false)
    const handleShow = ()=>{
     setshow(!show);   
    }
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">CHETAN TARU</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Masters of Computer Applications</h4>
                                <h6 className="blue-label px-2 py-1">2023</h6>
                                <p className="m-0">Jspm's RSCOE , Pune</p>
                                <p>CGPA: 8.58</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Bachelors of Computer Applications</h4>
                                <h6 className="blue-label px-2 py-1">2021</h6>
                                <p className="m-0">Modern College , Pune</p>
                                <p>Grade: 87.45 %</p>
                            </li>
                            
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">RESUME</h4>
                        <h1>
                            <a href="../portfolio-images/CKTARU.pdf" download="CKTARU.pdf" target="/blank" className="text-white text-decoration-none mx-2">
                                <MdSimCardDownload className="zoom-on-hover"/>
                            </a>
                            {show?<MdVisibilityOff onClick={handleShow} className="zoom-on-hover"/>
                            :<MdVisibility onClick={handleShow} className="zoom-on-hover"/>}
                             
                             
                        </h1>
                        
                    </div>
                {show && (
        <iframe
            src="../portfolio-images/CKTARU.pdf" 
            title="Resume"
            width="100%"
            height="600"
            style={{ border: 'none' }}
        />
    )}
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume