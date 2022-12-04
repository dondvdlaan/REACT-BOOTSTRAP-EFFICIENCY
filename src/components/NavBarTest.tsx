import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarTest = () => {

    return (
<Navbar bg="primary" collapseOnSelect expand="sm">
  <Container>
    <Navbar.Brand href="/">REACT-BOOTSTRAP</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-toggle" />
    <Navbar.Collapse id="navbar-toggle">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/link">Link</Nav.Link>
        <NavDropdown title="Drop-down" id="nav-dropdown">
          <NavDropdown.Item href="/action1">Action 1</NavDropdown.Item>
          <NavDropdown.Item href="/action2">Action 2</NavDropdown.Item>
          <NavDropdown.Item href="/action3">Action 3</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
  };

  export default NavbarTest;  
