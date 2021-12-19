import React from 'react'
import Footer from '../Footer/Footer'
import GetInTouch from '../GetInTouch/GetInTouch'
import Header from '../Header/Header'
import './About.css'
import flower from '../Assets/flower.svg'
function About() {
    return (
        <>
        <div>
            <div className="about">
                <Header />
                <div className="about-container">
                    <div className="container-text">
                        <div className="container-inner-text1">
                            <p>
                                Taimoor
                            </p>
                        </div>
                        <div className="container-inner-text2">
                            <p>
                                Shahzada
                            </p>
                        </div>
                    </div>
                    <div className="container-quote container-quote1">
                        I create sites and <br /> applications that cause <br /> pleasant emotions
                    </div>
                    <div className="container-quote container-quote2">
                        I specialize in interaction <br /> design, experience websites <br /> and applications
                    </div>
                    <div className="container-image"></div>
                </div>
                <div className="about-container2">
                    <div className="about-container2-heading">
                        <div className="about-text-lower">
                            <p>Web Designer,</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front-End</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;Developer&nbsp;&nbsp;&nbsp; &</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; a Youtuber</p>
                        </div>
                    </div>
                    <div className="about-container2-p">
                        <p>Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sed, cum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae architecto minima odio, incidunt qui?</p>
                        <p className="about-container2-p-right">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt, <br /> ipsam laborum rerum fugiat dolore natus unde odio placeat quia.
                        </p>
                        <p>Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, cupiditate!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dolorum. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nemo!</p>
                    </div>
                    <div className="about-container2-heading2">
                        <div className="about-text-lower">
                            <p>What is my feature?</p>
                        </div>
                    </div>
                    <div className="about-container2-p">
                        <p className="about-container2-p-right">
                            Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet.
                        </p>
                        <p>Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="about-container-flower">
                        <img src={flower} alt="" />
                    </div>
                </div>
                <div className="about-footer">
                    <GetInTouch />
                    <Footer />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About
