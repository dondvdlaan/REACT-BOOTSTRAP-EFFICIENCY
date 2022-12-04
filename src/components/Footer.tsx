import { Col, Container, Row } from "react-bootstrap"


const Footer = ()=>{

return(

<div className="bg-secondary mt-auto">
  <Container className="p-3">
    <p className="text-center text-white">Thank you for visiting this website</p>
    <p className="text-center mt-1  text-white">Follow us on social media:</p>
        <Row className="d-flex justify-content-around  ">
            <Col className="text-center">
                    <a href="/">Instagram</a>
            </Col >
            <Col className="text-center">
                    <a href="/">Facebook</a>
            </Col>
            <Col className="text-center">
                    <a href="/">Twitter</a>
            </Col>
        </Row>
  </Container>
</div>
) 
}

export default Footer;

