import { createContext } from "react";

const UserContext = createContext({
    isLoggedIn: false,
    currentUser: null,
    handleLogin: () => {},
    handleLogout: () => {}
});

export { UserContext };
