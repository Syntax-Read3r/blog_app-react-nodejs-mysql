import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState(null); // This is used to extract the error statement from res.data

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		// Since this is an API request. An async function is required on this instance and axios library
		e.preventDefault();
		try {
			const res = await axios.post("/auth/register", inputs);
			console.log(res);
		} catch (err) {
			setError(err.response.data);
		}
	};

	return (
		<div className="auth">
			<h1>Register</h1>
			<form action="">
				<input
					required
					type="text"
					name="username"
					id=""
					placeholder="username"
					onChange={handleChange}
				/>
				<input
					required
					type="email"
					name="email"
					id=""
					placeholder="email"
					onChange={handleChange}
				/>
				<input
					required
					type="password"
					name="password"
					id=""
					placeholder="password"
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Register</button>

				{error && <p>{error}</p>}

				<span>
					Do you have an account? <Link to="/login">Login</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
