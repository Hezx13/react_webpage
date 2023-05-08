import styles from './CarouselClients.module.css'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { BorderButton } from './Borderbutton'
import { AmazonImage, GoogleImage, FacebookImage } from './CarouselImage'

const containerl = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

function CarouselClients(){
    return(
        
        <div className={styles.ccontainer}>
            <motion.div
                variants={containerl}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
            <input type="radio" name="slider" id={styles['item1']} defaultChecked/>
            <input type="radio" name="slider" id={styles['item2']} />
            <input type="radio" name="slider" id={styles['item3']} />
            <div className={`${styles.cards} d-flex flex-column bd-highlight mb-3`} >
            <motion.div variants={item}>
                <label className={styles.card} htmlFor={styles['item1']} id={styles['song1']}>
                    <FacebookImage></FacebookImage>
                    <BorderButton cardButton='cardButton' text="Explore"></BorderButton>
                </label>
            </motion.div>
                <motion.div variants={item}>
                <label className={styles.card} htmlFor={styles['item2']} id={styles['song2']}>
                    <AmazonImage></AmazonImage>
                    <BorderButton cardButton='cardButton' text="Explore"></BorderButton>
                </label>
                </motion.div>
            <motion.div variants={item}>
                <label className={styles.card} htmlFor={styles['item3']} id={styles['song3']}>
                    <GoogleImage></GoogleImage>
                    <BorderButton cardButton='cardButton' text="Explore"></BorderButton>
                </label>
            </motion.div>
            </div>
            </motion.div>
        </div>

      
    )
}

export default CarouselClients