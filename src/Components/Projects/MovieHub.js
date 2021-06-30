import { useEffect } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import moviehub from '../../images/movie-hub.png';
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

const MovieHub = () => {
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
            <h3>Movie Hub</h3>
            <h4>Full-Stack Developer</h4>
            <div className="project-wrapper">
                <motion.div className="picture-wrapper"
                    variants={leftVariants}
                    animate={controls}
                    initial="hidden"
                    ref={ref}
                >
                    <img className='grow' src={moviehub} alt="laptop with pic of recipe website" onClick={() => setLgShow(true)} />
                    <div className="button-wrapper">
                        <Button a href='' className='btn website-btn' variant='danger'
                            onClick={() => openInNewTab('https://dwaine-movie-hub.netlify.app')}
                        >Visit Website</Button>
                        <Button a href='' className='btn website-btn' variant='primary'
                            onClick={() => openInNewTab('https://github.com/dwainejade/Movie-Hub')}
                        >View Code</Button>
                    </div>
                </motion.div>
                <motion.div className="caption-wrapper"
                    variants={rightVariants}
                    animate={controls}
                    initial="hidden"
                >
                    <p className="caption">A sleek and fully responsive website withthe ability to filterover 600,00 movies  and TV series by genre or  searchfor media by name. <br />
                    </p>
                    <div className="stacks">
                        <Badge pill variant="secondary">React</Badge>
                        <Badge pill variant="secondary">CSS</Badge>
                        <Badge pill variant="secondary">Bootstrap</Badge>
                        <Badge pill variant="secondary">Axios</Badge>
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
                    <img class='img-fluid' src={moviehub} alt='' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setLgShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
            )
}

            export default MovieHub