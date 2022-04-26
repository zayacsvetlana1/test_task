import React from 'react';
import {Card} from "react-bootstrap";

const UserItem = ({user}) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Header>{user.first_name} {user.last_name}</Card.Header>
			<Card.Img variant="top" src={user.avatar} />
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p>
						{user.email}
					</p>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default UserItem;