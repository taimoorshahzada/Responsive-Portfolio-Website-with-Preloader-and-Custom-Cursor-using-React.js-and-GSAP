import React from 'react'
import Header from '../Header/Header'
import './Projects.css'
import arrow from '../Assets/arrow.svg'
import GetInTouch from '../GetInTouch/GetInTouch'
import Footer from '../Footer/Footer'
function Projects() {
    return (
        <div>
            <Header />
            <div className="project-page">
                <div className="my-projects">
                    <h1>
                        my <br />
                        projects
                    </h1>
                </div>
                <div className="project-page-container">
                    <div className="project-page-items">
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>01/06</p>
                            </div>
                            <a href="/">
                                <div className="project-page-item-header">
                                    <h1>Lorem, ipsum.</h1>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image1"></div>
                                <div className="project-page-item-footer">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>02/06</p>
                            </div>
                            <a href="/">
                                <div className="project-page-item-header">
                                    <h1>Lorem, ipsum.</h1>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image2"></div>
                                <div className="project-page-item-footer">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>03/06</p>
                            </div>
                            <a href="/">
                                <div className="project-page-item-header">
                                    <h1>Lorem, ipsum.</h1>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image3"></div>
                                <div className="project-page-item-footer">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>04/06</p>
                            </div>
                            <a href="/">
                                <div className="project-page-item-header">
                                    <h1>Lorem, ipsum.</h1>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image4"></div>
                                <div className="project-page-item-footer">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>05/06</p>
                            </div>
                            <a href="/">
                                <div className="project-page-item-header">
                                    <h1>Lorem, ipsum.</h1>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image5"></div>
                                <div className="project-page-item-footer">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>06/06</p>
                            </div>
                            <a href="/">
                                <div className="project-page-item-header">
                                    <h1>Lorem, ipsum.</h1>
                                    <p>Lorem, ipsum.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image6"></div>
                                <div className="project-page-item-footer">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default Projects
