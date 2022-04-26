import NavbarTop from "./NavbarTop";

export default function Layout({ children }) {
	return (
		<>
			<NavbarTop/>
			<main>{children}</main>
		</>
	)
}