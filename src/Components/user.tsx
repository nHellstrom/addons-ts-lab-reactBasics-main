import React from "react";
import { useState } from "react";
import { IUser, IUserWrapper } from '../usertypes.js';
import './user.css';

let User = (props : IUserWrapper | null ) => {
    const [user , setUser]  = useState< null | IUser >(props?.user ? props.user : null);
    const [isEditingUser, setIsEditingUser] = useState<boolean>(false);

    const editUser = () => {
        console.log("Beep, I am ", user)
        setIsEditingUser(!isEditingUser);
    }

    // const valueUpdated = (event : any) => {
    //     console.log("Beep boop value changed", event.target.value);
    //     // let modifieduser = user;
    //     // modifieduser!.dob.age = event.target.value;
    //     // setUser(modifieduser);
    //     // const modifieduser = {...user, gender: "male"} as IUser;
    //     setUser(
    //         {...user, gender: "male"} as IUser
    //     );
    // }

    let renderUser = () => {
        if (user != null) {
            // console.log("User: ", user);
            // console.log("Props-user: ", props?.user);
            
            return <tr className='Userboard__userrow'>
                    <th><img className='Userboard__userthumbnail' src={user.picture.large}></img></th>
                    <th>
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={`${user.login.username}`}
                            onChange={(e) => setUser( {...user, login:{...user.login, username: e.target.value}} as IUser)}>
                        </input>
                        <span className = {`User__editingform--${isEditingUser ? "hidden" : "visible"}`}>
                            <b>{user.login.username}</b>
                        </span>
                    </th>
                    <th>
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={`${user.name.title}`}
                            onChange={(e) => setUser( {...user, name:{...user.name, title: e.target.value}} as IUser)}>
                        </input>
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={`${user.name.first}`}
                            onChange={(e) => setUser( {...user, name:{...user.name, first: e.target.value}} as IUser)}>
                        </input>
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={`${user.name.last}`}
                            onChange={(e) => setUser( {...user, name:{...user.name, last: e.target.value}} as IUser)}>
                        </input>
                        <span className = {`User__editingform--${isEditingUser ? "hidden" : "visible"}`}>
                            <i>{user.name.title}</i> {user!.name.first} {user.name.last}
                        </span>
                    </th>
                    <th>
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={user.dob.age} 
                            onChange={(e) => setUser( {...user, dob:{...user.dob, age: Number(e.target.value)}} as IUser)}>
                        </input>
                        <span className = {`User__editingform--${isEditingUser ? "hidden" : "visible"}`}>
                            {user.dob.age} years
                        </span>
                    </th>
                    <th>
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={user.gender} 
                            onChange={(e) => setUser( {...user, gender: e.target.value} as IUser)}>
                        </input>
                        <span className = {`User__editingform--${isEditingUser ? "hidden" : "visible"}`}>
                            {(user!.gender.toLowerCase() != "male") && (user!.gender.toLowerCase() != "female") ? "🏳️‍🌈 " : user!.gender.toLowerCase() == "male" ? "♂️ " : "♀️ " } 
                            {user.gender}
                        </span>
                    </th>
                    <th className="Userboard__usercolumn--alignleft">
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={user.location.street.name} 
                            onChange={(e) => setUser( {...user, location:{...user.location, street:{...user.location.street, name: e.target.value}}} as IUser)}>
                        </input>
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={user.location.street.number} 
                            onChange={(e) => setUser( {...user, location:{...user.location, street:{...user.location.street, number: e.target.value}}} as IUser)}>
                        </input>
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={user.location.city} 
                            onChange={(e) => setUser( {...user, location:{...user.location, city: e.target.value}} as IUser)}>
                        </input>
                        <input 
                            className = {`User__editingform User__editingform--${isEditingUser ? "visible" : "hidden"}`}
                            defaultValue={user.location.country} 
                            onChange={(e) => setUser( {...user, location:{...user.location, country: e.target.value}} as IUser)}>
                        </input>
                        <span className = {`User__editingform--${isEditingUser ? "hidden" : "visible"}`}>
                            {user.location.street.name} {user.location.street.number}<br/>{user.location.city}<br/>{user.location.country}
                        </span>
                    </th>
                    <th><span className="User__editbutton" onClick={editUser}>Edit</span></th>
                </tr>
        } else {
            return <p>Null user 🐻</p>
        }
    }

    return <>
            {renderUser()}
    </>
}

export { User }