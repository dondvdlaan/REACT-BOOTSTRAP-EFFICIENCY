import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavbarTest from './components/NavBarTest';
import Footer from './components/Footer';
import Item from './components/Item';

function App() {

  let numberOfItems = 5;
  return (
<>
<div className="d-flex flex-column min-vh-100">
  <NavbarTest />
    <Container className="mt-5">
      <Row>
        {Array.from(Array(numberOfItems).keys()).map(number => (
          <Col key={number}>
            <Item />
          </Col>
        ))}
      </Row>
    </Container>
  <Footer />
</div>
</>

  );
}

export default App;
