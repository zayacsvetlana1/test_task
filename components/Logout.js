import React, {useEffect} from 'react';
import {Button} from "react-bootstrap";
import {useActions} from "../hooks/useActions";

const Logout = () => {

	const {Log_Out} = useActions ()

	const handleLogout = (e) => {
		e.preventDefault ();
		console.log ('logout');
		Log_Out();
	}
	return (
		<Button onClick={handleLogout}>
			Выйти
		</Button>
	);
};

export default Logout;