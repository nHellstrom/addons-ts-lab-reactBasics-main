import React from "react";
import { useState } from "react";
import './userboard.css';
import { IUser } from '../usertypes.js';
import { User } from "./user";

const Userboard = () => {
    const [user , setUser]  = useState< null | IUser >(null);
    const [userList, setUserList] = useState<Array<IUser>>([]);

    const fetchNewUser = async () => {
        console.log("Fetch started");
        const response = await fetch ("https://randomuser.me/api/");
        const data = await response.json();
        console.log("Response: " );
        
        let person = data.results[0];

        setUser(person);
        setUserList([person, ...userList]);

        console.log("User: ", user);
        console.log("Userlist: ", userList);
    }

    return <>
    <div className="Userboard">
        <div className="Userboard__TopPanel">
            <h2>User Fetcher</h2>
            <button className="Userboard__button" onClick={fetchNewUser}>Click me!</button>
            <p>Click the button to fetch a random user and add them to the list!</p>
            
        </div>
        
        <div className="Userboard__BottomPanel">
            <table className={`Userboard__user--${user === null ? "hidden" : "visible"}`}>
                <tr className='Userboard__tableheaders'>
                    <th>Photo</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Address</th>
                </tr>
                <>
                    {userList.map(el => {
                        return <User user={el}/>
                    })}
                </>
            </table>
        </div>
    </div>
    </>
}

export { Userboard }