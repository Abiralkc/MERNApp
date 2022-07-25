import React from "react";
import UserLists from "../components/UserLists";

const Users = () =>{
    const USERS =[
         {
             id:'u1',
             name:'John',
             image :'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
             places: 3
         }
    ]
    return <UserLists items={USERS}/> 
}

export default Users;