import React from 'react';
import videoBg from "../assets/videoBg.mp4";
import { HeaderComponent } from '../blocks/HeadingBlock';
import { transform } from 'typescript';

const VideoHeroBlock = () => {

    const headingStyle: React.CSSProperties = {
        fontFamily: "'Mukta Malar', sans-serif",
        fontWeight: '700',
        fontSize: '76px',
        textAlign: 'left',
        padding: '10px 0px 0px 20px',
        marginBottom: '-10px',
        borderLeft: '#fff 2px solid',
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

    const containerStyles: React.CSSProperties = {
        padding: '0',
        marginTop: '-3%',
        width: '100%',
        height: '100vh',
        transform:'scaleX(1.02)'
    }

    const videoStyles: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    //     
    }

    const overlayStyles: React.CSSProperties = {
        position: 'absolute',
        marginTop:'-3%',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0,.65)'
    }
    const contentStyle: React.CSSProperties = {
        position: 'absolute',
       verticalAlign: 'middle',
       top: '45%',
       left: '1%'
    }
    

    return(
        <div style={containerStyles}>
            <div style={overlayStyles}></div>
            <div style={contentStyle}>
            <h1   style={headingStyle}>Modules</h1>

            <h2 style={subHeadingStyle}>Additional functionality for you conveniece</h2>
            </div>
            <video style={videoStyles} src={videoBg} autoPlay loop playsInline></video>
            
        </div>
    )

}

export default VideoHeroBlock