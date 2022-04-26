import React, {useEffect} from 'react';
import { useSelector} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

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
		<div>
			{users.map(user=>
				<div key={user.id}>
					{user.first_name}
				</div>
			)}
		</div>
	);
}

export default UserList;