import React from 'react';
import { motion } from 'framer-motion';
import NavBarComponent from '../modules/navbar';

export const ContactPage = () => {
    return(
        <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <div className='container'>
            <h1 className='text-center' style={{paddingTop: "30%"}}> 
                Contact
            </h1>
        </div>
        </motion.div>
    )
}

export default ContactPage