import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";
import 'boxicons';
import Logo from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';

function Barra() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="./"><img src={Logo} className='logo' alt='Logo KingFilm' /> <div className='pais'>ARGENTINA </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="./">Home</Nav.Link>
            <Nav.Link as={Link} to="./servicios">Catálogo</Nav.Link>
            <NavDropdown title="Buscador" id="basic-nav-dropdown" menuVariant='dark'>
              <NavDropdown.Item as={Link} to="./idiomas">Peliculas por idiomas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="./niveles">Peliculas por género</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="./calendario">Peliculas por director</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="./contacto">Contacto</Nav.Link>
          </Nav>
          <Nav className="reserv">
            <Nav.Link as={Link} to="./reserva"><Button variant="danger">¡Reservá horas!</Button></Nav.Link>
            <box-icon className="carro" size="md" color="white" animation='tada' name='cart'></box-icon>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;