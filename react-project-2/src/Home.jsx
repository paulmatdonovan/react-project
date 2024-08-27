// src/components/Home.js
import React, { useContext, useState } from "react";
import Login from "./Login";
import Logout from "./Logout.jsx";
import Techcard from "./Techcard";
import { ShopContext } from "./ShopContext/ShopContext.jsx";


function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const { techProducts } = useContext(ShopContext);


    const techCards = techProducts.map((techObj) => {
        return (
            <Techcard
                key={techObj.id}
                name={techObj.name}
                image={techObj.image}
                attributes={techObj.attributes}
                price={techObj.price}
            />
        );
    });

    function handleClick() {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <header>
                <h1>Welcome to Techland</h1>
                <nav onClick={handleClick}>{isLoggedIn ? <Logout /> : <Login />}</nav>
            </header>
            <main className="main-cards">{techCards}</main>
        </div>
    );
}


export default Home;