import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContext } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthContext.Provider>
			<App />
		</AuthContext.Provider>
	</React.StrictMode>
);
