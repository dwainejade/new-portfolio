import React from 'react'
import './Contact.scss'
import Button from 'react-bootstrap/Button';



function Contact() {
    return (
        <div className="contact-section">
            <div className='form-container'>
                <h2>Contact Me</h2>
                <label htmlFor="subject">Subject
                <input type="text" />
                </label>
                <label htmlFor="email">Email
                <input type="email" />
                </label>
                <label htmlFor="message">Message
                <textarea id="message" name="message" />
                <Button variant="primary" type="submit">
                    SEND
                </Button>
                </label>
            </div>
        </div>

    )
}

export default Contact
