import React, { useState } from "react";
import UserCard from "./UserCard";
import './css/navbar.css'
import Spinner from "./Spinner";


export default function Navbar() {
    const [user, setUser] = useState([]);
    const [isLoader, setIsLoader] = useState(false);

    const loadData = async() => {
        setIsLoader(true);
        setTimeout( async() => {
        const url = "https://reqres.in/api/users?page=1"
        const responce = await fetch(url)
        const info = await responce.json()
        setIsLoader(false);
        setUser(info.data);
        }, 3000);
    }

    return (
        <>
            <nav>
                <h2><b>LGM USERS</b></h2>
                <button className="btn" onClick={loadData}>Get User
                    {/* {isLoader? <Spinner/> :("Get User")
                    } */}
                    </button>
            </nav>
                {isLoader ? (<Spinner/>): (null)}
            <div>
                {user.map((element) => {
                    return <>
                        <UserCard avatar={element.avatar} first_name={element.first_name} last_name={element.last_name} email={element.email} />
                    </>
                })}
            </div>
            <footer>
                <p id="p1">Created by <span id="credit"> Pratik Harde</span></p>
                <p className="social">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pratik-harde/">LinkedIn</a>|
                    <a target="_blank" rel="noreferrer" href="https://github.com/Pratik-Harde21">GitHub</a>|
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pratik_harde_21/">Instagram</a>|
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Pratik2150">Twitter</a>|
                    <a target="_blank" rel="noreferrer" href="mailto:edu.pratik21@gmail.com">Email</a>
                </p>
            </footer>
        </>
    )
}
