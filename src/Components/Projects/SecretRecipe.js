import { useEffect, useState } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import sfr from '../../images/sfr.png';

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

const SecretRecipe = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const [lgShow, setLgShow] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="project-a">
            <h3>Secret Family Recipe</h3>
            <h4>Front-End Developer</h4>
            <div className="project-wrapper">
                <motion.div className="picture-wrapper"
                    variants={leftVariants}
                    animate={controls}
                    initial="hidden"
                    ref={ref}
                >
                    <img className='grow' src={sfr} alt="laptop with pic of recipe website"
                        onClick={() => setLgShow(true)} />

                    <div className="button-wrapper">
                        <Button a href='' className='btn website-btn' variant='danger'
                            onClick={() => openInNewTab('https://my-secret-family-recipes.herokuapp.com')}
                        > Visit Website</Button>
                        <Button a href='' className='btn website-btn' variant='primary'
                            onClick={() => openInNewTab('https://github.com/dwainejade/secret-family-recipes-frontend')}
                        >View Code</Button>
                    </div>
                </motion.div>
                <motion.div className="caption-wrapper"
                    variants={rightVariants}
                    animate={controls}
                    initial="hidden"
                >
                    <p className="caption">This app allows users to store recipes with ingredients, directions and pictures. Users can add, edit and delete recipes. <br />
                        I designed the UX of the app to be simple, clean and fully responsive; it looks great on mobile. The navbar and recipe cards were created using bootstrap components.
                    </p>
                    <div className="stacks">
                        <Badge pill variant="secondary">React</Badge>
                        <Badge pill variant="secondary">JavaScript</Badge>
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
                    <img class='img-fluid' src={sfr} alt='' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>setLgShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default SecretRecipe