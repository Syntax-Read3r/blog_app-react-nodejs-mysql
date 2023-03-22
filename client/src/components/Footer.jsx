import React from "react";
import Logo from "../images/logo.png";

const Footer = () => (
	<footer>
		<img src={Logo} alt="logo" />
		<span>
			Copyright &copy; {new Date().getFullYear()}
			<b> Lama Blog</b>.
		</span>
	</footer>
);

export default Footer;