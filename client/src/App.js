// Importing necessary components from react-router-dom library
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Importing necessary components for different pages of the application
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/Single";
import Write from "./pages/Write";

import Layout from "./components/Layout";

// import './styles/css/reset.css'
import "./styles/style.scss";

// Define routing configuration using createBrowserRouter with relevant paths and associated components.
const router = createBrowserRouter([
	{
		// The reason Layout in conjuction with the Outlet route component, it's because. The routes inside layout will require a Navbar and a Footer component. Unlike the login and register routes which do not have Nav and Footer. Instead of Manually trying Nav and Footer. The Outlet router is utilized and in case a webpage had 10 pages, this approach would had a lot of time and also DRY.
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/post/:id",
				element: <SinglePost />,
			},
			{
				path: "/write",
				element: <Write />,
			},
		],
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

// Defining parent component  which provides routing context to its child components
function App() {
	return (
		<div className="app">
			<div className="container">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

// Exporting App component for use in other files.
export default App;
