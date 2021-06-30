import React from 'react';
import emailjs from 'emailjs-com';
import './Contact2.scss';
import Button from 'react-bootstrap/Button';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const contactVariants = {
    hidden: {
        opacity: 0,
        y: '30'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .3,
            duration: .75,
            ease: 'easeOut'
        }
    }
}

// const picVariants = {
//     hidden: {
//         opacity: 0,
//         y: '30'
//     },
//     visible: {
//         zIndex: 1,
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: .75,
//             ease: 'easeOut'
//         }
//     }
// }

const Contact2 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

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
            <motion.div className='form-container2'
                variants={contactVariants}
                animate={controls}
                initial="hidden"
                ref={ref}
            >
                <div className='contact-info'>
                    <h2>Contact Me</h2>
                    <p>(212)951-1427</p>
                    <a href="mailto:dwainegnd@gmail.com">dwainegnd@gmail.com</a>
                    <a href="https://github.com/dwainejade">github.com/dwainejade</a>
                </div>

                <form onSubmit={sendEmail} id='email-form'>
                    <h2>Get in Touch</h2>
                    <input type="text" name='name' placeholder='Name' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <input type="text" name='subject' placeholder='Subject' required />
                    <textarea id="message" name='message' placeholder='Message...' required />
                    <Button variant="primary" type="submit">
                        SEND
                    </Button>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact2
