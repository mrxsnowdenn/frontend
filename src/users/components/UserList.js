import React from "react";
import UserItem from "./UserItem";
import "./UserList.css"
import Card from "../../shared/components/UIElements/Card";

const UserList=(props)=>{
if(props.items.length===0){
    return <div className={"center"}>
        <Card>
            <h2>No users found.</h2>
        </Card>
    </div>
}

return (
    <ul className={"users-list"}>
        {
            props.items.map((user)=>(
                <UserItem
                    key={user.id}
                    name={user.name}
                    id={user.id}
                    image={user.image}
                    placeCount={user.places}/>
            ))
        }
    </ul>
)

}
export default UserList