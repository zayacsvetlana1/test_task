import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
import UserItem from "./UserItem";
import UserAddForm from "./UserAddForm";
import UserFilter from "./UserFilter";
import {useUsers} from "../hooks/useUsers";

const UserList = () => {
	const {users, error, loading} = useSelector (state => state.users)

	const {fetchUsers, userDeleted} = useActions ()

	useEffect (() => {
		fetchUsers ()
	}, [])

	const [filter, setFilter] = useState ({

		queryFirstName: typeof window !== 'undefined' ? localStorage.getItem ('queryFirstName') : '',
		queryLastName: typeof window !== 'undefined' ? localStorage.getItem ('queryLastName') : '',
		queryEmail: typeof window !== 'undefined' ? localStorage.getItem ('queryEmail') : ''
	});
	const sortedUsers = useUsers (users, filter.queryFirstName, filter.queryLastName, filter.queryEmail);


	if (loading) {
		return <h1>Загрузка...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	const renderUserList = (arr) => {
		if (arr.length === 0) {
			return <h3>Пользователей пока нет</h3>
		}
		return arr.map (user =>
			<UserItem
				key={user.id} user={user} onDelete={() => userDeleted (user.id)}/>
		)
	}

	const item = renderUserList (sortedUsers);

	console.log (users)
	return (
		<>
			<UserAddForm/>
			<hr/>
			<UserFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<hr/>
			<div className='d-flex flex-row flex-wrap'>
				{item}
			</div>
		</>

	);
}

export default UserList;