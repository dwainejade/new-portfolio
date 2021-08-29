import { useEffect } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import storysquad from '../../images/storysquad.jpg';
import { useState } from "react";

const leftVariants = {
    hidden: {
        opacity: 0,
        x: -30
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

const rightVariants = {
    hidden: {
        opacity: 0,
        x: 30
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

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const StorySquad = () => {
    const [lgShow, setLgShow] = useState(false)
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="project-a">
            <h3>Story Squad</h3>
            <h4>Frontend Developer</h4>
            <div className="project-wrapper">
                <motion.div className="picture-wrapper"
                    variants={leftVariants}
                    animate={controls}
                    initial="hidden"
                    ref={ref}
                >
                    <img className='grow' src={storysquad} alt="laptop with pic of website" onClick={() => setLgShow(true)} />
                    <div className="button-wrapper">
                        <Button a href='' className='btn website-btn' variant='danger'
                            onClick={() => openInNewTab('https://www.storysquad.education')}
                        >Visit Website</Button>
                        <Button a href='' className='btn website-btn' variant='primary'
                            onClick={() => openInNewTab('https://github.com/Lambda-School-Labs/scribble-stadium-fe')}
                        >View Code</Button>
                    </div>
                </motion.div>
                <motion.div className="caption-wrapper"
                    variants={rightVariants}
                    animate={controls}
                    initial="hidden"
                >
                    <p className="caption">An educational app for young kids to improve their reading, writing, and drawing. Each week kids are tasked to submitting drawings and writings in a competive game among other kids in an online community.<br /> I created the Gallery page that allows each user to view their past writing and drawing submissions.
                    </p>
                    <div className="stacks">
                        <Badge pill variant="secondary">Agile Methodology</Badge>
                        <Badge pill variant="secondary">React</Badge>
                        <Badge pill variant="secondary">AntDesign</Badge>
                        <Badge pill variant="secondary">Carousel</Badge>
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
                    <img class='img-fluid' src={storysquad} alt='' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setLgShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default StorySquad