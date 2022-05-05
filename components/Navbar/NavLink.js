import React from "react";
import Link from 'next/link'


const NavLink = ({href, name}) => {
	return (
		<>
			<Link href={href} passHref>
				<a>{name}</a>
			</Link>
			<style jsx>{`
              a {
                color: darkgrey;
                text-decoration: none;
                padding: 0.5rem 1rem;
              }

              a:hover, a:focus {
                color: lightgray;
                text-decoration: none;
              }
			`}</style>
		</>
	);
};

export default NavLink;