import "./friendCard.css";

const FriendCard = (props) => {
    const { firstName, lastName, age, gender, image } = props;

    return (
        <div className="friend-card">
            <img src={image} alt={`${firstName}'s profile picture`} />
            <p className="bold">{firstName} {lastName}</p>
            <p>{gender}</p>
            <p>{age}</p>
        </div>
    );
};

export { FriendCard };