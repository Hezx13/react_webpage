import { useState } from "react"
import { BorderButton } from "../modules/Borderbutton"

const LoginPage = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    const inputStyles : React.CSSProperties = {
        width: '100%',
        padding: '15px 50px 11px 0px',
        background: '#181818',
        color: '#FFFFFF',
        height: '30px',
        outline: 'none',
        border: 'none',
        borderRadius: '7px',
        fontFamily: 'Consolas',
    }

    const formStyles : React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        padding: '100px 50px 100px 50px',
        gap: '10px',
        background: '#161616',
        borderRadius: '15px',
        boxShadow: '12px 12px 14px -14px rgba(117, 117, 117, 1)',
        border: '1px solid #656fe2',

    }

    const buttonContainerStyles : React.CSSProperties = {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10%'
    }

    const containerStyles : React.CSSProperties = {
        position: 'relative',
        height: '90svh',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        gap: '10px', 
        padding: '20px', 
        color: '#ffffff'
    }

    const linkbuttonStyles : React.CSSProperties = {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: '#808080',
        textDecoration: 'underline',
    }

    return (
        <div style={containerStyles}>
        
            <form onSubmit={handleSubmit} style={formStyles}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input style={inputStyles} value={email} 
                        onChange={(e)=>setEmail(e.target.value)}    type="email" id="email" name="email" placeholder="yourEmail@example.com"/>
                <label htmlFor="password">Password</label>
                <input style={inputStyles} value={password} 
                        onChange={(e)=>setPassword(e.target.value)} placeholder="***********"
                         name="password" id="password" type="password" />
                <div style={buttonContainerStyles}>
                    <BorderButton type='submit' text="Log in"/>
                </div>
            </form>
            <button style={linkbuttonStyles} onClick={()=>props.onFormSwitch('register')} >Dont have an account? Register here</button>
        </div>
    )
}

export default LoginPage 