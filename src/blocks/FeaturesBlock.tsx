import React from "react"
import { useState } from "react"
import {Row,Col, Container} from 'react-bootstrap'
import i_cloud from "../assets/g_cloud.png"
import i_cost from "../assets/g_cost.png"
import i_laptop from "../assets/g_laptop.png"
import i_speed from "../assets/g_speed.png"
import { motion, Variants } from "framer-motion"

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


const FeaturesBlock = (props) => {

    const containerStyles: React.CSSProperties = {
        padding: "25px 150px"
    }

    const itemStyles: React.CSSProperties = {
        textAlign: "center",
        backgroundColor: '#181818',
        border: '1px solid #232323',
        borderRadius: '6px',
        paddingBottom: '15px',
        color: '#ffffff',
        margin: '15px auto',
    }

    const imgStyles: React.CSSProperties = {
        width: '70%',
        opacity: '1',
        filter: 'none',
    }

    const textStyles: React.CSSProperties = {
        padding: "10px",
        fontFamily: "'Mukta Malar', sans-serif",
        fontSize: "16px",
        color: "#bababa",
    }

    const headingStyles: React.CSSProperties = {
        fontFamily: "'Mukta Malar', sans-serif",
        fontWeight: "600",
    }

   

    return (
        <motion.div
        variants={containerl}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
    > 
    <Container>
    <Row>
    <Col sm={12} md={6} xl={3}>
    <motion.div variants={item}>
        <div style={itemStyles} >
            <img style={imgStyles} src={i_laptop} alt=""/>
            <h3 style={headingStyles}>Automation</h3>
            <p style={textStyles}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        </motion.div>
    </Col>
    <Col sm={12} md={6} xl={3}>
    <motion.div variants={item}>
        <div style={itemStyles}>
            <img style={imgStyles} src={i_speed} alt=""/>
            <h3 style={headingStyles}>Speed</h3>
            <p style={textStyles}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        </motion.div>
    </Col>
    
    <Col sm={12} md={6} xl={3}>
    <motion.div variants={item}>
        <div style={itemStyles}>
            <img style={imgStyles} src={i_cloud} alt=""/>
            <h3 style={headingStyles}>Cloud solution</h3>
            <p style={textStyles}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        </motion.div>
    </Col>
    
    <Col sm={12} md={6} xl={3}>
    <motion.div variants={item}>
      <div style={itemStyles}>
        <img style={imgStyles} src={i_cost} alt=""/>
        <h3 style={headingStyles}>Cost effectiveness</h3>
        <p style={textStyles}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      </motion.div>
      </Col>
    </Row>
    
        </Container>
        </motion.div>
    )
}

export default FeaturesBlock