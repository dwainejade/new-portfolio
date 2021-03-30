import React from 'react'
import emailjs from 'emailjs-com';
import './Contact.scss'
import Button from 'react-bootstrap/Button';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        function resetForm() {
            document.getElementById("email-form").reset();
        }

        emailjs.sendForm('portfolio-website', 'portfolio-template', e.target, 'user_9T9RN8PhFxqhNhmRLQQDO')
            .then((result) => {
                console.log(result.text);
                resetForm()
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className="contact-section">
            <div>
                <h3 id="contact-caption">Although I enjoy the fast paced world of technology, I am a simple guy. If you're looking for an engineer with endless potential and great dad jokes, send me an email.</h3>
            </div>
            <div className='form-container'>
                <h2>Contact Me</h2>
                <form onSubmit={sendEmail} id='email-form'>
                    <label htmlFor="name">Name*
                    <input type="text" name='name' required />
                    </label>
                    <label htmlFor="email">Email*
                    <input type="email" name='email' required />
                    </label>
                    <label htmlFor="subject">Subject*
                    <input type="text" name='subject' required />
                    </label>
                    <label htmlFor="message">Message*
                    <textarea id="message" name='message' required />
                        <Button variant="primary" type="submit">
                            SEND
                        </Button>
                    </label>
                </form>
            </div>
        </div>

    )
}

export default Contact
