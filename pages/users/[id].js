import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchUsers} from "../../store/action-creators/user";
import {useRouter} from "next/router";



const User = () => {

	const {users} = useSelector(state => state.users)
	useEffect(() => {
		fetchUsers()
	}, [])

	User.getInitialProps = ({query}) => {
		return {
			user: users[query.id]
		}
	}


	const router = useRouter()
	console.log(router.query.id)
	const id = router.query.id
	//
	// const {fetchOneUser} = useActions()
	//



	return (
		<Container>

			id {id}
		</Container>
	)
}

export default User