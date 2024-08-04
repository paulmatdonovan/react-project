import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout.jsx";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function handleClick() {
        setIsLoggedIn(!isLoggedIn);
    }


    return (
        <header>
            <h1>Welcome to Techland</h1>

            <nav onClick={handleClick}>{isLoggedIn ? <Logout /> : <Login />}</nav>
        </header>
    );
}
export default Header;
