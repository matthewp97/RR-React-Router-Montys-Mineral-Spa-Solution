import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

<Container>
    <Nav defaultActiveKey="/" variant="tabs" fill>
        <Nav.Item>
            <Nav.Link href="/"> 
                <Link to="/">Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"aboutPage"}> 
                <Link to="/about">About Us</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"packagesPage"}> 
                <Link to="/packages">Our Packages</Link> 
            </Nav.Link>
         </Nav.Item>
    </Nav>
</Container>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


