import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Libreria Merlin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos </Nav.Link>
            <Nav.Link href="#pricing">Carrito</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default NavBar;


