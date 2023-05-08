// package imports
import React, {useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { motion, useScroll, useTransform } from 'framer-motion';
// blocks imports
import CarouselClients from '../modules/CarouselClients';
import FeaturesBlock  from '../blocks/FeaturesBlock';
import HeroBlock from '../blocks/HeroBlock';
import HeroBlock2 from '../blocks/HeroBlock2';
import { HeaderComponent } from '../blocks/HeadingBlock';
import { useElementOnScreen } from '../modules/useElementOnScreen';
import { features } from 'process';
import NavBarComponent from '../modules/navbar';

const containerl = {
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
};

const HomePage = () => {

    const featuresRef = useRef(null)

    const [block1containerRef, block1isVisible] = useElementOnScreen({
      root: null,
      rootMargin: "0px",
      threshold: 0.01
    })
 
    return(
      
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}
      >
        <Container fluid style={{overflowX:'hidden'}}>
        <Row>
          <Col>
            <HeroBlock/>
          </Col>
        </Row>
        <Row>
          <Col>
            <HeroBlock2/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <motion.div
            transition={{duration: 1, ease: 'easeInOut'}}
              variants={containerl}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
            <HeaderComponent maintext="Our Clients" subtext="Driving technology to the future"/>  
            </motion.div>
          </Col>
        </Row>
        <Row >
          <Col md={12} className='d-flex justify-content-center' style={{overflow:'hidden'}}>
            <CarouselClients/>
          </Col>
        </Row>
        <Row>
            <Col md={12} ref={featuresRef}>
            <motion.div
            transition={{duration: 1, ease: 'easeInOut'}}
              variants={containerl}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
            <HeaderComponent maintext="Features" subtext="Experience incompatibale performance"></HeaderComponent>
            </motion.div>
            </Col>
        </Row>
        <Row>
          <Col md={12} >
            <FeaturesBlock vref={featuresRef}></FeaturesBlock>
          </Col>
        </Row>

  
      </Container>
      </motion.div>
    )
}

export default HomePage