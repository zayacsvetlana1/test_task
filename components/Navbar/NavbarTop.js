import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useSelector} from "react-redux";
import Logout from "../Logout";
import NavLink from "./NavLink";
import NavLinkBrand from "./NavLinkBrand";

const NavbarTop = () => {

	const {token} = useSelector (state => state.auth)


	return (
		<Navbar bg="light" variant="light">
			<Container>
				<NavLinkBrand href={"/"} name={'TestApp'}/>
				<Nav className="flex align-items-center me-auto">
					<NavLink href={"/"} name={'На главную'}/>
					<NavLink href={"/users"} name={'Пользователи'}/>
					<NavLink href={"/profile"} name={'Профиль'}/>

					{token ? <Logout/> : <NavLink href={"/login"} name={'Войти'}/>}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;