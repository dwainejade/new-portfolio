import React from 'react'
import emailjs from 'emailjs-com';
import './Contact.scss'
import Button from 'react-bootstrap/Button';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('portfolio-website', 'portfolio-template', e.target, 'user_9T9RN8PhFxqhNhmRLQQDO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className="contact-section">
            <form onSubmit={sendEmail} className='form-container'>
                <h2>Contact Me</h2>
                <label htmlFor="name">Name
                    <input type="text" name='name'/>
                </label>
                <label htmlFor="email">Email
                    <input type="email" name='email'/>
                </label>
                <label htmlFor="subject">Subject
                    <input type="text" name='subject'/>
                </label>
                <label htmlFor="message">Message
                    <textarea id="message" name='message'/>
                    <Button variant="primary" type="submit">
                        SEND
                    </Button>
                </label>
            </form>
        </div>

    )
}

export default Contact
