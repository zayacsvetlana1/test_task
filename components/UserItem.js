import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useRouter} from "next/router";

const UserItem = ({user, onDelete}) => {
	const router = useRouter()

	return (
			<Card
				className='m-3'
				style={{ width: '18rem' }}
			>
				<div
					onClick={() => {
						router.push({
							pathname: '/users/[id]',
							query: {id: user.id},
						})
					}}
				>
					<Card.Header>{user.first_name} {user.last_name}</Card.Header>
					<Card.Img variant="top" src={user.avatar} />
					<Card.Body>
						<blockquote className="blockquote mb-0">
							<p>
								{user.email}
							</p>
						</blockquote>
					</Card.Body>
				</div>


				<Button
					variant="outline-danger"
					onClick={onDelete}
				>
					Удалить
				</Button>
			</Card>


	);
};

export default UserItem;