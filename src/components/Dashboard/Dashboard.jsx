import { useContext } from "react";
import "./dashboard.css";
import { UserContext } from "../../context/UserContext";
import { getDay, getMonth, getWeekday, getYear } from "../../utils";

const Dashboard = () => {
    const { currentUser } = useContext(UserContext);
    const { username, userEmail } = currentUser;

    return (
        <section>
            <div className="welcome-message">
                <h1>Welcome Back, {username}!</h1>
                <p>Today is {getWeekday()}, {getMonth()} {getDay()}, {getYear()}</p>
            </div>
            <hr />
            <div className="user-cards">
                <div className="user-card">
                    <div className="card-title">
                        <p>Profile</p>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="user-details">
                        <h2>{username}</h2>
                        <p><i className="fa-regular fa-circle-check"></i>Active user</p>
                    </div>
                </div>
                <div className="user-card">
                    <div className="card-title">
                        <p>Email</p>
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="user-details">
                        <h2>{userEmail}</h2>
                        <p><i className="fa-regular fa-circle-check"></i>Verified account</p>
                    </div>
                </div>
                <div className="user-card">
                    <div className="card-title">
                        <p>Last Login</p>
                        <i className="fa-regular fa-calendar"></i>
                    </div>
                    <div className="user-details">
                        <h2>Today</h2>
                        <p><i className="fa-regular fa-circle-check"></i>Session active</p>
                    </div>
                </div>
            </div>
            <div className="activity-board">
                <div>
                    <div className="title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity h-5 w-5 text-white">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                        <p>Recent Activity</p>
                    </div>
                    <p className="description">Your recent dashboard activities</p>
                </div>
                <div className="status green">
                    <div className="info">
                        <div className="dot"></div>
                        <div className="text">
                            <p>Succesfully logged in</p>
                            <p className="time"><i className="fa-regular fa-clock"></i>Just now</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-4 h-4 text-green-600">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                    </div>
                </div>
                <div className="status blue">
                    <div className="info">
                        <div className="dot"></div>
                        <div className="text">
                            <p>Dashboard accessed</p>
                            <p className="time"><i className="fa-regular fa-clock"></i>Just now</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity h-5 w-5 text-white">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Dashboard };