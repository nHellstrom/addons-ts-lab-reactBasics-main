import React from "react";
import { IUser, IUserWrapper } from '../usertypes.js';
import './user.css';

let User = (props : IUserWrapper | null ) => {
    const [user , setUser]  = React.useState< null | IUser >(null);
    if (props?.user != null) {
        setUser(props!.user);
    }

    const editUser = () => {
        console.log("Beep, I am ", props?.user)
    }

    const valueUpdated = (event : any) => {
        console.log("Beep boop value changed", event.target.value);
        let userlist = props!.fullUserlist;
        let modifieduser = props!.user;
        modifieduser.dob.age = event.target.value;
        setUser(modifieduser);
        userlist[props!.index] = modifieduser;
        props!.modifyUserlist(userlist);
    }

    let renderUser = (data : IUserWrapper | null = null) => {
        if (props?.user != null) {

            return <tr className='Userboard__userrow'>
                    <th><img className='Userboard__userthumbnail' src={props.user.picture.large}></img></th>
                    <th><b>{user!.login.username}</b></th>
                    <th><i>{user!.name.title}</i> {user!.name.first} {user!.name.last}</th>
                    {/* <th><input defaultValue={props.user.dob.age} onChange={(e) => valueUpdated(e)}></input>{props.user.dob.age} years</th> */}
                    <th>
                        <input 
                            defaultValue={user!.dob.age} 
                            onChange={(e) => valueUpdated(e)}>
                        </input>{user!.dob.age} years
                    </th>
                    <th>{user!.gender == "male" ? "♂️" : "♀️"} {user!.gender}</th>
                    <th className="Userboard__usercolumn--alignleft">{user!.location.street.name} {user!.location.street.number}<br/>{user!.location.city}<br/>{user!.location.country}</th>
                    <th><span className="User__editbutton" onClick={editUser}>Edit</span></th>
                </tr>
        } else {
            return <p>Null user 🐻</p>
        }
    }

    return <>
        if (props?.user != null)
            {renderUser(props)}
    </>
}

export { User }