import React, { useState } from 'react';

import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = data => {
		setUsersList(prevUsersList => {
			return [{ ...data }, ...prevUsersList];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />

			<UsersList users={usersList} />
		</div>
	);
}

export default App;
