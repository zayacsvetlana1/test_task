import React from 'react';
import {Card} from "react-bootstrap";
import {useRouter} from "next/router";

const UserItem = ({user}) => {
	const router = useRouter()

	return (
		<Card
			className='m-3'
			style={{ width: '18rem' }}
			onClick={() => {
				router.push({
					pathname: '/users/[uid]',
					query: {uid: user.id},
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
		</Card>
	);
};

export default UserItem;