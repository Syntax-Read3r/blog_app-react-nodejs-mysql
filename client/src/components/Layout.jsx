// Importing necessary components from react-router-dom library
import React from 'react';
import { Outlet } from 'react-router-dom';

// Importing components for Navbar and Footer
import Navbar from './Navbar';
import Footer from './Footer';

// Defining functional component for the Layout of the application by returning Navbar, Outlet and Footer in JSX format.
function Layout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout

