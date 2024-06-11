import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

import { Link, NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";


const Navigation = () => {
	const {isAnotherStyle, toggleTheme} = useTheme()
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand as ={Link} to="/">Find ze code! 🎬</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={NavLink} to="/">Home</Nav.Link>
							<Nav.Link as={NavLink} to="/nowplaying">Now playing</Nav.Link>

							<Nav.Link as={NavLink} to="/genres">Genres</Nav.Link>

							<Button variant="outline-dark" onClick={toggleTheme}>
								{isAnotherStyle ? "💡" : "🍿"}
							</Button>

						</Nav>
					</Navbar.Collapse>
			</Container>
	  </Navbar>
	)
}

export default Navigation
