import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="auth">
			<h1>Login</h1>
			<form action="">
				<input required type="text" name="" id="" placeholder="username" />
				<input required type="password" name="" id="" placeholder="password" />
				<button>Login</button>
        <p>this is an error!</p>
        <span>Don't you have an account? <Link to="/register">Register</Link></span>
			</form>
		</div>
	);
};

export default Login;
