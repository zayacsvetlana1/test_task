import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

const Profile = () => {
	const router = useRouter ()

	const {token} = useSelector(state => state.auth)

	if (token == null) {
		router.push ("/login")
	}

	return (
		<div>
			Profile
		</div>
	);
};

export default Profile;