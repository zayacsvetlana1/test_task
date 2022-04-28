import React from 'react';
import {Button, Card} from "react-bootstrap";

const UserFilters = () => {
	return (
		<Card className='mt-3'>
			<Card.Body>
				<Card.Title>Отфильтровать</Card.Title>
				<Button className='mx-1' variant="primary" active>Все</Button>
				<Button className='mx-1' variant="outline-primary">По имени</Button>
				<Button className='mx-1' variant="outline-primary">По фамилии</Button>
				<Button className='mx-1' variant="outline-primary">По e-mail</Button>
			</Card.Body>
		</Card>
	);
};

export default UserFilters;