//importing necessary dependencies
import { createContext, useEffect, useState } from "react";
import axios from "axios";

//initializing an empty context object and exporting it
export const AuthContext = createContext();

//defining a functional component for 'AuthContextProvider'
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    //a function called when user wants to login
    const login = async (inputs) => {
        //send a post request to api endpoint '/auth/login' with inputs(session token or other data)
        const response = await axios.post("/auth/login", inputs);
        //set the current user state object with the response data received after successful login
        setCurrentUser(response.data);
    };

    //a function called when user wants to logout
    const logout = async (inputs) => {
         //send a post request to api endpoint '/auth/logout' with inputs(session token or other data)
        await axios.post("/auth/logout", inputs);
        //set the current user state object to null after successful logout
        setCurrentUser(null);
    };

    //run this side effect when the state of 'currentUser' is changed
    useEffect(() => {
        //store the value of 'currentUser' as a stringified JSON object in browser's localStorage
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    //returns the provider component containing consumer components inside 
    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};
