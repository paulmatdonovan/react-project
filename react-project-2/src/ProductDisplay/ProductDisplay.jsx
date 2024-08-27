import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext';

const ProductDisplay = () => {
    { techProducts } = useContext(ShopContext)
    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={image} />
            <h3>Features</h3>
            <ul>{techLis}</ul>
            <h4>Price {price}</h4>
            <div onClick={handleClick}>
                {inCart ? (
                    <Emojibutton emoji="🛒" label="Remove from cart" />
                ) : (
                    <Emojibutton emoji="🛒" label="Add to cart" />
                )}
            </div>
        </div>
    );
}

export default ProductDisplay