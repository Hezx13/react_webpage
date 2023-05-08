import facebook from "../assets/facebook.png"
import google from "../assets/google.png"
import amazon from "../assets/amazon.png"

const imageStyles: React.CSSProperties = {
     margin: 'auto',
     filter: 'grayscale(1)',
     width: '85%',
    height: "48vh",
     borderRadius: '10px',
     objectFit: 'contain'
}

export const AmazonImage = () => {
    return(
        <img style={imageStyles} src={amazon} alt="" />
    )
}
export const GoogleImage = () => {
    return(
        <img style={imageStyles} src={google} alt="" />
    )
}
export const FacebookImage = () => {
    return(
        <img style={imageStyles} src={facebook} alt="" />
    )
}