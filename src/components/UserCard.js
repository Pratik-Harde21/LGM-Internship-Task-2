import React from "react";
import "./css/userCard.css";

export default function UserCard(props) {
    let { first_name, last_name, avatar, email } = props;
    return (
        <>
                <div className="card-new">
                    <img src={avatar} alt="Loading" />
                    <h3>{first_name} {last_name}</h3>
                    <p>{email}</p>
                </div>
        </>
    );
}
