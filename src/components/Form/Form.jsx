import { useContext, useState } from "react";
import "./form.css";
import { UserContext } from "../../context/UserContext";

const Form = () => {
    const { isLoggedIn, currentUser, handleLogin, handleLogout } = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const isFormValid = name.trim().length > 0 && email.trim().length > 0;

    const onSubmit = (e) => {
        e.preventDefault();
        const username = name;
        const userEmail = email;

        handleLogin({ username, userEmail });
    };

    const handleEmail = (e) => {
        const email = e.target.value.trim();

        if (email) {
            setEmail(email);
        }
    };

    const handleName = (e) => {
        const name = e.target.value.trim();
        
        if (name) {
            setName(name);
        }
    };

    return (
        <>
            <div className="welcome-message">
                <h1>Welcome Back</h1>
                <p>Sign in to access your personal dashboard</p>
            </div>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <label htmlFor="name"><i className="fa-regular fa-user"></i> Username</label>
                    <input type="text" id="name" placeholder="Enter your username" onChange={handleName} value={name} />
                </div>
                <div className="input-group">
                    <label htmlFor="email"><i className="fa-regular fa-envelope"></i> Email</label>
                    <input type="email" id="email" placeholder="Enter your email" onChange={handleEmail} value={email} />
                </div>
                <button disabled={!isFormValid}>Sign In</button>
            </form>
        </>
    )
};

export { Form };