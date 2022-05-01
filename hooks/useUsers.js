import {useMemo} from "react";


export const useUsers = (users, queryFirstName, queryLastName, queryEmail) => {
	const sortedUsers = useMemo (() => {
		return users.filter (user => user.first_name.toLowerCase ().includes (queryFirstName.toLowerCase ()) &&
			user.last_name.toLowerCase ().includes (queryLastName.toLowerCase ()) &&
			user.email.toLowerCase ().includes (queryEmail.toLowerCase ())
		)
	}, [users, queryFirstName, queryLastName, queryEmail])

	return sortedUsers;
}
