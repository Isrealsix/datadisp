import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = ev => {
		ev.preventDefault();
		// guard clause
		if (!enteredUsername.trim() || !enteredAge.trim()) {
			setError({
				title: 'Invalid input',
				message: 'You must enter input to continue',
			});

			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: 'Age must be greater than 0',
				message: 'Please enter your real age',
			});
			return;
		}

		const data = {
			username: enteredUsername,
			age: +enteredAge,
			id: Math.random().toString(),
		};

		props.onAddUser(data);
		setEnteredAge('');
		setEnteredUsername('');

		console.log(data);
	};

	const usernameChangeHandler = ev => {
		const value = ev.target.value;
		setEnteredUsername(value);
	};

	const ageChangeHandler = ev => {
		const value = ev.target.value;
		setEnteredAge(value);
	};

	const errorHandler = () => setError(null);

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
