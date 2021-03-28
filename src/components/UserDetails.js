import React, { useState } from "react"
import '../App.css';
import UserList from "./UserList"

function UserDetails() {
    const [inputValue, setInputValue] = useState("")
    const [userList, setUserList] = useState(["jaydeep", "sandeep", "kuldeep", "shivdeep"])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const value = userList.filter((name) => {
        return (name.toLowerCase().includes(inputValue.toLowerCase()))
    })

    const addUser = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            setUserList((oldValue) => [...oldValue, event.target.value])
        }
    }

    return (
        <div className="userDetails">
            <p className="listOfFriend">Friends List</p>
            <div className={"inputMain"}>
            <input type="text" 
            value={inputValue} 
            onChange={handleChange} 
            placeholder="" 
            onKeyPress={addUser}
            className={"inputBar"}
             />
             <label>Enter Your Friend Name</label>
             <span class="focus-border"></span>
             </div>
            <UserList
                value={value}
            />
        </div>
    );
}

export default UserDetails;
