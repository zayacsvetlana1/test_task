import NavbarTop from "../components/NavbarTop";

export default function Layout({children}) {
	return (
		<>
			<NavbarTop/>
			<main>{children}</main>
		</>
	)
}