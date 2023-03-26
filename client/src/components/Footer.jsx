import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
	const BLOG_NAME = "Lama Blog";

	return (
		<footer>
			<img src={Logo} alt="logo in footer" />

			<span>
				Copyright &copy; {new Date().getFullYear()} <b>{BLOG_NAME}</b>.
			</span>
		</footer>
	);
};

export default Footer;
