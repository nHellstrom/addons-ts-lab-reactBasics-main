import React from "react";
import { useState } from "react";
import './userboard.css';
import { IUser } from '../usertypes.js';
import { User } from "./user";

const Userboard = () => {
    // 
    const [userList, setUserList] = useState<Array<IUser>>([]);

    const fetchNewUser = async () => {
        const response = await fetch ("https://randomuser.me/api/");
        const data = await response.json();
        let person = data.results[0];
        setUserList([...userList, person]);
    }

    return <>
    <div className="Userboard">
        <div className="Userboard__TopPanel">
            <h2>User Fetcher</h2>
            <button className="Userboard__button" onClick={fetchNewUser}>Click me!</button>
            <p>Click the button to fetch a random user and add them to the list!</p>
            
        </div>
        
        <div className="Userboard__BottomPanel">
            <table className={`Userboard__user--${userList.length === 0 ? "hidden" : "visible"}`}>
                <tr className='Userboard__tableheaders'>
                    <th>Photo</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th></th>
                </tr>
                <>
                    {userList.map((el, index) => {
                        return <User user={el}/>
                        // return <User user={el} index={index} fullUserlist={userList} modifyUserlist={setUserList}/>
                    })} 
                </>
            </table>
        </div>
    </div>
    </>
}

export { Userboard }