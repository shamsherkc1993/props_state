import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
let Header = (props) => {

  let newNavTitle = props.navTitlesToChild;
  
    return (
       <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">{newNavTitle[0]}</Nav.Link>
              <Nav.Link href="/about">{newNavTitle[1]}</Nav.Link>
              <Nav.Link href="/contact">{newNavTitle[2]}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
}

export default Header;