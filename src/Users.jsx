import { useState } from "react";
import Usercard from "./Usercard";


function Users() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [accountType, setAccountType] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            user: {
                username, accountType
            }
        };

        fetch("https://tech-products.onrender.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((data) => setUsers((prevUsers) => [...prevUsers, data]));
    }
    console.log(users)

    const userDisplay = users.map((user) => {
        return (
            <Usercard
                key={user.user.id}
                username={user.user.username}
                accountType={user.user.accountType}
            />
        );
    });


    return (

        <div>

            <form onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <select
                    id="type"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                >
                    <option value="Dabbler in Technology">Dabbler</option>
                    <option value="Tech Enthusiast">Enthusiast</option>
                    <option value="Tech Professional">Pro</option>
                </select>

                <input type="submit" value="Enter details" />
            </form>
            <div>
                <h2>Users</h2>
                {userDisplay}
            </div>
        </div>
    )


}

export default Users;
