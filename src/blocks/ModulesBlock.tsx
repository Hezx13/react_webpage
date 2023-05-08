import {Col, Row, Container} from 'react-bootstrap'
import i_editor from "../assets/i_editor.gif"
import i_admin from "../assets/i_admin.png"
import i_liveedit from "../assets/i_liveedit.gif"
import { motion } from "framer-motion";

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

//   visible: (i) => {
//     const delay = 1 + i * 0.5;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 }
//       }
//     };
//   }

const ModulesBlock = () => {

    const headingStyles: React.CSSProperties = {
        fontSize: '36px',
        color: '#fff',
    }

    const textStyles: React.CSSProperties = {
        fontSize: '20px',
        color: '#bababa',
    }

    const containerStyles: React.CSSProperties = {
        fontFamily: "'Mukta Malar', sans-serif",
        position: 'relative',
        height: '100%',
        marginTop: '50px',
        textAlign: 'left'
    }

    const rowStyles: React.CSSProperties = {
        margin: '25px 14vw',
    }

    const imgStyles: React.CSSProperties = {
    position: 'relative',
     width: '80%',
     minWidth: '320px',
     filter: 'grayscale(1)',
    }

    return(
        
        <div style={containerStyles} >
            <motion.div
            variants={containerl}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
                <motion.div variants={item}>
            <Row style={rowStyles} className='item'>
            <Col sm={12} md={6}>
                <h3 style={headingStyles}>Data editor</h3>
                <p style={textStyles}>
                    Logging in to multiple systems to edit data about the same customer is painful and inconsistent. WholeTrade gives you a simple spreadsheet interface to edit all your customer data in one place.
                </p>
            </Col>
            <Col sm={12} md={6}>
                
                    <img style={imgStyles} src={i_editor} alt=""/>
                
                </Col>
            </Row>
            </motion.div >
            <motion.div className="item" variants={item}>

        <Row style={rowStyles}>
            <Col md={6}>
                <h3 style={headingStyles}>Live editor</h3>
                <p style={textStyles}>
                    Making live edits in production systems is fast but dangerous. It is also hard to collaborate on due to access issues. The outcome is low quality customer data. WholeTrade gives your team a secure way to edit and sync data across all your systems.</p>
            </Col>
            <Col md={6}>
                    <img style={imgStyles} src={i_liveedit} alt=""/>
            </Col>
        </Row>
        </motion.div >
        <motion.div className="item" variants={item}>

        <Row style={rowStyles}>
        <Col md={6}>
                <h3 style={headingStyles}>Admin panel</h3>
                <p style={textStyles}>
                    Do you really need to (re)build admin panels to just toggle a flag or extend a trial? Edit customer data safely without building anything. Do it on the easiest and most user-friendly admin panel on earth — the spreadsheet.                </p>
            </Col>
            <Col md={6}>
                    <img style={imgStyles} src={i_admin} alt=""/>
                </Col>
        
        </Row>
        </motion.div >
        </motion.div>
        </div>

    )
} 

export default ModulesBlock