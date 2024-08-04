// src/components/Home.js
import React, { useState, useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout.jsx";
import Techcard from "./Techcard";


function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [techProducts, setTechProducts] = useState([]);


    useEffect(() => {
        fetch("https://tech-products.onrender.com/products")
            .then((r) => r.json())
            .then((data) => {
                setTechProducts(data);
            });
        console.log(techProducts)
    }, []);

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
            <main>{techCards}</main>
        </div>
    );
}


export default Home;