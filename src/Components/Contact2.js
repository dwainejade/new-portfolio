import React from 'react'
import emailjs from 'emailjs-com'
import './Contact2.scss'
import Button from 'react-bootstrap/Button'

const Contact2 = () => {
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
        <div className="contact-section2">
            <div className='form-container2'>
                <div className='contact-info'>
                    <h2>Contact Me</h2>
                    <p>(212)951-1427</p>
                    <p>dwainegnd@gmail.com</p>
                    <p>github.com/dwainejade</p>
                </div>

                <form onSubmit={sendEmail} id='email-form'>
                    <h2>Get in Touch</h2>
                    <input type="text" name='name' placeholder='Your name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <input type="text" name='subject' placeholder='Subject' required />
                    <textarea id="message" name='message' placeholder='Type your message here...' required />
                    <Button variant="primary" type="submit">
                        SEND
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Contact2
