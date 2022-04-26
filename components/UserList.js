import React, {useEffect} from 'react';
import { useSelector} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";
import UserItem from "./UserItem";

const UserList = () => {
	const {users, error, loading} = useSelector(state => state.user)
	const {fetchUsers} = useActions()


	useEffect(() => {
		fetchUsers()
	}, [])

	if (loading) {
		return <h1>Загрузка...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	console.log(users)
	return (
		<div className='d-flex flex-row '>
			{users.map(user=>
				<UserItem
					key={user.id}
					user={user}
				/>
			)}
		</div>
	);
}

export default UserList;