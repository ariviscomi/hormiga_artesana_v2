import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {

	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">HORMIGUITA Artesana</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<NavDropdown title="Categorias" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Mates Artesanales</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Kit Desayunador</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Todos los productos
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>


				</Container>
			</Navbar>
			<CartWidget/>
		</div>
	);
};

export default NavBar;