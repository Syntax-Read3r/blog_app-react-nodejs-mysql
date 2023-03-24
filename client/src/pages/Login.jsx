import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const [error, setError] = useState(null); // This is used to extract the error statement from res.data

	const navigate = useNavigate();

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		// Since this is an API request. An async function is required on this instance and axios library
		e.preventDefault();
		try {
			await axios.post("/auth/login", inputs);
			navigate('/')
		} catch (err) {
			setError(err.response.data);
		}
	};



	return (
		<div className="auth">
			<h1>Login</h1>
			<form action="">
				<input required type="text" name="username" id="" placeholder="username" onChange={handleChange}/>
				<input required type="password" name="password" id="" placeholder="password" onChange={handleChange}/>
				<button onClick={handleSubmit}>Login</button>
       {error && <p>{error}</p>}
        <span>Don't you have an account? <Link to="/register">Register</Link></span>
			</form>
		</div>
	);
};

export default Login;
