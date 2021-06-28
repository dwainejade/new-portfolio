import { useEffect } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
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
                    <img className='grow' src={sfr} alt="laptop with pic of recipe website" />
                    <div className="button-wrapper">
                        <Button a href='' className='btn website-btn' variant='danger'
                        onClick={() => openInNewTab('https://my-secret-family-recipes.herokuapp.com')}
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
        </div>
    )
}

export default MovieHub