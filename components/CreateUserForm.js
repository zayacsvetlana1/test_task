import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const CreateUserForm = () => {
	const [user, setUser] = useState('')
	return (
		<>
			<Form>
				<Form.Group className="mb-1">
					<Form.Label> Имя </Form.Label>
					<Form.Control type="text" placeholder="" />
				</Form.Group>
				<Form.Group className="mb-1">
					<Form.Label>Фамилия</Form.Label>
					<Form.Control type="text" placeholder="" />
				</Form.Group>
				<Form.Group className="mb-1">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="name@example.com" />
				</Form.Group>
			</Form>
			<Button variant='outline-success'>Добавить</Button>
		</>
	);
};

export default CreateUserForm;