import React from 'react';
import { motion } from 'framer-motion';
import NavBarComponent from '../modules/navbar';
export const AboutPage = () => {
    return(
        <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <div className='container'>
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                </div>
            </div>
                 
                
        </div>
        </motion.div>
    )
}

export default AboutPage