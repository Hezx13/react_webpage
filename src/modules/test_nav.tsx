import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './test.css'
import {Container, Row, Col} from 'react-bootstrap'


function MyNav() {
  const [activeKey, setActiveKey] = useState('home');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <Container>
      <Row>
        <Col>
    <div className="computer-empty">
    <a target="_blank" href="http://irontemplates.com/demos/redirect.php?theme=The%20Rise" className="">
    <div className="computer-screen">
        <div className="screen-landing">
            <img src="http://fwrd.irontemplates.com/home/img/the_rise.jpg" alt="demo - the rise" />
        </div>
    </div>
    <img className="computer" src="http://fwrd.irontemplates.com/home/img/computer.jpg" alt="computer" />
    </a>
    <h1>The Rise</h1>
</div> 
</Col> 
</Row>
</Container>
  );
}


export default MyNav