import React from 'react';
import { motion } from 'framer-motion';
import {Container, Row, Col} from 'react-bootstrap'
import ModulesBlock from '../blocks/ModulesBlock';
import VideoHeroBlock from '../blocks/VideoHeroBlock';
import { HeaderComponent } from '../blocks/HeadingBlock';

const ModulesPage = () => {
    return(
        <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <Container fluid>
        <Row>
            <Col md={12}>
                <VideoHeroBlock/>
            </Col>
        </Row>
            <Row>
                <Col md={12}>
                <ModulesBlock />
                </Col>
            </Row>
        </Container>
        </motion.div>
    )
}

export default ModulesPage;