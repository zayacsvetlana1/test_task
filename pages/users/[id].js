import {Card, Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fetchOneUser, fetchUsers} from "../../store/action-creators/user";
import {useRouter} from "next/router";
import {useActions} from "../../hooks/useActions";
import axios from "axios";



const User = ({user: initialUser}) => {

	const [user, setUser] = useState(initialUser)
	const router = useRouter()

	useEffect(() => {
		async function loadUser() {
			const response = await axios.get (`https://reqres.in/api/users/${router.query.id}`)
			const userData = await response.data.data
			setUser(userData)
		}
		if (!initialUser) {
			loadUser()
		}
	},[])

	if (!user) {
		return  <p>Идет загрузка...</p>
	}

	// const router = useRouter()
	// const id = router.query.id
	//
	// const {user} = useSelector(state => state.users)
	// const {fetchOneUser} = useActions()
	//
	// useEffect(() => {
	// 	fetchOneUser(id)
	//
	// }, [])

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

			{/*id {user.id}*/}
		</Container>
	)
}

export default User