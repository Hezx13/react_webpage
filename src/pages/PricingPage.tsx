import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import PricesBlock from '../blocks/PricesBlock';
import { HeaderComponent } from '../blocks/HeadingBlock';

export const PricingPage = () => {
    return(
        <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <Container fluid>
            <Row>
            <Col md={12}>
            <HeaderComponent maintext="Plans" subtext="Choose the solution that suits you"></HeaderComponent>
            </Col>
        </Row>
            <Row>
                <Col md={12}>
                <PricesBlock />
                </Col>
            </Row>
        </Container>
        </motion.div>
    )
}

export default PricingPage