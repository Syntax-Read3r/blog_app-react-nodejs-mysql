import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>,
	},
	{
		path: "/register",
		element: <Register/>,
	},
	{
		path: "/login",
		element: <Login/>,
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
