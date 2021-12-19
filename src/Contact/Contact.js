import React from 'react'
import Header from '../Header/Header'
import './Contact.css'
import Footer from '../Footer/Footer'
import flower from '../Assets/flower.svg'
function Contact() {
    return (
        <div>
            <Header />
            <div className="contact-page">
                <div className="contact-page-container">
                    <h1>
                        Let's talk about <br /> the project? <img src={flower} alt="" />
                    </h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
