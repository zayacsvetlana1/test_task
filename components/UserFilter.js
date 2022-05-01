import React from 'react';
import {Button, Form} from "react-bootstrap";

const UserFilter = ({filter, setFilter}) => {

	if (filter !== '' && typeof window !== 'undefined') {
		localStorage.setItem ('queryFirstName', filter.queryFirstName)
		localStorage.setItem ('queryLastName', filter.queryLastName)
		localStorage.setItem ('queryEmail', filter.queryEmail)
	}

	const onClear = () => {
		setFilter ({queryFirstName: '', queryLastName: '', queryEmail: ''})
		localStorage.removeItem ("queryFirstName")
		localStorage.removeItem ("queryLastName")
		localStorage.removeItem ("queryEmail")
	}

	return (
		<Form className='mt-3'>
			<Form.Group>
				<h4 className="mx-3">Отфильтровать</h4>

				<div className='d-flex'>
					<Form.Group className="m-3">
						<Form.Label> По имени </Form.Label>
						<Form.Control
							type="text"
							name="firstName"
							placeholder='Поиск...'
							value={filter.queryFirstName}
							onChange={e => setFilter ({...filter, queryFirstName: e.target.value})}
						/>
					</Form.Group>

					<Form.Group className="m-3">
						<Form.Label> По фамилии </Form.Label>
						<Form.Control
							type="text"
							name="lastName"
							placeholder='Поиск...'
							value={filter.queryLastName}
							onChange={e => setFilter ({...filter, queryLastName: e.target.value})}
						/>
					</Form.Group>

					<Form.Group className="m-3">
						<Form.Label> По e-mail </Form.Label>
						<Form.Control
							type="text"
							name="mail"
							placeholder='Поиск...'
							value={filter.queryEmail}
							onChange={e => setFilter ({...filter, queryEmail: e.target.value})}
						/>
					</Form.Group>
				</div>

				<Button
					onClick={onClear}
					className='mx-3'
					variant='outline-danger'
				>
					Очистить
				</Button>

			</Form.Group>
		</Form>
	);
};

export default UserFilter;