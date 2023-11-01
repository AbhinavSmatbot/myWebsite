import React from 'react';
import './Skill.css'

const Skill = () => {
     return (
          <>
               <div className='pull-left full-width' style={{marginTop:"70px"}}>
                    <div className='skill-header-main'>
                         <h1 className='skill-header'>What I Know</h1>

                         <div className='content-div'>
                              <div className='main-box-div'>
                                   <p className='mb-2 mt-2 text-black'>FrontEnd</p>
                                   <div className='cont-div-skill'>
                                        <button type="button" className="btn btn-outline-primary m-1">HTML</button>
                                        <button type="button" className="btn btn-outline-secondary m-1">CSS</button>
                                        <button type="button" className="btn btn-outline-primary m-1">SASS</button>
                                        <button type="button" className="btn btn-outline-warning m-1">BOOTSTRAP</button>
                                        <button type="button" className="btn btn-outline-info m-1">TAILWINDCSS</button>
                                        <button type="button" className="btn btn-outline-success m-1">JAVA SCRIPT</button>
                                        <button type="button" className="btn btn-outline-danger m-1">JQUERY</button>
                                        
                                        
                                        <button type="button" className="btn btn-outline-info m-1">REACT</button>
                                        <button type="button" className="btn btn-outline-danger m-1">ANGULAR</button>
                                   </div>

                              </div>
                              <div className='main-box-div'>
                                   <p className='mb-2 mt-2 text-black'>BackEnd</p>
                                   <div className='cont-div-skill'>
                                        <button type="button" className="btn btn-outline-primary m-1">NODE JS</button>
                                        <button type="button" className="btn btn-outline-secondary m-1">EXPRESS JS</button>
                                        <button type="button" className="btn btn-outline-primary m-1">CORE PHP</button>
                                        <button type="button" className="btn btn-outline-success m-1">PYTHON</button>

                                   </div>
                              </div>
                              <div className='main-box-div'>
                                   <p className='mb-2 mt-2 text-black'>DataBase</p>
                                   <div className='cont-div-skill'>
                                        <button type="button" className="btn btn-outline-primary m-1">MYSQL</button>
                                        <button type="button" className="btn btn-outline-secondary m-1">MANGO DB</button>
                                   </div>
                              </div>
                              <div className='main-box-div'>
                                   <p className='mb-2 mt-2 text-black'>Tools</p>
                                   <div className='cont-div-skill'>
                                        <button type="button" className="btn btn-outline-primary m-1">GIT</button>
                                        <button type="button" className="btn btn-outline-danger m-1">JENKINS</button>
                                        <button type="button" className="btn btn-outline-secondary m-1">TRELLO</button>
                                        <button type="button" className="btn btn-outline-warning m-1">CLICKUP</button>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </>
     )
}

export default Skill