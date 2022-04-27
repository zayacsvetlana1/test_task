import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";
import UserItem from "./UserItem";
import CreateUserForm from "./CreateUserForm";

const UserList = () => {
	const {users, error, loading} = useSelector(state => state.users)
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
		<>
			<CreateUserForm/>
			<div className='d-flex flex-row flex-wrap'>
				{users.map(user=>
					<UserItem
						key={user.id}
						user={user}
						// remove={remove}
					/>
				)}
			</div>
		</>

	);
}

export default UserList;