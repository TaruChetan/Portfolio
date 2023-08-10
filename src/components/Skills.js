import React, { Fragment } from 'react'
import {SiJavascript,SiMicrosoftsqlserver,SiNodedotjs,SiDotnet,SiReact,SiHtml5,SiCss3,SiBootstrap,SiCsharp,SiMongodb,SiExpress,SiPug, SiCplusplus, SiRedux, SiAntdesign, SiAlgolia, SiJava, SiGit} from 'react-icons/si'
function Skills() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">Technologies I know</h1>
                            <hr></hr>

                            <div className="row my-2">
                            <p className="ls-2 mt-2 slide-in-bottom">Web development</p>
                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiHtml5 className='fs-4'/> Html</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiCss3 className='fs-4'/> Css</span>
                                </div>
                                
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiJavascript className='fs-4'/> JavaScript</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiReact className='fs-4'/> React</span>
                                </div>
                                <hr></hr>
                                <p className="ls-2 mt-2 slide-in-bottom">Frameworks / Libraries</p>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiReact className='fs-4'/> React</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiRedux className='fs-4'/> Redux</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiRedux className='fs-4'/> Redux-Toolkit</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiAntdesign className='fs-4'/>AntD</span>
                                </div>
                                <p className="ls-2 mt-2 slide-in-bottom">Database Languages</p>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiMicrosoftsqlserver className='fs-4'/> MySQL</span>
                                </div>
                                <p className="ls-2 mt-2 slide-in-bottom">OOPs </p>
                               
                                
                                
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiCplusplus className='fs-4'/> C++</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiAlgolia className='fs-4'/> DSA</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiJava className='fs-4'/>Core Java</span>
                                </div>
                                <p className="ls-2 mt-2 slide-in-bottom">Version Control tools </p>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiGit     className='fs-4'/> Git</span>
                                </div>
                                
                                
                                
                            </div>

                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/Development-pana.png" alt="..."></img>
                    </div>
                </div>
            </div>
            
        </div>
    </Fragment>
  )
}

export default Skills