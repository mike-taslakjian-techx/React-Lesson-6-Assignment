import { useContext } from "react";
import "./header.css";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";

const Header = () => {
    const { isLoggedIn, currentUser, handleLogout } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        handleLogout()
        navigate("/");
    }

    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles w-4 h-4 text-white">
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                        <path d="M20 3v4"></path>
                        <path d="M22 5h-4"></path>
                        <path d="M4 17v2"></path>
                        <path d="M5 18H3"></path>
                    </svg>
                    <p>Personal Dashboard</p>
                </div>
                {
                    isLoggedIn 
                    ? (
                        <div className="log-out">
                            <div className="welcome-user">
                                <p>Welcome back</p>
                                <p>{currentUser.username}</p>
                            </div>
                            <button onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i>Logout</button>
                        </div>
                    )
                    : (<p className="login-text">Please log in to access your dashboard</p>)
                }
            </div>
        </header>
    )
};

export { Header };