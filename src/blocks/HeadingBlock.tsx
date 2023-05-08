import React, { useState,useRef } from 'react'
import {Row, Col} from 'react-bootstrap'
import { useElementOnScreen } from '../modules/useElementOnScreen'

const headingStyle: React.CSSProperties = {
    fontFamily: "'Mukta Malar', sans-serif",
    fontWeight: '700',
    fontSize: '76px',
    textAlign: 'left',
    padding: '10px 0px 0px 20px',
    marginBottom: '-10px',
    borderLeft: `#fff 2px solid`,
    color:'#fff',
}

const headingStyleRight: React.CSSProperties = {
    fontFamily: "'Mukta Malar', sans-serif",
    fontWeight: '700',
    fontSize: '76px',
    textAlign: 'right',
    padding: '10px 20px 0px 0px',
    marginBottom: '-10px',
    borderRight: `#fff 2px solid`,
    color:'#fff',
}

const subHeadingStyle: React.CSSProperties = {
    fontFamily: "'Mukta Malar', sans-serif",
    fontWeight: '200',
    fontSize: '56px',
    textAlign: 'left',
    padding: '0px 0px 0px 20px',
    borderLeft: '#fff 2px solid',
    color:'#6b6b6b',
}

const subHeadingStyleRight: React.CSSProperties = {
    fontFamily: "'Mukta Malar', sans-serif",
    fontWeight: '200',
    fontSize: '56px',
    textAlign: 'right',
    padding: '0px 20px 0px 0px',
    borderRight: '#fff 2px solid',
    color:'#6b6b6b',
}


export const HeadingComponent = (props) => {
   
    return(
        <div >
        <h1   style={ props.border === 'right' ? headingStyleRight : headingStyle}>{props.text}</h1>
        </div>
    )
}

export const SubHeadingComponent = (props) => {
    return (
        <h2 style={ props.border === 'right' ? subHeadingStyleRight : subHeadingStyle}>{props.text}</h2>
    )
}

export const HeaderComponent = (props) => {

    return(
                <div>
                <HeadingComponent border={props.border} text = {props.maintext}/>
                <SubHeadingComponent border={props.border} text = {props.subtext}/>
                </div>
    )

}
 