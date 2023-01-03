import React from "react";
import { useState } from "react";
import './userboard.css';
import * as Types from '../usertypes.js';

// const [user, setUser] = useState(null)



const fetchNewUser = () => {
    console.log("Fetch started");

}

const Userboard = () => {
    return <div className="Userboard">
            <div className="Userboard__TopPanel">
            <h2>User Fetcher</h2>
            <button className="Userboard__button" onClick={fetchNewUser}>Click me!</button>
            <p>Click the button to fetch a random user!</p>
        </div>
        <hr/>
        <div className="Userboard__BottomPanel">

        </div>
    </div>
}

export { Userboard }