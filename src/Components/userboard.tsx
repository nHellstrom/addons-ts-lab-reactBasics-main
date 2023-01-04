import React from "react";
import { useState } from "react";
import './userboard.css';
import { IUser, IName } from '../usertypes.js';

const Userboard = () => {
    const [user , setUser]  = useState< null | IUser >(null);

    const userVisibility = "hidden";

    const fetchNewUser = async () => {
        console.log("Fetch started");
        const response = await fetch ("https://randomuser.me/api/");
        const data = await response.json();
        console.log("Response: " );
        console.log(data);
        console.log(data.results[0]);

        setUser(data.results[0]);
    }


    return <>
    <div className="Userboard">
        <div className="Userboard__TopPanel">
            <h2>User Fetcher</h2>
            <button className="Userboard__button" onClick={fetchNewUser}>Click me!</button>
            <p>Click the button to fetch a random user!</p>
        </div>
        <hr/>
        <div className="Userboard__BottomPanel">
            <table className={`Userboard__user--${user === null ? "hidden" : "visible"}`}>
                <tr>
                    <th>Photo</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Address</th>
                </tr>
                <tr className='Userboard__userrow'>
                    <th><img className='Userboard__userthumbnail' src={user?.picture.large}></img></th>
                    <th>{user?.login.username}</th>
                    <th>{user?.name.title} {user?.name.first} {user?.name.last}</th>
                    <th>{user?.dob.age}</th>
                    <th>{user?.gender}</th>
                    <th>{user?.location.street.name} {user?.location.street.number} <br/> {user?.location.city} {user?.location.country}</th>
                </tr>
            </table>
        </div>
    </div>
    </>
}

export { Userboard }