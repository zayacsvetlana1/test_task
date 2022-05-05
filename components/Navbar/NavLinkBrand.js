import React from 'react';
import Link from 'next/link'


const NavLinkBrand = ({href, name}) => {
	return (
		<>
			<Link href={href} passHref>
				<a>{name}</a>
			</Link>
			<style jsx>{`
              a {
                color: white;
                text-decoration: none;
                display: inline-block;
                padding-top: 0.3125rem;
                padding-bottom: 0.3125rem;
                margin-right: 1rem;
                font-size: 1.25rem;
                line-height: inherit;
                white-space: nowrap;
              }

              a:hover, a:focus {
                color: white;
                text-decoration: none;
              }
			`}</style>
		</>
	);
};

export default NavLinkBrand;