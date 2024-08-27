import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

const getDefaultCart = (techProducts) => {
    let cart = {};
    for (let index = 0; index < techProducts.length + 1; index++) {
        cart[index] = 0;
        console.log(cart);

    }
    return cart;
}



const ShopContextProvider = (props) => {
    const [techProducts, setTechProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});


    useEffect(() => {
        fetch("https://tech-products.onrender.com/products")
            .then((r) => r.json())
            .then((data) => {
                setTechProducts(data);
                setCartItems(getDefaultCart(data));
            });
    }, []);


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }


    const contextValue = { techProducts, addToCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
