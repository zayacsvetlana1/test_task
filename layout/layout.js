import NavbarTop from "../components/Navbar/NavbarTop";

export default function Layout({children}) {
	return (
		<>
			<NavbarTop/>
			<main>{children}</main>
		</>
	)
}