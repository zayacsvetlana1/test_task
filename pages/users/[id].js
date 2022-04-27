import {Container} from "react-bootstrap";
import React from "react";
import {useRouter} from "next/router";



export default function User () {
	const router = useRouter()

	return (
		<Container>
			id {router.query.id}
		</Container>
	)
}