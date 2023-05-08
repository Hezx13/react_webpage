import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { NavContainer, BlackLogo, ItemsContainer } from './navbar_styles'
import b_logo from "../assets/b_logo.png"
import { motion } from 'framer-motion'

function handleClick(id: number){

}

function NavBarComponent (){
  let location = useLocation().pathname.substring(1)

  const [activeKey, setActiveKey] = useState( location != '' ? location : '');
  
  const handleSelect = (key) => {
    setActiveKey(key);
  };

  
  const activeStyle = {
    padding: '5px',
    fontWeight: '600',
    borderBottom: "2px solid black",
  }

  const unactiveStyle = {
  }

  const barStyle: React.CSSProperties = {
    borderRadius: '25px',
    margin: 'auto',
    width: '95vw',
    backgroundColor: '#fff',
    boxShadow: '10px 10px 14px -14px rgba(117, 117, 117, 1)'
  }

        return (
            
              <Navbar style={barStyle} collapseOnSelect expand="md" sticky="top">
                <motion.div
                whileHover={{ scale: 1.1}}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                whileTap={{
                  scale: 0.8,
                }}>
                <Navbar.Brand as={Link} to="/" onClick={() => {setActiveKey('')}}>
                    <BlackLogo src={b_logo}/>
                </Navbar.Brand>
                </motion.div>
                <Navbar.Toggle className='me-3' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                <ItemsContainer>
                <Nav className='ms-2' activeKey={activeKey} onSelect={handleSelect} defaultActiveKey="home">
                    <Nav.Item>
                    <Nav.Link style={activeKey === 'login' ? activeStyle : unactiveStyle } as={Link} to="login" eventKey="login"><span >Console</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={activeKey === 'home' ? activeStyle : unactiveStyle } as={Link} to="/webpage" eventKey="home"><span >Home</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={activeKey === 'contact' ? activeStyle : unactiveStyle } as={Link} to="contact" eventKey="contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={activeKey === 'about' ? activeStyle : unactiveStyle } as={Link} to="about" eventKey="about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={activeKey === 'modules' ? activeStyle : unactiveStyle } as={Link} to="modules" eventKey="modules"> Modules </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link style={activeKey === 'pricing' ? activeStyle : unactiveStyle } as={Link} to="pricing" eventKey="pricing"> Pricing </Nav.Link>
                    </Nav.Item>
                </Nav>
                
                </ItemsContainer>
                </Navbar.Collapse>
            </Navbar>
      
          );
    
}

export default NavBarComponent