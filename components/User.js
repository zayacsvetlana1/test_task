// import React, {useEffect} from 'react';
// import {useSelector} from "react-redux";
// import {useRouter} from "next/router";
// import {useActions} from "../hooks/useActions";
//
// const User = () => {
// 	const {user} = useSelector(state => state.users)
// 	console.log(user)
//
// 	const router = useRouter()
// 	console.log(router.query.id)
// 	const id = router.query.id
//
// 	const {fetchOneUser} = useActions()
//
// 	useEffect(() => {
// 		fetchOneUser(id)
// 	}, [])
// 	return (
// 		<div>
//
// 		</div>
// 	);
// };
//
// export default User;