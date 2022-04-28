import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";



export default function User () {
	const router = useRouter()



	return (
		<Container>


			id {router.query.id}
		</Container>
	)
}