import { useEffect, useState } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import plants from '../../images/plants.png';

const leftVariants = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .4,
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const rightVariants = {
    hidden: {
        opacity: 0,
        x: 30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .1,
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const Plants = () => {
    const [lgShow, setLgShow] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="project-b">
            <h3>Water My Plants API</h3>
            <h4>Backend Developer</h4>
            <div className="project-wrapper">
                <motion.div className="picture-wrapper"
                    variants={leftVariants}
                    animate={controls}
                    initial="hidden"
                    ref={ref}
                >
                    <img src={plants} alt="phone with pic of recipe website" onClick={() => setLgShow(true)} />
                    <div className='button-wrapper'>
                        <Button a href='' className='btn website-btn' variant='danger'
                            onClick={() => openInNewTab('https://watermy-plants.netlify.app')}
                        >Visit Website</Button>
                        <Button id="code-btn" a href='' className='btn website-btn' variant='primary'
                            onClick={() => openInNewTab('https://github.com/dwainejade/water-my-plants-backend')}
                        >View Code</Button>
                    </div>
                </motion.div>
                <motion.div className="caption-wrapper"
                    variants={rightVariants}
                    animate={controls}
                    initial="hidden"
                >
                    <p className="caption">This app is for all the plant parents to keep track of when each of their children need to be watered. Users can store, update, and remove plants from the databas. <br /> I created the backend using Node.js and SQL to store user and plant data. The users password is hashed using bcrypt.js befored being stored.</p>
                    <div className="stacks">
                        <Badge pill variant="secondary">Node</Badge>
                        <Badge pill variant="secondary">Express</Badge>
                        <Badge pill variant="secondary">SQLite</Badge>
                        <Badge pill variant="secondary">JavaScript</Badge>
                        <Badge pill variant="secondary">Heroku</Badge>
                    </div>
                </motion.div>
            </div>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Body>
                    <img class='img-fluid' src={plants} alt='' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>setLgShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Plants;
