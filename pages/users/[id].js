import {Card, Container} from "react-bootstrap";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchOneUser, fetchUsers} from "../../store/action-creators/user";
import {useRouter} from "next/router";
import {useActions} from "../../hooks/useActions";



const User = () => {
	const router = useRouter()
	console.log(router.query.id)
	const {id} = router.query

	const {user} = useSelector(state => state.users)
	const {fetchOneUser} = useActions()

	useEffect(() => {
		fetchOneUser(id)
	}, [])
	console.log(user)

	return (
		<Container>
			<Card
				className='m-3'
				style={{ width: '25rem' }}
			>
				<Card.Header> Пользователь </Card.Header>
				<Card.Body>
					<Card.Img className='mb-4' variant="top" src={user.avatar} />
					<Card.Title>{user.first_name}</Card.Title>
					<Card.Title>{user.last_name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
				</Card.Body>
			</Card>

			id {id}
		</Container>
	)
}

export default User