import React from "react";
import { IUser, IUserWrapper } from '../usertypes.js';

const User = (props : IUserWrapper | null) => {

    let renderUser = (data : IUserWrapper | null = null) => {
        if (props?.user != null) {
            return <tr className='Userboard__userrow'>
                    <th><img className='Userboard__userthumbnail' src={props.user.picture.large}></img></th>
                    <th><b>{props.user.login.username}</b></th>
                    <th><i>{props.user.name.title}</i> {props.user.name.first} {props.user.name.last}</th>
                    <th>{props.user.dob.age} years</th>
                    <th>{props.user.gender == "male" ? "♂️" : "♀️"} {props.user.gender}</th>
                    <th className="Userboard__usercolumn--alignleft">{props.user.location.street.name} {props.user.location.street.number}<br/>{props.user.location.city}<br/>{props.user.location.country}</th>
                </tr>
        } else {
            return <p>Null user 🐻</p>
        }
    }

    return <>
        {renderUser(props)}
        {console.log("UserCompData: ",props?.user)}
    </>
}

export { User }