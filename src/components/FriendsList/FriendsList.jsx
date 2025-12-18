import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FriendCard } from "../FriendCard/FriendCard";
import "./friendsList.css";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getFriends = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users");
                if (response.ok) {
                    const data = await response.json();
                    setFriends(data.users);
                }
            }  catch (error) {
                navigate("/error");
            }
        };

        getFriends();

    }, []);

    const goHome = () => {
        navigate("/dashboard");
    };

    return (
        <section className="friends-list">
            <h1>Your Friends</h1>
            <div className="friends-cards">
                {
                    friends.map(({ firstName, lastName, age, gender, image }) => 
                        <FriendCard
                            firstName={firstName}
                            lastName={lastName}
                            age={age}
                            gender={gender}
                            image={image}
                        />)
                }
            </div>
            <button className="home-btn" onClick={goHome}>Home</button>
        </section>
    )
};

export { FriendsList };