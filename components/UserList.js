import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";
import UserItem from "./UserItem";
import UserAddForm from "./UserAddForm";
import UserFilters from "./UserFilters";

const UserList = () => {
	const {users, error, loading} = useSelector(state => state.users)
	const {fetchUsers, userDeleted} = useActions()


	useEffect(() => {
		fetchUsers()
	}, [])

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
		return arr.map(user =>
			<UserItem
				key={user.id} user={user} onDelete={() => userDeleted(user.id)}/>
		)
	}

	const item = renderUserList(users);

	console.log(users)
	return (
		<>
			<UserAddForm/>
			<UserFilters/>
			<div className='d-flex flex-row flex-wrap'>
				{item}
			</div>
		</>

	);
}

export default UserList;