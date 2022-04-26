import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const NavbarTop = () => {
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="/">TestApp</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/">На главную</Nav.Link>
					<Nav.Link href="/users">Пользователи</Nav.Link>
					<Nav.Link href="/profile">Профиль</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;