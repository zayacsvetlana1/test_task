import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";



export default function User () {

	const {user} = useSelector(state => state.users)
	console.log(user)

	const router = useRouter()
	console.log(router.query.id)
	const id = router.query.id

	const {fetchOneUser} = useActions()

	useEffect(() => {
		fetchOneUser(id)
	}, [])


	return (
		<Container>
			{/*{user}*/}
			id {id}
		</Container>
	)
}