import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useActions} from "../hooks/useActions";

const UserAddForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const {userCreated} = useActions()

	const onSubmitHandler = (e) => {
		e.preventDefault ();
		const newUser = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			avatar: '',
		}
		userCreated(newUser)

		setFirstName('');
		setLastName('');
		setEmail('');
	}

	return (
		<>
			<Form onSubmit={onSubmitHandler}>
				<Form.Group className="mb-1">
					<Form.Label> Имя </Form.Label>
					<Form.Control
						type="text"
						name="firstName"
						id="firstName"
						placeholder=""
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-1">
					<Form.Label>Фамилия</Form.Label>
					<Form.Control
						type="text"
						name="lastName"
						id="lastName"
						placeholder=""
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-1">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="mail"
						id="mail"
						placeholder="name@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Button type='submit' className='mt-2' variant='outline-success'>Добавить пользователя</Button>
			</Form>

		</>
	);
};

export default UserAddForm;