import { Container, Row, Col } from "react-bootstrap"
import { useRef } from "react"
import hero_img from '../assets/screens.png'
import { HeaderComponent } from "./HeadingBlock"
import { motion, useScroll, useTransform } from "framer-motion"
import { useElementOnScreen } from "../modules/useElementOnScreen"

const containerl = {
  hidden: { x: 400, opacity: 0 },
  visible: {
    transition: {duration: 1},
    x: 0,
    opacity: 1
  }
};

function HeroBlock2() {

    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [1,0], [0.7, 1]);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);


    const imgStyles: React.CSSProperties ={
        padding: '10%',
        position: 'relative',
        width: '100%'
        
    }

    const heroStyle: React.CSSProperties = {
        position: 'relative',
        alignItems: 'center',

    }

    const textStyles: React.CSSProperties = {
        fontFamily: "'Mukta Malar', sans-serif",
        fontWeight: '400',
        fontSize: '26px',
        textAlign: 'right',
        marginTop: '-10px',
        padding: '0px 20px 0px 0px',
        borderRight: '#fff 2px solid',
        color: '#6b6b6b',
    }

    const styleVisible : React.CSSProperties = {
        transform: 'translateX(0)',
        filter: 'blur(0)',
        opacity: '1',
        zIndex:'100',
        transition: ' 0.85s ease-in-out'
      }
      
      const styleInvisible : React.CSSProperties = {
        transition: ' 1s ease-in-out' ,
        filter: 'blur(2rem)',
        opacity: '0',
        transform: 'translateX(-100%)'
      }

      const styleDivider: React.CSSProperties = {
        transform: 'rotate(45deg) scale(1.2)',
        overflowX: 'hidden',
        position: 'absolute',
        top: '-40%',
        left: `${windowSize.current[1]*1.2}px`,
        zIndex: '1',
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff',
        transition: '0.7s ease-in-out'
      }
    return(

        
            <Row  style={heroStyle}>
                <Col md={6}>
                  <img style={imgStyles} src={hero_img} alt="" />
                </Col>
                <Col md={6}>
                <motion.div
                  variants={containerl}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <HeaderComponent border="right"  maintext="INNOVATIVE SOFTWARE" subtext="All-in-one business management solution "/>
                    <div>
                        <p style={textStyles}> From inventory and sales to customer relationship management and financials. With WholeTrade, businesses can streamline their processes, save time and money, and gain valuable insights into their operations. </p> 
                    </div>
                </motion.div>
                </Col>
            </Row>

            

    )
}

export default HeroBlock2