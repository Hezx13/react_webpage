import PriceCard from "../modules/PriceCard"
import { CSSProperties } from "react"
import {motion} from 'framer-motion'

const PricesBlock = () => {

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
        hidden: { x: 30, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1
        }
      };

    const pricesBlockStyles: CSSProperties = {
        fontFamily: "'Mukta Malar', sans-serif",
        fontWeight: '500',
        gap: '32px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: '65px'
    }

    return (
        <motion.div style={pricesBlockStyles}
        variants={containerl}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
            <motion.div variants={item}>
                <PriceCard plan="Basic"/>
            </motion.div>
                
            <motion.div variants={item}>
                <PriceCard plan="Hybrid"/>
            </motion.div>
                
            <motion.div variants={item}>
                <PriceCard plan="Premium"/>
            </motion.div>
                

        </motion.div>
    )
}

export default PricesBlock